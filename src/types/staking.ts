import { EExternalLinks } from './mining'

export enum EStakingType {
  PEER_2_POOL_POOLED = 'PEER_2_POOL_POOLED',
  PEER_2_POOL_POOLED_V2 = 'PEER_2_POOL_POOLED_V2',
  STAKING_POOL = 'STAKING_POOL',
  PEER_2_POOL_TRANCHES = 'PEER_2_POOL_TRANCHES'
}

export enum EStakingRewardsPeriod {
  WEEKLY = 'WEEKLY',
  YEARLY = 'YEARLY',
  MONTHLY = 'MONTHLY'
}

export enum EDistributionType {
  DROPIUM = 'DROPIUM',
  OTHER = 'OTHER',
}

type TStakingRewards = {
  amount: number
  period: EStakingRewardsPeriod
  distribution: EDistributionType
} | null

export type TStaking = {
  id: string
  type: EStakingType
  title: string
  logo: string | null
  descriptionHTML: string
  itemLinks: { [key in EExternalLinks]?: string[] }
  productId: string
  rewards: TStakingRewards
  rewardsTextTemplate: (apr: string) => string
  rewardsTokenAddress: string
  isSuspended: boolean
}

export type TEmptyObject = Record<string, never>

export type TStakingParams<E extends EStakingType> = 
  E extends EStakingType.PEER_2_POOL_POOLED ?
    {
      epochLength: number
      stakingPhaseLength: number
      tradingPhaseLength: number
      currentEpochTimestamp: number
      poolSize: number
      poolUtilization: number
      hardcap: number
      yieldToDate: number
      yieldToDateAnnualized: number
    } :
      E extends EStakingType.STAKING_POOL ?
        {
          currentEpoch: number
          totalEpochs: number
          nextEpochTimestamp: number
          poolSize: number
        } : E extends EStakingType.PEER_2_POOL_TRANCHES ?
        {
          epochLength: number
          stakingPhaseLength: number
          tradingPhaseLength: number
          currentEpochTimestamp: number
          poolSize: number
          seniorTrancheSize: number
          hardcap: number
        } :
          TEmptyObject

export type TAllStakingsResponse = Array<TStaking & { userReward: number; userStaked: number; params: TStakingParams<EStakingType> }>

