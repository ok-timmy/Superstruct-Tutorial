/// <reference types="cypress" />

// const { baseURL } = require("cypress");

describe("Test Get API endpoint", () => {
  //Test Root Route
  it("Checks root route", () => {
    cy.request("GET", "http://localhost:5000").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.equal(
        "This app is working normally now"
      );
    });
  });

  //Test the sign up route with the expected data type
  it("Test The Signup Route", () => {
    const id = Number(Math.random().toFixed(0));
    const userDetails = {
      id,
      firstName: "Timilehin",
      lastName: "Okunola",
      userName: "Israel",
    };
    cy.request("POST", "http://localhost:5000/api/auth/register", userDetails).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("message");
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.be.an("object");
      expect(response.body.data.schema).to.have.property("firstName");
      expect(response.body.data.schema).to.have.property("lastName");
      expect(response.body.data.schema).to.have.property("userName");
    });
  });

  //Test The Sign Up route with wrong datatype for 'id'
  it("Test The Signup Route", () => {
    const userDetails = {
      id: "",
      firstName: "Timilehin",
      lastName: "Okunola",
      userName: "Israel",
    };
    cy.request({method: "POST", url:"http://localhost:5000/api/auth/register", failOnStatusCode:false,  userDetails}).then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body).to.have.property("Error");
      const errorArray = JSON.parse(response.body.Error)
      expect(errorArray[0].key).to.be.equal("id");
      expect(errorArray[1].key).to.be.equal("firstName");
      expect(errorArray[2].key).to.be.equal("lastName");
      expect(errorArray[3].key).to.be.equal("userName");
    });
  });

  //Test The Login Route
  it("returns a successful response with expected data", () => {
    cy.request("POST", "http://localhost:5000/api/auth/login/", {
      userName: "oktimmy",
    }).then((response) => {
      expect(response.status).to.equal(200); // Assert status code
      expect(response.body).to.have.property("message"); // Assert presence of 'data' property
      // Add additional assertions based on your expected response data structure
      expect(response.body.message).to.be.an("string"); // Example: Assert data is an array
      // expect(response.body.data[0]).to.have.property('id'); // Example: Assert first element has 'id' property
    });

    // .as("userDetails"); // Replace '/api/endpoint' with your actual API endpoint
    // cy.get("@userDetails").then((users) => {
    //   expect(users.status).to.eq(200);
    //   assert.isArray(users.body.data, "Users Response is an array");
    // });
  });
});
