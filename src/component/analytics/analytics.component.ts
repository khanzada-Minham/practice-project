import { Component } from '@angular/core';
import { SidebarComponent } from "../../Shared/sidebar/sidebar.component";

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {

}
