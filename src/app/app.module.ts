import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoadableModule, matcher} from 'ngx-loadable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadableModule.forRoot({
			moduleConfigs: [{ name: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule), matcher }, { name: 'app-lazy2', loadChildren: () => import('./lazy2/lazy2.module').then(m => m.Lazy2Module), matcher, isElement: true }]
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
