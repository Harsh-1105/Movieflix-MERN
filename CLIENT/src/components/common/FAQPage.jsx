import React from "react";
import ExpandableQuestion from "./ExpandableQuestion.jsx";

const FAQPage = () => {
  return (
    <div>
      <div
        style={{
          fontWeight: "700",
          fontFamily: '"Chakra Petch", sans-serif',
          fontSize: "2rem",
        }}
      >
        QUESTIONS?
      </div>

      <ExpandableQuestion question="What is the overview of this project?">
        <div style={{ fontFamily: '"Salsa", cursive' }}>
          Our project is a movie streaming platform designed to provide users
          with access to a wide range of movies and TV series. With an intuitive
          interface and robust features, users can discover, watch, and review
          their favorite content anytime, anywhere.
        </div>
      </ExpandableQuestion>
      <ExpandableQuestion question="What technologies were used in building this platform?">
      <div style={{ fontFamily: '"Salsa", cursive' }}>
          We have utilized a modern technology stack including React,
          Material-UI, SwiperJS, React Router v6, Formik, Yup, and Axios for the
          frontend. For the backend, we have employed Express.js, Express
          Validator, Jsonwebtoken, Mongoose, and Axios.
        </div>
      </ExpandableQuestion>
      <ExpandableQuestion question="How can I sign up for an account on the platform?">
      <div style={{ fontFamily: '"Salsa", cursive' }}>
          {" "}
          Signing up for an account is easy! Simply navigate to the sign-up
          page, fill in the required information, and create your account.
          You'll then have access to all the features and content available on
          the platform.
        </div>
      </ExpandableQuestion>
      <ExpandableQuestion question="Is there a customer support team available for assistance?">
      <div style={{ fontFamily: '"Salsa", cursive' }}>
          {" "}
          Absolutely! We have a dedicated customer support team available to
          assist you with any questions, concerns, or technical issues you may
          encounter. You can reach out to our support team via email at
          support@example.com.
        </div>
      </ExpandableQuestion>
      <ExpandableQuestion question="How can I save movies to my favorite list?">
      <div style={{ fontFamily: '"Salsa", cursive' }}>
          {" "}
          To save a movie to your favorite list, simply click on the HEART '❤'
          icon while viewing the movie details. You can also remove movies from
          your favorite list at any time.
        </div>
      </ExpandableQuestion>
      <ExpandableQuestion question="Is there a search feature available on the platform?">
      <div style={{ fontFamily: '"Salsa", cursive' }}>
          Absolutely! You can use the search bar located at the top of the page
          to search for specific movies, TV series, or people involved in the
          industry.
        </div>
      </ExpandableQuestion>
    </div>
  );
};

export default FAQPage;
