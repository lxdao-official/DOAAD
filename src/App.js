import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'antd/dist/reset.css';
import Layout from './Layout';
import Home from './pages/Home';
import Article from './pages/Article';
import Detail from './pages/Detail';
import './App.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { goerli, filecoinHyperspace } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/article',
        element: <Article />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
    ],
  },
]);

const { chains, provider } = configureChains(
  [filecoinHyperspace, goerli],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),
    publicProvider(),
  ],
);

const { connectors } = getDefaultWallets({
  appName: 'DOAAD',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = () => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} initialChain={filecoinHyperspace}>
      <RouterProvider router={router} />
    </RainbowKitProvider>
  </WagmiConfig>
);
export default App;
