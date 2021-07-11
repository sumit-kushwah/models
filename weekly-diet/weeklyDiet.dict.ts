import { Note } from '../daily-diet/note';
import { DailyDiet } from './dailyDiet';

export interface WeeklyDietDict {
  id: number;
  name?: string;
  conditions?: string[];
  dietPreference?: string;
  firstMajorFood?: string;
  secondMajorFood?: string;
  target?: string;
  portionSize?: string;
  residenceType?: string;
  mainNote?: Note;
  submitter?: { name: string; id: number };
  approver?: { name: string; id: number };
  status?: 'pending' | 'approved' | 'review';
  dailyDiets?: DailyDiet[];
  notes?: Note[];
}
