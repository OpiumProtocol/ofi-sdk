export declare enum EPhase {
    Idle = "IDLE",
    NotInitialized = "NOT_INITIALIZED",
    Staking = "STAKING",
    Trading = "TRADING"
}
export declare type TPoolDBData = {
    id: String;
    title: String;
    benchmark: Number;
    poolRegistryAddress: String;
    descriptionHTML: String;
    isExperimental: Boolean;
    isSuspended: Boolean;
};
export declare type TPool = TAccountingData & TStakingData & TPoolDBData & {
    phases: TPhases;
    poolModules: TPoolModules;
    userPerformanceMargin?: Number;
    userPerformancePercent?: Number;
    userPremium?: Number;
    yieldToDate?: Number;
    yieldToDateAnnualized?: Number;
};
export declare type TAccountingData = {
    managementFee: Number;
    marginAddress: String;
    marginDecimals: Number;
    marginTitle: String;
    performanceFee: Number;
    poolSize: Number;
    poolUtilization: Number;
};
export declare type TPhases = {
    currentEpochStarted: Number;
    currentEpochTimestamp: Number;
    currentPhase: EPhase;
    currentPhaseTimestamp: Number;
    phasesLength?: number[];
};
export declare type TPoolLensData = {
    accounting: TAccountingData;
    lifecycle: TPhases;
    modules: TPoolModules;
    staking: TStakingData;
};
export declare type TPoolModules = {
    accountingAddress: String;
    lifecycleAddress: String;
    stakingAddress: String;
    strategyAddress: String;
    vaultAddress: String;
};
export declare type TStakingData = {
    claimableAssets?: Number;
    claimableShares?: Number;
    pendingStake?: Number;
    pendingWithdrawal?: Number;
    userStaked?: Number;
};
