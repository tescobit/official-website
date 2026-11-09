import LegalLayout from './legal/legal-layout';

const RefundPolicy = () => {
  return (
    <LegalLayout
      title='Refund & Cancellation Policy'
      description='Understand our 14-day trial, subscription cancellation, payment, and refund procedures.'
      lastUpdated='August 24, 2026'
    >
      <p>
        This Refund & Cancellation Policy explains the rules applicable to
        subscriptions purchased for <strong>Tescobit</strong>.
      </p>

      <p>
        Because YourApp is a digital software service, physical-product return
        procedures do not apply.
      </p>

      <div className='legal-highlight'>
        <strong>14-Day Free Trial</strong>

        <p className='mb-0 mt-2'>
          Eligible new customers may use the Service free of charge for 14 days
          before purchasing a paid subscription.
        </p>
      </div>

      <h2>1. 14-Day Free Trial</h2>

      <p>Eligible new users may receive a 14-day free trial.</p>

      <ul>
        <li>No subscription payment is required during the trial.</li>
        <li>The trial starts when the trial is activated.</li>
        <li>The trial ends after 14 days.</li>
        <li>
          Trial eligibility may be limited to one trial per customer or
          business.
        </li>
      </ul>

      <p>
        We reserve the right to restrict or terminate trials where we reasonably
        believe the trial system is being abused.
      </p>

      <h2>2. Subscription After Trial</h2>

      <p>
        After the 14-day trial period, continued access to paid features
        requires an active paid subscription.
      </p>

      <h2>3. Cancellation</h2>

      <p>
        You may cancel your subscription through the available
        subscription-management functionality or by contacting support.
      </p>

      <p>
        Unless otherwise required by applicable law, cancellation prevents
        future renewal but does not automatically create a refund for a
        previously completed billing period.
      </p>

      <h2>4. Refund Requests</h2>

      <p>Refund requests are considered on a case-by-case basis.</p>

      <p>Contact:</p>

      <p>
        <strong>hello@tescobit.com</strong>
      </p>

      <p>Please provide:</p>

      <ul>
        <li>Account email</li>
        <li>Subscription information</li>
        <li>Payment reference</li>
        <li>Reason for the refund request</li>
      </ul>

      <h2>5. Duplicate Payments</h2>

      <p>
        If you are charged more than once for the same subscription period due
        to a payment or system error, we will investigate the transaction and,
        where appropriate, arrange a correction or refund.
      </p>

      <h2>6. Failed Payments</h2>

      <p>
        If a recurring payment fails, your subscription may be placed into a
        pending, restricted, or expired state.
      </p>

      <h2>7. Trial Expiration</h2>

      <p>
        When the 14-day trial ends without activation of a paid subscription:
      </p>

      <ul>
        <li>Paid features may become unavailable.</li>
        <li>Local business data remains on the device.</li>
        <li>Read-only access may remain available.</li>
        <li>Some cloud-connected features may become unavailable.</li>
      </ul>

      <h2>8. Unauthorized Transactions</h2>

      <p>If you believe a payment was unauthorized, contact us immediately.</p>

      <p>
        We may also request that you contact your bank or payment provider where
        appropriate.
      </p>

      <h2>9. Payment Providers</h2>

      <p>
        Payments processed through PayHere or another third-party payment
        provider may also be subject to that provider's procedures and
        processing timelines.
      </p>

      <h2>10. Changes to This Policy</h2>

      <p>
        We may update this Refund & Cancellation Policy from time to time.
        Changes will be published through our website or application.
      </p>

      <h2>11. Contact</h2>

      <p>
        <strong>Tescobit</strong>
        <br />
        Email: hello@tescobit.com
        <br />
        Phone: +94 70 145 6950
      </p>
    </LegalLayout>
  );
};

export default RefundPolicy;
