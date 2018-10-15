"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        //Chamando controllers
        this.contactController = new crmController_1.ContactController();
    }
    //Definindo rotas
    routes(app) {
        app.route('/')
            .get((req, res) => {
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
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map