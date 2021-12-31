const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index");

chai.should(server);

chai.use(chaiHttp);

describe("Chai Implemntation", () => {
    describe("tasks", (done) => {
        chai.request(server)
        .get("api/group/all")
        .end((err, response) => {
            response.should.have.status(200);
            done();
        })
    })
})