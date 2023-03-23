import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  showLogin=false

 harsha:FormGroup=new FormGroup({
   'name':new FormControl(''),
   'password':new FormControl(''),
   'email':new FormControl(''),
  })


  harshu:FormGroup=new FormGroup({
    'password':new FormControl(''),
    'email':new FormControl(''),
   })

   constructor(){

   }

// ngOnInit():void{
//   this.seller.reloadseller()
// }
  
// userSign(data:SignUp){

// }

openLogin(){
  this.showLogin=true
}
openSignup(){
  this.showLogin=false
}
}
