export declare enum EPhase {
    Idle = "IDLE",
    NotInitialized = "NOT_INITIALIZED",
    Staking = "STAKING",
    Trading = "TRADING"
}
export declare type TPoolDBData = {
    id: string;
    title: string;
    benchmark: number;
    poolRegistryAddress: string;
    descriptionHTML: string;
    isExperimental: boolean;
    isSuspended: boolean;
    createdAt: number;
    deploymentBlock: number;
    strategyId: string;
};
export declare type TPool = TAccountingData & TStakingData & TPoolDBData & {
    phases: TPhases;
    poolModules: TPoolModules;
    userPerformanceMargin?: number;
    userPerformancePercent?: number;
    userPremium?: number;
    yieldToDate?: number;
    yieldToDateAnnualized?: number;
};
export declare type TAccountingData = {
    managementFee: number;
    marginAddress: string;
    marginDecimals: number;
    marginTitle: string;
    performanceFee: number;
    poolSize: number;
    poolUtilization: number;
};
export declare type TPhases = {
    currentEpochStarted: number;
    currentEpochTimestamp: number;
    currentPhase: EPhase;
    currentPhaseTimestamp: number;
    phasesLength?: number[];
};
export declare type TPoolLensData = {
    accounting: TAccountingData;
    lifecycle: TPhases;
    modules: TPoolModules;
    staking: TStakingData;
};
export declare type TPoolModules = {
    accountingAddress: string;
    lifecycleAddress: string;
    stakingAddress: string;
    strategyAddress: string;
    vaultAddress: string;
};
export declare type TStakingData = {
    claimableAssets?: number;
    claimableShares?: number;
    pendingStake?: number;
    pendingWithdrawal?: number;
    userStaked?: number;
};
