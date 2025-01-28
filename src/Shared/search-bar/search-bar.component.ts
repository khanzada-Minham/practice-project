import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { DataFetchService } from '../../Services/data-fetch.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../Services/search.service';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  Api_Data_Stor: any;
  On_Select_Values: string = 'Email';
  On_Filter_Data: string = "";

  constructor(private dataFetchService: DataFetchService, private router: Router, private Search: SearchService) {
    this.dataFetchService.getDataFetch().subscribe((values) => {
      this.Api_Data_Stor = values;
    });
  }
  onFilterValue(event: Event) {
    this.Search.filterValues(event)
  }

  searchItems(items: string) {
    this.Search.searchValuse(items)
  }
}
