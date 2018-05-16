// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { OrderEditComponent} from './pages/order-edit/order-edit.component';
import { OrderListComponent} from './pages/order-list/order-list.component';
import { ProductEditComponent} from './pages/product-edit/product-edit.component';
import { ProductListComponent} from './pages/product-list/product-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from "./security/auth.guard";

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  component: HomeComponent , canActivate: [AuthGuard] },
    { path: 'orders/:id',  component: OrderEditComponent , canActivate: [AuthGuard] },
    { path: 'orders',  component: OrderListComponent , canActivate: [AuthGuard] },
    { path: 'products/:id',  component: ProductEditComponent , canActivate: [AuthGuard] },
    { path: 'products',  component: ProductListComponent , canActivate: [AuthGuard] },

 /* END MY VIEWS */
    
    { path: 'home', component: HomeComponent},
    // SECURITY
    { path: 'manage-users',  component: ManageUserListComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'manage-users/:id',  component: ManageUserEditComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'profile',  component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}