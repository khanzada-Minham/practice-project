import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  toggleButtonFlage = false;
  getToggle() {
    if (!this.toggleButtonFlage) {
      this.toggleButtonFlage = true;
      console.log(`this.toggleButtonFlage ${this.toggleButtonFlage}`);
    }
    else {
      this.toggleButtonFlage = false;
      console.log(`this.toggleButtonFlage ${this.toggleButtonFlage}`);
    }
  }
}
