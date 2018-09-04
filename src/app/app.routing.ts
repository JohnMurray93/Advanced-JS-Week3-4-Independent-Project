import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent }   from './blog/blog.component';

const appRoutes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);