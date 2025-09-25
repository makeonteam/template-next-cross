"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { AppTopbar } from "@components/common/AppTopbar";

function InnerPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <div className="flex h-full w-full flex-col">
      <AppTopbar>
        <span>Boards</span>
      </AppTopbar>
      <div className="h-full w-full">
        <h1 className="px-4 py-1">url-path is /boards?id={id ? id : "null"}</h1>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <InnerPage />
    </Suspense>
  );
}
