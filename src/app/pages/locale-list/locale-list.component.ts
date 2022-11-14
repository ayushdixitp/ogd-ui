import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'locale-list',
  templateUrl: './locale-list.component.html',
  styleUrls: ['./locale-list.component.scss'],
})
export class LocaleListComponent implements OnInit {
  constructor(private router: Router) {
    console.log(this.router.config);
  }

  ngOnInit(): void {}
}
