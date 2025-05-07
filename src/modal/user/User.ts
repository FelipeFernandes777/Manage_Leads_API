import {IUserTypes, PromotionTypes} from "./IUserTypes";

export class User{
    private readonly fullName: string
    private readonly phone: string
    private readonly promotion: PromotionTypes;

    constructor(fullName: string, phone: string, promotion: PromotionTypes) {
        this.fullName = fullName;
        this.phone = phone;
        this.promotion = promotion;
    }

    get getNomeCompleto(): string {
        return this.fullName;
    }

    get getTelefone(): string {
        return this.phone;
    }

    get getPromotion(): PromotionTypes {
        return this.promotion;
    }

    public returnInfos():User {
        return this;
    }
}