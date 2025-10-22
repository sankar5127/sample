const chai = require("chai");
const assert = chai.assert;
const added = require("../added");

describe("added numbers", () => {
    it("testing two numbers", ()=>{
        assert.equal(added(2,5), 7, "test casses success");
    })
})