"use client";
import { Suspense } from "react";

function PageContent() {
  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="text-xl font-bold">Home page</h1>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}
