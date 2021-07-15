"use strict";
/** PEER_2_POOL */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EProductAvgCostFrequency = exports.EProductType = exports.EPeer2PoolInsuranceProductParamsSubtype = void 0;
// INSURANCE
var EPeer2PoolInsuranceProductParamsSubtype;
(function (EPeer2PoolInsuranceProductParamsSubtype) {
    EPeer2PoolInsuranceProductParamsSubtype["STABLECOIN"] = "STABLECOIN";
    EPeer2PoolInsuranceProductParamsSubtype["SMART_CONTRACT"] = "SMART_CONTRACT";
    EPeer2PoolInsuranceProductParamsSubtype["OPTION_CALL"] = "OPTION_CALL";
    EPeer2PoolInsuranceProductParamsSubtype["BOND"] = "BOND";
    EPeer2PoolInsuranceProductParamsSubtype["OPTION_CALL_REAL"] = "OPTION_CALL_REAL";
    EPeer2PoolInsuranceProductParamsSubtype["OPTION_PUT_REAL"] = "OPTION_PUT_REAL";
    EPeer2PoolInsuranceProductParamsSubtype["SINGLE_EPOCH"] = "SINGLE_EPOCH";
})(EPeer2PoolInsuranceProductParamsSubtype = exports.EPeer2PoolInsuranceProductParamsSubtype || (exports.EPeer2PoolInsuranceProductParamsSubtype = {}));
/** GENERAL */
var EProductType;
(function (EProductType) {
    EProductType["PEER_2_POOL_INSURANCE"] = "PEER_2_POOL_INSURANCE";
    EProductType["PEER_2_POOL_INSURANCE_V2"] = "PEER_2_POOL_INSURANCE_V2";
    EProductType["PEER_2_POOL_COMPOUND_FIXED_RATE"] = "PEER_2_POOL_COMPOUND_FIXED_RATE";
    EProductType["STAKING_POOL"] = "STAKING_POOL";
    EProductType["GOVERNANCE_WRAPPER"] = "GOVERNANCE_WRAPPER";
})(EProductType = exports.EProductType || (exports.EProductType = {}));
var EProductAvgCostFrequency;
(function (EProductAvgCostFrequency) {
    EProductAvgCostFrequency["MONTHLY"] = "MONTHLY";
    EProductAvgCostFrequency["WEEKLY"] = "WEEKLY";
    EProductAvgCostFrequency["ANNUAL"] = "ANNUAL";
    EProductAvgCostFrequency["DAILY"] = "DAILY";
    EProductAvgCostFrequency["SINGLE_EPOCH"] = "SINGLE_EPOCH";
    EProductAvgCostFrequency["PER_3_DAYS"] = "PER_3_DAYS";
})(EProductAvgCostFrequency = exports.EProductAvgCostFrequency || (exports.EProductAvgCostFrequency = {}));
