import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { UiModule } from '@ng-pg/ui';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent,
  ],
  imports: [CommonModule, CollectionsRoutingModule, UiModule],
  exports: [
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent,
  ],
})
export class CollectionsModule {}
