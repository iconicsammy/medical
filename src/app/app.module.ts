import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,ReactiveFormsModule,FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule
        
    ],
    declarations: [AppComponent],
   
    bootstrap: [AppComponent]
})
export class AppModule {}
