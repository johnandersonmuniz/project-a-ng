import { Component, OnInit } from '@angular/core';
import { faFacebook, faGoogle, faInstagram, faTwitter, faVk, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;
  faClock = faClock;
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faTwitter = faTwitter;
  faVk = faVk;
  faInstagram = faInstagram;
  faYouTube = faYoutube;

  constructor() { }

  ngOnInit(): void {
  }

}
