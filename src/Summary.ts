import { matchData } from './utils/matchData';

interface Analyzer {
  run(matches: matchData[]): string;
}

interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget
  ) {}
  buildAndPrintReport(matches: matchData[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
