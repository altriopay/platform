import { useWallet } from "@solana/wallet-adapter-react";
import { Route } from "@tanstack/react-router";

export function Dashboard() {
  const { publicKey, disconnect } = useWallet();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <main className="text-center space-y-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">Connected: {publicKey?.toBase58()}</p>
        <button
          onClick={() => disconnect()}
          className="px-4 py-2 border border-border-low rounded-lg hover:bg-accent"
        >
          Disconnect
        </button>
      </main>
    </div>
  );
}

export const dashboardRoute = Route.create({
  path: "/dashboard",
  component: Dashboard,
});
