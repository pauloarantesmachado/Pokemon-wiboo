import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pokemon } from './pokemon.model';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient){
     }

async carregarPokemons(): Promise<any>
{
  return await this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();
}

  
  
  async carregartype(pokemonName: string): Promise<Pokemon | undefined>
  {
    return await this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).toPromise();
  }

  
}
