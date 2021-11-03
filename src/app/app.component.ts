import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void
  {
    this.moviesInTheatres = [{
      title: "Spider-man",
      releaseDate: new Date(),
      price: 1400.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    },
    {
      title: "Moana",
      releaseDate: new Date('2016-11-14'),
      price: 300.99
    }],
    

    this.moviesFutureReleases = [];
  }
  
  moviesInTheatres:any;
  moviesFutureReleases:any;

  title = 'any value';

movies: any;

  duplicateNumber(n : number) {
    return n*2;
  }
}
