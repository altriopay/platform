import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "@tanstack/react-router";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function LoginComponent() {
  const navigate = useNavigate();
  const { publicKey, connected } = useWallet();

  useEffect(() => {
    if (connected && publicKey) {
      navigate({ to: "/dashboard" });
    }
  }, [connected, publicKey, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <main className="w-full max-w-sm text-center">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome to AltrioPay</h1>
          <p className="text-base text-muted-foreground">Sign In To Manage Your Payment</p>
        </div>

        <div className="flex justify-center">
          <WalletMultiButton />
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <a href="/terms" className="underline underline-offset-2">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </a>
        </p>
      </main>
    </div>
  );
}
