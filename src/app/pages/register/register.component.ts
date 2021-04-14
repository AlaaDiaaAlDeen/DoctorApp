import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Router } from '@angular/router'
import { User } from 'src/app/interfaces/user.js';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg = ""
  resStatus:Boolean = false
  user:User = {
    fname:"",
    sname:"",
    email:"",
    password:"",
    phone:"",
    address:{country:"",city:""}
  }
  constructor(public _global:GlobalService, private _router:Router) {
    _global.navStatus = false
  }

  ngOnInit(): void {
  }

  handleRegister(register){
    if(register.valid){
      this._global.handleForm(this.user).subscribe(
        (res)=>{
          console.log(res)
          this.msg = ""
          this.resStatus = false
        },
        (error)=>{
          console.log(error.error.data)
          this.msg = error.error.data
          this.resStatus = true
        },
        ()=>{
          console.log('done')
          this._router.navigate(['shop'])
        }
      )
    }
  }
}
