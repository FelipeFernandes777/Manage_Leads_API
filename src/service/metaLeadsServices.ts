import {apiMeta} from "../config/axiosConfig";
import {User} from "../modal/user/User";
import UserLeadDTO from "../modal/user/UserLeadDTO";

export class metaLeadsServices {
    private readonly META_API = apiMeta;

    protected sendLeadsForMetaApi(leads: UserLeadDTO):User {
        if(leads.name == null || leads.phone == null || leads.promotion == null) {
            throw new Error(`No name found for ${leads.name}: ${leads.phone}`);
        }
        const newLead = new User(leads.name, leads.phone, leads.promotion);
        return newLead;
    }
}