"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import Footer from "@/shared/Footer";
import Title from "@/shared/Title";

export default function Contact() {
  const router = useRouter();

  return (
    <div className="container mx-auto">
      <div className="h-[92vh] flex flex-col items-center pt-10">
        <Title title="Under Development" />
        <div className="h-full flex flex-col items-center justify-center">
          <Button size="lg" onClick={() => router.push("/")}>
            Take me back
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
