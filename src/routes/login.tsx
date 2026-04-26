import { useEffect } from "react";
import { useWalletConnection } from "@solana/react-hooks";
import { useNavigate } from "@tanstack/react-router";

export function LoginComponent() {
  const navigate = useNavigate();
  const { connectors, connect, wallet, status } = useWalletConnection();

  useEffect(() => {
    if (wallet) {
      navigate({ to: "/dashboard" });
    }
  }, [wallet, navigate]);

  const handleConnect = async (connectorId: string) => {
    await connect(connectorId);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <main className="w-full max-w-sm text-center">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome to AltrioPay</h1>
          <p className="text-base text-muted-foreground">Sign In To Manage Your Payment</p>
        </div>

        <div className="space-y-2">
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => handleConnect(connector.id)}
              disabled={status === "connecting"}
              className="w-full rounded-lg border border-border-low bg-card px-4 py-3 font-medium transition hover:bg-accent"
            >
              {connector.name}
            </button>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <a href="/terms" className="underline underline-offset-2">
            Terms
          </a>{" "}
          and{" "}
          <a href="/terms" className="underline underline-offset-2">
            Privacy Policy
          </a>
        </p>
      </main>
    </div>
  );
}
