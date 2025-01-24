import { Component } from '@angular/core';
import { SidebarComponent } from "../../Shared/sidebar/sidebar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
