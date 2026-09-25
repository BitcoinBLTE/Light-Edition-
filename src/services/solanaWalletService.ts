/**
 * Real Solana Wallet Integration
 * 
 * Supports genuine Phantom and Solflare detection without fake stubs.
 * Queries standard Solana JSON-RPC for real on-chain balance when connected.
 */

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean;
      connect: (options?: { onlyIfTrusted?: boolean }) => Promise<{ publicKey: { toString: () => string } }>;
      disconnect: () => Promise<void>;
      publicKey?: { toString: () => string };
      on?: (event: string, callback: (args: unknown) => void) => void;
    };
    solflare?: {
      isSolflare?: boolean;
      connect: () => Promise<void>;
      disconnect: () => Promise<void>;
      publicKey?: { toString: () => string };
      on?: (event: string, callback: (args: unknown) => void) => void;
    };
  }
}

export interface WalletState {
  connected: boolean;
  publicKey: string | null;
  walletName: 'Phantom' | 'Solflare' | null;
  balanceSol: number | null;
  isLoading: boolean;
  error: string | null;
}

export async function detectAvailableWallets(): Promise<{ phantom: boolean; solflare: boolean }> {
  return {
    phantom: Boolean(typeof window !== 'undefined' && window.solana?.isPhantom),
    solflare: Boolean(typeof window !== 'undefined' && window.solflare?.isSolflare)
  };
}

export async function fetchSolBalance(publicKeyStr: string): Promise<number | null> {
  try {
    const response = await fetch('https://api.mainnet-beta.solana.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'getBalance',
        params: [publicKeyStr]
      })
    });
    const data = await response.json();
    if (data?.result?.value !== undefined) {
      return data.result.value / 1e9; // Convert lamports to SOL
    }
    return null;
  } catch {
    return null;
  }
}
