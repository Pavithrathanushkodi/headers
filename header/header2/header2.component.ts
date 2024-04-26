import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface cusobj {
  image?: string;
  type: string;
  link?: string;
  text?: string;
  dropdownMenu?:Array  <string>
}

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})


export class Header2Component {
image:string='https://safecart.bytesed.com/assets/uploads/media-uploader/logo1698825016.webp';

list: Array<cusobj> = [
  { text: 'HomePages', type: 'dropdown', dropdownMenu:['Home Style 01','Home Style 02','Home Style 03'] },
  { text: 'About', type: 'link', link: '/' },
  { text: 'Shop Pages', type: 'dropdown', dropdownMenu: ['Shop List', 'Product List','Grid Pages']},
  {text:'Pages',type:'dropdown',dropdownMenu:['Terms & Conditions','Privacy Policy','FAQ']},
  {text:'Blog Pages',type:'dropdown',dropdownMenu:['Blog List', 'Blog Style']},
  {text:'Contact',type:'link',link:'/'},
];
} 