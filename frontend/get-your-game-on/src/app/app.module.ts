import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoryShellComponent } from './memory-shell/memory-shell.component';
import { MemoryCardComponent } from './memory-card/memory-card.component';
import { MemoryCorridorComponent } from './memory-corridor/memory-corridor.component';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoryShellComponent,
    MemoryCardComponent,
    MemoryCorridorComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
