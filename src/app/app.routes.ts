import {Routes} from '@angular/router';
import {QuizComponent} from './pages/quiz/quiz.component';
import {TeamComponent} from './pages/team/team.component';
import {ImpressumComponent} from './pages/impressum/impressum.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';


export const ROUTES: Routes = [
  {path: 'quiz', component: QuizComponent},
  {path: 'team', component: TeamComponent},
  {path: 'impressum', component: ImpressumComponent},
  { path: '', redirectTo: 'quiz', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];
