import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { DataFetchService } from '../../Services/data-fetch.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  On_Filter_Data:string = "";

  constructor(private dataFetchService: DataFetchService, private router: Router) {
    this.dataFetchService.getDataFetch().subscribe((values) => {
      this.Api_Data_Stor = values;
    });
  }

  filterValues(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.On_Select_Values = selectElement.value;
    console.log('Filter applied on:', this.On_Select_Values);
  }

  searchValuse(inputValue: string) {
    const filteredData = this.Api_Data_Stor.filter((item: any) => {
      const searchField = item[this.On_Select_Values.toLowerCase()];
      return searchField && searchField.toLowerCase().includes(inputValue.toLowerCase());
    });
    this.On_Filter_Data = filteredData;
    console.log('Search Results:', this.On_Filter_Data);
  }

}
