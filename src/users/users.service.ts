import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {id: 0, name: 'John'},
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Felipe'}
    ];

    findAll(name?: string): User[]{
        if(name){
            return this.users.filter(user => user.name === name);
        }
        return this.users;
    }

    findById(userId:number): User{
        return this.users.find((user) => user.id === userId);
    }

    createUser(CreateUserDTO: CreateUserDTO): User{
        const newUser = {id: Date.now(), ...CreateUserDTO};

        this.users.push(newUser);
        return newUser;
    }
}
