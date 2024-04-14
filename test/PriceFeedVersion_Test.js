const { expect } = require("chai");

describe("PriceFeedVersion", function () {

  this.beforeAll(async function () {
    PriceFeedVersion = await ethers.getContractFactory("PriceFeedVersion");
    priceFeedVersion = await PriceFeedVersion.deploy();

    console.log(await priceFeedVersion.getAddress())
    console.log(await priceFeedVersion.getVersion())
  });

  it("Price Feed Version is 4", async function () {
    expect(await priceFeedVersion.getVersion()).to.equal(4);
  });

});
