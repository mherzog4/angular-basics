import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<p> Hello world! </p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['']
})
export class AppComponent {
  name = 'matt herzog'
  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png'
  images = ['https://angular.io/assets/images/logos/angular/angular.png', 'https://angular.io/assets/images/logos/angular/angular_solidBlack.png']
  currentDate = new Date()
  cost = 2000
  temp = 25.3
  pizza = {
    toppings: 
      ['pepperoni', 'sausage', 'mushrooms', 'onions', 'olives', 'pineapple'],
      size: 'large'
  }

  blueClass = false
  fontSize = 20

  getName() {
    return this.name
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value
  }

  logImg(event: string) {
    console.log(event)
  }
}