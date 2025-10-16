"use client";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { AppTopbar } from "@components/common/AppTopbar";

function PageContent(): React.ReactElement {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    document.title = "Notes";
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <AppTopbar>
        <span>Notes</span>
      </AppTopbar>
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <h1 className="text-xl font-bold">url-path is /note?id={id ? id : "null"}</h1>
      </div>
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
