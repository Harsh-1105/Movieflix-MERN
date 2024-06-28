import { Box, Modal, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import Logo from "./Logo";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import CloseIcon from '@mui/icons-material/Close';
import Poster from './movie_poster.jpg';

const actionState = {
  signin: "signin",
  signup: "signup"
};

const AuthModal = () => {
  const { authModalOpen } = useSelector((state) => state.authModal);
  const dispatch = useDispatch();
  const [action, setAction] = useState(actionState.signin);

  useEffect(() => {
    if (authModalOpen) setAction(actionState.signin);
  }, [authModalOpen]);

  const handleClose = () => dispatch(setAuthModalOpen(false));
  const switchAuthState = (state) => setAction(state);

  return (
    <Modal open={authModalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          maxWidth: "600px",
          padding: 4,
          outline: "none",
        }}
      >
        <Box
          sx={{
            padding: 4,
            boxShadow: 24,
            backgroundColor: "background.paper",
            backgroundImage: `url(${Poster})`, // Correct way to set background image
            position: 'relative',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Button onClick={handleClose} sx={{ position: 'absolute', top: 0, right: 0 }}>
            <CloseIcon />
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Logo />
          </Box>
          <Box sx={{ marginTop: '1rem' }}>
            {action === actionState.signin && <SigninForm switchAuthState={() => switchAuthState(actionState.signup)} />}
            {action === actionState.signup && <SignupForm switchAuthState={() => switchAuthState(actionState.signin)} />}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AuthModal;
