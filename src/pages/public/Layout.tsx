import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* SideMenu */}

      <main>
        {/* Header */}
        <Outlet />
      </main>
    </>
  );
}

export default Layout;