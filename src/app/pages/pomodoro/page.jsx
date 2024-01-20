'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [time, setTime] = useState(1500);
  const router = useRouter();

  useEffect(() => {
    if (time == 0) {
      setIsBreak(!isBreak);
      //   setTime(!isBreak ? 5 : 10);
      setTime(!isBreak ? 300 : 1500);
    }
    document.title = getTime(time);

    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(interval);
      //   setIsBreak(!isBreak);
    }
  }, [time, isActive, isBreak]);

  useEffect(() => {
    if (localStorage.getItem('email') === null) {
      router.push('/');
    }
  }, []);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
  };

  const onStart = () => {
    setIsActive(!isActive);
  };

  const onLogout = () => {
    localStorage.clear();
    router.push('/');
  };

  const onRestart = () => {
    setIsActive(!isActive);
    setTime(1500);
  };

  return (
    <div className='flex h-screen flex-col items-center p-24'>
      <div className='bg-[#0e0f3c] rounded-3xl shadow-xl flex flex-col p-10 items-center justify-between w-[50%] h-[60%]'>
        <p className='text-center my-1 font-bold uppercase  text-3xl'>
          Pomodoro Clock
        </p>
        <div>
          <p className='text-center my-1 text-sky-400 font-orbitron text-8xl'>
            {getTime(time)}
          </p>
        </div>
        <p className='text-2xl'>{isBreak ? 'Break' : 'Work'}</p>
      </div>
      <div className='flex flex-row p-10 gap-2'>
        <button
          onClick={onStart}
          className='px-3 py-2 bg-[#202165] my-2 font-medium rounded-lg self-center hover:bg-blue-700/90'
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={onRestart}
          className='px-3 py-2 bg-[#202165] font-medium my-2 rounded-lg self-center hover:bg-blue-700/90'
        >
          Restart
        </button>
        <button
          className='px-3 py-2 border-2 font-medium border-[#202165] my-2 rounded-lg self-center hover:bg-[#0f0f2e] hover:border-blue-700/90'
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default page;
