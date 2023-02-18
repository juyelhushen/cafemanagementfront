import { Routes } from '@angular/router';
import { RouteGuardService } from '../Services/route-guard.service';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ViewBillComponent } from './view-bill/view-bill.component';


export const MaterialRoutes: Routes = [
  {
  path:'category',
  component: ManageCategoryComponent,
  canActivate: [RouteGuardService],
  data : {
    expectedRole: ['ADMIN']
  }
},
{
  path:'product',
  component: ManageProductComponent,
  canActivate: [RouteGuardService],
  data : {
    expectedRole: ['ADMIN']
  }
},
{
  path:'order',
  component: ManageOrderComponent,
  canActivate: [RouteGuardService],
  data : {
    expectedRole: ['ADMIN','USER','admin','user']
  }
},
{
  path:'bill',
  component: ViewBillComponent,
  canActivate: [RouteGuardService],
  data : {
    expectedRole: ['ADMIN','USER','admin','user']
  }
},
{
  path:'user',
  component: ManageUserComponent,
  canActivate: [RouteGuardService],
  data : {
    expectedRole: ['ADMIN','admin']
  }
}
];
