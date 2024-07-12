import { matchData } from '../utils/matchData';
import { matchResult } from '../utils/matchResult';

export class WinsAnalysis {
  constructor(public team: string) {}

  run(matches: matchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] == this.team && match[5] == matchResult.HomeWin) {
        wins++;
      }
      if (match[2] == this.team && match[5] == matchResult.AwayWin) {
        wins++;
      }
    }
    return `${this.team} won ${wins} games`;
  }
}
