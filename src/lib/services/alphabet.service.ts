import type { Letter } from '../models/letter';
import random from 'random';

export class AlphabetService {
  private readonly _alphabet: Letter[] = [
    { Index: 'A', Title: 'Alfa' },
    { Index: 'B', Title: 'Bravo' },
    { Index: 'C', Title: 'Charlie' },
    { Index: 'D', Title: 'Delta' },
    { Index: 'E', Title: 'Echo' },
    { Index: 'F', Title: 'Foxtrot' },
    { Index: 'G', Title: 'Golf' },
    { Index: 'H', Title: 'Hotel' },
    { Index: 'I', Title: 'India' },
    { Index: 'J', Title: 'Juliett' },
    { Index: 'K', Title: 'Kilo' },
    { Index: 'L', Title: 'Lima' },
    { Index: 'M', Title: 'Mike' },
    { Index: 'N', Title: 'November' },
    { Index: 'O', Title: 'Oscar' },
    { Index: 'P', Title: 'Papa' },
    { Index: 'Q', Title: 'Quebec' },
    { Index: 'R', Title: 'Romeo' },
    { Index: 'S', Title: 'Sierra' },
    { Index: 'T', Title: 'Tango' },
    { Index: 'U', Title: 'Uniform' },
    { Index: 'V', Title: 'Victor' },
    { Index: 'W', Title: 'Whiskey' },
    { Index: 'X', Title: 'X-Ray' },
    { Index: 'Y', Title: 'Yankee' },
    { Index: 'Z', Title: 'Zulu' }
  ];
  private readonly _alphabetIndexRandom = random.uniformInt(0, this._alphabet.length - 1);

  public get(index: string): Letter {
    return this._alphabet.filter((x) => x.Index.toLowerCase() === index.toLowerCase())[0];
  }

  public getAll(): Letter[] {
    return this._alphabet;
  }

  public getRandom(): Letter {
    return this._alphabet[this._alphabetIndexRandom()];
  }
}
