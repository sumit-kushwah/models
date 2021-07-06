import { Meal } from '../daily-diet/meal';

export interface DailyDiet {
  weekDay: number;
  meals: Meal[];
}
