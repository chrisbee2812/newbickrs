import { Outlet } from 'react-router';
import Header from '../components/headfoot/Header';
import Footer from '../components/headfoot/Footer';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}