import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/interfaces/doctor';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-doc',
  templateUrl: './single-doc.component.html',
  // styleUrls: ['./single-doc.component.css']
})
export class SingleDocComponent implements OnInit {

  // doctor:Doctor = {
  //   name:"",
  //   specialize:"",
  //   address:"",
  //   phone:"",
  //   whatsapp:"",
  //   education:[
  //       {name:"", year:""}
  //   ]
  // }

  doctor
  constructor(public _global:GlobalService, private route:ActivatedRoute) { 
    this.getDoctor()
  }

  ngOnInit(): void {
  }
loading:boolean=true
  getDoctor(){
    let id = this.route.snapshot.params.id
    this._global.getSingleDoctor(id).subscribe(res=>{
      this.loading = true
      this.doctor = res
      this.doctor = this.doctor.data
    },()=>{console.log('err')}
    ,()=>{this.loading=false})
  }

}
