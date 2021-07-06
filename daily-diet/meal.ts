export interface Recipe {
  id: number | null;
  title: string;
}

export interface Meal {
  mealId: number;
  recipes: Recipe[];
}
