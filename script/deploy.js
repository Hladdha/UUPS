const { ethers, upgrades } = require('hardhat');

describe('MyToken', function () {
  it('deploys', async function () {
    const TokenV1 = await ethers.getContractFactory('TokenV1');
    await upgrades.deployProxy(TokenV1, { kind: 'uups' });
  });
});