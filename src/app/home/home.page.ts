import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private root: Router) {
    
  }
  ngOnInit(): void {
    timer(3000).subscribe(res=>{
      this.root.navigateByUrl('/login')
    }) 
  }

}
