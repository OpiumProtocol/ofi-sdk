/** PEER_2_POOL */
declare type TPeer2PoolProductParams = {
    rewardPoolAddress: string | null;
    rewardsPoolProductId: string | null;
    hardcap: number;
    withdrawalFee: number;
    depositDisabled: boolean;
};
export declare enum EPeer2PoolInsuranceProductParamsSubtype {
    STABLECOIN = "STABLECOIN",
    SMART_CONTRACT = "SMART_CONTRACT",
    OPTION_CALL = "OPTION_CALL",
    BOND = "BOND",
    OPTION_CALL_REAL = "OPTION_CALL_REAL",
    OPTION_PUT_REAL = "OPTION_PUT_REAL",
    SINGLE_EPOCH = "SINGLE_EPOCH"
}
export declare enum ChartEnum {
    ANALYTICS_CHART = "ANALYTICS_CHART",
    PNL_CHART = "PNL_CHART"
}
declare type TPeer2PoolInsuranceProductParams = TPeer2PoolProductParams & {
    nominal: number;
    title: string;
    underlyingTitle: string;
    referenceTitle: string;
    inverseTrigger: number;
    subtype: EPeer2PoolInsuranceProductParamsSubtype;
    isSecondaryAvailable: boolean;
    startBlock: number;
    firstEndtime: number;
    period: number;
    chartInfo: {
        [key in ChartEnum]?: TChartLabels;
    } | null;
};
declare type TChartLabels = {
    title: string;
    xLabel: string;
    yLabel: string;
};
declare type TPeer2PoolInsuranceProductParamsV2 = TPeer2PoolInsuranceProductParams & {
    secondaryMarketPoolAddress: string;
};
declare type TPeer2PoolCompoundFixedRateParams = TPeer2PoolProductParams & {
    nominal: number;
    title: string;
    underlyingTitle: string;
    stakerLeverage: number;
    hedgerLeverage: number;
};
/** GENERAL */
export declare enum EProductType {
    PEER_2_POOL_INSURANCE = "PEER_2_POOL_INSURANCE",
    PEER_2_POOL_INSURANCE_V2 = "PEER_2_POOL_INSURANCE_V2",
    PEER_2_POOL_COMPOUND_FIXED_RATE = "PEER_2_POOL_COMPOUND_FIXED_RATE",
    STAKING_POOL = "STAKING_POOL",
    GOVERNANCE_WRAPPER = "GOVERNANCE_WRAPPER"
}
declare type TProductParamsBase = {
    marginAddress: string;
    marginTitle: string;
    marginDecimals: number;
    poolAddress: string;
    longLogo: string | null;
    lpLogo: string | null;
    protectionLogo: string | null;
    createdAt: number | null;
};
export declare type TProductParams<E extends EProductType> = TProductParamsBase & (E extends EProductType.PEER_2_POOL_INSURANCE ? TPeer2PoolInsuranceProductParams : E extends EProductType.PEER_2_POOL_INSURANCE_V2 ? TPeer2PoolInsuranceProductParamsV2 : E extends EProductType.PEER_2_POOL_COMPOUND_FIXED_RATE ? TPeer2PoolCompoundFixedRateParams : TProductParamsBase);
export declare enum EProductAvgCostFrequency {
    MONTHLY = "MONTHLY",
    WEEKLY = "WEEKLY",
    ANNUAL = "ANNUAL",
    DAILY = "DAILY",
    SINGLE_EPOCH = "SINGLE_EPOCH",
    PER_3_DAYS = "PER_3_DAYS"
}
export declare type TProduct<E extends EProductType> = {
    id: string;
    type: EProductType;
    params: TProductParams<E>;
    isHedging: boolean;
    avgCost: number | null;
    avgCostFrequency: EProductAvgCostFrequency | null;
    isTurbo: boolean;
    title: string;
    isFirstEpochExpired?: boolean;
};
export declare type TPayoutChart = {
    buyerPayout: number;
    sellerPayout: number;
    price: number;
};
export declare type TEmptyObject = Record<string, never>;
export declare type TProductState<E extends EProductType> = E extends EProductType.STAKING_POOL ? TEmptyObject : E extends EProductType.GOVERNANCE_WRAPPER ? TEmptyObject : {
    epochLength: number;
    stakingPhaseLength: number;
    tradingPhaseLength: number;
    currentEpochTimestamp: number;
    isWithdrawalsEnabled: boolean;
    idleStakingTimeLimit: number;
};
export {};
