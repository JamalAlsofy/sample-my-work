
export interface Product {
    id: number;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    quantity: number;
    unit?: string;
    barcode?: string;
    rating?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Purchase {
    productId: number;
    quantity: number;
}