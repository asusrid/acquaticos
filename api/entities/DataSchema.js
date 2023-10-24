const EntitySchema = require("typeorm").EntitySchema; // import {EntitySchema} from "typeorm";
const Data = require("../models/Data").Data;

module.exports = new EntitySchema({
    name: "Data",
    target: Data,
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