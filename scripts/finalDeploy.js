const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("chai");
  const contract = await chai.deploy(); //instance of contract

  await contract.deployed(); //now contract get deployed on hardhat blockchain
  console.log("Address of contract", contract.address); //displaying address of contract
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Address of contract : 0x93dED682057D71E531f6b5970Df741ca86f2F429