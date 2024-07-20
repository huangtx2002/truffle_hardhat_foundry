(async () => {
  try {
    const Spacebear = await hre.ethers.getContractFactory("Spacebear");

    const spacebearInstance = await Spacebear.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");

    console.log("Spacebear deployed to: ", spacebearInstance.address);
  } catch(e) {
    console.error(e);
    process.exitCode = 1;
  }
})()