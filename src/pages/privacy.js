import React from 'react';

import Layout from 'components/Layout';

const contactEmail = 'azamatsmith@gmail.com';
const emailLink = (
  <a className="link underline" href={`mailto:${contactEmail}`}>
    {contactEmail}
  </a>
);

function Privacy() {
  return (
    <Layout>
      <main className="mw7 center ph3 pv5 lh-copy">
        <h1 className="f2 mb2">Privacy Policy</h1>
        <p className="mb4 gray">Last updated: November 7, 2026</p>
        <p className="mb3">
          Soul Search is a private family game run by Bike and Code LLC. This
          policy explains what information we collect and how we use it.
        </p>
        <p className="mb3">
          <strong>Information we collect.</strong> We collect your name, phone
          number, and the photos you submit to the game, either through the web
          app or by text message.
        </p>
        <p className="mb3">
          <strong>How we use it.</strong> Your phone number is used only to send
          you game-related messages, such as score updates and weekly results,
          and to receive photos you send to the game. Photos are used only to
          score your entries.
        </p>
        <p className="mb3">
          <strong>Sharing.</strong> We do not sell, rent, or share your personal
          information with third parties for marketing or promotional purposes.
          Mobile opt-in data and consent are never shared with any third party.
          We use service providers (Twilio for messaging, Supabase for storage)
          only to operate the game.
        </p>
        <p className="mb3">
          <strong>Retention.</strong> You can ask us to delete your data at any
          time by emailing {emailLink}.
        </p>
        <p className="mb3">
          <strong>Contact.</strong> Questions? Email {emailLink}.
        </p>
      </main>
    </Layout>
  );
}

export default Privacy;
