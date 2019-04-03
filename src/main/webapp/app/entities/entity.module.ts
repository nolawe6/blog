import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'region',
                loadChildren: './region/region.module#BlogRegionModule'
            },
            {
                path: 'country',
                loadChildren: './country/country.module#BlogCountryModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#BlogLocationModule'
            },
            {
                path: 'department',
                loadChildren: './department/department.module#BlogDepartmentModule'
            },
            {
                path: 'task',
                loadChildren: './task/task.module#BlogTaskModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#BlogEmployeeModule'
            },
            {
                path: 'job',
                loadChildren: './job/job.module#BlogJobModule'
            },
            {
                path: 'job-history',
                loadChildren: './job-history/job-history.module#BlogJobHistoryModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#BlogEmployeeModule'
            },
            {
                path: 'address',
                loadChildren: './address/address.module#BlogAddressModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#BlogEmployeeModule'
            },
            {
                path: 'employee',
                loadChildren: './employee/employee.module#BlogEmployeeModule'
            },
            {
                path: 'region',
                loadChildren: './region/region.module#BlogRegionModule'
            },
            {
                path: 'product',
                loadChildren: './product/product.module#BlogProductModule'
            },
            {
                path: 'product-category',
                loadChildren: './product-category/product-category.module#BlogProductCategoryModule'
            },
            {
                path: 'customer',
                loadChildren: './customer/customer.module#BlogCustomerModule'
            },
            {
                path: 'product-order',
                loadChildren: './product-order/product-order.module#BlogProductOrderModule'
            },
            {
                path: 'order-item',
                loadChildren: './order-item/order-item.module#BlogOrderItemModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#BlogInvoiceModule'
            },
            {
                path: 'shipment',
                loadChildren: './shipment/shipment.module#BlogShipmentModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}
