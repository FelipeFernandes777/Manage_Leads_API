import {apiMeta} from "../config/axiosConfig";
import {User} from "../modal/user/User";
import UserLeadDTO from "../modal/user/UserLeadDTO";
import axios from "axios";

export class MetaLeadsServices {
    private readonly META_API = apiMeta;

    public async sendLeadsForMetaApi(leads: UserLeadDTO): Promise<User> {
        try{
            if(leads.name == null || leads.phone == null || leads.promotion == null) {
              console.error(`No name found for ${leads.name}: ${leads.phone}`);
            }
            const newLead = new User(leads.name, leads.phone, leads.promotion);

            await this.META_API.post("/", newLead );
            return newLead;
        }catch (e) {
            console.error("Erro no SnedLeadsForMetaAPI >>>>>>>>>>> " + e + " <<<<<<<<<<")
            throw new Error(`${e}`);
        }
    }
}