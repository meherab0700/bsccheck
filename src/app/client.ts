import { createThirdwebClient } from "thirdweb";
import { bsc } from "thirdweb/chains";

// Client ID
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided");
}

// Create Thirdweb client with BSC as active chain
export const client = createThirdwebClient({
  clientId: clientId,
  chain: bsc, // ✅ important: force BNB Smart Chain
});
