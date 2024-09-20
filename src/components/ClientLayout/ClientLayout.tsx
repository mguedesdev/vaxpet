'use client';

import { usePathname } from 'next/navigation';
import Providers from '@/components/Providers/Providers';
import HeaderDashboard from '@/components/Header/HeaderDashboard';
import { Main } from './ClientLayout.style';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <Providers>
      {pathname !== '/' ? (
        <Main>
          <HeaderDashboard />
          {children}
        </Main>
      ) : (
        children
      )}
    </Providers>
  );
};

export default ClientLayout;
