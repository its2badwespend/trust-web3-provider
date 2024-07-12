import { SolanaProvider } from '@trustwallet/web3-provider-solana';
import { EthereumProvider } from '@trustwallet/web3-provider-ethereum';
import { CosmosProvider } from '@trustwallet/web3-provider-cosmos';
import { Web3Provider } from '@trustwallet/web3-provider-core';
import {
  AdapterStrategyType,
  IHandler,
} from '@trustwallet/web3-provider-core/adapter/Adapter';
import { ISolanaProviderConfig } from '@trustwallet/web3-provider-solana/types/SolanaProvider';
import { ICosmosProviderConfig } from '@trustwallet/web3-provider-cosmos/types/CosmosProvider';
import { IEthereumProviderConfig } from '@trustwallet/web3-provider-ethereum/types/EthereumProvider';
import { AptosProvider } from '@trustwallet/web3-provider-aptos';
import { IAptosProviderConfig } from '@trustwallet/web3-provider-aptos/types/AptosProvider';

const core = (strategy: AdapterStrategyType, handler?: IHandler) =>
  new Web3Provider({ strategy, handler });

const solana = (config: ISolanaProviderConfig) => new SolanaProvider(config);

const cosmos = (config: ICosmosProviderConfig) => new CosmosProvider(config);

const ethereum = (config: IEthereumProviderConfig) =>
  new EthereumProvider(config);

const aptos = (config: IAptosProviderConfig) => new AptosProvider(config);

window.trustwallet = {
  core,
  solana,
  cosmos,
  ethereum,
  aptos,
};
