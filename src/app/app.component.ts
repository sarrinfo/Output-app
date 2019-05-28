import { Component, ViewChild, OnInit  } from '@angular/core';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(ChildOneComponent) childOneComponent: ChildOneComponent;
  @ViewChild(ChildTwoComponent) childTwoComponent: ChildTwoComponent;

   estValid: boolean ;

   ngOnInit(): void {
    this.estValid = false;
    this.childOneComponent.identifiant.statusChanges.subscribe(e => this.submitlClicked());
    this.childTwoComponent.adresse.statusChanges.subscribe(e => this.submitlClicked());
  }


  submitlClicked() {
    if (this.childOneComponent.identifiant.valid
        && this.childTwoComponent.adresse.valid ) {
        // do something
        this.estValid = true;
      } else {
        // throw error
        this.estValid = false;
        console.log(this.childOneComponent.identifiant.valid);
    }
  }
}
