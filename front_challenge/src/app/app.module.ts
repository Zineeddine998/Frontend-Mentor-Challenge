import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FileringService } from "./filering.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [FileringService],
  bootstrap: [AppComponent],
})
export class AppModule {}
