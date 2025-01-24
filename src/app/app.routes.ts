import { SearchBarComponent } from './../Shared/search-bar/search-bar.component';
import { LogoutComponent } from './../component/logout/logout.component';
import { ProfileComponent } from './../component/profile/profile.component';
import { SettingComponent } from './../component/setting/setting.component';
import { BookmarkComponent } from './../component/bookmark/bookmark.component';
import { AnalyticsComponent } from './../component/analytics/analytics.component';
import { TeamComponent } from './../component/team/team.component';
import { NotificationComponent } from './../component/notification/notification.component';
import { CalenderComponent } from './../component/calender/calender.component';
import { DashboardComponent } from './../component/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';
import { HomeComponent } from '../component/home/home.component';
import { RegistarComponent } from '../component/registar/registar.component';
import { SidebarComponent } from '../Shared/sidebar/sidebar.component';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"registar",component:RegistarComponent},
    {path:"home",component:HomeComponent},
    {path :"sidebar",component:SidebarComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'calender',component:CalenderComponent},
    {path:'notification',component:NotificationComponent},
    {path:'team',component:TeamComponent},
    {path:'analytics',component:AnalyticsComponent},
    {path:'bookmark',component:BookmarkComponent},
    {path:'setting',component:SettingComponent},
    {path:'profile',component:ProfileComponent},
    {path:'logout',component:LogoutComponent},
    {path:'search',component:SearchBarComponent}

];
