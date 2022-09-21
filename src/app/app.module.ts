import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { TableComponent } from './table/table.component';
import { TableDetailComponent } from './table-detail/table-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectiveComponent,
    TableComponent,
    TableDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
