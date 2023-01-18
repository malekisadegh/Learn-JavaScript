import Login from '../auth/components/login/login';
import React from 'react';

const LoginPage = (props:any) => {
  return (
    <>
      <Login {...props}></Login>
    </>
  );
};

export default LoginPage;
