"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Informe o seu Nome'
    },
    lastName: {
        type: String,
        required: 'Informe o seu Sobrenome'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=crmModel.js.map