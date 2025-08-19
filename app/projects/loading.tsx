import React from "react";

const Loading = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 animate-pulse">
        {/* Back button placeholder */}
        <div className="h-5 w-40 bg-gray-300 dark:bg-gray-700 rounded mb-6"></div>

        {/* Banner Image Skeleton */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-10">
          <div className="w-full h-[400px] bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
        </div>

        {/* Title + Description Skeleton */}
        <div className="text-center mb-10">
          <div className="h-8 w-2/3 mx-auto bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
          <div className="h-4 w-3/4 mx-auto bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 w-2/4 mx-auto bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>

        {/* Project Meta Info Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center"
            >
              <div className="h-4 w-1/3 mx-auto bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-5 w-1/2 mx-auto bg-gray-300 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>

        {/* Gallery Skeleton */}
        <div>
          <div className="h-6 w-48 bg-gray-300 dark:bg-gray-700 rounded mb-6 mx-auto"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-64 bg-gray-300 dark:bg-gray-700"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
