import { EExternalLinks } from './mining';
export declare enum EStakingType {
    PEER_2_POOL_POOLED = "PEER_2_POOL_POOLED",
    PEER_2_POOL_POOLED_V2 = "PEER_2_POOL_POOLED_V2",
    STAKING_POOL = "STAKING_POOL",
    PEER_2_POOL_TRANCHES = "PEER_2_POOL_TRANCHES"
}
export declare enum EStakingRewardsPeriod {
    WEEKLY = "WEEKLY",
    YEARLY = "YEARLY",
    MONTHLY = "MONTHLY"
}
export declare const CRewardsPeriodsSeconds: {
    WEEKLY: number;
    MONTHLY: number;
    YEARLY: number;
};
export declare enum EDistributionType {
    DROPIUM = "DROPIUM",
    OTHER = "OTHER"
}
declare type TStakingRewards = {
    amountPerSecond: number;
    period: EStakingRewardsPeriod;
    distribution: EDistributionType;
} | null;
export declare type TStaking = {
    id: string;
    type: EStakingType;
    title: string;
    logo: string | null;
    descriptionHTML: string;
    itemLinks: {
        [key in EExternalLinks]?: string[];
    };
    productId: string;
    miningId: string | null;
    rewards: TStakingRewards;
    rewardsTextTemplate: (apr: string) => string;
    rewardsTokenAddress: string;
    isSuspended: boolean;
    isExperimented: boolean;
};
export declare type TEmptyObject = Record<string, never>;
export declare type TStakingParams<E extends EStakingType> = E extends EStakingType.PEER_2_POOL_POOLED ? {
    epochLength: number;
    stakingPhaseLength: number;
    tradingPhaseLength: number;
    currentEpochTimestamp: number;
    poolSize: number;
    poolUtilization: number;
    hardcap: number;
    yieldToDate: number;
    yieldToDateAnnualized: number;
    mintedAmount: number;
} : E extends EStakingType.STAKING_POOL ? {
    currentEpoch: number;
    totalEpochs: number;
    nextEpochTimestamp: number;
    poolSize: number;
} : E extends EStakingType.PEER_2_POOL_TRANCHES ? {
    epochLength: number;
    stakingPhaseLength: number;
    tradingPhaseLength: number;
    currentEpochTimestamp: number;
    poolSize: number;
    seniorTrancheSize: number;
    hardcap: number;
} : TEmptyObject;
export declare type TStakinResponseAdditions = {
    userReward: number;
    userStaked: number;
    userPremium: number;
    userPerformancePercent: number;
    userPerformanceMargin: number;
    params: TStakingParams<EStakingType>;
    totalRewardsAmount: number;
};
export declare type TAllStakingsResponse = Array<TStaking & TStakinResponseAdditions>;
export {};
