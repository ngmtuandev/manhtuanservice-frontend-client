type CartItem = {
    id: number;
    createdBy: number;
    createdAt: string;
    quantity: number;
    price: number;
};

export type TCart = {
    id: number;
    createdBy: number;
    createdAt: string | Date;
    items: CartItem[];
    total: number;
};