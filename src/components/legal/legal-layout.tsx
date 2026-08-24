import React, { ReactNode } from 'react';

interface LegalLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
}

const LegalLayout = ({
  title,
  description,
  lastUpdated,
  children,
}: LegalLayoutProps) => {
  return (
    <div>
      {/* Hero */}
      <section className='border-b border-border bg-muted/30'>
        <div className='page-container'>
          <div className='mx-auto max-w-4xl py-16 sm:py-20'>
            <p className='mb-4 text-sm font-medium text-primary'>Legal</p>

            <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl'>
              {title}
            </h1>

            <p className='mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>
              {description}
            </p>

            <p className='mt-6 text-sm text-muted-foreground'>
              Last updated:{' '}
              <span className='font-medium text-foreground'>{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main>
        <div className='page-container'>
          <div className='mx-auto max-w-4xl py-12 sm:py-16'>
            <article className='legal-content'>{children}</article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalLayout;
