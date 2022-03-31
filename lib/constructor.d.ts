export declare type TSyntheticId = {
    id: string;
    title: string;
    ticker: string;
    address: string;
    authorFee: number;
    authorAddress: string;
    show: boolean;
};
export declare type TOracleId = {
    id: string;
    title: string;
    ticker: string;
    underlyingAsset: string;
    referenceAsset: string;
    address: string;
    show: boolean;
    underlyingImage: string;
    referenceImage: string;
};
export declare type TToken = {
    id: string;
    title: string;
    decimals: number;
    address: string;
    image: string;
};
export declare type TConstructorDB = {
    syntheticIds: TSyntheticId[];
    oracleIds: TOracleId[];
    tokens: TToken[];
};
