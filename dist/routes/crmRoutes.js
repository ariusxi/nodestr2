"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'Node Store V 0.1'
            });
        });
        //Contato
        app.route('/contact')
            .get((req, res) => {
            res.status(200).send({
                message: 'Contato GET'
            });
        })
            //POST endpoint
            .post((req, res) => {
            res.status(200).send({
                message: 'Contato POST'
            });
        });
        //Detalhes de contato
        app.route('/contact/:id')
            .get((req, res) => {
            res.status(200).send({
                message: 'Contato id GET'
            });
        })
            .put((req, res) => {
            res.status(200).send({
                message: 'Contato id PUT'
            });
        })
            .delete((req, res) => {
            res.status(200).send({
                message: 'Contato id DELETE'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map