import React from 'react';
import PageHeading from '@/app/components/page-heading/page-heading';
export default function OrdersPage() {
  return (
    <div className="w-full">
      <PageHeading
        params={{ content: "Orders", className: "capitalize mb-4 text-3xl mt-0 pt-0" }}
      />   
      <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
        <div className="text-lg text-gray-500">Your orders will be displayed here</div>
      </div>
    </div>
  );
}