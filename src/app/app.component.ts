import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  message: string;
  id: number; 
  name?: string; 
  movies: any[] = []; 
  selectedMovie: any[];

  constructor() { 
   this.movies = [
     {
        id:1,
        name: "Thani Oruvan",
        year: 2015,
        intro: "Mithran, an efficient IPS officer, sets out to expose the illegal medical practices of Siddharth Abhimanyu, an influential scientist, and bring him to justice."
     },
     {
       id:2,
       name: "Irumbuthirai",
       year: 2018,
       intro: "Major Kathiravan borrows money from a bank using fake documents for his sister's marriage. However, when the money goes missing from his account, he begins an investigation which leads him to a hacker"
     },
     {
        id:3,
        name: "Tik Tik Tik",
        year: 2018,
        intro: "The Patriot is a 2000 AmericAfter discovering that an asteroid the size of a city is days away from impacting Earth, India recruits a misfit team to somehow divert it or destroy it.an epic historical fiction war film directed by Roland Emmerich, written by Robert Rodat"
     }
   ];
   this.selectedMovie = this.movies[0];
  }

  getselect(list){
    this.selectedMovie = list;
  }

  recievemsg($event){
    this.message = $event;
    console.log("Msg send by child to parent : "+$event);
  }


}