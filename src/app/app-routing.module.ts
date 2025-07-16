import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { SaveuserComponent } from './components/saveuser/saveuser.component';


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'users', component: UserComponent },
  { path: 'user/create-user', component: SaveuserComponent},
   { path: 'user/create-user/:id', component: SaveuserComponent},
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
