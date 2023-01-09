import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('../pages/dashboard/dashboard.module').then(
                        (m) => m.DashboardPageModule
                    ),
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../pages/settings/settings.module').then(
                                (m) => m.SettingsPageModule
                            ),
                    },
                    {
                        path: 'edit-profile',
                        loadChildren: () =>
                            import('../pages/settings/edit-profile/edit-profile.module').then(
                                (m) => m.EditProfilePageModule
                            ),
                    },
                    {
                        path: 'change-password',
                        loadChildren: () =>
                            import('../pages/settings/change-password/change-password.module').then(
                                (m) => m.ChangePasswordPageModule
                            ),
                    },

                    {
                        path: 'app-permission',
                        loadChildren: () =>
                            import('../pages/settings/app-permission/app-permission.module').then(
                                (m) => m.AppPermissionPageModule
                            ),
                    },
                ],
            },
            {
                path: 'notification',
                loadChildren: () =>
                    import('../pages/notification/notification.module').then(
                        (m) => m.NotificationPageModule
                    ),
            },
            {
                path: 'news',
                loadChildren: () =>
                    import('../pages/news/news.module').then((m) => m.NewsPageModule),
            },
            {
                path: '',
                redirectTo: '/tabs/dashboard',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
