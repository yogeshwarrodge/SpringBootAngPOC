import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpringBootPocSharedModule } from 'app/shared/shared.module';
import { CountryComponent } from './country.component';
import { CountryDetailComponent } from './country-detail.component';
import { CountryUpdateComponent } from './country-update.component';
import { CountryDeletePopupComponent, CountryDeleteDialogComponent } from './country-delete-dialog.component';
import { countryRoute, countryPopupRoute } from './country.route';

const ENTITY_STATES = [...countryRoute, ...countryPopupRoute];

@NgModule({
  imports: [SpringBootPocSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CountryComponent,
    CountryDetailComponent,
    CountryUpdateComponent,
    CountryDeleteDialogComponent,
    CountryDeletePopupComponent
  ],
  entryComponents: [CountryDeleteDialogComponent]
})
export class SpringBootPocCountryModule {}
