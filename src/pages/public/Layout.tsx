import { Outlet } from "react-router-dom";

import Navbar from "@/components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main id="content">
        {/* Header */}
        <Outlet />
      </main>
    </>
  );
}

export default Layout;