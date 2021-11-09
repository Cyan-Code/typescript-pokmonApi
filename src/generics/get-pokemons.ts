import axios from 'axios';
import { Pokemon } from '../interfaces/index';

export const getPokemon = async(pokemonId:number): Promise<Pokemon> => {
  const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/${ pokemonId }`)
  return data
}
