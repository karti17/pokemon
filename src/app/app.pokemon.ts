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
    templateUrl: './app.pokemon.html',
    styles: ['']
})


export class Pokemon implements OnInit {
    
    public title = 'Pokemon Listing';   
    public exp: any = {todos:[], newlist:10, sort:''};
    public srchtxt;
    length = 10000;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
  
    // MatPaginator Output
    pageEvent: PageEvent;

    constructor(private http: HttpClient, private router: Router, private activeroute: ActivatedRoute, private spinner: NgxSpinnerService) {
        this.title = 'Todo Listing';
    }

    savesearch(){
        sessionStorage.setItem('search', this.srchtxt);
        sessionStorage.setItem('sort', this.exp.sort);
        this.srchtxt = sessionStorage.getItem('search');
        this.exp.sort = sessionStorage.getItem('sort');

    }

    sortpokemon(){
        console.log(this.exp.sort);
        this.exp.todos =_.sortBy(this.exp.todos, this.exp.sort);

        sessionStorage.setItem('search', this.srchtxt);
        sessionStorage.setItem('sort', this.exp.sort);
        this.srchtxt = sessionStorage.getItem('search');
        this.exp.sort = sessionStorage.getItem('sort');
    }

    getServerData(e){
        console.log(e.pageIndex)
        
        this.exp.todos = [];
        this.exp.offset = e.pageIndex;
        this.exp.newlist = e.pageSize;
        this.getTodos();
    }

    
  
    getTodos(){
       
        /*P.resource([           
            "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0",
          ]).then( response => {
            console.log(response)
        })

        P.getPokemonByName("eevee").then(function(response) {
            console.log(response)
        })
        */
         
        const interval = {
            offset: this.exp.offset ==0 ? 0 : this.exp.offset *  this.exp.newlist,
            limit: this.exp.newlist,
        }
        var context =  {'todos': this.exp.todos};
        P.getPokemonsList(interval).then(function(response) {
            console.log(response.results.length);
            _.map(response.results, function(num){
                //context.todos.push({'name': num.name});
                P.getPokemonByName(num.name).then(function(response) {
                    //console.log(response.sprites.other['official-artwork'].front_default);
                    context.todos.push({'name': num.name, 'abilities': response.abilities, 'height': response.height, 'weight': response.weight, 'img': response.sprites.other['official-artwork'].front_default})
                })
               
            }, context);
            
        });
        

        

		
	}    

    ngOnInit() {
        this.srchtxt = sessionStorage.getItem('search');
        this.exp.sort = sessionStorage.getItem('sort');
        this.getTodos();
    }

    deleteTask(CaseId) {
        if (confirm("Do you really want to delete?")) {
            this.http.get('/todo/delete?id=' + CaseId).subscribe(
                (data: any[]) => {      
					this.ngOnInit()
                }
            );
        } else {

        }
    }	   
}