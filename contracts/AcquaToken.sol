// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/solc-0.7/contracts/token/ERC20/ERC20.sol";

contract AcquaToken is ERC20 {
    mapping(address => uint) public balanceAcqua;

    constructor() ERC20("AcquaToken", "ACQ") {}

    function mint(address _to, uint _amount) external {
        _mint(_to, _amount);
        balanceAcqua[_to] += 1;
    }

    function burn(address _to, uint _amount) external {
        _burn(_to, _amount);
    }
}
