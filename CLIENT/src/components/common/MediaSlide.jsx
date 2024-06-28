import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import mediaApi from "../../api/modules/media.api";
import AutoSwiper from "./AutoSwiper";
import { toast } from "react-toastify";
import MediaItem from "./MediaItem";
import tmdbConfigs from "../../api/configs/tmdb.configs"; // Import tmdbConfigs

const MediaSlide = ({ mediaType, mediaCategory }) => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    const getMedias = async () => {
      const { response, err } = await mediaApi.getList({
        mediaType,
        mediaCategory,
        page: 1,
      });

      if (response) setMedias(response.results);
      if (err) toast.error(err.message);
    };

    getMedias();
  }, [mediaType, mediaCategory]);

  return (
    <AutoSwiper>
      {medias.map((media, index) => (
        <SwiperSlide key={index} style={{ padding: " 0 8px" }}>
          {/* Add numbering from 1 to 10 for the first container */}
          {mediaCategory === tmdbConfigs.mediaCategory.top_rated &&
            index < 20 && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 1,
                  padding: "8px 12px",
                  fontSize: `clamp(3rem, 6vw, 6rem)`, // Using clamp for dynamic font size
                  color: "white", // White text color
                  top: "-20px",
                  fontWeight: "700",
                  fontFamily: '"Outfit", sans-serif',
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                }}
              >
                <div> {index + 1}</div>
              </div>
            )}
          <MediaItem media={media} mediaType={mediaType} />
        </SwiperSlide>
      ))}
    </AutoSwiper>
  );
};

export default MediaSlide;
