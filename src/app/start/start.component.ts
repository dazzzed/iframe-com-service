import { Component, OnInit } from '@angular/core';
import { PrintService } from '../print.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private printService: PrintService) { }

  ngOnInit() {
  }
  sendSmthng(pages: string) {
    this.printService.print(pages);
  }
}
