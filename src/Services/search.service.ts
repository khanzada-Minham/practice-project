import { Injectable } from '@angular/core';
import { DataFetchService } from './data-fetch.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  Api_Data_Stor: any;
  On_Select_Values: string = 'Email';
  On_Filter_Data: string = "";
  constructor(private dataFetchService: DataFetchService) {
    this.dataFetchService.getDataFetch().subscribe((items) => {
      this.Api_Data_Stor = items;
    })
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
