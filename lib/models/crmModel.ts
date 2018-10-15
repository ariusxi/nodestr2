import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
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