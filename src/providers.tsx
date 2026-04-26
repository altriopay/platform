import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { router } from "./router";
import { RouterProvider } from "@tanstack/react-router";
import { SolanaProvider } from "@solana/react-hooks";
import { createClient, defaultWalletConnectors } from "@solana/client";

const client = createClient({
  endpoint: "https://api.devnet.solana.com",
  walletConnectors: defaultWalletConnectors(),
});

export function Providers() {
  const queryClient = new QueryClient();

  return (
    <SolanaProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <RouterProvider router={router} />
        </TooltipProvider>
      </QueryClientProvider>
    </SolanaProvider>
  );
}
