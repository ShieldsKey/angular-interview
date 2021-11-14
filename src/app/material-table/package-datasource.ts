import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";
import { HttpService } from "../http.service";
import {catchError, finalize} from "rxjs/operators";

export class PackageDataSource implements DataSource<any> {
    private packageSubject = new BehaviorSubject<any[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private packageService: HttpService) { }

    connect(packageViewer: CollectionViewer): Observable<any[]> {
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
        ).subscribe((packages) => this.packageSubject.next(packages))
    }
}