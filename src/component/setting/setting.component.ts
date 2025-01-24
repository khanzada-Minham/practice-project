import { Component } from '@angular/core';
import { SidebarComponent } from "../../Shared/sidebar/sidebar.component";

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

}
