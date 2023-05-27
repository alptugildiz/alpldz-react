"use client";

import styled from "styled-components";

import device from "./../../../consts/sizes";

const FlatMountains = styled.div`
  @media ${device.desktop} {
    .lookAtHere {
      display: none;
    }
  }
  @media ${device.laptop} {
    .lookAtHere {
      display: none;
    }
  }
  @media ${device.mobile} {
    .lookAtHere {
      display: block;
      position: absolute;
      z-index: 2;
      bottom: 60px;
      left: 20px;
      width: 95px;
    }
    svg {
      position: absolute;
      bottom: -20px;
      .firstMountain {
        transition: all 0.3s ease-out;
      }
      .firstMountain:hover {
        transform: translateY(-20px);
      }
      .secondMountain {
        transition: all 0.3s ease-out;
      }
      .secondMountain:hover {
        transform: translateY(20px);
      }
      .thirdMountain {
        transition: all 0.3s ease-out;
      }
      .thirdMountain:hover {
        transform: translateY(20px);
      }
      .fourthMountain {
        transition: all 0.3s ease-out;
      }
      .fourthMountain:hover {
        transform: translateY(20px);
      }
      .fifthMountain {
        transition: all 0.3s ease-out;
      }
      .fifthMountain:hover {
        transform: translateY(20px);
      }
      .sixthMountain {
        transition: all 0.3s ease-out;
      }
      .sixthMountain:hover {
        transform: translateY(20px);
      }
      path {
        pointer-events: auto;
      }
    }
  }
`;

export { FlatMountains };
