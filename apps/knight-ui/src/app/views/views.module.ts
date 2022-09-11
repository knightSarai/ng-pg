import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UiModule } from '@ng-pg/ui';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent, ItemListComponent],
  imports: [CommonModule, ViewsRoutingModule, UiModule],
  exports: [ViewsHomeComponent, StatisticsComponent, ItemListComponent],
})
export class ViewsModule {}
