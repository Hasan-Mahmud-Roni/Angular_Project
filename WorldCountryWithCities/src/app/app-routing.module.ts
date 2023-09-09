import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CreatecityComponent } from './components/createcity/createcity.component';
import { UpdatecityComponent } from './components/updatecity/updatecity.component';
import { DeletecityComponent } from './components/deletecity/deletecity.component';

const routes: Routes = [  
  {path:'',redirectTo:'login' , pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'city' , component:CreatecityComponent},
  {
    path: 'city/delete/:id',
    component: DeletecityComponent
  },
  {
    path: 'city/edit/:id',
      component: UpdatecityComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
