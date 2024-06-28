import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const main = [
  {
    display: "home",
    path: "/",
    icon: <HomeOutlinedIcon />,
    state: "home",
  },
  {
    display: "movies",
    path: "/movie",
    icon: <SlideshowOutlinedIcon />,
    state: "movie",
  },
  {
    display: "tv series",
    path: "/tv",
    icon: <LiveTvOutlinedIcon />,
    state: "tv",
  },
  {
    display: "search",
    path: "/search",
    icon: <SearchOutlinedIcon />,
    state: "search",
  },
  {
    display: "team",
    path: "/team",
    icon: <span class="material-symbols-outlined">groups</span>,
    state: "team",
  },
];

const user = [
  {
    display: "favorites",
    path: "/favorites",
    icon: <span className="material-symbols-outlined">favorite</span>,
    state: "favorite",
  },
  {
    display: "reviews",
    path: "/reviews",
    icon: <span className="material-symbols-outlined">reviews</span>,
    state: "reviews",
  },
  {
    display: "password update",
    path: "/password-update",
    icon: <span className="material-symbols-outlined">password</span>,
    state: "password.update",
  },
];

const menuConfigs = { main, user };

export default menuConfigs;
