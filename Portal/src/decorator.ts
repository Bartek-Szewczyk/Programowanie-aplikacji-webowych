export function disable(constructorFn: Function):void{
   constructorFn.prototype.constructor.disable=true
}