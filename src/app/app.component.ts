import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl;
  url;
  userName:string = "";

  ngOnInit():void{
    this.title="Hello from Bridgelabz. ";
    this.imgUrl="../assets/BridgeLabzlogo.jpg";
    this.url="https://www.bridgelabz.com/";
  }

  onClick($event){
    console.log(" logo is clincked ",$event);
    window.open(this.url, "_blank")
  }
}
