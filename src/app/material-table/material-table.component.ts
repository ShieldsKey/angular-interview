import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Result, RootObject } from '../interfaces/searchResults';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit {
    dataSource: any[];
    displayedColumns: string[] = ['name', 'scope', 'version', 'date'];

    constructor(private readonly httpService: HttpService) { }

    public ngOnInit(): void {
        this.httpService.getSearchResults().subscribe((data: RootObject) => {
            this.dataSource = data.results.map((result: Result) => {
                return result.package;
            });
        });
    }

}