export interface IAddress {
    id?: number;
    address?: string;
    state?: string;
    zipcode?: string;
}

export class Address implements IAddress {
    constructor(public id?: number, public address?: string, public state?: string, public zipcode?: string) {}
}
