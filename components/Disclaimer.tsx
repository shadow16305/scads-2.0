"use client";

import { ThemeContext } from "@/contexts/theme-context";
import clsx from "clsx";
import { useContext } from "react";

const Disclaimer = () => {
  const themeCtx = useContext(ThemeContext);

  return (
    <>
      <h4
        className={clsx(
          "mt-32 text-center",
          themeCtx.isLight ? "text-black" : "text-lime",
        )}
      >
        Disclaimer
      </h4>
      <p
        className={clsx(
          "mt-2 w-full px-8 text-center text-xs lg:px-0",
          themeCtx.isLight ? "text-black" : "text-white opacity-70",
        )}
      >
        While the SCADS algorithm guarantees the stability of SCADS as a stable
        coin and assures that TWINE is a linear token with a constant growth
        rate for each minted TWINE, it is important to note that SCADS cannot be
        held responsible for events such as global internet failure, nuclear
        war, or users not securely safeguarding their passwords or seed phrases.
        The algorithm remains impervious to market conditions, inflation, or
        recession. The SCADS algorithm is fully autonomous, self-maintained, and
        self-sufficient. Once launched, it is immutable and cannot be modified,
        with updates limited to the front end only. It operates within the
        framework of current global regulatory ambiguity, functioning as a
        decentralized algorithm. SCADS has no control over the jurisdiction from
        which its clients operate. As such, SCADS encourages all users to verify
        the legislation applicable in their respective countries. SCADS holds no
        liability for any breach of usage by users. It is strongly advised for
        users to 'Do Your Own Research' (DYOR) before engaging in any
        transactions or investments within the SCADS ecosystem.
      </p>
    </>
  );
};

export default Disclaimer;
