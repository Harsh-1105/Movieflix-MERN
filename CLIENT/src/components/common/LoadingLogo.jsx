import React from 'react'
import { Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LOGO from '../common/movie_logo.png';

const LoadingLogo = () => {
    const navigate = useNavigate();
  
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/');
      }
  return (
    
<Typography>
  <div onClick={handleClick}>
    <div style={{pointerEvents:'none'}}>
      <img src={LOGO} alt="Logo" />
    </div>
  </div>
</Typography>  )
}

export default LoadingLogo