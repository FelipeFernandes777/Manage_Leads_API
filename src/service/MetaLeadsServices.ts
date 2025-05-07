import {apiMeta} from "../config/axiosConfig";
import {User} from "../modal/user/User";
import UserLeadDTO from "../modal/user/UserLeadDTO";
import axios from "axios";

export class metaLeadsServices {
    private readonly META_API = apiMeta;

    protected async sendLeadsForMetaApi(leads: UserLeadDTO): Promise<User> {
        try{
            if(leads.name == null || leads.phone == null || leads.promotion == null) {
              console.error(`No name found for ${leads.name}: ${leads.phone}`);
            }
            const newLead = new User(leads.name, leads.phone, leads.promotion);

            await axios.post(String(this.META_API), newLead );
            return newLead;
        }catch (e) {
            console.error("Erro no SnedLeadsForMetaAPI >>>>>>>>>>> " + e + " <<<<<<<<<<")
            throw new Error(`${e}`);
        }
    }
}