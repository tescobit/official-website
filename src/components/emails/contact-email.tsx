import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Row,
  Column,
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  phoneNumber?: string;
  companyName?: string;
  service: string;
  projectDetails: string;
}

export const ContactEmail = ({
  name,
  email,
  phoneNumber,
  companyName,
  service,
  projectDetails,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        New Project Inquiry from {name} - {service}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={headerTitle}>New Lead Received</Heading>
            <Text style={headerSub}>
              You have a new inquiry via the website contact form.
            </Text>
          </Section>

          <Section style={contentSection}>
            <Heading as='h2' style={sectionTitle}>
              Client Information
            </Heading>

            <Row style={row}>
              <Column style={labelColumn}>Name:</Column>
              <Column style={valueColumn}>{name}</Column>
            </Row>

            <Row style={row}>
              <Column style={labelColumn}>Email:</Column>
              <Column style={valueColumn}>
                <Link href={`mailto:${email}`} style={link}>
                  {email}
                </Link>
              </Column>
            </Row>

            {phoneNumber && (
              <Row style={row}>
                <Column style={labelColumn}>Phone:</Column>
                <Column style={valueColumn}>
                  <Link href={`tel:${phoneNumber}`} style={link}>
                    {phoneNumber}
                  </Link>
                </Column>
              </Row>
            )}

            {companyName && (
              <Row style={row}>
                <Column style={labelColumn}>Company:</Column>
                <Column style={valueColumn}>{companyName}</Column>
              </Row>
            )}

            <Row style={row}>
              <Column style={labelColumn}>Service Interest:</Column>
              <Column style={valueColumn}>
                <span style={tag}>{service}</span>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section style={contentSection}>
            <Heading as='h2' style={sectionTitle}>
              Project Details
            </Heading>
            <div style={messageBox}>
              <Text style={messageText}>{projectDetails}</Text>
            </div>
          </Section>

          <Section style={btnContainer}>
            <Button
              href={`mailto:${email}?subject=Re: Your inquiry regarding ${service}`}
              style={button}
            >
              Reply to {name}
            </Button>
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={footer}>
              This email was sent from your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

// --- Styles ---

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '0',
  marginBottom: '64px',
  maxWidth: '600px',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
};

const header = {
  backgroundColor: '#0b102e', // Matches your website dark blue theme
  padding: '32px 20px',
  textAlign: 'center' as const,
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
  marginBottom: '8px',
};

const headerSub = {
  color: '#a0aec0',
  fontSize: '14px',
  margin: '0',
};

const contentSection = {
  padding: '32px 40px',
};

const sectionTitle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#1a202c',
  margin: '0 0 16px',
};

const row = {
  marginBottom: '12px',
};

const labelColumn = {
  width: '120px',
  color: '#718096',
  fontSize: '14px',
  fontWeight: '500',
};

const valueColumn = {
  color: '#2d3748',
  fontSize: '14px',
  fontWeight: '600',
};

const link = {
  color: '#2563eb', // Blue accent
  textDecoration: 'none',
};

const tag = {
  backgroundColor: '#eff6ff',
  color: '#2563eb',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
};

const messageBox = {
  backgroundColor: '#f7fafc',
  borderRadius: '8px',
  padding: '16px 20px',
  border: '1px solid #e2e8f0',
};

const messageText = {
  fontSize: '14px',
  lineHeight: '24px',
  color: '#4a5568',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};

const btnContainer = {
  textAlign: 'center' as const,
  padding: '0 40px 32px',
};

const button = {
  backgroundColor: '#2563eb', // Blue-600
  borderRadius: '6px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px 24px',
  fontWeight: '600',
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '0',
};

const footer = {
  color: '#718096',
  fontSize: '12px',
  textAlign: 'center' as const,
  padding: '24px',
  margin: '0',
};
