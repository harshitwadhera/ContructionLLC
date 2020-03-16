import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-cust-feedback',
  templateUrl: './cust-feedback.component.html',
  styleUrls: ['./cust-feedback.component.scss']
})
export class CustFeedbackComponent implements OnInit {

  slides = [
    {img: 1},
    {img: 2},
    {img: 3},
    {img: 4},
   
  ];
  slideConfig = {"slidesToShow": 3,"slidesToScroll": 1,"autoplaySpeed": 1500,"speed":300,"focusOnSelect":true,"autoplay":"true", "centerMode": true,"infinite":true,
  responsive: [
    {
    breakpoint: 768,
    settings: {
      "slidesToShow": 1
    }
    }],
  };
//   slideConfig = {
//     "slidesToShow": 1,
//     "slidesToScroll": 1,
//     "dots": true,
//     "infinite": true,
//     "autoplay": true,
//     "autoplaySpeed": 1500
// };
  constructor() { }
  slickInit(e) {
    this.slideConfig = {"slidesToShow": 3,"slidesToScroll": 1,"autoplaySpeed": 1500,"speed":300,"focusOnSelect":true,"autoplay":"true", "centerMode": true,"infinite":true,
    responsive: [
      {
      breakpoint: 768,
      settings: {
      slidesToShow: 2
      }
      }],
  };
    e.slick.defaults.autoplay  =true;
    return e;
  }

  ngOnInit() {

     (function ($) {
      $(document).ready(function(){
        $('.carousel').carousel({
          interval: 3000
        })
        
        
      });
    })(jQuery)

   // this.slideConfig = {"slidesToShow": 3,"slidesToScroll": 1,"autoplaySpeed": 1500,"speed":300,"focusOnSelect":true,"autoplay":"true", "centerMode": true,"infinite":true};
  }

  trackByFn(index, slide) {
    return slide; // or item.id
  }

  afterChange(e) {
    console.log('slick initialized');
    e.slick.defaults.autoplay  =true;
    return e;
  }

}
