import {IUserTypes, PromotionTypes} from "./IUserTypes";

export class User{
    private readonly fullName: string
    private readonly phone: string
    private readonly utms: string;
    private readonly promotion: PromotionTypes;

    constructor(fullName: string, phone: string, promotion: PromotionTypes, utms: string) {
        this.fullName = fullName;
        this.phone = phone;
        this.promotion = promotion;
        this.utms = utms;
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

    get getUtms(): string {
        return this.utms;
    }
    public returnInfos():User {
        return this;
    }
}