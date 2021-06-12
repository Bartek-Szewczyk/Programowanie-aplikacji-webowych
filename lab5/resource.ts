import { forModerator, forAdmin } from "./decorators";
import { User } from "./user";

export class Resource{
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