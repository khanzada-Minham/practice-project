import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../../Shared/sidebar/sidebar.component';
import { DataFetchService } from '../../Services/data-fetch.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBarComponent } from "../../Shared/search-bar/search-bar.component";
import { SearchService } from '../../Services/search.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, CommonModule, NgxPaginationModule, SearchBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  user: any;
  categoriesData:any
  constructor(private dataFetchService: DataFetchService, private Search:SearchService) {
    this.dataFetchService.getDataFetch().subscribe((values) => {
      this.user = values;
    });
    this.Search.On_Filter_Data = this.categoriesData
  }

  pSize: number = 4;
  currentPage: number = 1;
  
}


