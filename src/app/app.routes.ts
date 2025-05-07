import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotefoundComponent } from './pages/notefound/notefound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
        title: 'login',
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent),
        title: 'register',
      },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
        title: 'dashboard',
      },
      {
        path: 'sidebar',
        loadComponent: () => import('./layouts/sidebar/sidebar.component').then(c => c.SidebarComponent),
        title: 'dashboard',
      },
      {
        path: 'chart-headr',
        loadComponent: () => import('./shared/components/chart-header/chart-header.component').then(m => m.ChartHeaderComponent)
      },
      {
        path: 'chart',
        loadComponent: () => import('./shared/components/graph-chart/graph-chart.component').then(m => m.GraphChartComponent)
      }, {
        path: 'info-panel',
        loadComponent: () => import('./shared/components/info-panel/info-panel.component').then(m => m.InfoPanelComponent)
      }, {
        path: 'kpi-cards-container',
        loadComponent: () => import('./shared/components/kpi-cards-container/kpi-cards-container.component').then(m => m.KpiCardsContainerComponent)
      }, {
        path: 'topitems-top-vendors',
        loadComponent: () => import('./shared/components/top-items-vendors-tabs/top-items-vendors-tabs.component').then(m => m.TopItemsVendorsTabsComponent)
      },
      
      { path: '**', component: NotefoundComponent, title: 'notfound' },
    ],
  },
];