import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import Login, { Signup } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerloggedIn=new BehaviorSubject<boolean>(false)
isLoginError=new EventEmitter<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }

  userSign(data:Signup){
    this.http.post("http://localhost:3000/seller",data,{observe:'response'}).subscribe((res:any)=>{
      this.isSellerloggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(res.body))
      this.router.navigate(['seller-home']); 
    });
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerloggedIn.next(true);
      this.router.navigate(['seller-home']);
     }
  }

  userLogin(data:Login){
    console.log(data)
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,{observe:'response'}).subscribe((res:any)=>{
     
    if(res && res.body && res.body.length){
      localStorage.setItem('seller',JSON.stringify(res.body))
      this.router.navigate(['seller-home']);
      console.log("login is passed")
     } 
   else{
    this.isLoginError.emit(true)
    console.log("Login is failed")
   }
    });
  }
}
