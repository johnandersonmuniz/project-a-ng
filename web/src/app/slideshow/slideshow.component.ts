import { Component, OnInit } from '@angular/core';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

    customOptions: any = {
        loop: true,
        autoplay:true,
        responsiveClass: true,
        responsive: {
            0: {
             items: 1
         },
            480: {
             items: 1
         },
            940: {
             items: 1
         }
        },
     nav: true,
     navText: ['❮', '❯']
    };
    faShoppingBasket = faShoppingBasket;

    constructor() { }

    ngOnInit(): void {
    }

}
