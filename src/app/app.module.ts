import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { TataNexonComponent } from './tata-nexon/tata-nexon.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MatTabsModule} from '@angular/material/tabs';
import{MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatIconModule} from '@angular/material/icon';
import{MatInputModule} from '@angular/material/input';
import{HttpClientModule} from '@angular/common/http';
import { AutocompleteComponent } from './autocomplete/autocomplete.component'
import { InputFieldService } from './input-field.service';
import { CusDetailsService } from './input-field/cus-details.service';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    TataNexonComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatAutocompleteModule,
    FormsModule,ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,MatInputModule,
    HttpClientModule,

  ],
  providers: [InputFieldService,CusDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
