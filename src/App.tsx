import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";

import { GlobalStyle } from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default App;
