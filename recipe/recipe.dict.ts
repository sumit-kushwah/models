import { GroceryDict } from '../grocery/grocery.dict';
import { Macro } from './macro';

export interface RecipeDict {
  id: number;
  title?: string;
  conditions?: string[];
  calories?: number;
  blogLink?: string;
  groceries?: GroceryDict[];
  macros?: Macro[];
}
