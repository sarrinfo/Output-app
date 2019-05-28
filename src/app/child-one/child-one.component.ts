import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';




@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {


  identifiant = new FormGroup({
    first: new FormControl('', Validators.required),
    last: new FormControl('', Validators.required)
  });

  ngOnInit(): void {

  }

  constructor() { }

}
