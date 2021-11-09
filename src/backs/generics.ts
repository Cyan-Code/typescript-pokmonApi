import { printObject, genericFunctionArrow } from '../generics/generics';
import { Hero, Villan } from '../interfaces';


const deadpool:Hero = {
  name: 'DeadPool',
  realName: 'Wade Wiston Wilson'
}


console.log(genericFunctionArrow<Hero>(deadpool).realName);
