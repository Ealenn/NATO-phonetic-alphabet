import type { Letter } from '$lib/models/letter';
import type { Statistics } from '$lib/models/statistics';
import type { AlphabetService } from './alphabet.service';

export class StatisticService {
  private _statistics: Statistics;

  constructor(private readonly alphabetService: AlphabetService) {
    this._statistics = this.reset();
  }

  public getAlphabetStatistics(): Statistics {
    return this._statistics;
  }

  public reset(): Statistics {
    this._statistics = {
      GlobalLoose: 0,
      GlobalPlayed: 0,
      GlobalWin: 0,
      Letter: this.alphabetService.getAll().map((letter) => ({
        Letter: letter,
        Played: 0,
        Win: 0,
        Loose: 0
      }))
    };

    return this.getAlphabetStatistics();
  }

  public win(letter: Letter): Statistics {
    this._statistics.GlobalPlayed++;
    this._statistics.GlobalWin++;

    const elementIndex = this._statistics.Letter.findIndex(
      (letterStatistic) => letterStatistic.Letter.Index === letter.Index
    );
    if (elementIndex >= 0) {
      this._statistics.Letter[elementIndex].Played++;
      this._statistics.Letter[elementIndex].Win++;
    }

    return this.getAlphabetStatistics();
  }

  public loose(letter: Letter): Statistics {
    this._statistics.GlobalPlayed++;
    this._statistics.GlobalLoose++;

    const elementIndex = this._statistics.Letter.findIndex(
      (letterStatistic) => letterStatistic.Letter.Index === letter.Index
    );
    if (elementIndex >= 0) {
      this._statistics.Letter[elementIndex].Played++;
      this._statistics.Letter[elementIndex].Loose++;
    }

    return this.getAlphabetStatistics();
  }
}
