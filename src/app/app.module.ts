import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { TeamComponent } from './pages/team/team.component';
import { ErsteSchrittComponent } from './pages/quiz/erste-schritt/erste-schritt.component';
import { ZweiteSchrittComponent } from './pages/quiz/zweite-schritt/zweite-schritt.component';
import { DritteSchrittComponent } from './pages/quiz/dritte-schritt/dritte-schritt.component';
import { LandingComponent } from './pages/quiz/landing/landing.component';
import { ErgebnisseComponent } from './pages/quiz/ergebnisse/ergebnisse.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MaterialModule, MdNativeDateModule, MdSidenavModule} from '@angular/material';
import {ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {MdButtonModule} from '@angular/material';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import {TrackQuizService} from './services/track-quiz.service';
import { ResultBannerComponent } from './result-banner/result-banner.component';
import { ResultPanelsComponent } from './result-panels/result-panels.component';
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ImpressumComponent,
    TeamComponent,
    ErsteSchrittComponent,
    ZweiteSchrittComponent,
    DritteSchrittComponent,
    LandingComponent,
    ErgebnisseComponent,
    PageNotFoundComponent,
    SideNavComponent,
    QuizCardComponent,
    ResultBannerComponent,
    ResultPanelsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: false}),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    MdNativeDateModule,
    MdButtonModule,
    MdSidenavModule,
  ],
  providers: [TrackQuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
