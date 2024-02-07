import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurteaComponent } from './ourtea/ourtea.component';
import { ContactusComponent } from './contactus/contactus.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AuthGuard } from './_auth/auth.guard';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ProductResolveService } from './product-resolve.service';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { BuyProductResolverService } from './buy-product-resolver.service';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { TandcComponent } from './tandc/tandc.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AllProductsComponent } from './all-products/all-products.component';
import path from 'path';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SdrpComponent } from './sdrp/sdrp.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';



const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'',
    component:AdminComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'',
    component:UserComponent, canActivate:[AuthGuard], data:{roles:['User']}
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'addNewProduct',
    component:AddNewProductComponent, canActivate:[AuthGuard], data:{roles:['Admin']},
  
  resolve : 
  {
    product: ProductResolveService
  }
  },
  {
    path:'showProductDetails',
    component:ShowProductDetailsComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
  },
  {
    path:'productViewDetails',
    component:ProductViewDetailsComponent, 
    resolve:
    {
      product: ProductResolveService
    }
  },
  {
    path:'buyProduct',
    component:BuyProductComponent,canActivate:[AuthGuard], data:{roles:['User']},
    resolve:
    {
      productDetails: BuyProductResolverService
    }
  },
  {
    path:'cart',
    component:CartComponent,canActivate:[AuthGuard], data:{roles:['User']}
  },
  {
    path:'orderConfirm',
    component:OrderConfirmationComponent,
    canActivate:[AuthGuard], data:{roles:['User']}
  },
  {
    path:'myOrders',
    component:MyOrdersComponent,
    canActivate:[AuthGuard], data:{roles:['User']}
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'orderInformation',
    component:OrderDetailsComponent,
    canActivate:[AuthGuard], data:{roles:['Admin']}
  },
{
  path:'allproducts',
  component:AllProductsComponent
},
{
path:'aboutus',
component:AboutusComponent
},
{
  path:'tandc',
  component:TandcComponent
},
{
  path:'privacy-policy',
  component:PrivacyPolicyComponent
},
{
  path:'sdrp',
  component:SdrpComponent
},
{
  path:'disclaimer',
  component:DisclaimerComponent
},
{
  path:'footer',
  component:FooterComponent
},
{
  path:'allUsers',
  component:AllUsersComponent, canActivate:[AuthGuard], data:{roles:['Admin']}
},
{
  path:'contactus',
  component:ContactusComponent
}
,
{
  path:'ourtea',
  component:OurteaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
