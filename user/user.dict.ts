import { RoutineDict } from '../routine/routine.dict';
import { AssignedAdminsDict } from './assigned-admins.dict';
import { CounsellingDict } from './counselling.dict';
import { SubscriptionDict } from './subscription.dict';

export interface UserDict {
  id: number;
  uid: string;
  name: string;
  email: string;
  phone: string;
  gender: 'male' | 'female';
  dob: string;
  country: string;
  subscription: SubscriptionDict;
  counselling: CounsellingDict;
  assignedAdmins: AssignedAdminsDict;
  customFields: { [key: string]: any };

  routineDicts?: RoutineDict[];
}
