import {PromotionTypes} from "./IUserTypes";

export default interface UserLeadDTO {
    name: string;
    phone: string;
    promotion: PromotionTypes;
    utm: string;
}