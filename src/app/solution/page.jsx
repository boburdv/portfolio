import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Solution() {
  return (
    <div className="mt-[10%] flex items-center justify-center px-4">
      <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
        <img src="/bossbaby.png" className="w-[120px] sm:w-[150px]" alt="bossbaby" />

        <div>
          <h2 className="text-5xl sm:text-7xl font-bold text-slate-500 mb-2">404</h2>
          <div className="mb-4">
            <p className="text-muted-foreground font-semibold text-lg">
              Bunday sahifa mavjud emas! <br />
            </p>
            <span className="text-slate-500 text-lg mb-4">Bu boshlanishidan oldingi jimjitlik</span>
          </div>
          <Link href="/" className={buttonVariants({ variant: "default" })}>
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </div>
  );
}
