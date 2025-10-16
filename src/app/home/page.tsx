"use client";
import { Suspense, useEffect } from "react";

function PageContent(): React.ReactElement {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="flex h-full w-full flex-col gap-2 p-2">
      <h1 className="text-xl font-bold">Home page</h1>
    </div>
  );
}

export default function Page(): React.ReactElement {
  return (
    <Suspense>
      <PageContent />
    </Suspense>
  );
}
