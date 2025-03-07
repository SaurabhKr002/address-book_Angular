import { Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dash-board/dash-board.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'dashBoard',
        pathMatch:'full'
    },
    {
        path:'dashBoard',
        component:DashboardComponent
    },
    {
        path:'add_user',
        component:AddUserComponent
    }
];
    