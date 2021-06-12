import { AdminAccess, ModeratorAccess, StandardAccess } from "./decorators";
import { Role } from "./enum";

export class User{
    name: string;
    surname: string;
    role: Role;

toString():string{
    return ` ${this.name} ${this.surname} ${this.role}`
}

}


@StandardAccess
export class StandardUser extends User{

    constructor(name: string, surname:string){
        super();
        this.name = name;
        this.surname = surname;
    }
}

@ModeratorAccess
export class ModeratorUser extends User{

    constructor(name: string, surname:string){
        super();
        this.name = name;
        this.surname = surname;
    }
}

@AdminAccess
export class AdminUser extends User{

    constructor(name: string, surname:string){
        super();
        this.name = name;
        this.surname = surname;
    }
}