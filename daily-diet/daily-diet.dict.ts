import { Meal } from './meal';
import { Note } from './note';

export interface DailyDietDict {
  id: number;
  name?: string;
  submitter?: { name: string; id: number };
  approver?: { name: string; id: number };
  status?: 'pending' | 'approved';
  meals?: Meal[];
  notes?: Note[];
}
