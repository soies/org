import React from "react";
import IndustrialVisionList from "@/components/industrial-visit-list";

export default function MagazinesPage() {
  return (
    <div className='min-h-screen bg-white dark:bg-neutral-900'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-100'>
          Industrial Vision Magazines
        </h1>
        <IndustrialVisionList />
      </div>
    </div>
  );
}
