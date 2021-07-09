import { ExerciseDict } from '../exercise/exercise.dict';
import { MindDict } from '../mind/mind.dict';
import { RecipeDict } from '../recipe/recipe.dict';

export interface MealItem {
  time: string;
  mealTaken: boolean;
  recipeDicts: RecipeDict[];
}

export interface MindItem {
  time: string;
  mindDicts: MindDict[];
}

export interface ExerciseItem {
  time: string;
  exerciseDicts: ExerciseDict[];
}

export interface RoutineDict {
  id: number;
  date?: string;
  userId?: number;
  meals?: MealItem[];
  minds?: MindItem[];
  exercises?: ExerciseItem[];
}
