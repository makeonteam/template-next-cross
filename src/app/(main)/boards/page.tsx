"use client";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@components/shadcn/ui/button";

function InnerPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  return (
    <div>
      <h1>url-path is /boards?id={id ? id : "null"}</h1>
      <Button onClick={() => router.back()}>Back</Button>
      <Button onClick={() => router.forward()}>Go</Button>
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
