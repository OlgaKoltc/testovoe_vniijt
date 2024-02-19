export interface ITrain {
  index?: number;
  name: string;
  description: string;
  characteristics: Array<ICharacteristic>;
}

export interface ICharacteristic {
  speed: number;
  force: number;
  engineAmperage: number;
}
