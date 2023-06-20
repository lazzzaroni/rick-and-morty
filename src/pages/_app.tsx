import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  type DehydratedState,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}
