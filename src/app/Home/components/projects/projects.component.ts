import { Component, OnInit } from '@angular/core';
import * as globalReducer from 'src/app/reducers';
import { Store } from '@ngrx/store';
import * as websiteAction  from '../../Action/websiteHome.action';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  src: any;
  showModal: boolean=false;

  constructor(private homeProjectSearch:Store<globalReducer.AppState>) { }

  ngOnInit() {
    
    this.homeProjectSearch.dispatch(new websiteAction.Get_All_Projects(true));

  }

  openModal(event) {
   // console.log(event);
    console.log(event.srcElement.src);
   this.src=event.srcElement.src;
  //  document.getElementById('imgModal').style.display = "block";
  this.showModal=true;
   }

   hide(){
    this.showModal=false;
   }

}
