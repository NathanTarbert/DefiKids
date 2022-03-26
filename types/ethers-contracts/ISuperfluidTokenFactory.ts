/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISuperfluidToken } from "./ISuperfluidToken";

export class ISuperfluidTokenFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISuperfluidToken {
    return new Contract(address, _abi, signerOrProvider) as ISuperfluidToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
