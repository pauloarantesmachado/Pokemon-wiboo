import { Component, Input} from '@angular/core';
import { Pokemon, PokemonName } from '../services/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input()
  pokemon: PokemonName | undefined;

  
  @Input()
  numero: number=0;

  pegarImagemPokemon(){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon?.url.split('/')[6]}.png`;
  
  }
 leadingZero(str:string | number, size=3):string {
   let s =String(str);
    
   while(s.length<(size||2)){
     s='0'+ s;
   }
   return s;
 }
  
}
