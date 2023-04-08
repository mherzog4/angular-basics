import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<p> Hello world! </p>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: ['']
})
export class AppComponent {
  name = 'Matt'
  imgUrl = 'https://angular.io/assets/images/logos/angular/angular.png'

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