var DappToken = artifacts.require("DappToken");

contract('DappToken', function(accounts) {
  var tokenInstance;

  it('initializes the conract with the correct values', function() {
    return DappToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.name();
    }).then(function(name) {
      assert.equal(name, 'DApp Token', 'has correct name');
      return tokenInstance.symbol(); 
    }).then(function(symbol) {
      assert.equal(symbol, 'DAPP', '');
      return tokenInstance.standard();
    }).then(function(standard) {
      assert.equal(standard, 'DApp Token v1.0', '');
    })
  })

  it('allocates the initial supply upon deployment', function() {
    return DappToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 10000000, 'sets the total supply to 10,000,000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance) {
      assert.equal(adminBalance.toNumber(), 10000000, 'it allows the initial supply to the admin account')
    })
  })
})