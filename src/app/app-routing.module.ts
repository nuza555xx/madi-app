import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tabs',
    },
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    },
    {
        path: 'sign-in',
        loadChildren: () =>
            import('./pages/sign-in/sign-in.module').then((m) => m.SignInPageModule),
    },
    {
        path: 'sign-out',
        loadChildren: () =>
            import('./pages/sign-out/sign-out.module').then((m) => m.SignOutPageModule),
    },
    {
        path: 'sign-up',
        loadChildren: () =>
            import('./pages/sign-up/sign-up.module').then((m) => m.SignUpPageModule),
    },
    {
        path: 'forgot-password',
        loadChildren: () =>
            import('./pages/forgot-password/forgot-password.module').then(
                (m) => m.ForgotPasswordPageModule
            ),
    },
    {
        path: 'reset-password',
        loadChildren: () =>
            import('./pages/reset-password/reset-password.module').then(
                (m) => m.ResetPasswordPageModule
            ),
    },
    {
        path: 'news',
        loadChildren: () => import('./pages/news/news.module').then((m) => m.NewsPageModule),
    },
    {
        path: 'news-detail',
        loadChildren: () =>
            import('./pages/news-detail/news-detail.module').then((m) => m.NewsDetailPageModule),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
