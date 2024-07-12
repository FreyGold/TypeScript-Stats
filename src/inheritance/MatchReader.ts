import { CsvFileReader } from './CsvFileReader';
import { matchResult } from '../utils/matchResult';
import { dateStringToDate } from '../utils/utils';

type matchData = [Date, string, string, number, number, matchResult, string];

export class MatchReader extends CsvFileReader<matchData> {
  constructor(fileName: string) {
    super(fileName);
  }
  mapMatch(row: string[]): matchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as matchResult,
      row[6],
    ];
  }
}
