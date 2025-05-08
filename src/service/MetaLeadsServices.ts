import {apiMeta} from "../config/axiosConfig";
import {User} from "../model/user/User";
import UserLeadDTO from "../model/user/UserLeadDTO";
import prisma from "../config/prsimaInit";

export class MetaLeadsServices {
    private readonly META_API = apiMeta;
    private readonly repository = prisma;

    public async sendLeadsForMetaApi(leads: UserLeadDTO): Promise<User> {
        try{
            if(leads.name == null || leads.phone == null || leads.promotion == null) {
              console.error(`No name found for ${leads.name}: ${leads.phone}`);
            }
            const newLead = new User(leads.name, leads.phone, leads.promotion,leads.utm);

            console.log(newLead.getPromotion)

            await this.repository.user.create({
                data: {
                    fullName: newLead.getNomeCompleto,
                    phone: newLead.getTelefone,
                     promotion: {
                        create: {
                        name: newLead.getPromotion.name,
                        quantity: newLead.getPromotion.quantity,
                        price: newLead.getPromotion.price
                        }
                    },
                    utms: {
                        create: {
                            utm_source: newLead.getUtms
                        }
                    }
                }
            })
            await this.META_API.post("/", newLead );
            return newLead;
        }catch (e) {
            console.error("Erro no SnedLeadsForMetaAPI >>>>>>>>>>> " + e + " <<<<<<<<<<")
            throw new Error(`${e}`);
        }
    }
    public async getAllLeads() {
        try {
            return await this.repository.user.findMany({
                include: {
                    promotion: {
                        select: {
                            name: true,
                            quantity: true,
                            price: true
                        }
                    },
                    utms: {
                        select: {
                            utm_source: true
                        }
                    }
                }
            });
        }catch (e) {
            console.error("Erro no getAllLeads >>>>>>>>>>> " + e + " <<<<<<<<<<")
            throw new Error(`${e}`);
        }
    }
}