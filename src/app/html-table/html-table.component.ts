import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { Result, RootObject } from '../interfaces/searchResults';

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.css']
})
export class HtmlTableComponent implements OnInit {
    public loading = true;
    public results: Result[];
    public totalAngularPackages: number;
    constructor(private readonly httpService: HttpService) { }

    public ngOnInit(): void {
        this.httpService.getSearchResults()
        .pipe(
            finalize(() => this.loading = false))
            .subscribe((data: RootObject) => {
            this.results =  data.results;
            this.totalAngularPackages = data.total;
        });
    }

}