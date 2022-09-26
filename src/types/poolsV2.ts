
export enum EPhase {
  Idle = 'IDLE',
  NotInitialized = 'NOT_INITIALIZED',
  Staking = 'STAKING',
  Trading = 'TRADING'
}

export type TPoolDBData = {
  id: string
  title: string
  benchmark: number
  poolRegistryAddress: string
  descriptionHTML: string
  isExperimental: boolean
  isSuspended: boolean
}

export type TPool = TAccountingData & TStakingData & TPoolDBData & {
  phases: TPhases
  poolModules: TPoolModules
  userPerformanceMargin?: number
  userPerformancePercent?: number
  userPremium?: number
  yieldToDate?: number
  yieldToDateAnnualized?: number
}

export type TAccountingData = {
  managementFee: number
  marginAddress: string
  marginDecimals: number
  marginTitle: string
  performanceFee: number
  poolSize: number
  poolUtilization: number
}

export type TPhases = {
  currentEpochStarted: number
  currentEpochTimestamp: number
  currentPhase: EPhase
  currentPhaseTimestamp: number
  phasesLength?: number[]
}

export type TPoolLensData = {
  accounting: TAccountingData
  lifecycle: TPhases
  modules: TPoolModules
  staking: TStakingData
}

export type TPoolModules = {
  accountingAddress: string
  lifecycleAddress: string
  stakingAddress: string
  strategyAddress: string
  vaultAddress: string
}

export type TStakingData = {
  claimableAssets?: number
  claimableShares?: number
  pendingStake?: number
  pendingWithdrawal?: number
  userStaked?: number
}
