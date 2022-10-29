import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@ng-pg/ui'
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
      path: 'inbox',
      canLoad: [AuthGuard],
      loadChildren: () => 
        import('../inbox/inbox.module').then(m => m.InboxModule)
    },
    {"path": "", "redirectTo": "inbox", "pathMatch": "full"},
    { path: '**', component: NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
