import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { InitialComponent } from './initial';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      {
        path: '',
        component: InitialComponent
      },
      { path: 'document',
        loadChildren: () => import('./document/document.module').then(m => m.DocumentModule)
      },
      { path: 'group',
        loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
      },
      { path: 'news',
        loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
      },
      { path: 'page',
        loadChildren: () => import('./page/page.module').then(m => m.PageModule)
      },
      { path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
