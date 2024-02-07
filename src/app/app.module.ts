import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurteaComponent } from './ourtea/ourtea.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RouterModule } from '@angular/router';
import { TandcComponent } from './tandc/tandc.component';
import { AdminComponent } from './admin/admin.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from './services/user.service';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { CartComponent } from './cart/cart.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ShowProductImagesDialogComponent } from './show-product-images-dialog/show-product-images-dialog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';







import { HTTP_INTERCEPTORS} from '@angular/common/http';

import * as authGuard from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SdrpComponent } from './sdrp/sdrp.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    OurteaComponent,
    ContactusComponent,

    AdminComponent,
    AllUsersComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    CartComponent,
    BuyProductComponent,
    AllProductsComponent,
    AddNewProductComponent,
    ForbiddenComponent,
    MyOrdersComponent,
    OrderConfirmationComponent,
    OrderDetailsComponent,
    ProductViewDetailsComponent,
    ShowProductDetailsComponent,
    ShowProductImagesDialogComponent,
    HeaderComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    SdrpComponent,
    DisclaimerComponent,
    TandcComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonToggleModule,

  ],
  providers: [
    authGuard.AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
