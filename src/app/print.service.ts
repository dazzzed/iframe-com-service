import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class PrintService {

  private pagesSource = new BehaviorSubject<string>("");
  currentPages = this.pagesSource.asObservable();

  constructor(
  ) { }

  print (pages: string) {
    this.pagesSource.next(pages);
    let oHiddFrame = document.createElement("iframe");
    //oHiddFrame.style.visibility = "hidden";
    oHiddFrame.style.position = "fixed";
    oHiddFrame.style.right = "0";
    oHiddFrame.style.bottom = "0";
    oHiddFrame.src = "print";
    document.body.appendChild(oHiddFrame);
  }
}
