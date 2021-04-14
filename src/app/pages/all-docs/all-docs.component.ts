import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-all-docs',
  templateUrl: './all-docs.component.html',
  // styleUrls: ['./all-docs.component.css']
})
export class AllDocsComponent implements OnInit {

  doctors

  constructor(public _global:GlobalService) { 
    this.getDoctors()
  }

  ngOnInit(): void {
  }

  getDoctors(){
    this._global.getAllDoctors().subscribe(res=>{
      this.doctors = res
      this.doctors = this.doctors.data
    })
  }

}
