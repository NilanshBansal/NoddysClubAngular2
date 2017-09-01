import { Component } from '@angular/core';
import { FirebaseService } from "./services/firebase.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items;
  objects;
  constructor(private firebaseService:FirebaseService) { 
    this.items=this.firebaseService.items;
    this.objects=this.firebaseService.objects;
    console.log("see", this.items);
  }
  title = 'app';
}
