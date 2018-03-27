import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copy = "Copyright @"
 copyrightDate = Date.now()
  constructor() { }

  ngOnInit() {
  }

}
