import { Component } from '@angular/core';
import { CardComponentComponent } from "./card-component/card-component.component";
import { TableComponentComponent } from "./table-component/table-component.component";
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponentComponent, TableComponentComponent, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
