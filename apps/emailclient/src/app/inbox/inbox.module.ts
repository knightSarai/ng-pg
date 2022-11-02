import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { UiModule } from '@ng-pg/ui';
import { EmailFormComponent } from './email-form/email-form.component';

@NgModule({
  declarations: [
    InboxComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailIndexComponent,
    EmailShowComponent,
    PlaceholderComponent,
    EmailFormComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    UiModule,
    ReactiveFormsModule,
  ],
})
export class InboxModule {}
