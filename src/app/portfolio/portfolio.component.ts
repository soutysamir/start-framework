import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 imagesList: string[]=[
  '/images/poert1.png',
  '/images/port2.png',
  '/images/port3.png',
];
 photoDisplay:string='';

showDetails(photo:string):void{
  this.photoDisplay=photo;
}
}

