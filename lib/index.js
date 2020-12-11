"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
const download_1 = require("./download");
class ccw {
}
ccw.prototype.addPercent = math_1.addPercent;
ccw.prototype.delPercent = math_1.delPercent;
ccw.prototype.addThousand = math_1.addThousand;
ccw.prototype.deleteThousand = math_1.deleteThousand;
ccw.prototype.money = math_1.money;
ccw.prototype.NumberRound = math_1.NumberRound;
//
ccw.prototype.download = download_1.download;
ccw.prototype.downloadFile = download_1.downloadFile;
const $ccw = new ccw();
exports.default = $ccw;
