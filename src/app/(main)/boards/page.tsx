"use client";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { AppTopbar } from "@components/common/AppTopbar";

function PageContent(): React.ReactElement {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    document.title = "Boards";
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <AppTopbar>
        <span>Boards</span>
      </AppTopbar>
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <h1 className="text-xl font-bold">Boards{id ? `?id=${id}` : null}</h1>
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
