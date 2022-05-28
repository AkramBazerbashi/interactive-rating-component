import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service'
@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.scss']
})
export class RatingPageComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }

  faStar = faStar;

  oneClicked() {
    const one = document.querySelector('.one');
    one?.classList.add('clicked');
    this.ds.data = "1";


    const two = document.querySelector('.two');
    two?.classList.remove('clicked');

    const three = document.querySelector('.three');
    three?.classList.remove('clicked');

    const four = document.querySelector('.four');
    four?.classList.remove('clicked');

    const five = document.querySelector('.five');
    five?.classList.remove('clicked');
  }

  twoClicked() {
    this.ds.data = "2";

    const one = document.querySelector('.one');
    one?.classList.remove('clicked');

    const two = document.querySelector('.two');
    two?.classList.add('clicked');

    const three = document.querySelector('.three');
    three?.classList.remove('clicked');

    const four = document.querySelector('.four');
    four?.classList.remove('clicked');

    const five = document.querySelector('.five');
    five?.classList.remove('clicked');
  }

  threeClicked() {
    this.ds.data = "3";

    const one = document.querySelector('.one');
    one?.classList.remove('clicked');

    const two = document.querySelector('.two');
    two?.classList.remove('clicked');

    const three = document.querySelector('.three');
    three?.classList.add('clicked');

    const four = document.querySelector('.four');
    four?.classList.remove('clicked');

    const five = document.querySelector('.five');
    five?.classList.remove('clicked');
  }

  fourClicked() {
    this.ds.data = "4";

    const one = document.querySelector('.one');
    one?.classList.remove('clicked');

    const two = document.querySelector('.two');
    two?.classList.remove('clicked');

    const three = document.querySelector('.three');
    three?.classList.remove('clicked');

    const four = document.querySelector('.four');
    four?.classList.add('clicked');

    const five = document.querySelector('.five');
    five?.classList.remove('clicked');
  }

  fiveClicked() {
    this.ds.data = "5";

    const one = document.querySelector('.one');
    one?.classList.remove('clicked');

    const two = document.querySelector('.two');
    two?.classList.remove('clicked');

    const three = document.querySelector('.three');
    three?.classList.remove('clicked');

    const four = document.querySelector('.four');
    four?.classList.remove('clicked');

    const five = document.querySelector('.five');
    five?.classList.add('clicked');
  }
}
