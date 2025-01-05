import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PublicRouter from '@/pages/public/PublicRouter';
import AuthRouter from '@/pages/auth/AuthRouter';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<PublicRouter />} />
        <Route path='/a/*' element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
 