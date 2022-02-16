export declare type TSyntheticId = {
    id: string;
    title: string;
    ticker: string;
    address: string;
    authorFee: number;
    show: boolean;
};
export declare type TOracleId = {
    id: string;
    title: string;
    ticker: string;
    address: string;
    show: boolean;
};
export declare type TToken = {
    id: string;
    title: string;
    decimals: number;
    address: string;
};
export declare type TConstructorDB = {
    syntheticIds: TSyntheticId[];
    oracleIds: TOracleId[];
    tokens: TToken[];
};