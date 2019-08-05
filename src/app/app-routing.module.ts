import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SearchComponent } from './pages/search/search.component';
import { LocationResolverService } from './services/location-resolver/location-resolver.service';

const routes: Routes = [
    { path: '', component: HomeComponent, resolve: { countryCode: LocationResolverService } },
    { path: 'search', component: SearchComponent, resolve: { countryCode: LocationResolverService } },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
