const UniswapV2Factory = artifacts.require('./UniswapV2Factory')

module.exports = function(deployer) {
  const setter = deployer.options.from
  deployer.deploy(UniswapV2Factory, setter)
}
