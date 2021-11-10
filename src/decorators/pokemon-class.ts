function printToConsole(constructor:Function) {
  console.log(constructor);
}

const printConditionalShow = (print:boolean):Function => {
  if (print) { return printToConsole }
    else { return () => {} }
}

const bloquearPrototipo = function (constructor:Function) {
  Object.seal( constructor )
  Object.seal( constructor.prototype )
}

function CheckValidPokemonId():Function{
  return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    descriptor.value = (id:number) => {
      if (id<1 || id>800) {
        return console.log('Id del pokemon no valido')
      } else {
        return originalMethod(id)
      }
    }
  }
}

function readOnly(isRead:boolean):Function {
  return function(target:any, propertyKey:string){
    const descriptor:PropertyDescriptor = {
      get(){
        return 'Hola'
      },
      set(this, val){
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isRead,
          enumerable: false
        })
      }
    }
  }
}

@bloquearPrototipo
@printConditionalShow( false )
export class Pokemon {
  @readOnly(false)
  public publicApi:string = 'https://pokeapi.co'
  constructor(
    public name:string
  ){}

  @CheckValidPokemonId()
  savePokemonToDB(id:number){
    console.log(`Pokemon guardado en DB ${id}`);
  }

}

