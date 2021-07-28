import { UserDict } from '../user/user.dict';

export interface AdminDict {
  id: number;
  roles?: string[];
  isActive?: boolean;
  user?: UserDict;
  userId?: number;
}
