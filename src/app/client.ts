import { createThirdwebClient } from "thirdweb";
import { bsc } from "thirdweb/chains";

// Client ID
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;
if (!clientId) throw new Error("No client ID provided");

// Thirdweb client
export const client = createThirdwebClient({
  clientId,
  chain: bsc, // BSC mainnet
  walletConnectOptions: {
    qrcode: true, // WalletConnect QR code for mobile
    // force chain switch
    chainId: 56,
  },
});
