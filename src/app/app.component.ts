import { Component,ViewChild  } from '@angular/core';

import { Platform,NavController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { Tab1Page } from './tab1/tab1.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  @ViewChild('myNav') nav: NavController
 


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar, protected deeplinks: Deeplinks, protected navController: NavController
  ) {
    this.initializeApp();

    /* this.deeplinks.route({
      '/Monitor': Tab2Page,
      '/Analyze': Tab3Page,
      '/Operate': Tab1Page
    }).subscribe(match => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      alert(JSON.stringify(match.$link))
      alert("Route"+JSON.stringify(match.$route))
      alert("ARGS"+JSON.stringify(match.$args))
      console.log('Successfully matched route', match);
       
    }, nomatch => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    }); */

    // Convenience to route with a given nav
    this.deeplinks.routeWithNavController(this.navController, {
      '/Monitor': Tab2Page,
      '/Analyze': Tab3Page,
      '/Operate': Tab1Page
    }).subscribe((match) => {
      alert(JSON.stringify(match.$link))
      console.log('Successfully routed', match);
      this.navController.navigateRoot(match.$link.path);
    }, (nomatch) => {
      console.warn('Unmatched Route', nomatch);
    });
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
