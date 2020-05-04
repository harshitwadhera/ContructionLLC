import { Component, OnInit, HostListener, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  topPosToStartShowing = 100;
  constructor(private render:Renderer2) { }
  
 

  ngOnInit() {
    //console.log("test");
  }
  clicked(event) {
    
     let element = document.getElementsByClassName('upgrade')
     
     if(element[0].className.substring(0,element[0].className.lastIndexOf("w3-animate-top"))){
      // element[0].className = element[0].className.substring(0,element[0].className.lastIndexOf("w3-animate-top"));
      // element[0].className=element[0].className+;"w3-animate-top";
      //element[0].classList.remove("w3-animate-top");
      element[0].classList.add("w3-animate-top");
      //this.render.setElementAttribute(event.target, "class", element[0].className);
     }else{
      element[0].classList.add("w3-animate-top");
     // element[0].className=element[0].className+" w3-animate-top";
     }
     

  }

  scrollToElement($element): void {
   
   // const element = document.querySelector("aboutUs")
   let elementName = $element.toString();
  
    let element = document.getElementsByClassName(elementName);
    if(elementName=='aboutUs'){
      element[0];
     }
    element[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  @HostListener("window:scroll")
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let element = document.getElementsByName('navBar')
    if (scrollPosition >= this.topPosToStartShowing) {
    //  element[0].classList.add("fixed-top");// .className+" fixed-top";
      
    } else {
    // element[0].classList.remove("fixed-top");//.className=element[0].className+" fixed-top";
    }
    
  
   
  }

  
  

}
