import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./user-components/users/users.component";
import {UserDetailsComponent} from "./user-components/user-details/user-details.component";
import {UserResolver, UsersResolver} from "./user-services";
import {ActivatorGuard} from "../../guards";


const routes: Routes = [
  {
    path: '', component: UsersComponent, resolve: {usersData: UsersResolver}, canActivate: [ActivatorGuard] ,children: [
      {path: ':id', component: UserDetailsComponent, resolve: {userData: UserResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
