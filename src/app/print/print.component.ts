import { Component, OnInit } from '@angular/core';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  pages: string;
  constructor(private printService: PrintService) {
    this.printService.currentPages.subscribe(pages => {
      this.pages = pages;
      console.log(pages);
      alert("Message received: " + pages);
    });
   }

  ngOnInit() {

  }

}
