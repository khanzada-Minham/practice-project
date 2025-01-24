import { Component } from '@angular/core';
import { SidebarComponent } from "../../Shared/sidebar/sidebar.component";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {

}
