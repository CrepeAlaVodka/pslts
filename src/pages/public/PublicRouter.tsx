import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout, Home, About } from '@/pages/public/';

const PublicRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='*' element={<h1>404 - Not Found</h1>} />
      </Route>
    </Routes>
  );
};

export default PublicRouter;