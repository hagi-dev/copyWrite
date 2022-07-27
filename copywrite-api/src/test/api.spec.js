const request = require("supertest");
const { expect, assert } = require("chai");

const checkPalindrome = require("../utils/checkPalindrome");
const reverseWord = require("../utils/reverseWord");

const server = require("../app");

/**
 * Testing of the actions endpoint
 */

describe("GET endpoint Api Text", () => {
  describe("for request response status", () => {
    it("should response with status 200 if sent text as query in the route ", (done) => {
      request(server).get("/iecho?text=test").expect(200, done);
    });
    it("should response with status 400 if not sent text as query in the route ", (done) => {
      request(server).get("/iecho").expect(400, done);
    });
  });
  describe("for request data response ", () => {
    it("should response with the text inverted", async () => {
      let reponse = await request(server).get("/iecho?text=test");
      expect(reponse.body.text).equal("tset");
    });
    it("should response with an message error if not send the text in the query of requets ", async () => {
      let reponse = await request(server).get("/iecho");
      expect(reponse.body.error).equal("no text");
    });
    it("should response with (palindrome:true) if the text is palindrome ", async () => {
      let reponse1 = await request(server).get("/iecho?text=saninas");
      let reponse2 = await request(server).get("/iecho?text=ana");
      let reponse3 = await request(server).get("/iecho?text=latital");
      expect(reponse1.body.palindrome).equal(true);
      expect(reponse2.body.palindrome).equal(true);
      expect(reponse3.body.palindrome).equal(true);
    });
    it("should response with (palindrome:false) if the text is not palindrome ", async () => {
      let reponse1 = await request(server).get("/iecho?text=juan");
      let reponse2 = await request(server).get("/iecho?text=pedro");
      let reponse3 = await request(server).get("/iecho?text=sacarias");
      expect(reponse1.body.palindrome).equal(false);
      expect(reponse2.body.palindrome).equal(false);
      expect(reponse3.body.palindrome).equal(false);
    });
  });
});
describe("test function of the directory utils", () => {
  describe("function that check if palindrome", () => {
    it("should return true if palondrome the text", () => {
      expect(checkPalindrome("oro")).equal(true);
      expect(checkPalindrome("anilina")).equal(true);
      expect(checkPalindrome("sagas")).equal(true);
      expect(checkPalindrome("selles")).equal(true);
    });
    it("should return false if not palondrome the text", () => {
      expect(checkPalindrome("test")).equal(false);
      expect(checkPalindrome("juanito")).equal(false);
      expect(checkPalindrome("cocodrilo")).equal(false);
      expect(checkPalindrome("sertes")).equal(false);
    });
  });

  describe("function that return the reverse the letters of a word ", () => {
    it("should return true if palondrome the text", () => {
      expect(reverseWord("oro")).equal("oro");
      expect(reverseWord("anilina")).equal("anilina");
      expect(reverseWord("pedro")).equal("ordep");
      expect(reverseWord("juan")).equal("nauj");
    });
  });
});
