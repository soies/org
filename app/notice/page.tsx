import React from "react";
import NoticeList from "@/components/notice-list";

export default function MagazinesPage() {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-neutral-900 top-2'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-100'>
          Notice
        </h1>
        <NoticeList />
      </div>
    </div>
  );
}
