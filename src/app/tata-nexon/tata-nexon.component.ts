import { Component, OnInit } from '@angular/core';
import { CusDetailsService } from '../input-field/cus-details.service';

@Component({
  selector: 'app-tata-nexon',
  templateUrl: './tata-nexon.component.html',
  styleUrls: ['./tata-nexon.component.scss']
})
export class TataNexonComponent implements OnInit {

  public customers :string = "none";

  constructor(public cusDetails:CusDetailsService) { }

  ngOnInit(): void {
  }

  opencusDetails(){
    this.customers = "block"  
    }

}
