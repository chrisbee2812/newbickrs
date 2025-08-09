import React from 'react';

const HEAD = (
  <div
    key="head"
    className="w-[30px] h-[30px] rounded-full border-[6px] border-foreground absolute top-[30px] right-[-12px]"
  />
);

const BODY = (
  <div
    key="body"
    className="w-[6px] h-[60px] bg-foreground absolute top-[54px] right-0"
  />
);

const RIGHT_ARM = (
  <div
    key="right-arm"
    className="w-[60px] h-[6px] bg-foreground absolute top-[78px] right-[-60px] rotate-[-30deg] origin-bottom-left"
  />
);

const LEFT_ARM = (
  <div
    key="left-arm"
    className="w-[60px] h-[6px] bg-foreground absolute top-[78px] right-[6px] rotate-[30deg] origin-bottom-right"
  />
);

const RIGHT_LEG = (
  <div
    key="right-leg"
    className="w-[60px] h-[6px] bg-foreground absolute top-[108px] right-[-54px] rotate-[60deg] origin-bottom-left"
  />
);

const LEFT_LEG = (
  <div
    key="left-leg"
    className="w-[60px] h-[6px] bg-foreground absolute top-[108px] right-0 rotate-[-60deg] origin-bottom-right"
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfIncorrectGuesses: number;
};

export function HangmanDrawing({ numberOfIncorrectGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative w-[150px] h-[180px]">
      {BODY_PARTS.slice(0, numberOfIncorrectGuesses)}
      <div className="h-[30px] w-[6px] bg-foreground absolute top-0 right-0" />
      <div className="h-[6px] w-[120px] bg-foreground ml-[30px]" />
      <div className="h-[180px] w-[6px] bg-foreground ml-[30px]" />
      <div className="h-[6px] w-[150px] bg-foreground" />
    </div>
  );
}