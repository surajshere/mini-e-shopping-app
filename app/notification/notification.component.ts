import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  displayNotification: boolean= false; //this event is false so item is not hidden
 
  closeNotification(){  //when this function calls then click event happens and display notification will be true
    this.displayNotification= true;
  }
 
  // msg:string="";
  // OnAddCart(event:any){
  //   this.msg=event.target.value + "added to cart"

  // }
   
  //  onInputClick(event:any){
  //   console.log(event.target.value)
  //  }
  
}
