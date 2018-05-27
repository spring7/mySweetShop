import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MySweetShopCategoryModule } from './category/category.module';
import { MySweetShopProductModule } from './product/product.module';
import { MySweetShopCustomerModule } from './customer/customer.module';
import { MySweetShopAddressModule } from './address/address.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MySweetShopCategoryModule,
        MySweetShopProductModule,
        MySweetShopCustomerModule,
        MySweetShopAddressModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MySweetShopEntityModule {}
