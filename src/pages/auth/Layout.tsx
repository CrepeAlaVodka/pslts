import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <main id="content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;