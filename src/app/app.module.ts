import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";

import { BookModule } from "./book.module";
import { UserModule } from "./user/user.module";
import { SharedModule } from "./shared.module";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [ 
        BrowserModule,
        BookModule,
        UserModule,
        SharedModule,
        AppRoutingModule
    
    ],
    providers: [ ],
    bootstrap: [AppComponent]
})
export class AppModule{}