import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'

import { AppComponent } from './app.component';
import { TopadComponent } from './topad/topad.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocalweatherComponent } from './localweather/localweather.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { BottomadComponent } from './bottomad/bottomad.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    TopadComponent,
    NavbarComponent,
    LocalweatherComponent,
    SubscribeComponent,
    FooterComponent,
    ArticleComponent,
    BottomadComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
