import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
    path: '',
    component: HomeComponent
    },
    {
    path: 'blog',
    component: BlogComponent
    },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);