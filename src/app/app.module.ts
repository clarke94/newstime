import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroFeaturedComponent } from './components/hero-featured/hero-featured.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SlugPipe } from './pipes/slug/slug.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import { InfoboxComponent } from './components/infobox/infobox.component';
import { LocationResolverService } from './services/location-resolver/location-resolver.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        HeroFeaturedComponent,
        CardComponent,
        TabsComponent,
        PageNotFoundComponent,
        SlugPipe,
        SearchComponent,
        InfoboxComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NgxPaginationModule,
        LazyLoadImageModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [SlugPipe, LocationResolverService],
    bootstrap: [AppComponent]
})
export class AppModule { }
