import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { EditLivreComponent } from './edit-livre/edit-livre.component';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';

const routes: Routes = [
  {path:'',component:ListeLivreComponent},
  {path:'add',component:AddLivreComponent},
  {path:'edit/:id_livre',component:EditLivreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
