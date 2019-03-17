import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SMS } from '@ionic-native/sms/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private socialSharing: SocialSharing,private sms: SMS) {

   }
  sendMessage(){
    this.socialSharing.canShareViaEmail().then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });
    
    // Share via email
    this.socialSharing.shareViaEmail('Body', 'Subject', ['ashokbtech0208@gmail.com']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

  sendDraftMessage(){
    // Send a text message using default options
    this.sms.send('416123456', 'Hello world!');
  }
}
