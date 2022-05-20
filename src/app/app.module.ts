import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokComponent } from './pok/pok.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import{HttpClientModule} from '@angular/common/http';
import { PokemonService } from './services/pokemon.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
