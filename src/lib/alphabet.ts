import type { Letter } from './models/letter';

export class AlphabetService {
  private _alphabet: Letter[] = [
    { index: 'A', title: 'Alfa' },
    { index: 'B', title: 'Bravo' },
    { index: 'C', title: 'Charlie' },
    { index: 'D', title: 'Delta' },
    { index: 'E', title: 'Echo' },
    { index: 'F', title: 'Foxtrot' },
    { index: 'G', title: 'Golf' },
    { index: 'H', title: 'Hotel' },
    { index: 'I', title: 'India' },
    { index: 'J', title: 'Juliett' },
    { index: 'K', title: 'Kilo' },
    { index: 'L', title: 'Lima' },
    { index: 'M', title: 'Mike' },
    { index: 'N', title: 'November' },
    { index: 'O', title: 'Oscar' },
    { index: 'P', title: 'Papa' },
    { index: 'Q', title: 'Quebec' },
    { index: 'R', title: 'Romeo' },
    { index: 'S', title: 'Sierra' },
    { index: 'T', title: 'Tango' },
    { index: 'U', title: 'Uniform' },
    { index: 'V', title: 'Victor' },
    { index: 'W', title: 'Whiskey' },
    { index: 'X', title: 'X-Ray' },
    { index: 'Y', title: 'Yankee' },
    { index: 'Z', title: 'Zulu' }
  ];

  public get(index: string): Letter {
    return this._alphabet.filter((x) => x.index.toLowerCase() === index.toLowerCase())[0];
  }

  public getAll(): Letter[] {
    return this._alphabet;
  }

  public getRandom(): Letter {
    return this._alphabet[Math.floor(Math.random() * this._alphabet.length)];
  }
}
