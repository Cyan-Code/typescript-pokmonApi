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

@bloquearPrototipo
@printConditionalShow( true )
export class Pokemon {
  public publicApi:string = 'https://pokeapi.co'
  constructor(
    public name:string
  ){}

  savePokemonToDB(id:number){
    console.log(`Pokemon guardado en DB ${id}`);
  }

}

