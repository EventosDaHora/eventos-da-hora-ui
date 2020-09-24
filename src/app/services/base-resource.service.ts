import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Directive, Injector} from "@angular/core";
import {BaseResourceModel} from "../dominio/base-resource.model";

@Directive()
// @ts-ignore
export abstract class BaseResourceService<T extends BaseResourceModel> {

  protected http: HttpClient;

  constructor(protected apiPath: string,
              protected injector: Injector,
              protected jsonDataToResourceFn: (jsonData: any) => T
  ) {
    this.http = injector.get(HttpClient);
  }

  getAll(): Observable<T[]> {
    return this.http.get(this.apiPath).pipe(
      map(this.jsonDataToResources.bind(this)),
      catchError(this.handlerError)
    );
  }

  getById(id: number): Observable<T> {
    const url = `${this.apiPath}/${id}`;

    return this.http.get(url).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handlerError)
    );
  }

  create(resource: T): Observable<T> {
    return this.http.post(this.apiPath, resource).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handlerError)
    );
  }

  doPost(resource: T, path:string): Observable<T> {
    return this.http.post(this.apiPath+path, resource).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handlerError)
    );
  }

  update(resource: T): Observable<T> {
    const url = `${this.apiPath}/${resource.getId()}`;
    return this.http.put(url, resource).pipe(
      map(() => resource),
      catchError(this.handlerError)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handlerError),
      map(() => null)
    );
  }

  // PROTECTED METHODS

  protected jsonDataToResources(jsonData: any[]): T[] {
    const resources: T[] = [];
    jsonData.forEach(element => resources.push(this.jsonDataToResourceFn(element)));
    return resources;
  }

  protected jsonDataToResource(jsonData: any): T {
    return this.jsonDataToResourceFn(jsonData);
  }

  protected handlerError(error: any): Observable<any> {
    console.log('Error to request -> ', error);
    return throwError(error);
  }

}
