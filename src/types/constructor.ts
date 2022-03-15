export type TSyntheticId = {
  id: string
  title: string
  ticker: string
  address: string
  authorFee: number
  authorAddress: string
  show: boolean
}

export type TOracleId = {
  id: string
  title: string
  ticker: string
  underlyingAsset: string
  referenceAsset: string
  address: string
  show: boolean
}

export type TToken = {
  id: string
  title: string
  decimals: number
  address: string
  image: string
}

export type TConstructorDB = {
  syntheticIds: TSyntheticId[]
  oracleIds: TOracleId[]
  tokens: TToken[]
}
