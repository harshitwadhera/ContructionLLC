import { Component, OnInit ,Renderer} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private render:Renderer) { }

  ngOnInit() {
    //console.log("test");
  }
  clicked(event) {
     console.log("test on clicked");
     let element = document.getElementsByClassName('upgrade')
     if(element[0].className.substring(0,element[0].className.lastIndexOf("w3-animate-top"))){
      element[0].className = element[0].className.substring(0,element[0].className.lastIndexOf("w3-animate-top"));
      element[0].className=element[0].className+" w3-animate-top";
      this.render.setElementAttribute(event.target, "class", element[0].className);
     }else{
      element[0].className=element[0].className+" w3-animate-top";
     }
     

  }

}
