import React, { useState } from 'react';
import { Link } from 'gatsby';

import Layout from 'components/Layout';
import { Button, Input } from 'components/Shared';

function Join() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <main className="mw6 center ph3 pv5 lh-copy">
        <h1 className="f2 mb4">Join Soul Search</h1>
        {submitted ? (
          <p role="status">
            Thanks for signing up! You'll get a text confirming your number.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              label="Phone number"
              aria-label="Phone number"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
            <label className="flex items-start mv4" htmlFor="sms-consent">
              <input
                className="mt1 mr2"
                id="sms-consent"
                name="smsConsent"
                type="checkbox"
                required
              />
              <span>
                I agree to receive text messages from Soul Search (Bike and Code
                LLC) about the family game, including score updates, weekly
                results, and photo confirmations. Message frequency varies.
                Message and data rates may apply. Reply STOP to opt out, HELP
                for help. Consent is not a condition of purchase. See our{' '}
                <Link className="link underline" to="/privacy">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link className="link underline" to="/terms">
                  Terms
                </Link>
                .
              </span>
            </label>
            <Button type="submit" text="Sign up" />
          </form>
        )}
      </main>
    </Layout>
  );
}

export default Join;
