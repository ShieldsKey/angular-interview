import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpService } from "../http.service";
import {catchError, finalize} from "rxjs/operators";
import { Result, RootObject } from "../interfaces/searchResults";

export class PackageDataSource implements DataSource<Result> {
    private packageSubject = new BehaviorSubject<Result[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public packageCount = 0;

    public loading$ = this.loadingSubject.asObservable();

    constructor(private packageService: HttpService) { }

    connect(packageViewer: CollectionViewer): Observable<Result[]> {
        console.log("Connecting data source");
        return this.packageSubject.asObservable();
    }

    disconnect(packageViewer: CollectionViewer): void {
        this.packageSubject.complete();
        this.loadingSubject.complete();
    }

    loadPackages(pageIndex: number, pageSize: number) {
        this.loadingSubject.next(true);
        this.packageService.getSearchResultsFilter(pageIndex, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe((rootObject: RootObject) => {
            this.packageSubject.next(rootObject.results);
            this.packageCount = rootObject.total;
        }
        );
    }
}