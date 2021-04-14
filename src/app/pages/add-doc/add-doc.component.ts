import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/interfaces/doctor';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-add-doc',
  templateUrl: './add-doc.component.html',
  // styleUrls: ['./add-doc.component.css']
})
export class AddDocComponent implements OnInit {
  doctor:Doctor = {
    name:"",
    specialize:"",
    address:"",
    phone:"",
    whatsapp:"",
    education:[
        {name:"", year:""}
    ]
  }
  
  msg = ""
  resStatus:Boolean = false

  constructor(public _global:GlobalService, private _router:Router) { }

  ngOnInit(): void {
  }

  docFormHandler(form){
    if(form.valid){
      this._global.addDoctor(this.doctor).subscribe(
        (res)=>{
          this.msg = ""
          this.resStatus = false
        },
        (error)=>{
          console.log(error)
          this.msg = error.error
          this.resStatus = true
        },
        ()=>{
          console.log('done')
          this._router.navigate(['alldocs'])
        }
      )
    }
  }

}
