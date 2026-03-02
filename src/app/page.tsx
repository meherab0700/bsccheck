"use client";
import { checkBscUsdtBalance } from './lib/checkBscBalance';

import { ConnectButton } from "thirdweb/react";
import { client } from "./client";

export default function Home() {
  return (
    <div style={styles.page}>
      {/* Top Header */}
      <div style={styles.header}>
        <h2 style={styles.logo}>Flash USDT Checker</h2>

        <div style={styles.connectBtn}>
         <ConnectButton client={client} />
          
        </div>
      </div>

      {/* Network Row */}
      <div style={styles.networkRow}>
        <div style={styles.networkItem}>🟢 USDT (ERC20)</div>
        <div style={styles.networkItem}>🟢 USDT (TRC20)</div>
        <div style={styles.networkItem}>🟢 USDT (BEP20)</div>
      </div>

      {/* Info Alert Box */}
      <div style={styles.alertBox}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "25px" }}>✅</span>
          <strong style={{ color: "#000" }}>What you can do with this checker</strong>
        </div>

        <hr style={styles.hr} />

        <p style={styles.smallText}>
          Flash USDT is a fraudulent, counterfeit version of USDT that can cause security issues. This checker analyzes your wallet address for risky token authorizations and unusual balances. To keep you safe, the check begins immediately after connecting your wallet.
      
        </p>
      </div>

      {/* Main Center Card */}
      <div style={styles.mainCard}>
        <h1 style={styles.title}>
          Check your wallet for fraudulent tokens and authorizations
        </h1>

        <p style={styles.description}>
          Connecting your wallet will check for any Flash or Fake tokens holdings, such as Flash USDT, as well as any risky token allowances you may have granted to contracts on the currently selected network.
        </p>

        <div style={{ marginTop: "35px" }}>
          <ConnectButton client={client} auth={false} />
        </div>
      </div>
    </div>
  );
}

const styles: any = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    fontFamily: "Inter, sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // vertical center
    alignItems: "center",     // horizontal center
    padding: "30px 20px",
    color: "#000",            // all text black
  },

  header: {
    background: "#f3f3f3",
    padding: "20px 30px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 12px rgba(7, 7, 7, 0.05)",
    width: "100%",
    maxWidth: "800px",
    color: "#000",
  },

  logo: {
    margin: 0,
    fontWeight: 800,      // বেশি bold
    color: "#000000",     // pure black
    letterSpacing: "0.5px",
  },

  connectBtn: {
    borderRadius: "10px",
    border: "#000",
    
  },

  networkRow: {
    marginTop: "20px",
    display: "flex",
    gap: "25px",
    fontSize: "14px",
    color: "#000",
    justifyContent: "center",
    width: "100%",
    maxWidth: "800px",
  },

  networkItem: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },

  alertBox: {
    marginTop: "30px",
    background: "#f5f5f5",
    padding: "25px 30px",
    borderRadius: "14px",
    boxShadow: "0 6px 15px rgba(8, 0, 0, 0.05)",
    maxWidth: "800px",
    color: "#000",
  },

  hr: {
    margin: "12px 0",
    border: "none",
    borderTop: "1px solid #ad1616",
  },

  smallText: {
    fontSize: "16px",
    color: "#000000",
    lineHeight: "1.6",
  },

  mainCard: {
    marginTop: "50px",
    background: "#f5f5f5",
    padding: "50px",
    borderRadius: "18px",
    maxWidth: "800px",
    boxShadow: "0 15px 30px rgba(5, 1, 1, 0.08)",
    color: "#000",
    textAlign: "center",
  },

  title: {
    margin: 0,
    fontSize: "40px",
    fontWeight: 700,
    color: "#000",
  },

  description: {
    marginTop: "15px",
    fontSize: "15px",
    color: "#000000",
    lineHeight: "1.7",
  },
};
