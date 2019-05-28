import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
imgClass : string = 'object van';

  constructor(private zone: NgZone, public navCtrl: NavController) {
  }

  getScrollPosition(evt){
    console.log(evt);

    if(evt.scrollTop >= 568){
      this.zone.run(()=>{
        this.imgClass = 'object van move-left';
      })
    }
  }
}
