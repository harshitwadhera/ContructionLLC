import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
declare var jQuery: any;
import {MatDialog} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';
import { CustFeedbackComponent } from '../cust-feedback/cust-feedback.component';
import { CustFeebackModule } from '../cust-feedback/cust-feedback.module';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  aboutUsHome: any;
  moreAbout: any;
  contactForm:FormGroup;
  submitted = false;

  constructor(private httpClient: HttpClient,public dialog: MatDialog,private fb:FormBuilder) { 
    //this.openDialog();
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['',[Validators.required, Validators.email]],
     'neededService': ['', Validators.required],
     'budget': ['', Validators.required],
     'message': ['', [Validators.required,Validators.minLength(3)]],
      });
  }

  ngOnInit() {
    (function ($) {
      $(document).ready(function(){
        $('.js--wp-1').waypoint(function(direction) {
          //$('.js--wp-1').addClass('animated fadeIn').delay(10000).fadeIn('slow');
          $(".js--wp-1").fadeOut(100);
          $(".js--wp-1").fadeIn(2000);
        //  $(".circle-1").delay(500).fadeIn('slow');
      }, {
          offset: '50%'
      });

      $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    
      });
    })(jQuery)
    console.log("test");

    this.httpClient.get("assets/dataJson/Home/Home.json").subscribe(SampleJson =>{
      console.log(SampleJson);
      this.aboutUsHome = SampleJson['abooutUsHome'];
      this.moreAbout = SampleJson['moreAbout'];
      
    })

   
  }

onSubmit(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.contactForm.invalid) {
      return;
  }

  alert('SUCCESS!! :-)')
}
 
  get f() { return this.contactForm.controls; }

  openDialog(){
    let dialogRef = this.dialog.open(CustFeedbackComponent, {
      panelClass: 'custom-dialog-container2'
    });
  }

  

}
