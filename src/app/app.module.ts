import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { DetailsComponent } from './pages/details/details.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SitemapComponent } from './pages/sitemap/sitemap.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { TermsComponent } from './pages/terms/terms.component';
import { AppRoutingModule } from './app-routing.module';
import { ProvidersModule } from './providers/providers.module';
import { TranslationsModule } from './translations/translations.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CookiePolicyComponent,
    DetailsComponent,
    EducationComponent,
    ExperienceComponent,
    NotFoundComponent,
    ProjectsComponent,
    SitemapComponent,
    SkillsComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProvidersModule,
    TranslationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
