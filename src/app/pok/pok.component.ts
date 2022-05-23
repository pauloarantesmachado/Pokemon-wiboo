import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonName } from '../services/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pok',
  templateUrl: './pok.component.html',
  styleUrls: ['./pok.component.css'],
})
export class PokComponent implements OnInit {
  public pokemon: Pokemon | undefined = undefined;

  public pokemons: Array<PokemonName> | undefined = undefined;

  public pesquisa: Array<PokemonName> = [];

  public search: string = '';

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.carregarPokemons().subscribe((pok) => {
      this.pokemons = pok.results;
      this.pesquisa = pok.results;
    });
  }

  public loadType(pokemon: any): void {
    this.pokemonService
      .carregartype(pokemon)
      .subscribe((value) => (this.pokemon = value));
  }

  public getSearch(input: any): void {
    this.pesquisa =
      this.pokemons?.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.search.toLocaleLowerCase());
      }) || this.pokemons!;
  }
}
