import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '@angular/compiler';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  
  quoteGroup: {category: string, quotes: Quote[], icon: string};

  constructor(private NavParams: NavParams) {

  }

  ngOnInit(): void {
    this.quoteGroup = this.NavParams.data
  }

  /*
  ionViewDidLoad() {
    this.quoteGroup = this.NavParams.data;
    Add elvis operator (?) in template to use this approach
  }
  */

}
