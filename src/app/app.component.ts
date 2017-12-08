import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pageTitle = 'Parent-Child component data sharing using Input binding in Angular5';
  public laptopsList = ['HP', 'Lenovo', 'Acer', 'Dell'];
  public mobilesList = ['HTC', 'Nokia', 'Samsung', 'Apple'];
  public laptop: string;
  public mobile: string;
  public addLaptop() {
    if (this.laptop) {
      this.laptopsList.push(this.laptop);
      this.laptop = '';
    }
  }
  public addMobile() {
    if (this.mobile) {
      this.mobilesList.push(this.mobile);
      this.mobile = '';
    }
  }
}
