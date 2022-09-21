import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public name = "Pikachu";

  public itemImageUrl = "./assets/1.png";

  public successClass = "text-primary";

  constructor(private locate: Location) { }

  ngOnInit(): void {
  }

  // Child Route
  backHome(): void {
    this.locate.back();
  }

  greetUser() {
    return "Welcome " + this.name + "!";
  }

  getColor() {
    return 'red';
  }
  
  public clickCount = 0;

  onClick() {
    this.clickCount++;
  }

  logMessage(value: any) {
    console.log(value);
  }

  name1 = "";
  clearName() {
    this.name1 = "";
  }

  showMe: boolean | undefined;
}
