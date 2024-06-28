import React from "react";
import Container from "./Container";

const PrivacyPolicy = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Container header={"Privacy Policy"} sx={{ width: "100%" }}>
        <ol style={{listStyleType:'upper-roman'}}>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>Introduction</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              This Privacy Policy outlines how MovieFlix collects, uses,
              maintains, and discloses information collected from users of the
              MovieFlix app.
            </p>
          </li>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>Information Collection</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              MovieFlix may collect personal identification information from
              users in various ways, including but not limited to when users
              register on the app, subscribe to the newsletter, respond to a
              survey, and in connection with other activities, services,
              features, or resources made available on the app.
            </p>
          </li>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>Personal Identification Information</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              MovieFlix may collect personal identification information from
              users, including but not limited to name, email address, mailing
              address, phone number, and payment information.
            </p>
          </li>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>Non-personal Identification Information</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              MovieFlix may collect non-personal identification information
              about users whenever they interact with the app. Non-personal
              identification information may include the browser name, the type
              of device used, and technical information about users' means of
              connection to the app, such as the operating system and the
              Internet service providers utilized.
            </p>
          </li>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>Web Browser Cookies</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              MovieFlix may use "cookies" to enhance user experience. Users may
              choose to set their web browser to refuse cookies or to alert
              them when cookies are being sent. If they do so, note that some
              parts of the app may not function properly.
            </p>
          </li>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>How We Use Collected Information</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              MovieFlix may collect and use users' personal information for the
              following purposes:
              <ul>
                <li>To improve customer service.</li>
                <li>To personalize user experience.</li>
                <li>To process payments.</li>
                <li>To send periodic emails.</li>
                <li>To improve our app.</li>
              </ul>
            </p>
          </li>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>Sharing Personal Information</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              MovieFlix does not sell, trade, or rent users' personal
              identification information to others. We may share generic
              aggregated demographic information not linked to any personal
              identification information regarding visitors and users with our
              business partners, trusted affiliates, and advertisers.
            </p>
          </li>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>Changes to this Privacy Policy</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              MovieFlix has the discretion to update this privacy policy at
              any time. When we do, we will revise the updated date at the
              bottom of this page. We encourage users to frequently check this
              page for any changes to stay informed about how we are helping to
              protect the personal information we collect.
            </p>
          </li>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>Your Acceptance of these Terms</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              By using this app, you signify your acceptance of this policy. If
              you do not agree to this policy, please do not use our app. Your
              continued use of the app following the posting of changes to this
              policy will be deemed your acceptance of those changes.
            </p>
          </li>
          <li>
            <strong style={{fontFamily:'"Kanit", sans-serif'}}>Contacting Us</strong>
            <p style={{fontFamily:'"M PLUS Rounded 1c", sans-serif'}}>
              If you have any questions about this Privacy Policy, the
              practices of this app, or your dealings with this app, please
              contact us at{" "}
              <a>"contact@email.com"</a>.
            </p>
          </li>
        </ol>
        <div style={{ padding: "20px" }}>
          <strong style={{fontFamily:'"Texturina", serif'}}>Last Updated</strong>
          <p style={{fontFamily:'"Texturina", serif'}}>28-04-2024</p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
