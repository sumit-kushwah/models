import { Macro } from 'src/recipes/models/macro';

export interface RecipeDict {
  id: number;
  title: string;
  conditions: string[];
  calories: number;
  blogLink: string;
  groceryLinks: string[];
  macros: Macro[];
}
