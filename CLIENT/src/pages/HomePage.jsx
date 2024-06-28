import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import HeroSlide from "../components/common/HeroSlide";
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box } from "@mui/material";
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";

const HomePage = () => {
  const animationControlsPopularSeries = useAnimation();
  const animationControlsPopularMovies = useAnimation();
  const animationControlsTopRatedMovies = useAnimation();
  const animationControlsTopRatedSeries = useAnimation();
  const mediaItemsAnimationControls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const elements = document.querySelectorAll(".scroll-animation");

    elements.forEach((element) => {
      const elementPosition = element.offsetTop;

      if (scrollPosition > elementPosition - windowHeight + 100) {
        const containerName = element.dataset.containerName;
        switch (containerName) {
          case "popular-series":
            animationControlsPopularSeries.start("animate");
            break;
          case "popular-movies":
            animationControlsPopularMovies.start("animate");
            break;
          case "top-rated-movies":
            animationControlsTopRatedMovies.start("animate");
            break;
          case "top-rated-series":
            animationControlsTopRatedSeries.start("animate");
            break;
          default:
            break;
        }
      }
    });
  };

  const staggerDelay = 0.1; // Adjust this value to change the delay between each media item animation

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      animationControlsPopularSeries.current === "animate" ||
      animationControlsPopularMovies.current === "animate" ||
      animationControlsTopRatedMovies.current === "animate" ||
      animationControlsTopRatedSeries.current === "animate"
    ) {
      mediaItemsAnimationControls.start("animate");
    }
  }, [
    animationControlsPopularSeries,
    animationControlsPopularMovies,
    animationControlsTopRatedMovies,
    animationControlsTopRatedSeries,
    mediaItemsAnimationControls,
  ]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSlide
          mediaType={tmdbConfigs.mediaType.movie}
          mediaCategory={tmdbConfigs.mediaCategory.popular}
        />
      </motion.div>

      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>

        <Container header="top rated movies">
          <motion.div
            className="scroll-animation"
            data-container-name="top-rated-movies"
            animate={animationControlsTopRatedMovies}
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <MediaSlide
              mediaType={tmdbConfigs.mediaType.movie}
              mediaCategory={tmdbConfigs.mediaCategory.top_rated}
              animate={mediaItemsAnimationControls}
              initial="initial"
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, staggerChildren: staggerDelay },
                },
              }}
            />
          </motion.div>
        </Container>
        <Container header="top rated series">
          <motion.div
            className="scroll-animation"
            data-container-name="top-rated-series"
            animate={animationControlsTopRatedSeries}
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <MediaSlide
              mediaType={tmdbConfigs.mediaType.tv}
              mediaCategory={tmdbConfigs.mediaCategory.top_rated}
              animate={mediaItemsAnimationControls}
              initial="initial"
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, staggerChildren: staggerDelay },
                },
              }}
            />
          </motion.div>
        </Container>
        <Container header="popular series">
          <motion.div
            className="scroll-animation"
            data-container-name="popular-series"
            animate={animationControlsPopularSeries}
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <MediaSlide
              mediaType={tmdbConfigs.mediaType.tv}
              mediaCategory={tmdbConfigs.mediaCategory.popular}
              animate={mediaItemsAnimationControls}
              initial="initial"
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, staggerChildren: staggerDelay },
                },
              }}
            />
          </motion.div>
        </Container>
        <Container header="popular movies">
          <motion.div
            className="scroll-animation"
            data-container-name="popular-movies"
            animate={animationControlsPopularMovies}
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <MediaSlide
              mediaType={tmdbConfigs.mediaType.movie}
              mediaCategory={tmdbConfigs.mediaCategory.popular}
              animate={mediaItemsAnimationControls}
              initial="initial"
              variants={{
                initial: { opacity: 0, x: -20 },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, staggerChildren: staggerDelay },
                },
              }}
            />
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
