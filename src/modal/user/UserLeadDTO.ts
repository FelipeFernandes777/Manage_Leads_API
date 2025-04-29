import {IPromotionType} from "../promotion/promotionType";

export default interface UserLeadDTO {
    name: string;
    phone: string;
    promotion: IPromotionType;
}