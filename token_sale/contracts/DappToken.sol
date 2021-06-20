// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DappToken {

  uint256 public _totalSupply;

  constructor() {
    _totalSupply = 10000000;
  }

  function totalSupply() public view returns(uint256) {
    return _totalSupply;
  }
}