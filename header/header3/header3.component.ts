import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface cusobj {
  image?: string;
  type?: string;
  link?: string;
  text?: string;
  Menu1?:Array  <any>;
  Menu2?:Array <any>;
  
  Menu?:Array <any>;
  name?:string;
}

@Component({
  selector: 'app-header3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header3.component.html',
  styleUrls: ['./header3.component.css']
})
export class Header3Component {
  logo: cusobj = {
    image:
    'https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png',
    type: 'link',
    link: '/',
  };
  
  list: Array<cusobj> = [
    { text: 'Home', type: 'dropdown', Menu1:[{name:'AppLanding',link:''},{name:'SEO',link:''},{name:'Startup',link:''}], Menu2:[{name:'EmailMarketing',link:''}]},
    { text: 'Page', type: 'dropdown', Menu: [{name:'Team Pages',submenu:[{name:'Team 01',Link:''},{name:'Team 02',Link:''},{name:'Team 03',link:''}]},{name:'About Us',link:''},{name:'Service Pages',submenu:[{name:'Our services',Link:''},{name:'service Details',link:''}]}] },
    { text: 'Portfolio', type: 'dropdown', Menu: [{name:'protofolio0',link:''},{name:'portfolio1',link:''},{name:'portfolio3',link:''}]},
    {text:'Element',type:'dropdown',Menu: [{name:'VideoLayout',submenu:[{name:'video layout 01',link:''},{name:'video Layout 02',link:''}]},{name:'Download Layout',submenu:[{name:'download layout 01',link:''},{name:'download Layout 02',link:''},{name:'download Layout 03',link:''}]},{name:'SolutionLayout',submenu:[{name:'solution layout 01',link:''},{name:'solution Layout 02',link:''}]}]},
    {text:'Latest news',type:'dropdown',Menu: [{name:'latest News',link:''},{name:'News details',link:''}],},
    {text:'Contact',type:'link',link:'/'},
   
  ];

  toggleDropdown(item:any) {
    item.dropdownOpen = !item.dropdownOpen;
  }
  
}


