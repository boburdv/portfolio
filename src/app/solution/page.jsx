import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Solution() {
  return (
    <div className="mt-[10%] flex items-center justify-center px-4">
      <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
        <img
          src="/bossbaby.png"
          className="w-[120px] sm:w-[150px] animate-slide-top delay-600 filter grayscale"
          alt="bossbaby"
        />

        <div>
          <h2 className="text-5xl sm:text-7xl font-bold text-slate-600 mb-2 animate-slide-top delay-100">404</h2>
          <div className="mb-4 animate-slide-top delay-200">
            <p className="text-muted-foreground font-semibold text-lg">
              Bunday sahifa mavjud emas! <br />
            </p>
            <span className="text-slate-500 text-lg mb-4">Bu boshlanishidan oldingi jimjitlik...</span>
          </div>
          <div className="animate-slide-top delay-500">
            <Link href="/" className={buttonVariants({ variant: "default" })}>
              Bosh sahifaga qaytish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
