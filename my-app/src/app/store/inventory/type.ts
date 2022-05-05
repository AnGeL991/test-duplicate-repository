export enum SizeType {
  sg = '100g',
  lg = '200g',
  xlg = '300g',
  xxlg = '400g',
  small = '50ml',
  medium = '200ml',
  large = '500ml',
  wine = '175ml',
}
export enum BakingType {
  medium = 'medium',
  rare = 'rare',
  wellDone = 'well-done',
}

export type DishTypes =
  | 'steaksChops'
  | 'Soupe'
  | 'Starters'
  | 'Sides'
  | 'OnIce'
  | 'mains'
  | 'salads'
  | 'desserts'
  | 'whiteWines'
  | 'redWines'
  | 'bourborn';

export type StatusType = 'in Prepare' | 'done' | 'delivered';

export enum ErrorMessageType {
  UploadMessage = '',
}

export interface DishType {
  id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string[];
  type: DishTypes;
  baking?: BakingType;
  size?: SizeType;
  description?: string;
  amount: number;
  status: StatusType;
}

export interface InventoryState {
  inventory: {
    [key: string]: DishType[] | [];
  };
  loading: boolean;
  error: any;
}
