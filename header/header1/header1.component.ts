import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

interface cusobj {
  image?: string;
  type: string;
  link?: string;
  text?: string;
  dropdownmenu?:Array  <string>
}

@Component({
  selector: 'app-header1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css'],
})
export class Header1Component {
  logo: cusobj = {
    image:
      'https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png',
    type: 'link',
    link: '/',
  };

  list: Array<cusobj> = [
    { text: 'Home', type: 'link', link: '/', },
    { text: 'About', type: 'link', link: '/' },
    { text: 'features', type: 'dropdown', dropdownmenu: ['Features1', 'Features2']},
    {text:'Screenshots',type:'link',link:'/'},
    {text:'FAQ',type:'link',link:'/'},
    {text:'Blog',type:'link',link:'/'},
    {text:'Screenshot',type:'link',link:'/'},
  ];

  buttontext : string = 'Try it Free';

  
}
