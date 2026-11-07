import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/Layout';

const terms = [
  ['Program name', 'Soul Search game alerts'],
  [
    'Description',
    'Text messages about the Soul Search family game, including score updates, weekly results, and confirmations when you submit a photo by text.',
  ],
  [
    'Opt-in',
    'You agree to receive messages by entering your phone number in the web app at bikeandcode.com and ticking the consent checkbox, or by texting START to (866) 361-6444.',
  ],
  ['Frequency', 'Message frequency varies.'],
  ['Costs', 'Message and data rates may apply.'],
  [
    'Opt-out',
    'Reply STOP at any time to stop receiving messages. You will receive one final confirmation message.',
  ],
  [
    'Help',
    <>
      Reply HELP for help, or email{' '}
      <a className="link underline" href="mailto:azamatsmith@gmail.com">
        azamatsmith@gmail.com
      </a>
      .
    </>,
  ],
  ['Carriers', 'Carriers are not liable for delayed or undelivered messages.'],
  [
    'Privacy',
    <>
      See our{' '}
      <Link className="link underline" to="/privacy">
        Privacy Policy
      </Link>{' '}
      at bikeandcode.com/privacy.
    </>,
  ],
];

function Terms() {
  return (
    <Layout>
      <main className="mw7 center ph3 pv5 lh-copy">
        <h1 className="f2 mb4">SMS Terms of Service</h1>
        {terms.map(([label, text]) => (
          <p className="mb3" key={label}>
            <strong className="b">{label}:</strong> {text}
          </p>
        ))}
      </main>
    </Layout>
  );
}

export default Terms;
