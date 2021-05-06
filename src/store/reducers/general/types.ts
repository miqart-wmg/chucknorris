interface IGeneralState {
  currentJoke: IJoke | null;
  favoriteJokes: IJoke[];
}

export interface IJoke {
  "id": string;
  "icon_url": string;
  "url" : string;
  "value": string;
}

export default IGeneralState;
