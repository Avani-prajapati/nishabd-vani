
import React, { useContext, useEffect } from 'react';
import Conversion1 from './Conversion1';
import { signin, userContext } from '../context/CreateContext';

export default function Conversion() {
  const [sign, setSign] = useContext(signin);
  const user = useContext(userContext);

  useEffect(() => setSign(true), [setSign]);

  return user.name ? (
    <Conversion1 />
  ) : (
    <div className="flex flex-col justify-center items-center h-[30rem]">
      <img src="/ImagesNV/pf.jpeg" alt="Sign In" className="h-40 w-44" />
      <h1>Sign in to use this feature</h1>
      <a href="/signin" className="text-blue-600">Sign in</a>
    </div>
  );
}
