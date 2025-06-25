import React, { Suspense } from "react";
import { RecentPostList } from "./_components/RecentPostList";

export default function BlogHome() {
  return (
    <div className="py-10 flex flex-col gap-6">
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 bg-clip-text text-transparent">
        <h1 className="font-extrabold text-6xl leading-24">Blog</h1>
      </div>
      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }
      >
        <RecentPostList />
      </Suspense>
    </div>
  );
}
