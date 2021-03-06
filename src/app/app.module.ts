import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//routing
import { routing } from './app.routing';

//Firebase
import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2';

//Component
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AdminComponent } from './admin/admin.component';
import { NameFilterPipe } from './name-filter.pipe';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    MemberDetailComponent,
    EditMemberComponent,
    AdminComponent,
    NameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
