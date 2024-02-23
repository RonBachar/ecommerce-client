import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about-me',
        loadChildren: () =>
            import('./modules/about-me/about-me.module').then(
                (m) => m.AboutMeModule
            ),
    },
];
