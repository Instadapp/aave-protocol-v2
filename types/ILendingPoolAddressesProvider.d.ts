/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ILendingPoolAddressesProviderInterface
  extends ethers.utils.Interface {
  functions: {
    "getFeeProvider()": FunctionFragment;
    "getLendingPool()": FunctionFragment;
    "getLendingPoolConfigurator()": FunctionFragment;
    "getLendingPoolLiquidationManager()": FunctionFragment;
    "getLendingPoolManager()": FunctionFragment;
    "getLendingRateOracle()": FunctionFragment;
    "getPriceOracle()": FunctionFragment;
    "getTokenDistributor()": FunctionFragment;
    "setFeeProviderImpl(address)": FunctionFragment;
    "setLendingPoolConfiguratorImpl(address)": FunctionFragment;
    "setLendingPoolImpl(address)": FunctionFragment;
    "setLendingPoolLiquidationManager(address)": FunctionFragment;
    "setLendingPoolManager(address)": FunctionFragment;
    "setLendingRateOracle(address)": FunctionFragment;
    "setPriceOracle(address)": FunctionFragment;
    "setTokenDistributor(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getFeeProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolConfigurator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolLiquidationManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingPoolManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLendingRateOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenDistributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeProviderImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolConfiguratorImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolLiquidationManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingPoolManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setLendingRateOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceOracle",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenDistributor",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getFeeProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolConfigurator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolLiquidationManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingPoolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLendingRateOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenDistributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeProviderImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolConfiguratorImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolLiquidationManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingPoolManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLendingRateOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenDistributor",
    data: BytesLike
  ): Result;

  events: {};
}

export class ILendingPoolAddressesProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ILendingPoolAddressesProviderInterface;

  functions: {
    getFeeProvider(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getFeeProvider()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getLendingPool(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getLendingPool()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getLendingPoolConfigurator(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getLendingPoolConfigurator()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getLendingPoolLiquidationManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getLendingPoolLiquidationManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getLendingPoolManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getLendingPoolManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getLendingRateOracle(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getLendingRateOracle()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getPriceOracle(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getPriceOracle()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getTokenDistributor(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getTokenDistributor()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    setFeeProviderImpl(
      feeProvider: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setFeeProviderImpl(address)"(
      feeProvider: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLendingPoolConfiguratorImpl(
      configurator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLendingPoolConfiguratorImpl(address)"(
      configurator: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLendingPoolImpl(
      pool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLendingPoolImpl(address)"(
      pool: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLendingPoolLiquidationManager(
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLendingPoolLiquidationManager(address)"(
      manager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLendingPoolManager(
      lendingPoolManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLendingPoolManager(address)"(
      lendingPoolManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setLendingRateOracle(
      lendingRateOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setLendingRateOracle(address)"(
      lendingRateOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setPriceOracle(
      priceOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPriceOracle(address)"(
      priceOracle: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setTokenDistributor(
      tokenDistributor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setTokenDistributor(address)"(
      tokenDistributor: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getFeeProvider(overrides?: CallOverrides): Promise<string>;

  "getFeeProvider()"(overrides?: CallOverrides): Promise<string>;

  getLendingPool(overrides?: CallOverrides): Promise<string>;

  "getLendingPool()"(overrides?: CallOverrides): Promise<string>;

  getLendingPoolConfigurator(overrides?: CallOverrides): Promise<string>;

  "getLendingPoolConfigurator()"(overrides?: CallOverrides): Promise<string>;

  getLendingPoolLiquidationManager(overrides?: CallOverrides): Promise<string>;

  "getLendingPoolLiquidationManager()"(
    overrides?: CallOverrides
  ): Promise<string>;

  getLendingPoolManager(overrides?: CallOverrides): Promise<string>;

  "getLendingPoolManager()"(overrides?: CallOverrides): Promise<string>;

  getLendingRateOracle(overrides?: CallOverrides): Promise<string>;

  "getLendingRateOracle()"(overrides?: CallOverrides): Promise<string>;

  getPriceOracle(overrides?: CallOverrides): Promise<string>;

  "getPriceOracle()"(overrides?: CallOverrides): Promise<string>;

  getTokenDistributor(overrides?: CallOverrides): Promise<string>;

  "getTokenDistributor()"(overrides?: CallOverrides): Promise<string>;

  setFeeProviderImpl(
    feeProvider: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setFeeProviderImpl(address)"(
    feeProvider: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLendingPoolConfiguratorImpl(
    configurator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLendingPoolConfiguratorImpl(address)"(
    configurator: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLendingPoolImpl(
    pool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLendingPoolImpl(address)"(
    pool: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLendingPoolLiquidationManager(
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLendingPoolLiquidationManager(address)"(
    manager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLendingPoolManager(
    lendingPoolManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLendingPoolManager(address)"(
    lendingPoolManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setLendingRateOracle(
    lendingRateOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setLendingRateOracle(address)"(
    lendingRateOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setPriceOracle(
    priceOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPriceOracle(address)"(
    priceOracle: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setTokenDistributor(
    tokenDistributor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setTokenDistributor(address)"(
    tokenDistributor: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getFeeProvider(overrides?: CallOverrides): Promise<string>;

    "getFeeProvider()"(overrides?: CallOverrides): Promise<string>;

    getLendingPool(overrides?: CallOverrides): Promise<string>;

    "getLendingPool()"(overrides?: CallOverrides): Promise<string>;

    getLendingPoolConfigurator(overrides?: CallOverrides): Promise<string>;

    "getLendingPoolConfigurator()"(overrides?: CallOverrides): Promise<string>;

    getLendingPoolLiquidationManager(
      overrides?: CallOverrides
    ): Promise<string>;

    "getLendingPoolLiquidationManager()"(
      overrides?: CallOverrides
    ): Promise<string>;

    getLendingPoolManager(overrides?: CallOverrides): Promise<string>;

    "getLendingPoolManager()"(overrides?: CallOverrides): Promise<string>;

    getLendingRateOracle(overrides?: CallOverrides): Promise<string>;

    "getLendingRateOracle()"(overrides?: CallOverrides): Promise<string>;

    getPriceOracle(overrides?: CallOverrides): Promise<string>;

    "getPriceOracle()"(overrides?: CallOverrides): Promise<string>;

    getTokenDistributor(overrides?: CallOverrides): Promise<string>;

    "getTokenDistributor()"(overrides?: CallOverrides): Promise<string>;

    setFeeProviderImpl(
      feeProvider: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFeeProviderImpl(address)"(
      feeProvider: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLendingPoolConfiguratorImpl(
      configurator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLendingPoolConfiguratorImpl(address)"(
      configurator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLendingPoolImpl(pool: string, overrides?: CallOverrides): Promise<void>;

    "setLendingPoolImpl(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLendingPoolLiquidationManager(
      manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLendingPoolLiquidationManager(address)"(
      manager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLendingPoolManager(
      lendingPoolManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLendingPoolManager(address)"(
      lendingPoolManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setLendingRateOracle(
      lendingRateOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLendingRateOracle(address)"(
      lendingRateOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceOracle(
      priceOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setPriceOracle(address)"(
      priceOracle: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setTokenDistributor(
      tokenDistributor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setTokenDistributor(address)"(
      tokenDistributor: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getFeeProvider(overrides?: CallOverrides): Promise<BigNumber>;

    "getFeeProvider()"(overrides?: CallOverrides): Promise<BigNumber>;

    getLendingPool(overrides?: CallOverrides): Promise<BigNumber>;

    "getLendingPool()"(overrides?: CallOverrides): Promise<BigNumber>;

    getLendingPoolConfigurator(overrides?: CallOverrides): Promise<BigNumber>;

    "getLendingPoolConfigurator()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLendingPoolLiquidationManager(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getLendingPoolLiquidationManager()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLendingPoolManager(overrides?: CallOverrides): Promise<BigNumber>;

    "getLendingPoolManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    getLendingRateOracle(overrides?: CallOverrides): Promise<BigNumber>;

    "getLendingRateOracle()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    "getPriceOracle()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenDistributor(overrides?: CallOverrides): Promise<BigNumber>;

    "getTokenDistributor()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeProviderImpl(
      feeProvider: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setFeeProviderImpl(address)"(
      feeProvider: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLendingPoolConfiguratorImpl(
      configurator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLendingPoolConfiguratorImpl(address)"(
      configurator: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLendingPoolImpl(pool: string, overrides?: Overrides): Promise<BigNumber>;

    "setLendingPoolImpl(address)"(
      pool: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLendingPoolLiquidationManager(
      manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLendingPoolLiquidationManager(address)"(
      manager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLendingPoolManager(
      lendingPoolManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLendingPoolManager(address)"(
      lendingPoolManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setLendingRateOracle(
      lendingRateOracle: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setLendingRateOracle(address)"(
      lendingRateOracle: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setPriceOracle(
      priceOracle: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setPriceOracle(address)"(
      priceOracle: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setTokenDistributor(
      tokenDistributor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setTokenDistributor(address)"(
      tokenDistributor: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getFeeProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getFeeProvider()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLendingPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getLendingPool()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLendingPoolConfigurator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLendingPoolConfigurator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLendingPoolLiquidationManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLendingPoolLiquidationManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLendingPoolManager(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLendingPoolManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLendingRateOracle(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getLendingRateOracle()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPriceOracle()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenDistributor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokenDistributor()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFeeProviderImpl(
      feeProvider: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setFeeProviderImpl(address)"(
      feeProvider: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLendingPoolConfiguratorImpl(
      configurator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLendingPoolConfiguratorImpl(address)"(
      configurator: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLendingPoolImpl(
      pool: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLendingPoolImpl(address)"(
      pool: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLendingPoolLiquidationManager(
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLendingPoolLiquidationManager(address)"(
      manager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLendingPoolManager(
      lendingPoolManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLendingPoolManager(address)"(
      lendingPoolManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setLendingRateOracle(
      lendingRateOracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setLendingRateOracle(address)"(
      lendingRateOracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setPriceOracle(
      priceOracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPriceOracle(address)"(
      priceOracle: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setTokenDistributor(
      tokenDistributor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setTokenDistributor(address)"(
      tokenDistributor: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
