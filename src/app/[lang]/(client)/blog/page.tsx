import React, { Suspense } from "react";
import { RecentPostList } from "./_components/RecentPostList";

export default function BlogHome() {
  return (
    <div className="py-10 flex flex-col gap-6">
      <h1 className="text-6xl font-extrabold">Blog</h1>
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
