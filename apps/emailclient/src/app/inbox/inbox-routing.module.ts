import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailShowComponent } from './email-show/email-show.component';
import { InboxComponent } from './inbox/inbox.component'; 
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailResolver } from './resolvers/email-resolver.service';

const routes: Routes = [
  {
    path:'',
    component: InboxComponent,
    children: [
      {
        path: 'not-found',
        component: PlaceholderComponent,
      },
      { 
        path: ':id',
        component: EmailShowComponent,
        resolve: {
          email: EmailResolver
        }
      },
      { path: '', component: PlaceholderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
