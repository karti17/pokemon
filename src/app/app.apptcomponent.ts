import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: 'app.apptcomponent.html',
  //styleUrls: ['app.apptcomponent.less']
})

export class AppComponent implements OnInit {
  public title = 'Todo Lists';
 

  constructor(private http: HttpClient, private router: Router, private activeroute: ActivatedRoute, private spinner: NgxSpinnerService) {
    
  }

  
  

  
 
  ngOnInit() {	  

  }
  
}