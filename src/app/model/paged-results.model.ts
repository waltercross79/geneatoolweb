export class PagedResults<T> {
    results: Array<T>;
    previous: String;
    next: String;
    count: Number;
}