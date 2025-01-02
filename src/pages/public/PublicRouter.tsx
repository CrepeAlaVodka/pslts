import React from 'react';
import { Routes, Route } from 'react-router';

import { Layout, Home, About } from '@/pages/public/';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;