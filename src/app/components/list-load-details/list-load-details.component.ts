import { Component, OnInit } from '@angular/core';
import { GetLoanDetailsService } from "../../services/get-loan-details.service";

@Component({
  selector: 'app-list-load-details',
  templateUrl: './list-load-details.component.html',
  styleUrls: ['./list-load-details.component.css'],
  providers: [GetLoanDetailsService]
})
export class ListLoadDetailsComponent implements OnInit {

  loans: any;

  constructor(private getLoanDetailsService: GetLoanDetailsService) { }

  ngOnInit() {
    // this.getLoanDetailsService.getLoans().subscribe((data) => {
    //     this.loans = data;
    //     console.log(data);
    // });
  }

}
