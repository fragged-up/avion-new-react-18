import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout() {
  return (
    <div className="w-full">
      <Header />
      <main className="flex flex-col min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
