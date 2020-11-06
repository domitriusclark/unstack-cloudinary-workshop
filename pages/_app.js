import { ChakraProvider } from '@chakra-ui/core';
import defaultTheme from '@chakra-ui/theme';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={defaultTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
