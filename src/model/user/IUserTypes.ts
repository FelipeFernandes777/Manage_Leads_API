
export interface IUserTypes {
    fullName: string;
    phone: string;
    promotion: PromotionTypes
}

export interface PromotionTypes {
    name: string;
    quantity: number;
    price: number;
}

export interface