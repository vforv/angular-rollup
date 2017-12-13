import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { StoreModule, MetaReducer } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { storeFreeze } from 'ngrx-store-freeze';

// export const metaReducers: MetaReducer<any>[] =  [storeFreeze];
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({ }, {  }),
    // EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
            maxAge: 25 //  Retains last 25 states
        }),
    UserModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }