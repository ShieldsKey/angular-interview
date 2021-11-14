import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HttpService } from '../http.service';
import { merge } from "rxjs";
import { PackageDataSource } from './package-datasource';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
})
export class MaterialTableComponent implements OnInit, AfterViewInit  {
    loading = false
    dataSource: PackageDataSource;
    displayedColumns: string[] = ['name', 'scope', 'version', 'date'];

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private readonly httpService: HttpService) { }

    public ngOnInit(): void {
        this.dataSource = new PackageDataSource(this.httpService);

        this.dataSource.loadPackages(0,3);

    }

    ngAfterViewInit() {
        merge(this.paginator.page)
        .pipe(
            tap(() => this.loadPackagePage())
        )
        .subscribe();

    }

    loadPackagePage(): void {
        this.dataSource.loadPackages(
            this.paginator.pageIndex,
            this.paginator.pageSize
       )
    }

}