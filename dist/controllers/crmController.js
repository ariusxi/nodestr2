"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Contact = mongoose.model('Contact', crmModel_1.ContactSchema);
class ContactController {
    addNewContact(req, res) {
        let newContact = new Contact(req.body);
        newContact.save((err, contact) => {
            if (err)
                res.status(err);
            res.json(contact);
        });
    }
    getContacts(req, res) {
        Contact.find({}, (err, contact) => {
            if (err)
                res.send(err);
            res.json(contact);
        });
    }
    getContactWithID(req, res) {
        Contact.findById(req.params.id, (err, contact) => {
            if (err)
                res.send(err);
            res.json(contact);
        });
    }
    updateContact(req, res) {
        Contact.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, contact) => {
            if (err)
                res.send(err);
            res.json(contact);
        });
    }
    deleteContact(req, res, Response) {
        Contact.remove({ _id: req.params.id }, (err, contact) => {
            if (err)
                res.send(err);
            res.json({
                message: 'Contato deletado com sucesso'
            });
        });
    }
}
exports.ContactController = ContactController;
//# sourceMappingURL=crmController.js.map