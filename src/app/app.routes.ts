import { Routes } from '@angular/router';
import { BlogComponent } from './Components/Blog/Blog.component';
import { UserComponent } from './Components/User/User.component';
import { LoginComponent } from './Components/Login/Login.component';
import { EditUserComponent } from './Components/EditUser/EditUser.component';
import { EditBlogComponent } from './Components/EditBlog/EditBlog.component';
import { AuthGuard } from './Services/Guards/auth.guard';
import { SideNavComponent } from './Components/SideNav/SideNav.component';
import { AddBlogComponent } from './Components/AddBlog/AddBlog.component';
import { Page404Component } from './Components/Page404/Page404.component';
import { RegisterComponent } from './Components/Register/Register.component';
export const routes: Routes = [
  {
    path: '',component:SideNavComponent,
    children: [
     
      {path:'blog',component:BlogComponent},
      { path: 'AllUser', component: UserComponent },
      { path: 'editUser', component: EditUserComponent },
      { path: 'editblog', component: EditBlogComponent },
      {path:'addBlog', component: AddBlogComponent},
      {path:'addUser',component:RegisterComponent}
    ],
    
    canActivate: [AuthGuard]
  },
 
  { path: 'login', component: LoginComponent },


  { path: '404', component: Page404Component },

  { path: '', redirectTo: '404', pathMatch: 'full' },
  // {
  
// {path:'',component:SideNavComponent},
// {path:'blog',component:BlogComponent},
// {path:'AllUser',component:UserComponent},
// {path:'editUser',component:EditUserComponent},
// {path:'editBlog',component:EditBlogComponent},
// {path:'login',component:LoginComponent},


];
























