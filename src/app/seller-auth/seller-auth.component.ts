import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from 'src/data-type';
import { SellerService } from '../services/seller.service';

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

   constructor(private seller:SellerService,private router:Router){

   }

ngOnInit():void{
  this.seller.reloadSeller()
}
  
userSign(data:Signup){
this.seller.userSign(this.harsha.value)
}

openLogin(){
  this.showLogin=true
}
openSignup(){
  this.showLogin=false
}

loginSeller(){
  this.seller.userLogin(this.harshu.value)
}
}
