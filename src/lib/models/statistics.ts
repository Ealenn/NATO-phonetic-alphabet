import type { Letter } from './letter';

export interface Statistics {
  Letter: LetterStatistics[];
  GlobalWin: number;
  GlobalLoose: number;
  GlobalPlayed: number;
}

export interface LetterStatistics {
  Letter: Letter;
  Played: number;
  Win: number;
  Loose: number;
}
