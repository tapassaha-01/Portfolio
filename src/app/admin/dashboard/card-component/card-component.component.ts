import { Component } from '@angular/core';
import { faCalendar,faCheck,faHourglass ,faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.css'
})
export class CardComponentComponent {
  faCalendar=faCalendar;
  faHourglass=faHourglass;
  faExclamationTriangle=faExclamationTriangle;
}
