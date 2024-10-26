/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import useUserAccounts from "@/hooks/useAccounts";

export default function Home() {
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [statsData, setStatsData] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [providersData, setProvidersData] = useState<any>([]);
  const [selectedProvider, setSelectedProvider] = useState<number>(0);
  const [selectedAccount, setSelectedAccount] = useState<any>(null);

  const handleSelect = (id: any) => {
    setSelectedAccount(id);
  };

  useEffect(() => {
    // Fetch staking stats data
    fetch("https://staking-api.babylonlabs.io/v1/stats")
      .then((response) => response.json())
      .then((json) => setStatsData(json.data))
      .catch((error) => console.error("Error fetching stats data:", error));

    // Fetch finality providers data
    fetch("https://staking-api.babylonlabs.io/v1/finality-providers?pagination_key=")
      .then((response) => response.json())
      .then((json) => setProvidersData(json.data.slice(0, 10))) // Get top 10 providers
      .catch((error) => console.error("Error fetching providers data:", error));
  }, []);

  const handleRowClick = (index: number) => {
    setSelectedProvider(index); // Set selected provider index
  };
  const { accounts, loading, error } = useUserAccounts();
  return (
    <main className={styles.main}>
      {/* Display Staking Statistics */}
      <div className={styles.dashboard}>
        <div className={styles.card}>
          <span className={styles.label}>Staking Window</span>
          <span className={styles.value}>closed</span>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>Confirmed TVL</span>
          <span className={styles.value}>{statsData ? (statsData.total_tvl / 1e8).toFixed(8) : "Loading..."} BTC</span>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>Pending Stake</span>
          <span className={styles.value}>{statsData ? (statsData.pending_tvl / 1e8).toFixed(8) : "Loading..."} BTC</span>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>Delegations</span>
          <span className={styles.value}>{statsData ? `${(statsData.total_delegations / 1000).toFixed(2)}K` : "Loading..."}</span>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>Stakers</span>
          <span className={styles.value}>{statsData ? `${(statsData.total_stakers / 1000).toFixed(2)}K` : "Loading..."}</span>
        </div>
      </div>
      <ul className={styles.accountList}>
        {(accounts ?? []).map(({ id, name, address, currency, balance }) => (
          <li
            key={id}
            className={`${styles.accountItem} ${selectedAccount === id ? styles.selected : ""}`}
            onClick={() => handleSelect(id)}
          >
            <p>name: {name}</p>
            <p>address: {address}</p>
          </li>
        ))}
      </ul>      
      {/* Display Finality Providers Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Finality Provider</th>
              <th>BTC PK</th>
              <th>Total Delegation</th>
              <th>Commission</th>
            </tr>
          </thead>
          <tbody>
            {providersData.map((provider:any, index: number) => (
              <tr
                key={index}
                className={`${styles.row} ${selectedProvider === index ? styles.selectedRow : ""}`}
                onClick={() => handleRowClick(index)}
              >
                <td>
                  <a href={provider.description.website} target="_blank" rel="noopener noreferrer" className={styles.providerName}>
                    {provider.description.moniker}
                  </a>
                </td>
                <td>{`${provider.btc_pk.slice(0, 4)}...${provider.btc_pk.slice(-4)}`}</td>
                <td>{(provider.total_tvl / 1e8).toFixed(8)} Signet BTC</td>
                <td>{(parseFloat(provider.commission) * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
