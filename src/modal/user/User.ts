import {IPromotionType} from "../promotion/promotionType";

export class User {
    private readonly fullName: string
    private readonly phone: string
    private promotion: IPromotionType

    constructor(fullName: string, phone: string, promotion: IPromotionType) {
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

    get getPromotion():IPromotionType {
        return this.promotion;
    }

    public returnInfos():User {
        return this;
    }
}