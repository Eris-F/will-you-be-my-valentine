"use client";
import { useState } from "react";
import donaldndaisy from "./donaldndaisy.png"

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "JO?",
      "Sigurt?",
      "what if i begged?",
      "Come on",
      "ti blej 2 pata",
      "ti blej 3 pata",
      "PLEASE POOKIE",
      "But :*(",
      "imma die fr",
      "deka fr kshtu",
      "ok ur talking to erisi's ghost",
      "please dor",
      "insane actually",
      "HALA JO A?",
      "please",
      "ski qare",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src={donaldndaisy}/>
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.tenor.com/m/F8gnm8OiiHsAAAAC/rose-cute.gif"
          />
          <h1 className="my-4 text-4xl font-mono">Will you be my Valentine pookie?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-20 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Po
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Jo" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
