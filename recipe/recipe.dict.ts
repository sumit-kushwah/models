import { Macro } from './macro';

export interface RecipeDict {
  id: number;
  title: string;
  conditions: string[];
  calories: number;
  blogLink: string;
  groceryLinks: string[];
  macros: Macro[];
}
