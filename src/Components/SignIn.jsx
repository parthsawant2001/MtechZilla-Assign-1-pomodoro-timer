'use client';

import React, { useState, useEffect } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [value, setValue] = useState();
  const router = useRouter();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
      router.push('/pages/pomodoro');
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <p className=' text-2xl font-bold'>SignIn</p>
      <button
        className='px-3 py-2 bg-[#202165] my-2 font-medium rounded-lg self-center hover:bg-blue-700/90'
        onClick={handleClick}
      >
        SignIn with Google
      </button>
    </div>
  );
};

export default SignIn;
