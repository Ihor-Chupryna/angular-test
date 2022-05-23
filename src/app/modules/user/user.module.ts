import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';

import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from './user-components/users/users.component';
import {UserComponent} from './user-components/user/user.component';
import {UserDetailsComponent} from './user-components/user-details/user-details.component';
import {UserResolver, UserService, UsersResolver} from "./user-services";
import {ActivatorGuard} from "../../guards";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService, UsersResolver, UserResolver, ActivatorGuard]
})
export class UserModule {
}
