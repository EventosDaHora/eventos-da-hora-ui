import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
// @ts-ignore
export class DataService {
    public searchWord: string;
    public categoryId: string;

    public messageSourceSearchWord = new BehaviorSubject<string>(this.searchWord);
    currentMessageSearchWord = this.messageSourceSearchWord.asObservable();

    public messageSourceCategoryId = new BehaviorSubject<string>(this.categoryId);
    currentMessageCategoryId = this.messageSourceCategoryId.asObservable();

    constructor() {}

    changeMessageSearchWord(searchWord: string) {
        this.messageSourceSearchWord.next(searchWord)
    }

    changeMessageCategoryId(categoryId: string) {
        this.messageSourceCategoryId.next(categoryId)
    }

}