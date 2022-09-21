import { Role } from './Role';

export class Employer {
  id: number = 0;
  email: string = '';
  role: Role = new Role();
  first_name: string = '';
  last_name: string = '';
  phone_number: string = '';
  dni: number = 0;
  photo: string = '';
}
