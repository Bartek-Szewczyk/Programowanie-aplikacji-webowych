export function disable(constructorFn: Function):void{
   constructorFn.prototype.disable=true;
}

export function log(target: any, propKey: string, descriptor: PropertyDescriptor){
   const originalFn = target[propKey];
   descriptor.value = function(param: any){
      console.log('uruchomienie '+ propKey)
      return originalFn.call(this, param)
   }
}