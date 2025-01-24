import { Component, Pipe } from '@angular/core';
import { SidebarComponent } from '../../Shared/sidebar/sidebar.component';
import { DataFetchService } from '../../Services/data-fetch.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBarComponent } from "../../Shared/search-bar/search-bar.component";



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, CommonModule, NgxPaginationModule, SearchBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user: any;
  constructor(private dataFetchService: DataFetchService) {
    this.dataFetchService.getDataFetch().subscribe((values) => {
      // console.log(`values: ${JSON.stringify(values)}`);
      this.user = values;
    });
  }
  pSize:number = 4 ;
  currentPage:number = 1;
}
