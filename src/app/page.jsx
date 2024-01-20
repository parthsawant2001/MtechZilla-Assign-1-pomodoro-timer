import Image from 'next/image';
import SignIn from './../Components/SignIn';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <SignIn />
    </main>
  );
}
