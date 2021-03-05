import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { InputFieldService } from '../input-field.service';
import { CusDetailsService, User } from './cus-details.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers:[InputFieldService]
})
export class InputFieldComponent implements OnInit {

  constructor(private service:InputFieldService,private cusDetails:CusDetailsService) { 

  }
  public myControl = new FormControl();
  public options: any = [];
  public userinput:string = "";
  public toggle : string = "block";
  public inputToggle : string = "none";
  public btn: string = "block";
  public btn2: string = "none";
  public btn3: string = "none";
  public greet: string = "none";
  public user:User = { id: 0, name: "", ph_no : 0, Email : "" };
  

  getCity(data : string){
    this.service.getCity(data).subscribe(cities => this.options = cities)
}

chooseNamefield(){
  this.toggle = "none";
  this.inputToggle = "block";
  this.btn ="none";
  this.btn2= "block";
  this.greet = "none";
  this.btn3 = "none"
   }
   greetbtn(){
    this.toggle = "none";
    this.inputToggle = "none";
    this.btn ="none";
    this.btn2 = "none";
    this.btn3 = "block";
     this.greet = "block";
     this.cusDetails.addUser(this.user);
   }
   backAgain(){
    this.toggle = "block";
    this.greet ="none";
    this.btn3 = "none";
    this.btn = "block";
  }  

  ngOnInit(): void {
  }
  

}
