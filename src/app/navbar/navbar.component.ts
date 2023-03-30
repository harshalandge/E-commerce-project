import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userType:string='default';
  sellerName:string='';
  constructor(private route:Router){}
  
  ngOnInit(): void {
    this.route.events.subscribe((res:any)=>{
      if(res.url){
        if(localStorage.getItem('seller')&& res.url.includes('seller')){
          this.userType='seller'
          if(localStorage.getItem('seller')){
            let sellerStore=localStorage.getItem('seller')
            let sellerData=sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName=sellerData.name;
          }
        }
        else {this.userType='default'}
      }
    })
  }

logOut(){
  localStorage.removeItem('seller')
  this.route.navigate([''])
}
}
