"use client";
import { Suspense, useEffect } from "react";
import { useTranslations } from "next-intl";

function PageContent(): React.ReactElement {
  const tHome = useTranslations("home");

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="mt-safe mb-safe min-h-svh w-full">
      <div className="flex flex-col items-center gap-2 p-2">
        <h1 className="text-xl font-bold">{tHome("common.title")}</h1>
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
