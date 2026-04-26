import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

export function LoginComponent() {
  const [isConnecting, setIsConnecting] = useState(false);
  const navigate = useNavigate();

  const handleConnect = async () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      navigate({ to: "/" });
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <main className="w-full max-w-sm text-center">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">Welcome to AltrioPay</h1>
          <p className="text-base text-muted-foreground">Sign In To Manage Your Payment</p>
        </div>

        <button
          onClick={handleConnect}
          disabled={isConnecting}
          className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
        >
          {isConnecting ? "Connecting..." : "Connect Wallet"}
        </button>

        <p className="mt-6 text-xs text-muted-foreground">
          By signing in, you agree to our{" "}
          <a href="#" className="underline underline-offset-2">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-2">
            Privacy Policy
          </a>
        </p>
      </main>
    </div>
  );
}
