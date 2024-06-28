import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import { setUser } from "../../redux/features/userSlice";
import './SigninForm.css'

const SignupForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const signinForm = useFormik({
    initialValues: {
      password: "",
      username: "",
      displayName: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .matches(/^\S*$/, "Username cannot contain empty spaces")
        .min(8, "Username must be at least 8 characters long")
        .required("Username is required"),
      password: Yup.string()
        .matches(/^\S*$/, "Password cannot contain empty spaces")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/^\D/, "Password must not start with a number")
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
      displayName: Yup.string()
        .matches(/^\S*$/, "Display name cannot contain empty spaces")
        .min(8, "Display name must be at least 8 characters long")
        .required("Display name is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Confirm password is required")
    }),
    
    onSubmit: async values => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      
      const { response, err } = await userApi.signup(values);
      setIsLoginRequest(false);

      if (response) {
        signinForm.resetForm();
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success("Sign up success");
      }

      if (err) setErrorMessage(err.message);
    }
  });

  return (
    <Box component="form" onSubmit={signinForm.handleSubmit} className="square">
      <Stack spacing={3}>
        <TextField
          type="text"
          placeholder="Username"
          name="username"
          fullWidth
          sx={{
            "& input::placeholder": { color: "white" }, // Orange placeholder text
            backgroundColor: "rgba(255, 165, 0, 0.1)", // Orange background with transparency
            "& fieldset": { borderColor: "orange !important" }, // Orange outline
            "& input": { color: "white",fontFamily:'"Chakra Petch", sans-serif' }, // White text color

          }}
          value={signinForm.values.username}
          onChange={signinForm.handleChange}
          error={signinForm.touched.username && Boolean(signinForm.errors.username)}
          helperText={signinForm.touched.username && signinForm.errors.username}
        />
        <TextField
          type="text"
          placeholder="Display Name"
          name="displayName"
          fullWidth
          sx={{
            backgroundColor: "rgba(255, 165, 0, 0.1)", // Orange background with transparency
            "& input::placeholder": { color: "white" }, // Orange placeholder text
            "& fieldset": { borderColor: "orange !important" }, // Orange outline
            "& input": { color: "white",fontFamily:'"Chakra Petch", sans-serif' }, // White text color

          }}
          value={signinForm.values.displayName}
          onChange={signinForm.handleChange}
          error={signinForm.touched.displayName && Boolean(signinForm.errors.displayName)}
          helperText={signinForm.touched.displayName && signinForm.errors.displayName}
        />
        <TextField
          type="password"
          placeholder="Password"
          name="password"
          fullWidth
          sx={{
            backgroundColor: "rgba(255, 165, 0, 0.1)", 
            "& input::placeholder": { color: "white" }, 
            "& input": { color: "white",fontFamily:'"Chakra Petch", sans-serif' }, // White text color
            "& fieldset": { borderColor: "orange !important" }, 
          }}
          value={signinForm.values.password}
          onChange={signinForm.handleChange}
          error={signinForm.touched.password && Boolean(signinForm.errors.password)}
          helperText={signinForm.touched.password && signinForm.errors.password}
        />
        <TextField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          fullWidth
          sx={{
            backgroundColor: "rgba(255, 165, 0, 0.1)", // Orange background with transparency
            "& input::placeholder": { color: "white" }, // Orange placeholder text
            "& fieldset": { borderColor: "orange !important" }, // Orange outline
            "& input": { color: "white",fontFamily:'"Chakra Petch", sans-serif' }, // White text color

          }}
          value={signinForm.values.confirmPassword}
          onChange={signinForm.handleChange}
          error={signinForm.touched.confirmPassword && Boolean(signinForm.errors.confirmPassword)}
          helperText={signinForm.touched.confirmPassword && signinForm.errors.confirmPassword}
        />
      </Stack>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}
        style={{
          fontFamily: '"Julius Sans One", sans-serif',
          fontWeight:'700'
        }}
      >
        Sign Up
      </LoadingButton>

      <Button
        fullWidth
        sx={{ marginTop: 1 }}
        style={{
          fontFamily: '"Julius Sans One", sans-serif',
        }}
        onClick={() => switchAuthState()}
      >
        Sign In
      </Button>

      {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined">{errorMessage}</Alert>
        </Box>
      )}
    </Box>
  );
};

export default SignupForm;
