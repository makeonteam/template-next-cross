"use client";
import { Suspense, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

import { AppTopbar } from "@components/common/AppTopbar";

function PageContent(): React.ReactElement {
  const tMain = useTranslations();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    document.title = "Notes";
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <AppTopbar>
        <span className="pl-2">{tMain("common.sidebar.notes")}</span>
      </AppTopbar>
      <div className="flex h-full w-full flex-col gap-2 p-2">
        <h1 className="text-xl font-bold">Notes{id ? `?id=${id}` : null}</h1>
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
