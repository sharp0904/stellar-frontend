"use client";

import Header from './components/header';
import Footer from './components/footer';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, [])

  return (
    <div className="flex flex-col">
      <Header />

      <div className="relative flex-grow w-full">
        <Image
          src="/dashboard.png"
          alt="dashboard"
          width={3000}
          height={1000}
          className="object-cover w-full"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
