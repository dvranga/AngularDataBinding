import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl;

  ngOnInit():void{
    this.title="Hello from Ranganath Vatti. ";
    this.imgUrl="../assets/BridgeLabzlogo.jpg";
  }
}
