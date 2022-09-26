import { TMining, EMiningType } from './mining'
import { TProduct, EProductType } from './product'
import { TStaking } from './staking'
import { TConstructorDB } from './constructor'
import { Pool } from './poolsV2'

export type TMiningList = Array<{
  account: string
  amount: number
}>

export type TLocalDB = {
  miningLists: {[id: string]: TMiningList}
  minings: TMining<EMiningType>[]
  products: TProduct<EProductType>[]
  stakings: TStaking[]
  constructor: TConstructorDB
  poolsV2: Pool[]
}
