import React from "react";
import JournalList from "@/components/journal-list";

export default function JournalPage() {
  return (
    <div className='min-h-screen bg-white dark:bg-neutral-900'>
      <div className='container mx-auto py-8'>
        <h1 className='text-3xl font-bold text-center mb-8 text-neutral-800 dark:text-neutral-100'>
          Journal of Industrial Vision
        </h1>
        <JournalList />
      </div>
    </div>
  );
}
