import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '1John/:id', loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)},

  {path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: 'tableofcontents',
    loadChildren: () => import('./toc/toc.module').then( m => m.TocPageModule)},
  {path: 'chapter1', 
    loadChildren: () => import('./chapter1/chapter1.module').then( m => m.Chapter1PageModule)},
  {path: 'chapter2',
    loadChildren: () => import('./chapter2/chapter2.module').then( m => m.Chapter2PageModule)},
  {path: 'chapter3',
    loadChildren: () => import('./chapter3/chapter3.module').then( m => m.Chapter3PageModule)},
  {path: 'chapter4',
    loadChildren: () => import('./chapter4/chapter4.module').then( m => m.Chapter4PageModule)},
  {path: 'chapter5',
    loadChildren: () => import('./chapter5/chapter5.module').then( m => m.Chapter5PageModule)},
  {path: 'chapter1pg2',
    loadChildren: () => import('./chapter1pg2/chapter1pg2.module').then( m => m.Chapter1pg2PageModule)},
  {path: 'chapter1pg3',
    loadChildren: () => import('./chapter1pg3/chapter1pg3.module').then( m => m.Chapter1pg3PageModule)},
  {path: 'chapter2pg5',
    loadChildren: () => import('./chapter2pg5/chapter2pg5.module').then( m => m.Chapter2pg5PageModule)},
  {path: 'chapter2pg6',
    loadChildren: () => import('./chapter2pg6/chapter2pg6.module').then( m => m.Chapter2pg6PageModule)},
  {path: 'chapter3pg8',
    loadChildren: () => import('./chapter3pg8/chapter3pg8.module').then( m => m.Chapter3pg8PageModule)},
  {path: 'chapter4pg10',
    loadChildren: () => import('./chapter4pg10/chapter4pg10.module').then( m => m.Chapter4pg10PageModule)},
  {path: 'chapter5pg12',
    loadChildren: () => import('./chapter5pg12/chapter5pg12.module').then( m => m.Chapter5pg12PageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
