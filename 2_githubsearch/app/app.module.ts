import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GitHubService } from './services/github.service';

@NgModule({
  imports: [ BrowserModule, HttpModule, JsonpModule, FormsModule ],
  declarations: [ AppComponent, ProfileComponent ],
  providers:  [GitHubService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
