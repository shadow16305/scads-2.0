import Image from "next/image";
import Socials from "./socials";
import { Dot } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-50 mx-auto mt-32 flex flex-col items-center justify-between pb-8 lg:max-w-[1060px] lg:flex-row lg:items-end xl:max-w-[1240px] 2xl:max-w-[1340px]">
      <div className="flex flex-col items-center gap-y-5 lg:items-start">
        <div className="flex items-center gap-x-2 text-xl font-bold dark:text-white">
          <Image src="/images/logo-2.png" alt="logo" width={48} height={48} />
          SCADS
        </div>
        <div className="flex flex-col gap-x-1 gap-y-1 md:flex-row">
          <p className="text-black dark:text-neutral-300">
            SCADS © Copyright {currentYear}. All rights reserved. ™
          </p>
          <Dot className="hidden md:block" />
          <Dialog>
            <DialogTrigger>Disclaimer</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Disclaimer</DialogTitle>
                <DialogDescription className="text-black dark:text-neutral-400">
                  While the SCADS algorithm guarantees the stability of SCADS as
                  a stable coin and assures that TWINE is a linear token with a
                  constant growth rate for each minted TWINE, it is important to
                  note that SCADS cannot be held responsible for events such as
                  global internet failure, nuclear war, or users not securely
                  safeguarding their passwords or seed phrases. The algorithm
                  remains impervious to market conditions, inflation, or
                  recession. The SCADS algorithm is fully autonomous,
                  self-maintained, and self-sufficient. Once launched, it is
                  immutable and cannot be modified, with updates limited to the
                  front end only. It operates within the framework of current
                  global regulatory ambiguity, functioning as a decentralized
                  algorithm. SCADS has no control over the jurisdiction from
                  which its clients operate. As such, SCADS encourages all users
                  to verify the legislation applicable in their respective
                  countries. SCADS holds no liability for any breach of usage by
                  users. It is strongly advised for users to 'Do Your Own
                  Research' (DYOR) before engaging in any transactions or
                  investments within the SCADS ecosystem.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Socials />
    </footer>
  );
};

export default Footer;
