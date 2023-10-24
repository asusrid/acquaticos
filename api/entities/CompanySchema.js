const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Company = require("../models/Company").Company;

module.exports = new EntitySchema({
    name: "Company",
    target: Company,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        companyName: {
            type: "text"
        },
        companyId: {
            type: "text"
        }
    },
    // relations: {
    //     categories: {
    //         target: "Category",
    //         type: "many-to-many",
    //         joinTable: true,
    //         cascade: true
    //     }
    // }
});