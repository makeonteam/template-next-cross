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
        <span>Notes</span>
      </AppTopbar>
      <h1 className="p-2">url-path is /note?id={id ? id : "null"}</h1>
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
