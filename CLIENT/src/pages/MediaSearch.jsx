import React, { useState, useEffect } from "react";
import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import { themeModes } from "../../src/configs/theme.configs";
import {
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Search as SearchIcon, Clear as ClearIcon } from "@mui/icons-material";
import { toast } from "react-toastify";
import mediaApi from "../api/modules/media.api";
import MediaGrid from "../components/common/MediaGrid";
import uiConfigs from "../configs/ui.configs";
import Times from "../pages/Times.jsx";
const mediaTypes = ["movie", "tv", "people"];
let timer;
const timeout = 100;

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [onSearch, setOnSearch] = useState(false);
  const [mediaType, setMediaType] = useState(mediaTypes[0]);
  const [medias, setMedias] = useState([]);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([
    { title: "Godzilla x Kong: The New Empire", releaseYear: 2024 },
    { title: "Oppenheimer", releaseYear: 2023 },
    { title: "Evil Dead Rise", releaseYear: 2024 },
    { title: "Road House", releaseYear: 2024 },
    { title: "Wednesday", releaseYear: 2022 },
    { title: "The Batman", releaseYear: 2022 },
    { title: "Avatar 2", releaseYear: 2022 },
    { title: "Black Panther: Wakanda Forever", releaseYear: 2022 },
    { title: "Jurassic World: Dominion", releaseYear: 2022 },
    { title: "Indiana Jones 5", releaseYear: 2023 },
    { title: "Mission: Impossible 7", releaseYear: 2023 },
    { title: "Guardians of the Galaxy Vol. 3", releaseYear: 2023 },
    { title: "Untitled Spider-Man: Far From Home Sequel", releaseYear: 2023 },
    { title: "Fantastic Beasts: The Secrets of Dumbledore", releaseYear: 2022 },
    // 100 more movies
    { title: "Star Wars: The Rise of Skywalker", releaseYear: 2019 },
    { title: "Joker", releaseYear: 2019 },
    { title: "Frozen II", releaseYear: 2019 },
    { title: "Avengers: Endgame", releaseYear: 2019 },
    { title: "Toy Story 4", releaseYear: 2019 },
    { title: "Spider-Man: Far From Home", releaseYear: 2019 },
    { title: "The Lion King", releaseYear: 2019 },
    { title: "Aladdin", releaseYear: 2019 },
    { title: "Captain Marvel", releaseYear: 2019 },
    { title: "It: Chapter Two", releaseYear: 2019 },
    { title: "Once Upon a Time in Hollywood", releaseYear: 2019 },
    { title: "Fast & Furious Presents: Hobbs & Shaw", releaseYear: 2019 },
    { title: "John Wick: Chapter 3 – Parabellum", releaseYear: 2019 },
    { title: "Shazam!", releaseYear: 2019 },
    { title: "How to Train Your Dragon: The Hidden World", releaseYear: 2019 },
    { title: "The Secret Life of Pets 2", releaseYear: 2019 },
    { title: "Godzilla: King of the Monsters", releaseYear: 2019 },
    { title: "Detective Pikachu", releaseYear: 2019 },
    { title: "Maleficent: Mistress of Evil", releaseYear: 2019 },
    { title: "Terminator: Dark Fate", releaseYear: 2019 },
    { title: "Gemini Man", releaseYear: 2019 },
    { title: "Zombieland: Double Tap", releaseYear: 2019 },
    { title: "The Addams Family", releaseYear: 2019 },
    { title: "Dumbo", releaseYear: 2019 },
    { title: "Rocketman", releaseYear: 2019 },
    { title: "The Angry Birds Movie 2", releaseYear: 2019 },
    { title: "Angel Has Fallen", releaseYear: 2019 },
    { title: "Rambo: Last Blood", releaseYear: 2019 },
    { title: "21 Bridges", releaseYear: 2019 },
    { title: "Gemini Man", releaseYear: 2019 },
    { title: "The Good Liar", releaseYear: 2019 },
    { title: "Knives Out", releaseYear: 2019 },
    { title: "Ford v Ferrari", releaseYear: 2019 },
    { title: "1917", releaseYear: 2019 },
    { title: "Jumanji: The Next Level", releaseYear: 2019 },
    { title: "A Beautiful Day in the Neighborhood", releaseYear: 2019 },
    { title: "Little Women", releaseYear: 2019 },
    { title: "The Irishman", releaseYear: 2019 },
    { title: "Bombshell", releaseYear: 2019 },
    { title: "Doctor Sleep", releaseYear: 2019 },
    { title: "Richard Jewell", releaseYear: 2019 },
    { title: "Jojo Rabbit", releaseYear: 2019 },
    { title: "Cats", releaseYear: 2019 },
    { title: "Dark Waters", releaseYear: 2019 },
    { title: "Spies in Disguise", releaseYear: 2019 },
    { title: "The Farewell", releaseYear: 2019 },
    { title: "The Peanut Butter Falcon", releaseYear: 2019 },
    { title: "Hustlers", releaseYear: 2019 },
    { title: "The Two Popes", releaseYear: 2019 },
    { title: "Pain and Glory", releaseYear: 2019 },
    { title: "Midsommar", releaseYear: 2019 },
    { title: "Uncut Gems", releaseYear: 2019 },
    { title: "Parasite", releaseYear: 2019 },
    { title: "Marriage Story", releaseYear: 2019 },
    { title: "The Lighthouse", releaseYear: 2019 },
    { title: "Portrait of a Lady on Fire", releaseYear: 2019 },
    { title: "The King", releaseYear: 2019 },
    { title: "Little Women", releaseYear: 2019 },
    { title: "Pain and Glory", releaseYear: 2019 },
    { title: "The Report", releaseYear: 2019 },
    { title: "The Mustang", releaseYear: 2019 },
    { title: "High Life", releaseYear: 2019 },
    { title: "The Last Black Man in San Francisco", releaseYear: 2019 },
    { title: "Honey Boy", releaseYear: 2019 },
    { title: "The Souvenir", releaseYear: 2019 },
    { title: "Waves", releaseYear: 2019 },
    { title: "The Dead Don't Die", releaseYear: 2019 },
    { title: "A Hidden Life", releaseYear: 2019 },
    { title: "The Nightingale", releaseYear: 2019 },
    { title: "Ford v Ferrari", releaseYear: 2019 },
    { title: "Rocketman", releaseYear: 2019 },
    { title: "Judy", releaseYear: 2019 },
    { title: "A Beautiful Day in the Neighborhood", releaseYear: 2019 },
    { title: "Harriet", releaseYear: 2019 },
    { title: "Dark Waters", releaseYear: 2019 },
    { title: "The Two Popes", releaseYear: 2019 },
    { title: "Just Mercy", releaseYear: 2019 },
    { title: "Richard Jewell", releaseYear: 2019 },
    { title: "Knives Out", releaseYear: 2019 },
    { title: "The Farewell", releaseYear: 2019 },
    { title: "Jojo Rabbit", releaseYear: 2019 },
    { title: "Bombshell", releaseYear: 2019 },
    { title: "Uncut Gems", releaseYear: 2019 },
    { title: "1917", releaseYear: 2019 },
    { title: "Queen & Slim", releaseYear: 2019 },
    { title: "Marriage Story", releaseYear: 2019 },
    { title: "Little Women", releaseYear: 2019 },
    { title: "A Hidden Life", releaseYear: 2019 },
    { title: "Portrait of a Lady on Fire", releaseYear: 2019 },
    { title: "Waves", releaseYear: 2019 },
    { title: "The Irishman", releaseYear: 2019 },
    { title: "Pain and Glory", releaseYear: 2019 },
    { title: "Honey Boy", releaseYear: 2019 },
    { title: "The Last Black Man in San Francisco", releaseYear: 2019 },
    { title: "Hustlers", releaseYear: 2019 },
    { title: "High Life", releaseYear: 2019 },
    { title: "The Dead Don't Die", releaseYear: 2019 },
    { title: "The Souvenir", releaseYear: 2019 },
    { title: "The Nightingale", releaseYear: 2019 },
  ]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const { themeMode } = useSelector((state) => state.themeMode);

  // Function to handle changing movie in the slideshow
  const changeMovie = () => {
    if (query.trim().length === 0) {
      setShowPlaceholder(false);
      setTimeout(() => {
        setShowPlaceholder(true);
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
      }, 500);
    }
  };
  const getFilteredMovies = () => {
    if (query.trim() === "") {
      return []; // If query is empty, return an empty array
    }
    // Filter movies whose title includes the query
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  };
  useEffect(() => {
    const interval = setInterval(changeMovie, 5000);
    return () => clearInterval(interval);
  }, []);

  const search = async () => {
    setOnSearch(true);

    const { response, err } = await mediaApi.search({
      mediaType,
      query,
      page,
    });

    setOnSearch(false);

    if (err) toast.error(err.message);
    if (response) {
      if (page > 1) setMedias((m) => [...m, ...response.results]);
      else setMedias([...response.results]);
    }
  };

  useEffect(() => {
    if (query.trim().length === 0) {
      setMedias([]);
      setPage(1);
    } else search();
  }, [query, mediaType, page]);

  useEffect(() => {
    setMedias([]);
    setPage(1);
  }, [mediaType]);

  // Function to check if the input field is empty
  const isInputEmpty = () => {
    return query.trim().length === 0;
  };

  const onCategoryChange = (selectedCategory) => setMediaType(selectedCategory);

  const onQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setShowSuggestions(newQuery.trim() !== "" && true); // Always show suggestions when input is not empty
  };
  const handleSuggestionClick = (movieTitle) => {
    setQuery(movieTitle); // Set movie title as input value
    setShowSuggestions(false); // Hide suggestions after clicking a suggestion
  };

  const clearInput = () => {
    setQuery("");
  };

  return (
    <>
      <Toolbar style={{ marginTop: "1rem" }} />
      <Times />
      <Box sx={{ ...uiConfigs.style.mainContent }}>
        <Stack spacing={2}>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            {mediaTypes.map((item, index) => (
              <Button
                size="large"
                key={index}
                variant={mediaType === item ? "contained" : "text"}
                sx={{
                  color:
                    mediaType === item
                      ? "primary.contrastText"
                      : "text.primary",
                  transform: mediaType === item ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s ease",
                  border: `1px solid ${
                    mediaType === item ? "text.primary" : "gray"
                  }`,
                }}
                onClick={() => onCategoryChange(item)}
                style={{ fontFamily: '"Anonymous Pro", monospace' }}
              >
                {item}
              </Button>
            ))}
          </Stack>

          <Stack
            direction="column"
            alignItems="center" // Center the Times component
            spacing={2}
          ></Stack>

          {/* Placeholder container for animation */}
          <div className="placeholder-container">
            <TextField
              color="success"
              placeholder={`Search ${
                showPlaceholder ? movies[currentMovieIndex].title : ""
              } ${
                showPlaceholder ? movies[currentMovieIndex].releaseYear : ""
              }`}
              sx={{
                width: "100%",
                borderRadius: "4px",
                textTransform: "capitalize",
                "& input": {
                  padding: "30px 0px",
                  fontSize: { xs: "1rem", md: "1rem" },
                  border: "none",
                  borderRadius: "4px",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  textTransform: "capitalize",
                  fontFamily: '"Aldrich", sans-serif',
                },
                "& input::placeholder": {
                  padding: "30px 0px",
                  fontSize: { xs: ".8rem", md: "1rem" },
                  border: "none",
                  color: "gray",
                  borderRadius: "4px",
                  outline: "none",
                  width: "100%",
                  boxSizing: "border-box",
                  textTransform: "capitalize",
                  fontFamily: '"Aldrich", sans-serif',
                  transition: "transform 0.5s ease, opacity 1s ease",
                  transform: isInputEmpty()
                    ? showPlaceholder
                      ? "translateY(0)"
                      : "translateY(-100%)"
                    : "translateY(0)", // Slide-up animation when input is empty
                  opacity: isInputEmpty() ? (showPlaceholder ? 1 : 0) : 1, // Opacity animation when input is empty
                },
              }}
              autoFocus
              value={query}
              onChange={onQueryChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon
                        sx={{
                          fontSize: { xs: "1rem", md: "1.5rem" },
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
                endAdornment: query.trim().length > 0 && (
                  <InputAdornment position="end">
                    <IconButton onClick={clearInput}>
                      <ClearIcon
                        sx={{
                          fontSize: { xs: "1rem", md: "1.5rem" },
                        }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* Autocomplete suggestions */}
            <div
              className="autocomplete-suggestions"
              style={{
                padding: "10px",
                borderRadius: "4px",
                marginTop: "5px",
                display: isInputEmpty() || !showSuggestions ? "none" : "block", // Combined condition
                maxHeight: "200px", // Set max height for scrollbar
                overflowY: "auto", // Enable vertical scrollbar
                boxShadow: "-1px 2px 2px #353836", // Add box shadow
              }}
            >
              {getFilteredMovies()
                .slice(0, 10)
                .map((movie) => (
                  <div
                    key={movie.title}
                    className="autocomplete-suggestion"
                    style={{
                      padding: "8px",
                      borderRadius: "4px",
                      marginBottom: "5px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontFamily: '"Noto Sans", sans-serif',
                    }}
                    role="button" // Add role attribute
                    tabIndex={0} // Add tabIndex attribute to make it focusable
                    onClick={() => handleSuggestionClick(movie.title)} // Handle click event
                    onMouseEnter={
                      (e) =>
                        (e.currentTarget.style.backgroundColor =
                          themeMode === themeModes.dark ? "#353836" : "#d4cdcd") // Change background color on hover based on theme mode
                    }
                    onMouseLeave={
                      (e) => (e.currentTarget.style.backgroundColor = "") // Reset background color when leaving hover
                    }
                  >
                    <span
                      class="material-symbols-outlined"
                      style={{ marginRight: "10px" }}
                    >
                      input
                    </span>
                    {movie.title}&nbsp;
                    {"{"}
                    {movie.releaseYear}
                    {"}"}{" "}
                  </div>
                ))}
            </div>
          </div>

          {/* Media grid and load more button */}
          <MediaGrid medias={medias} mediaType={mediaType} />
          {medias.length > 0 && (
            <LoadingButton loading={onSearch} onClick={() => setPage(page + 1)}>
              Load More
            </LoadingButton>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default MovieSearch;
