"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EDistributionType = exports.EStakingRewardsPeriod = exports.EStakingType = void 0;
var EStakingType;
(function (EStakingType) {
    EStakingType["PEER_2_POOL_POOLED"] = "PEER_2_POOL_POOLED";
    EStakingType["PEER_2_POOL_POOLED_V2"] = "PEER_2_POOL_POOLED_V2";
    EStakingType["STAKING_POOL"] = "STAKING_POOL";
    EStakingType["PEER_2_POOL_TRANCHES"] = "PEER_2_POOL_TRANCHES";
})(EStakingType = exports.EStakingType || (exports.EStakingType = {}));
var EStakingRewardsPeriod;
(function (EStakingRewardsPeriod) {
    EStakingRewardsPeriod["WEEKLY"] = "WEEKLY";
    EStakingRewardsPeriod["YEARLY"] = "YEARLY";
    EStakingRewardsPeriod["MONTHLY"] = "MONTHLY";
})(EStakingRewardsPeriod = exports.EStakingRewardsPeriod || (exports.EStakingRewardsPeriod = {}));
var EDistributionType;
(function (EDistributionType) {
    EDistributionType["DROPIUM"] = "DROPIUM";
    EDistributionType["OTHER"] = "OTHER";
})(EDistributionType = exports.EDistributionType || (exports.EDistributionType = {}));
