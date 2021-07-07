export enum EMiningType {
  DROPIUM_V1 = 'DROPIUM_V1',
  ONEINCH_FARMING_V1 = 'ONEINCH_FARMING_V1',
  ONEINCH_FARMING_V1_EXTENDED = 'ONEINCH_FARMING_V1_EXTENDED',
  ONEINCH_OPIUM_LP_FARMING = 'ONEINCH_OPIUM_LP_FARMING',
  UNIPOOL_LP_V1 = 'UNIPOOL_LP_V1',
}

export enum EMiningFrequency {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY'
}

export enum EExternalLinks {
  READ_MORE_EXTERNAL = 'READ_MORE_EXTERNAL',
  READ_MORE_INTERNAL = 'READ_MORE_INTERNAL',
  WATCH_MORE_EXTERNAL = 'WATCH_MORE_EXTERNAL',
  STAKE_HERE_EXTERNAL = 'STAKE_HERE_EXTERNAL',
  REWARDS_HERE_EXTERNAL = 'REWARDS_HERE_EXTERNAL',
  PROPOSAL_HERE_EXTERNAL = 'PROPOSAL_HERE_EXTERNAL'
}

type TMiningParamsBase = {
  contractAddress: string
  frequency: EMiningFrequency
}

export type TMiningParams<T extends EMiningType> = TMiningParamsBase & (
  T extends EMiningType.DROPIUM_V1 ?
    {
      subgraphEntity: string
      list: string | null
    } :
      T extends EMiningType.UNIPOOL_LP_V1 ?
      {
        leftTokenContractAddress: string
        rightTokenContractAddress: string
        lpWrapperContractAddress: string
        apr: {
          title: string
          rewardTokenContractAddress: string
        }
        totalRewardsAmount: number
      } :
        T extends EMiningType.ONEINCH_FARMING_V1 ?
        {
          leftTokenContractAddress: string
          rightTokenContractAddress: string
          lpWrapperContractAddress: string
          subgraphId: string
          aprs: Array<{
            title: string
            rewardTokenContractAddress: string
            ratio: number
            includeClaimed: boolean
            totalRewardsAmount: number
          }>
        } :
          T extends EMiningType.ONEINCH_FARMING_V1_EXTENDED ?
          {
            leftTokenContractAddress: string
            rightTokenContractAddress: string
            lpWrapperContractAddress: string
            subgraphName: string
            subgraphReward: string
            apr: {
              title: string
              rewardTokenContractAddress: string
              rewardRate: number
              totalRewardsAmount: number
            }
          } :
            T extends EMiningType.ONEINCH_OPIUM_LP_FARMING ?
            {
              marginTokenAddress: string
              marginTokenDecimals: number
              lpWrapperContractAddress: string
              subgraphReward: string
              apr: {
                title: string
                rewardTokenContractAddress: string
                rewardRate: number
                totalRewardsAmount: number
              }
            } :
              TMiningParamsBase
)



export type TMining<T extends EMiningType> = {
  id: string
  type: EMiningType
  title: string
  logo: string | null
  descriptionHTML: string
  itemLinks: { [key in EExternalLinks]?: string[] }
  claimingStartDate: number | null
  miningEndDate: number | null
  params: TMiningParams<T>
  statuses: {
    mining: EMiningStatus
    rewards: ERewardsStatus
  }
}


export enum EMiningStatus {
  COMING_SOON = 'COMING_SOON',
  ONGOING = 'ONGOING',
  ENDED = 'ENDED'
}

export enum ERewardsStatus {
  COMING_SOON = 'COMING_SOON',
  CLAIMABLE = 'CLAIMABLE',
  ENDED = 'ENDED'
}

type TEmptyObject = Record<string, never>

export type TMiningAdditionalInfo<E extends EMiningType> = 
  E extends EMiningType.DROPIUM_V1 ?
    {
      userReward: number
      userFullReward: number
      userCharityPercent: number
      initialPoolSize: number
      withdrawableSize: number
      bonusEnd: number
    } :
      E extends EMiningType.UNIPOOL_LP_V1 ?
        {
          apr: {
            title: string
            apr: number | null
            userRewardTotal: number
            userRewardTotalUSD: number
            userStakedTotalUSD: number
          }
        } :
          E extends EMiningType.ONEINCH_FARMING_V1 ?
          {
            aprs: Array<{
              title: string
              apr: number
              userRewardTotal: number
              userRewardTotalUSD: number
              totalRewardsAmount: number
            }>
          } :
            E extends EMiningType.ONEINCH_FARMING_V1_EXTENDED ?
            {
              apr: {
                title: string
                apr: number
                userRewardTotal: number
                userRewardTotalUSD: number
                totalRewardsAmount: number
              }
            } :
              TEmptyObject

export type TMiningResponse = TMining<EMiningType> & { info: TMiningAdditionalInfo<EMiningType> }
