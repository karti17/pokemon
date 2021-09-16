import { Component, OnInit, Inject, Directive, ElementRef, Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';
//import {Pokedex} from 'pokeapi-js-wrapper'

const Pokedex = <any>require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()
import {PageEvent} from '@angular/material/paginator';

@Component({
    selector: 'app-root',
    templateUrl: './app.pokemondetail.html',
    styles: ['']
})


export class PokemonDetail implements OnInit {
    
    public title = 'Pokemon Detail';   
    public exp: any = {todos:[], name:''};   
  
    // MatPaginator Output
    pageEvent: PageEvent;

    constructor(private http: HttpClient, private router: Router, private activeroute: ActivatedRoute, private spinner: NgxSpinnerService) {
        this.title = 'Todo Listing';
    }

    getTodos(){       
        var context =  {'todos': this.exp.todos};
       
        P.getPokemonByName(this.exp.name).then(function(response) {
            
            context.todos.push(response);
            console.log(context.todos);
            //context.todos.push({'name': this.exp.name, 'abilities': response.abilities, 'height': response.height, 'weight': response.weight, 'img': response.sprites.other['official-artwork'].front_default})
        }, context);
        
	}    

    ngOnInit() {
        
        this.activeroute.params.subscribe(
            params => {
              this.exp.name = params['name'];
              this.getTodos()
            }
        );
    }

    
}