import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericErrorHandler } from './core/error/error-handler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [{provide: ErrorHandler, useClass: GenericErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
