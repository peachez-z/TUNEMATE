import BottomNavbar from "@/components/navbar/BottomNavbar/BottomNavbar";
import TopNavbar from "@/components/navbar/TopNavbar/TopNavbar";
import ChatProvider from "@/contexts/ChatContext";
import "@/styles/globals.css";
import "@/styles/reset.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20000,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const isLoginPage = useMemo(() => pathname === "/", [pathname]);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChatProvider>
          <>
            {!isLoginPage && <TopNavbar />}
            <div className={isLoginPage ? "login" : "main"}>
              <Component {...pageProps} />
            </div>
            {!isLoginPage && <BottomNavbar />}
          </>
        </ChatProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}