const skz = artifacts.require("Skullyz");

module.exports = function (deployer) {
  deployer.deploy(skz, 'https://ipfs.io/ipfs/xxx/');
};