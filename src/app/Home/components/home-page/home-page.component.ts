import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare var jQuery: any;
import {MatDialog} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';
import { CustFeedbackComponent } from '../cust-feedback/cust-feedback.component';
import { CustFeebackModule } from '../cust-feedback/cust-feedback.module';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  aboutUsHome: any;
  moreAbout: any;


  constructor(private httpClient: HttpClient,public dialog: MatDialog) { 
    //this.openDialog();
  }

  ngOnInit() {
    (function ($) {
      $(document).ready(function(){
      
      });
    })(jQuery)
    console.log("test");

    this.httpClient.get("assets/dataJson/Home/Home.json").subscribe(SampleJson =>{
      console.log(SampleJson);
      this.aboutUsHome = SampleJson['abooutUsHome'];
      this.moreAbout = SampleJson['moreAbout'];
      
    })

   
  }

  openDialog(){
    let dialogRef = this.dialog.open(CustFeedbackComponent, {
      panelClass: 'custom-dialog-container2'
    });
  }

  

}
