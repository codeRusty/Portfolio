import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { WorkComponent } from './pages/work/work.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryItemComponent } from './pages/gallery-item/gallery-item.component';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { GalleryItemDetailsComponent } from './pages/gallery-item-details/gallery-item-details.component';
import { AddGalleryItemComponent } from './pages/add-gallery-item/add-gallery-item.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'work', component: WorkComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogsComponent },
    { path: 'blog/add', component: AddBlogComponent },
    { path: 'blog/:id', component: BlogDetailsComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'gallery/add', component: AddGalleryItemComponent },
    { path: 'gallery/:id', component: GalleryItemDetailsComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
