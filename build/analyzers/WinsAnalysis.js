"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const matchResult_1 = require("../utils/matchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] == this.team && match[5] == matchResult_1.matchResult.HomeWin) {
                wins++;
            }
            if (match[2] == this.team && match[5] == matchResult_1.matchResult.AwayWin) {
                wins++;
            }
        }
        return `${this.team} won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
