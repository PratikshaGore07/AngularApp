import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TitlePipe } from '../title.pipe';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,TitlePipe],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent  implements OnInit{
  username:any="";
  
  imgurl : string="assets/images/one.jpg"

  birthdate:Date=new Date(2003,8,29);

  ngOnInit(): void 
  {
    
    this.username=sessionStorage.getItem('username');
  }
   
  show:boolean=true;
  persons:any[]=
  [
    {name:'pratiksha',country:'india'},

    {name:'mac',country:'america'},

    {name:'zen',country:'france'},

    {name:'yash',country:'india'},
  ]

  getColor(countryname:string)
  {
      switch(countryname){
  
          case 'india':
             return 'orange';
  
             case 'france':
             return 'blue';
      }
  
      return 'purple';
  }
}
