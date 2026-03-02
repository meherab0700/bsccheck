import { ethers } from "ethers";
import { bscProvider, USDT_BEP20, BEP20_ABI } from "./bsc";

export async function checkBscUsdtBalance(walletAddress) {
  try {
    const contract = new ethers.Contract(
      USDT_BEP20,
      BEP20_ABI,
      bscProvider
    );

    const balance = await contract.balanceOf(walletAddress);
    const decimals = await contract.decimals();

    return ethers.formatUnits(balance, decimals);
  } catch (error) {
    console.error("BSC Balance Error:", error);
    return null;
  }
}
