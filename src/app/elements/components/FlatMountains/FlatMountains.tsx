"use client";

import * as React from "react";
import { useState } from "react";

import * as Styled from "./FlatMountains.styled";

const FlatMountains = () => {
  const [isItTouched, setIsItTouched] = useState(false);

  const itIsTouched = () => {
    let delay = 2000;
    setIsItTouched(true);
    setTimeout(() => {
      setIsItTouched(false);
    }, delay);
  };

  return (
    <Styled.FlatMountains>
      <div className="lookAtHere">
        {!isItTouched
          ? "Hey touch the Mountains "
          : `Nothing happend but its cute`}
      </div>
      <svg
        className="mySvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 900"
      >
        <path fill="#10022D" d="M0 0h1600v900H0z" />
        <path
          className="firstMountain"
          fill="#993065"
          d="M957 450 539 900h857z m957"
          onMouseOver={itIsTouched}
        />

        <path
          className="secondMountain"
          fill="#7a346c"
          d="m-60 900 458-238 418 238z"
          onMouseOver={itIsTouched}
        />

        <path
          className="thirdMountain"
          fill="#b51a53"
          d="m1203 546 349 354H876z"
          onMouseOver={itIsTouched}
        />

        <path
          className="fourthMountain"
          fill="#895ab9"
          d="m641 695 245 205H367z"
          onMouseOver={itIsTouched}
        />

        <path
          className="fifthMountain"
          fill="#7d47a7"
          d="m1710 900-309-268-305 268z"
          onMouseOver={itIsTouched}
        />

        <path
          className="sixthMountain"
          fill="#5e5ec9"
          d="M1210 900 971 687 725 900z"
          onMouseOver={itIsTouched}
        />
      </svg>
    </Styled.FlatMountains>
  );
};
export default FlatMountains;
