import LegalLayout from './legal/legal-layout';

const PrivacyPolicy = () => {
  return (
    <LegalLayout
      title='Privacy Policy'
      description='Learn how we collect, use, protect, and manage your information when you use our application and services.'
      lastUpdated='August 24, 2026'
    >
      <p>
        This Privacy Policy explains how <strong>YourApp</strong> ("we", "us",
        or "our") collects, uses, stores, protects, and processes information
        when you use our mobile application, website, and related services
        (collectively, the "Service").
      </p>

      <p>
        We are committed to protecting your privacy and handling your
        information responsibly. Our application is designed around an
        <strong> edge-first architecture</strong>, meaning your business's
        operational data is primarily stored locally on your device rather than
        being maintained as a permanent centralized cloud database.
      </p>

      <div className='legal-highlight'>
        <strong>Our approach to your business data</strong>
        <p className='mb-0 mt-2'>
          Your phone acts as the primary data store for your business
          operational information. Our cloud infrastructure primarily stores
          account, authentication, subscription, device, integration,
          synchronization, and other platform-level information required to
          operate the Service.
        </p>
      </div>

      <h2>1. Information We Collect</h2>

      <h3>1.1 Account Information</h3>

      <p>When you create an account, we may collect:</p>

      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Securely hashed authentication credentials</li>
        <li>Email and phone verification information</li>
        <li>Account status and subscription information</li>
      </ul>

      <h3>1.2 Business Information</h3>

      <p>You may provide information about your business, including:</p>

      <ul>
        <li>Business name</li>
        <li>Business type</li>
        <li>Country</li>
        <li>Currency</li>
        <li>Time zone</li>
        <li>Business settings</li>
      </ul>

      <h3>1.3 Device Information</h3>

      <p>
        We may collect information necessary to register and secure your device,
        including:
      </p>

      <ul>
        <li>Device identifier</li>
        <li>Device platform</li>
        <li>Application version</li>
        <li>Device public key</li>
        <li>Device registration information</li>
        <li>Last active time</li>
        <li>Security and authentication information</li>
      </ul>

      <h2>2. Edge-First Business Data Storage</h2>

      <p>
        Our application is designed so that business operational data is
        primarily stored locally on the business owner's device.
      </p>

      <p>Depending on the features you use, this may include:</p>

      <ul>
        <li>Customers</li>
        <li>Customer conversations</li>
        <li>Products</li>
        <li>Inventory</li>
        <li>Orders</li>
        <li>Payments</li>
        <li>Receipts</li>
        <li>Business analytics</li>
        <li>Business settings</li>
      </ul>

      <p>
        This operational data is not intended to be maintained as a permanent
        centralized database on our servers.
      </p>

      <h2>3. Information Stored in Our Cloud</h2>

      <p>Our cloud systems may store platform-level information such as:</p>

      <ul>
        <li>User accounts</li>
        <li>Authentication information</li>
        <li>Subscription status</li>
        <li>Registered devices</li>
        <li>Synchronization metadata</li>
        <li>Connected Meta accounts</li>
        <li>Encrypted API credentials</li>
        <li>Temporary AI processing jobs</li>
        <li>Security and audit information</li>
        <li>Notification information</li>
        <li>System configuration</li>
      </ul>

      <h2>4. How We Use Information</h2>

      <p>We may use information to:</p>

      <ul>
        <li>Create and manage your account</li>
        <li>Authenticate users</li>
        <li>Manage subscriptions</li>
        <li>Register and secure devices</li>
        <li>Provide application functionality</li>
        <li>Process payments</li>
        <li>Connect third-party services</li>
        <li>Provide customer support</li>
        <li>Detect fraud and unauthorized activity</li>
        <li>Maintain application security</li>
        <li>Diagnose technical problems</li>
        <li>Improve the Service</li>
      </ul>

      <h2>5. Third-Party Integrations</h2>

      <p>
        If you connect services such as Facebook, Instagram, or WhatsApp, we may
        process the information required to provide the integration you
        requested.
      </p>

      <p>This may include:</p>

      <ul>
        <li>Account identifiers</li>
        <li>Page identifiers</li>
        <li>Access tokens</li>
        <li>Webhook events</li>
        <li>Messages or events required for the integration</li>
      </ul>

      <h2>6. Payment Information</h2>

      <p>
        Subscription payments may be processed through third-party payment
        providers such as PayHere.
      </p>

      <p>
        We do not intentionally store complete credit or debit card information
        in our application database.
      </p>

      <h2>7. AI Processing</h2>

      <p>
        Certain features may use artificial intelligence services. Where
        information must leave your device for an AI request, we aim to send
        only the information necessary to perform the requested operation.
      </p>

      <p>
        Temporary AI processing information may be deleted after it is no longer
        required for the requested operation.
      </p>

      <h2>8. Data Security</h2>

      <p>
        We use reasonable technical and organizational measures to protect
        information against unauthorized access, alteration, disclosure, loss,
        or destruction.
      </p>

      <ul>
        <li>HTTPS/TLS</li>
        <li>Password hashing</li>
        <li>Access controls</li>
        <li>Device authentication</li>
        <li>Encryption</li>
        <li>Secure key storage</li>
        <li>Access-token protection</li>
        <li>Audit logging</li>
        <li>Device revocation</li>
      </ul>

      <h2>9. Data Retention</h2>

      <p>
        We retain platform information for as long as reasonably necessary to
        provide the Service, maintain your account, process subscriptions,
        maintain security, resolve disputes, and comply with legal obligations.
      </p>

      <h2>10. Account Deletion</h2>

      <p>You may request deletion of your account by contacting us.</p>

      <p>
        Because business operational data is primarily stored locally on your
        device, you are responsible for exporting or backing up information you
        wish to retain before deleting the application or local database.
      </p>

      <h2>11. Your Responsibilities</h2>

      <p>You are responsible for:</p>

      <ul>
        <li>Protecting your account credentials</li>
        <li>Protecting access to your device</li>
        <li>Keeping the application updated</li>
        <li>Maintaining appropriate backups</li>
        <li>Ensuring lawful collection of customer information</li>
        <li>Respecting the privacy rights of your customers</li>
      </ul>

      <h2>12. Changes to This Privacy Policy</h2>

      <p>
        We may update this Privacy Policy from time to time. Material changes
        may be communicated through the application, website, or email.
      </p>

      <h2>13. Contact Us</h2>

      <p>If you have questions regarding this Privacy Policy, contact us:</p>

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

export default PrivacyPolicy;
