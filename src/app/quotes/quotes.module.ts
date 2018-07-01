import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuotesComponent } from './quotes.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    QuotesComponent,
    QuoteItemComponent
  ]
})
export class QuotesModule { }
