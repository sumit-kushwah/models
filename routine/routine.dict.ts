import { ExerciseDict } from '../exercise/exercise.dict';
import { MindDict } from '../mind/mind.dict';
import { RecipeDict } from '../recipe/recipe.dict';

interface MealItem {
  time: string;
  mealTaken: boolean;
  recipeDicts: RecipeDict[];
}

interface MindItem {
  time: string;
  mindDicts: MindDict[];
}

interface ExerciseItem {
  time: string;
  exerciseDicts: ExerciseDict[];
}

export interface RoutineDict {
  id: number;
  date: string;
  userId: number;
  mealItems: MealItem[];
  mindItems: MindItem[];
  exerciseItems: ExerciseItem[];
}
