import PageContainer from '@/components/container/PageContainer';
import { OrganizationProfile } from '@clerk/nextjs';
import React from 'react';

const SettingsPage = () => {
  return (
    <PageContainer>
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: 'none',
              width: '100%',
            },
            card: {
              border: '1px solid #e5e5e5',
              boxShadow: 'none',
              width: '100%',
            },
          },
        }}
      />
    </PageContainer>
  );
};

export default SettingsPage;
