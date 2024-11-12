"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className='flex h-screen flex-col items-center justify-center bg-white text-center p-4 animate-fade-in'>
      <h1 className='text-4xl font-bold mb-4 animate-fade-in-down'>404</h1>
      <p className='text-lg mb-8 animate-fade-in-up'>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className='animate-fade-in-up animate-delay-100'>
        <Button
          className=' text-white px-4 py-2 rounded'
          onClick={() => router.push("/")}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
