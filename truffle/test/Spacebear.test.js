const Spacebear = artifacts.require("Spacebear");
const truffleAssert = require("truffle-assertions");

contract("Spacebear", (accounts) => {
  it("should credit an NFT to a specific account", async() => {
    const spacebearInstance = await Spacebear.deployed();
    let txResult = await spacebearInstance.safeMint(accounts[0], "spacebear_1.json");
    //assert.equal(txResult.logs[0].args.from, "0x0000000000000000000000000000000000000000", "From is not the zero address");
    //assert.equal(txResult.logs[0].event, "Transfer", "Event is not the transfer Event");
    console.log(txResult.logs[0].args);
    truffleAssert.eventEmitted(txResult, "Transfer", {from:  "0x0000000000000000000000000000000000000000", to: accounts[0], tokenId: web3.utils.toBN(0)});
    assert.equal(await spacebearInstance.ownerOf(0), accounts[0], "Owner of Token 1 is not equal account 2");
  })
})