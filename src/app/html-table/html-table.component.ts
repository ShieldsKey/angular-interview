import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http.service';
import { RootObject } from '../interfaces/searchResults';

@Component({
  selector: 'app-html-table',
  templateUrl: './html-table.component.html',
  styleUrls: ['./html-table.component.css']
})
export class HtmlTableComponent implements OnInit {
    baseObject$: Observable<RootObject>

    constructor(private readonly httpService: HttpService) { }

    public ngOnInit(): void {
        this.baseObject$ =this.httpService.getSearchResults();
    }

}