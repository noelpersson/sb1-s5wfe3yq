import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features = [
    {
      title: 'Innovation',
      description: 'Leading the aerospace industry with cutting-edge technology and sustainable solutions.'
    },
    {
      title: 'Safety',
      description: 'Committed to the highest safety standards in aircraft design and manufacturing.'
    },
    {
      title: 'Sustainability',
      description: 'Developing eco-efficient aircraft and promoting sustainable aviation practices.'
    }
  ];
}