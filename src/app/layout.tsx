import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css'; // Keep CSS import here
import ClientToastContainer from '@/components/ClientToastContainer'; // Import the client wrapper
import { AuthModalProvider } from '@/context/AuthModalContext';
// import dynamic from 'next/dynamic'; // Remove dynamic import

// const DynamicToastContainer = dynamic(
//   () => import('react-toastify').then((mod) => mod.ToastContainer),
//   { ssr: false }
// ); // Dynamically import ToastContainer on client-side only

export const metadata = {
  title: 'LeetClone',
  description: 'Web application that contains leetcode problems and video solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ClientToastContainer /> {/* Use the client wrapper component */}
        <AuthModalProvider> 
          {children}
        </AuthModalProvider>
      </body>
    </html>
  );
}
