import { Component } from '@angular/core';
import { DataFetchService } from '../../Services/data-fetch.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  Api_Data_Stor: any;
  searchig_Data: any;
  constructor(private dataFetchService: DataFetchService, private router: Router) {
    this.dataFetchService.getDataFetch().subscribe((values) => {
      this.Api_Data_Stor = values
    })
  }
  searchValuse(inputValues: any) {
    let search_Find = this.Api_Data_Stor.filter((x: { name: string; }) => x.name.toLowerCase().includes(inputValues.toLowerCase()))
    this.searchig_Data = search_Find;
    this.searchig_Data.forEach((items: any) => {
      if (items.name == inputValues) {
        console.log(items);
      }
    })

  }
  navigateTo(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    if (value != null) {
      this.router.navigate([value]);
    }
  }
}
