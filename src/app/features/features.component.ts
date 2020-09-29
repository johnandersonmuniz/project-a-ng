import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    customOptions: any = {
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            940: {
                items: 4
            }
        },
        nav: true,
        navText: ['❮', '❯']
    };
    faStar = faStar;
    faShoppingCart = faShoppingCart;

    constructor() { }

    ngOnInit(): void {
    }

}
