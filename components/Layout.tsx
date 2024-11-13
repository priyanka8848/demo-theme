import { useRouter } from 'next/router';
import Navbar from './Navbar/Navbar';
import WebNavbarInspiration2 from './Navbar/NavbarInspiration2/WebNavbarInspiration2';
import NavbarInspiration2 from './Navbar/NavbarInspiration2/NavbarInspiration2';

function Layout({ children }: any) {
  const router = useRouter();
  const toShowHeader =
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' ? false : true;
  const toShowFooter =
    router.pathname === '/login' || router.pathname === '/register' || router.pathname === '/forgot_password' ? false : true;

  return (
    <>
      {toShowHeader && <NavbarInspiration2 />}
      {children}
    </>
  );
}
export default Layout;
