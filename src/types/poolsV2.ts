
export enum EPhase {
  Idle = 'IDLE',
  NotInitialized = 'NOT_INITIALIZED',
  Staking = 'STAKING',
  Trading = 'TRADING'
}

export type PoolDBData = {
  id: String
  title: String
  benchmark: Number
  poolRegistryAddress: String
  descriptionHTML: String
  isExperimental: Boolean
  isSuspended: Boolean
}

export type Pool = TAccountingData & TStakingData & PoolDBData & {
  phases: TPhases
  poolModules: TPoolModules
  userPerformanceMargin?: Number
  userPerformancePercent?: Number
  userPremium?: Number
  yieldToDate?: Number
  yieldToDateAnnualized?: Number
}

export type TAccountingData = {
  managementFee: Number
  marginAddress: String
  marginDecimals: Number
  marginTitle: String
  performanceFee: Number
  poolSize: Number
  poolUtilization: Number
}

export type TPhases = {
  currentEpochStarted: Number
  currentEpochTimestamp: Number
  currentPhase: EPhase
  currentPhaseTimestamp: Number
  phasesLength?: number[]
}

export type TPoolLensData = {
  accounting: TAccountingData
  lifecycle: TPhases
  modules: TPoolModules
  staking: TStakingData
}

export type TPoolModules = {
  accountingAddress: String
  lifecycleAddress: String
  stakingAddress: String
  strategyAddress: String
  vaultAddress: String
}

export type TStakingData = {
  claimableAssets?: Number
  claimableShares?: Number
  pendingStake?: Number
  pendingWithdrawal?: Number
  userStaked?: Number
}