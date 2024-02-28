import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combobox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.css'
})
export class ComboboxComponent implements OnInit {
  constructor(private router:Router){

  }
  ngOnInit(): void {

   let username = (sessionStorage.getItem('username'));
    console.log(username);

    if(username == null){
      this.router.navigate(['login']);
    }
  }
  selectlanguage:string=" ";

  display(){
    console.log('Selected Language Is: ' + this.selectlanguage);
  }
}
