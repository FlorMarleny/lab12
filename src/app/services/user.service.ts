import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    new User(0, 'Marleny', 'Rodriguez', 'marleny@gmail.com'),
    new User(1, 'Pedro', 'Valverde', 'pedro@gmail.com'),
    new User(2, 'Victoria', 'Sanchez', 'victoria@gmail.com'),
    new User(3, 'Patricia', 'Jimenez', 'patricia@gmail.com'),
    new User(4, 'Emily', 'Garcia', 'emily@hotmail.com'),
    new User(5, 'Jordy', 'Gutierrez', 'jordy@gmail.com'),
    new User(6, 'Jazmin', 'Vargas', 'jazmin@hotmail.com'),
  ]

  getUsers = () => this.users
  getUser = (idUser: number) => this.users.find(user => user.id === idUser);
} 

export class User {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public email: string,
  ) {}
}
