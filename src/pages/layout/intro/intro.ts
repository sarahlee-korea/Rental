import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  slides = [
    {
      title: "Welcome to Ajou Rental Service",
      description: "Swipe sideways<br>to see the rental process",
      image: "./assets/slide1.png",
      color: "#3465a4"
    },
    {
      title: "Select the equipment",
      description: "and add to the cart<br>or your wishlist",
      image: "./assets/slide2.png",
      color: "#c17d11"
    },
    {
      title: "Request rental",
      description: "and enter the following information :<br>Team leader, members and project info",
      image: "./assets/slide3.png",
      color: "#75507b"
    },
    {
      title: "Please wait your result\nuntil this Friday.",
      description: "Contact : <br>Sarah Lee, engel5105@ajou.ac.kr ",
      image: "./assets/slide4.png",
      color: "#555753"

    }
  ];


  constructor(public navCtrl: NavController) {
  }

}
