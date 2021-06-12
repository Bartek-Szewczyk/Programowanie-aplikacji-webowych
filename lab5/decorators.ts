import { Role } from "./enum";

export function StandardAccess(constructorFn: Function):void{
    constructorFn.prototype.role= Role.Standard;
}
export function ModeratorAccess(constructorFn: Function):void{
    constructorFn.prototype.role= Role.Moderator;
}
export function AdminAccess(constructorFn: Function):void{
    constructorFn.prototype.role= Role.Admin;
}



export function watch(target: object, propKey: string, descriptor: PropertyDescriptor ){
    const originalFn= target[propKey];
    descriptor.value = function(param){
        console.log('User '+ param+ ' calls '+ propKey);
        return originalFn.call(this, param)
    }
    console.log("Someone called " + propKey + " method");
}

export function forAdmin(target:object, propKey: string, descriptor: PropertyDescriptor){
    const originalFn= target[propKey];
    descriptor.value = function(param){
       if (param.role === Role.Admin) {
           console.log('Admin');
             originalFn.call(this, param)
       }
    }
}

export function forModerator(target:object, propKey: string, descriptor: PropertyDescriptor){
    const originalFn= target[propKey];
    descriptor.value = function(param){
       if (param.role === Role.Moderator) {
           console.log('Moderator');
             originalFn.call(this, param);
       }
       
    }
}