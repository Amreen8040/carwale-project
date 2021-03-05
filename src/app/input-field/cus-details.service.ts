import { Injectable } from '@angular/core';


export type User = {
  id: number;
  name: string;
  ph_no: number;
  Email: string;
};

@Injectable()
export class CusDetailsService {
  public users: User[] = [{ id: 1, name: "Amreen", ph_no: 9590901354,Email: "amreen.8040@gmail.com" }];
  public count = 2;

  public addUser(user: User) {
      this.users.push({...user, id: this.count++});
    }

  constructor() { }
}
