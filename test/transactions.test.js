const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.should();
chai.use(chaiHttp);

describe("Route transactions", () => {

    /* Test all transactions */

    describe("GET /transactions", () => {
        it("Traer todas las transacciones", () => {
            chai.request(server)
                .get("/transactions")
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("string");
                    console.log(error)
                    response.body.length.should.be.eq(10);
                done();
                })
        });
    });

});