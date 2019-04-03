import { IProductCategory } from 'app/shared/model/product-category.model';

export const enum Size {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
    XXL = 'XXL'
}

export interface IProduct {
    id?: number;
    name?: string;
    price?: number;
    size?: Size;
    imageContentType?: string;
    image?: any;
    productCategory?: IProductCategory;
}

export class Product implements IProduct {
    constructor(
        public id?: number,
        public name?: string,
        public price?: number,
        public size?: Size,
        public imageContentType?: string,
        public image?: any,
        public productCategory?: IProductCategory
    ) {}
}
