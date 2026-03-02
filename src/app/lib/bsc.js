import { ethers } from "ethers";

const BSC_RPC = "https://bsc-dataseed.binance.org/";

export const bscProvider = new ethers.JsonRpcProvider(BSC_RPC);

export const USDT_BEP20 = "0x55d398326f99059fF775485246999027B3197955";

export const BEP20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)"
];
