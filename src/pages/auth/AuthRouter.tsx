import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login, Register } from '@/pages/auth/';

const AuthRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
    </Routes>
  );
};

export default AuthRouter;