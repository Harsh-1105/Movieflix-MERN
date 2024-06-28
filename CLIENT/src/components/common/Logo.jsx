import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/');
  }
  return (
    <Typography fontWeight="700" fontSize="2rem">
      <div onClick={handleClick}>
        <div style={{pointerEvents:'none', fontFamily:'"DynaPuff", system-ui'}}>
          <span style={{color:'#f5a073'}}>Movie</span><span style={{ color: theme.palette.primary.main,  }}>Flix</span>
        </div>
      </div>
    </Typography>
  );
};

export default Logo;