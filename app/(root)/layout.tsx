import Mobilenav from '@/components/Mobilenav';
import Sidebar from '@/components/Sidebar'; 
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Aymane', lastName: 'kabiri' };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} /> {/* Renders your Sidebar */}
      <div className="flex flex-col flex-grow">
        <div className='root-layout flex items-center justify-between p-4'>
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <Mobilenav user={loggedIn} /> {/* Render Mobilenav here */}
        </div>
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </main>
  );
}
