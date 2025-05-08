import {MetaLeadsServices} from "../service/MetaLeadsServices";
import {Request, Response} from "express";

export default class MetaLeadsAPIController {
    private readonly metaLeadsServices = new MetaLeadsServices();

    public async execute (request:Request, response:Response) {
        try {
            const { name, phone, quantity, promotion_name, price, utm } = request.body;

            const result = await this.metaLeadsServices.sendLeadsForMetaApi({
                name,
                phone,
                promotion: {
                    name: promotion_name,
                    quantity: quantity,
                    price: price
                },
                utm
            });

            console.log(result)

            response.status(200).json({
                status: 'sucess',
                user: result,
                statusCode: 200
            })
        }catch (error) {
            response.status(response.statusCode).json({
                message: "Falha ao enviar leads para o Meta API",
                status: 'error',
                statusCode: response.statusCode
            })
        }
    }
    public async getAllLeads(request:Request, response:Response) {
        try {
            const result = await this.metaLeadsServices.getAllLeads();

            response.status(200).json({
                status: 'sucess',
                user: result,
                statusCode: 200,
            })
        }catch (e) {
            console.error("Erro no getAllLeadsController >>>>>>>>>>> " + e + " <<<<<<<<<<")
            throw new Error(`${e}`);
        }
    }
}