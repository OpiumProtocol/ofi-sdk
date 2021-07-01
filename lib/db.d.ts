import { TMining, EMiningType } from './mining';
import { TProduct, EProductType } from './product';
import { TStaking } from './staking';
export declare type TMiningList = Array<{
    account: string;
    amount: number;
}>;
export declare type TLocalDB = {
    miningLists: {
        [id: string]: TMiningList;
    };
    minings: TMining<EMiningType>[];
    products: TProduct<EProductType>[];
    stakings: TStaking[];
};
