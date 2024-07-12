import { dateStringToDate } from './utils/utils';
import { matchResult } from './utils/matchResult';
import { matchData } from './utils/matchData';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  data: matchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.data = this.reader.data.map((row: string[]): matchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as matchResult,
        row[6],
      ];
    });
  }
}
