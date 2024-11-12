"use client";
import { Button } from "@/components/ui/button";

export default function ErrorPage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-white text-center p-4'>
      <h1 className='text-4xl font-bold mb-4'>500</h1>
      <p className='text-lg mb-8'>Something went wrong on our end.</p>
      <Button
        className=' text-white px-4 py-2 rounded'
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </Button>
    </div>
  );
}
