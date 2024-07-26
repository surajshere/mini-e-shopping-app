import { Component } from '@angular/core';

@Component({  // this is decorator
  selector: 'app-root',
  templateUrl: './app.component.html',  // this is view template for AppComponent
  styleUrls: ['./app.component.css']   // this is array where we specify a path to several css files, applies to app.component.html file 
})
export class AppComponent {   // this is decorated with @Component decorator
  title = 'AngularApp';
}
