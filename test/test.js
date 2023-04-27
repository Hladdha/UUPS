const { ethers, upgrades } = require('hardhat');

describe('Token', function () {
  it('deploys', async function () {
    const TokenV1 = await ethers.getContractFactory('TokenV1');
    const proxy = await upgrades.deployProxy(TokenV1, { kind: 'uups' });
  });
  it('upgrades proxy', async function () {
    const TokenV1 = await ethers.getContractFactory('TokenV1');
    const proxy = await upgrades.deployProxy(TokenV1, { kind: 'uups' });
    const TokenV2 = await ethers.getContractFactory('TokenV2');
    await upgrades.upgradeProxy(proxy, TokenV2);
  });

});