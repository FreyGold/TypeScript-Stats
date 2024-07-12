import { match } from 'assert';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';

const Reader = new CsvFileReader('football.csv');

const matches = new MatchReader(Reader);

matches.load();

const summary = new Summary(new WinsAnalysis('Liverpool'), new ConsoleReport());

summary.buildAndPrintReport(matches.data);
