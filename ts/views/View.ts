export abstract class View<T> {
    private _element: JQuery;

    constructor(selector: string) {
        this._element = $(selector);
    }

    updateList(model: T): void {
        let template = this.template(model);
        this._element.html(
            template + this._element.html()
        );
    }

    abstract template(model: T): string;
}