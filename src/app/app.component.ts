import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from '@angular/router';

interface Site {
  path: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private router: Router) {
  }
  title = 'Angular';

  ngOnInit(): void {
    this.switchSite();
  }

  sites: Site[] = [
    {path: 'standard', name: 'Standard'},
    {path: 'withError', name: 'Mit Fehlern'},
    {path: 'complex', name: 'Komplex'},
  ]
  selectedSite: Site = this.sites[2];
  switchSite() {
    this.router.navigate([this.selectedSite.path]);
  }


}

