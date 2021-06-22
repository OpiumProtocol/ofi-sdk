"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERewardsStatus = exports.EMiningStatus = exports.EExternalLinks = exports.EMiningFrequency = exports.EMiningType = void 0;
var EMiningType;
(function (EMiningType) {
    EMiningType["DROPIUM_V1"] = "DROPIUM_V1";
    EMiningType["ONEINCH_FARMING_V1"] = "ONEINCH_FARMING_V1";
    EMiningType["ONEINCH_FARMING_V1_EXTENDED"] = "ONEINCH_FARMING_V1_EXTENDED";
    EMiningType["ONEINCH_OPIUM_LP_FARMING"] = "ONEINCH_OPIUM_LP_FARMING";
    EMiningType["UNIPOOL_LP_V1"] = "UNIPOOL_LP_V1";
})(EMiningType = exports.EMiningType || (exports.EMiningType = {}));
var EMiningFrequency;
(function (EMiningFrequency) {
    EMiningFrequency["WEEKLY"] = "WEEKLY";
    EMiningFrequency["MONTHLY"] = "MONTHLY";
})(EMiningFrequency = exports.EMiningFrequency || (exports.EMiningFrequency = {}));
var EExternalLinks;
(function (EExternalLinks) {
    EExternalLinks["READ_MORE_EXTERNAL"] = "READ_MORE_EXTERNAL";
    EExternalLinks["READ_MORE_INTERNAL"] = "READ_MORE_INTERNAL";
    EExternalLinks["WATCH_MORE_EXTERNAL"] = "WATCH_MORE_EXTERNAL";
    EExternalLinks["STAKE_HERE_EXTERNAL"] = "STAKE_HERE_EXTERNAL";
    EExternalLinks["REWARDS_HERE_EXTERNAL"] = "REWARDS_HERE_EXTERNAL";
    EExternalLinks["PROPOSAL_HERE_EXTERNAL"] = "PROPOSAL_HERE_EXTERNAL";
})(EExternalLinks = exports.EExternalLinks || (exports.EExternalLinks = {}));
var EMiningStatus;
(function (EMiningStatus) {
    EMiningStatus["COMING_SOON"] = "COMING_SOON";
    EMiningStatus["ONGOING"] = "ONGOING";
    EMiningStatus["ENDED"] = "ENDED";
})(EMiningStatus = exports.EMiningStatus || (exports.EMiningStatus = {}));
var ERewardsStatus;
(function (ERewardsStatus) {
    ERewardsStatus["COMING_SOON"] = "COMING_SOON";
    ERewardsStatus["CLAIMABLE"] = "CLAIMABLE";
    ERewardsStatus["ENDED"] = "ENDED";
})(ERewardsStatus = exports.ERewardsStatus || (exports.ERewardsStatus = {}));
