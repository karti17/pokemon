import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { bootstrap } from 'bootstrap';
import { AppComponent } from './app.apptcomponent';

import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';




import { FilterPipe } from './filter.pipe';
import { NgbdDatepickerPopup } from './datepicker-popup';
import { NgbdTimepickerBasic } from './timepicker-basic';
//import { DataService } from "./data.service";


import { NgxSpinnerModule } from 'ngx-spinner';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material';

import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
//import { ExcelService } from './excel.service';
import {MatPaginatorModule} from '@angular/material/paginator';

import { Pokemon } from './app.pokemon';
import { PokemonDetail } from './app.pokemondetail';




import { MatSortModule } from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },  
	{ path: 'todos', component: Pokemon },
  { path: 'pokemondetail', component: PokemonDetail },
  { path: 'pokemondetail/:name', component: PokemonDetail },
];

@NgModule({
    declarations: [AppComponent, FilterPipe, NgbdDatepickerPopup, NgbdTimepickerBasic, Pokemon, PokemonDetail ], 
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, RouterModule.forRoot(routes, { enableTracing: false, useHash: true }), CommonModule, FormsModule, NgbModule,
     
        NgxSpinnerModule,
        MatPaginatorModule,
        Ng2SearchPipeModule,
        AngularMultiSelectModule,
        MatDialogModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
		MatCheckboxModule, MatSortModule,MatSidenavModule
    ],
    //entryComponents: [DialogContent],
    exports: [RouterModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatCheckboxModule], 
    //providers: [ ExcelService],
    bootstrap: [AppComponent]
})
export class AppModule { }
