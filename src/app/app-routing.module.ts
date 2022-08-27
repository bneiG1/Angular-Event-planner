import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApplicationComponent } from "./application/application.component";
import { LoginComponent } from "./authentification/login/login.component";
import { SignUpComponent } from "./authentification/sign-up/sign-up.component";

const appRoutes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'signup', component: SignUpComponent},
{path: 'main', component: ApplicationComponent
}];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
