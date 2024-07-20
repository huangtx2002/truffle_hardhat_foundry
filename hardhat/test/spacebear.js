const {expect} = require('chai');
const hre = require('hardhat');

describe('Spacebear', function() {
  it("is possible to mint a token", async () => {
    const Spacebear = await hre.ethers.getContractFactory("Spacebear");
    const spacebearInstance = await Spacebear.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    const [owner, otherAccount] = await hre.ethers.getSigners();
    await spacebearInstance.safeMint(otherAccount.address);
    expect(await spacebearInstance.ownerOf(0)).to.equal(otherAccount.address);
  })

  it("fails to transfer tokens from the wrong address", async() => {
    const Spacebear = await hre.ethers.getContractFactory("Spacebear");
    const spacebearInstance = await Spacebear.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
    const [owner, otherAccount, notTheNFTOwner] = await hre.ethers.getSigners();
    await spacebearInstance.safeMint(otherAccount.address);

    expect(await spacebearInstance.ownerOf(0)).to.equal(otherAccount.address);
    await expect(spacebearInstance.connect(notTheNFTOwner).transferFrom(otherAccount.address, notTheNFTOwner.address, 0)).to.be.revertedWith("ERC721: caller is not token owner nor approved");
  })
})