export function disable(constructorFn: Function):void{
   constructorFn.prototype.disable=true;
}