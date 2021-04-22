enum Role{
    Standard ='Standard',
    Moderator = 'Moderator',
    Admin = 'Admin'
}
class User{
    name: string;
    surname: string;
    role: Role;

toString():string{
    return ` ${this.name} ${this.surname} ${this.role}`
}

}


function StandardAccess(constructorFn: Function):void{
    constructorFn.prototype.role= Role.Standard;
}
function ModeratorAccess(constructorFn: Function):void{
    constructorFn.prototype.role= Role.Moderator;
}
function AdminAccess(constructorFn: Function):void{
    constructorFn.prototype.role= Role.Admin;
}



@StandardAccess
class StandardUser extends User{

    constructor(name: string, surname:string){
        super();
        this.name = name;
        this.surname = surname;
    }
}

@ModeratorAccess
class ModeratorUser extends User{

    constructor(name: string, surname:string){
        super();
        this.name = name;
        this.surname = surname;
    }
}

@AdminAccess
class AdminUser extends User{

    constructor(name: string, surname:string){
        super();
        this.name = name;
        this.surname = surname;
    }
}

function watch(target: object, propKey: string, descriptor: PropertyDescriptor ){
    const originalFn= target[propKey];
    descriptor.value = function(param){
        console.log('User '+ param+ ' calls '+ propKey);
        return originalFn.call(this, param)
    }
    console.log("Someone called " + propKey + " method");
}

function forAdmin(target:object, propKey: string, descriptor: PropertyDescriptor){
    const originalFn= target[propKey];
    descriptor.value = function(param){
       if (param.role === Role.Admin) {
           console.log('Admin');
            return originalFn.call(this, param)
       }
    }
}

function forModerator(target:object, propKey: string, descriptor: PropertyDescriptor){
    const originalFn= target[propKey];
    descriptor.value = function(param){
       if (param.role === Role.Moderator) {
           
            return originalFn.call(this, param);
       }
       
    }
}

class Resource{
    private resourceValue: string;

    constructor(){
        this.resourceValue= 'secret value'
    }
    @forModerator
    public read(user: User):void{
          console.log('I see '+ this.resourceValue);
    }
    

    @forAdmin
    public modify(user: User): void{
            this.resourceValue = 'modified secret value';
            console.log('i see '+this.resourceValue);
        
    }
}





const user1 = new StandardUser("John", "Walker");
const user2 = new ModeratorUser("Adam", "Smith");
const user3 = new AdminUser("Andrew", "Jonhson");


const res = new Resource();

res.read(user1)
res.modify(user1)

res.read(user2)
res.modify(user2)

res.read(user3)
res.modify(user3)




// console.log(user1.toString());
// console.log(user2.toString());
// console.log(user3.toString());