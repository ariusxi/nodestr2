import {Request, Response} from "express";
import { ContactController } from "../controllers/crmController";

export class Routes{

    //Chamando controllers
    public contactController: ContactController = new ContactController();

    //Definindo rotas
    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Node Store V 0.1'
            });
        });

        //Contato
        app.route('/contact')
        .get(this.contactController.getContacts)
        //POST endpoint
        .post(this.contactController.addNewContact);

        //Detalhes de contato
        app.route('/contact/:id')
        .get(this.contactController.getContactWithID)
        .put(this.contactController.updateContact)
        .delete(this.contactController.deleteContact);
    }
}