import React, { Suspense } from "react";
import { RecentPostList } from "./_components/RecentPostList";

export default function BlogHome() {
  return (
    <div>
      <h1>Blog Home</h1>
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
