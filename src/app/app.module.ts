import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CardHeaderComponent } from './compoents/card-compoent/card/card-header/card-header.component';
import { CardComponent } from './compoents/card-compoent/card/card.component';
import { CardContentComponent } from './compoents/card-compoent/card/card-content/card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderComponent,
    CardContentComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
