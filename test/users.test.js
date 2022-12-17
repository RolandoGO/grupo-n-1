const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");

chai.should();
chai.use(chaiHttp);

/* Variables */
const id = 1;
const modelUserCreate = {
    "firstName": "Bruno", 
    "lastName": "David", 
    "email": "bruno@gmail.com", 
    "password": "1234",
    "roleId": 1
};
const modelUserUpdate = {
    "firstName": "Bruno", 
    "lastName": "David", 
    "email": "bruno1@gmail.com", 
    "password": "1234",
    "roleId": 1
};

describe("Route users", () => {

    /* Test all users */

    describe("GET /users", () => {
        it("Get all transactions", (done) => {
            chai.request(server)
                .get("/users")
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                done();
                });
        });
    });

    describe("GET /users/:id", () => {
        it("Get users by id", (done) => {
            chai.request(server)
                .get("/users/" + id)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                    response.body.body.should.have.property("id");
                    response.body.body.should.have.property("firstName");
                    response.body.body.should.have.property("lastName");
                    response.body.body.should.have.property("email");
                    response.body.body.should.have.property("password");
                    response.body.body.should.have.property("avatar");
                    response.body.body.should.have.property("roleId");
                done();
                });
        });

        it("Get users by id with id invalid", (done) => {
            chai.request(server)
                .get("/users/" + "id")
                .end((error, response) => {
                    response.should.have.status(404);
                done();
                });
        });
    });

    describe("POST /users", () => {
        it("Post new user", (done) => {
            chai.request(server)
                .post("/users")
                .send(modelUserCreate)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                done();
                });
        });
    });

    describe("PUT /users/:id", () => {
        it("Edit user", (done) => {
            chai.request(server)
                .put("/users/" + id)
                .send(modelUserUpdate)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                done();
                });
        });

        it("Edit user with invalid body", (done) => {
            chai.request(server)
                .put("/users/" + id)
                .send("modelTransaction")
                .end((error, response) => {
                    response.should.have.status(404);
                done();
                });
        });
    });

    describe("DELETE /users/:id", () => {
        it("Delete user", (done) => {
            chai.request(server)
                .delete("/users/" + id)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a("object");
                    response.body.should.have.property("status").eq(true);
                done();
                });
        });

        it("Delete user with invalid id", (done) => {
            chai.request(server)
                .delete("/users/" + "id")
                .end((error, response) => {
                    response.should.have.status(404);
                done();
                });
        });
    });

});