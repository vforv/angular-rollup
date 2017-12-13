import { NgModule } from '@angular/core';
import { UserComponent } from './component/smart/user.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { UserService } from './service/user.service';
import { reducers, effects } from './store';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('user', reducers),
        EffectsModule.forRoot(effects)
    ],
    providers: [
        UserService
    ],
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ]
})

export class UserModule { }