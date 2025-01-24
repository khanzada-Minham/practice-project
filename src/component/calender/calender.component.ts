import { Component } from '@angular/core';
import { SidebarComponent } from "../../Shared/sidebar/sidebar.component";

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {

}
