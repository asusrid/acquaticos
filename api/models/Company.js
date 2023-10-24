/*export */ class Company {
    constructor(id, companyName, companyId) {
        this.id = id;
        this.companyName = companyName;
        this.companyId = companyId;
    }
}

module.exports = {
    Company: Company
};