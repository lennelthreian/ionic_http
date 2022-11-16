import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  films: any = [];

  
  constructor(private http: HttpClient) {}

    ngOnInit(): void {
      this.http.get('https://ghibliapi.herokuapp.com/films')
      .subscribe(data=>{
        console.log(data);
        this.films = data;
      });
    }


}
