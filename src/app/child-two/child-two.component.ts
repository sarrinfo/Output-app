import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  adresse = new FormGroup({
    rue: new FormControl('', Validators.required),
    ville: new FormControl('', Validators.required),
    pays: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

}
