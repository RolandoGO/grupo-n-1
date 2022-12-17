const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.should();
chai.use(chaiHttp);

/* Variables */
const id = 2;
const modelTransaction = {
    "description": "salario",
    "amount": 120000,
    "userId": 1,
    "categoryId": 2,
    "date": "2022-12-16T18:32:43.000Z"
};

describe("Route transactions", () => {

    /* Test all transactions */

    describe("GET /transactions", () => {
        it("Get all transactions", (done) => {
            chai.request(server)
                .get("/transactions")
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                done();
                });
        });
    });

    describe("GET /transactions/:id", () => {
        it("Get transactions by id", (done) => {
            chai.request(server)
                .get("/transactions/" + id)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                    response.body.body.should.have.property("id");
                    response.body.body.should.have.property("description");
                    response.body.body.should.have.property("amount");
                    response.body.body.should.have.property("userId");
                    response.body.body.should.have.property("categoryId");
                    response.body.body.should.have.property("date");
                done();
                });
        });

        it("Get transactions by id with id invalid", (done) => {
            chai.request(server)
                .get("/transactions/" + "id")
                .end((error, response) => {
                    response.should.have.status(404);
                done();
                });
        });
    });

    describe("POST /transactions", () => {
        it("Post new transaction", (done) => {
            chai.request(server)
                .post("/transactions")
                .send(modelTransaction)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                done();
                });
        });
    });

    describe("PUT /transactions/:id", () => {
        it("Edit transaction", (done) => {
            chai.request(server)
                .put("/transactions/" + id)
                .send(modelTransaction)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                done();
                });
        });

        it("Edit transaction with invalid body", (done) => {
            chai.request(server)
                .put("/transactions/" + id)
                .send("modelTransaction")
                .end((error, response) => {
                    response.should.have.status(400);
                done();
                });
        });
    });

    describe("DELETE /transactions/:id", () => {
        it("Delete transaction", (done) => {
            chai.request(server)
                .delete("/transactions/" + id)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                done();
                });
        });

        it("Delete transaction with invalid id", (done) => {
            chai.request(server)
                .delete("/transactions/" + "id")
                .end((error, response) => {
                    response.should.have.status(404);
                done();
                });
        });
    });

});