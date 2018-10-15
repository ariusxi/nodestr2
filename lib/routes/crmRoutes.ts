import {Request, Response} from "express";

export class Routes{
    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Node Store V 0.1'
            });
        });

        //Contato
        app.route('/contact')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Contato GET'
            });
        })
        //POST endpoint
        .post((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Contato POST'
            });
        });

        //Detalhes de contato
        app.route('/contact/:id')
        .get((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Contato id GET'
            });
        })
        .put((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Contato id PUT'
            });
        })
        .delete((req: Request, res: Response) => {
            res.status(200).send({
                message: 'Contato id DELETE'
            });
        });
    }
}