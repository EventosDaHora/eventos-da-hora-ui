import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class DataService {
    public searchWord: string;

    public messageSource = new BehaviorSubject<string>(this.searchWord);
    currentMessage = this.messageSource.asObservable();

    constructor() {}

    changeMessage(searchWord: string) {
        this.messageSource.next(searchWord)
    }

}