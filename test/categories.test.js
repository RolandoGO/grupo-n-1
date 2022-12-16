const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app");
const expect = require('chai').expect;
let should = chai.should();
chai.use(chaiHttp);

describe("Route categories", () => {

    /* Test all categories */

    describe("GET /categories", () => {
        it("should get all categories", (done) => {
            chai.request(server)
                .get("/categories")
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    res.body.body.should.be.a('array');
                    res.body.message.should.be.a('string');
                done();
                })
        });
    });

    describe('GET /categories/1',()=>{
        it('should get the category with id 1', (done) => {
            chai.request(server)
            .get('/categories/1')
            .end((err,res) => {
                console.log(res.body)
                expect(res.body.body).to.have.property('id').to.be.equal(1);
                expect(res).to.have.status(200);
            done();
            });
        });
    });

    //Error case
    describe('POST /categories',()=>{
        it('should try to post an empty body', (done) => {
            chai.request(server)
            .post('/categories')
            .send({})
            .end((err,res) => {
                expect(res.body).to.be.an("object").that.is.empty
                expect(res).to.have.status(500);
            done();
            });
        });
    });

});


// describe('get all countries: ',()=>{
//     it('should get all countries', (done) => {
//     chai.request(url)
//     .get('/countries')
//     .end( function(err,res){
//     console.log(res.body)
//     expect(res).to.have.status(200);
//     done();
//     });
//     });
//    });
   