pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/Spacebear.sol";

contract SpacebearTest is Test {
    Spacebear private spacebear;

    function beforeEach() public {
        spacebear = new Spacebear(address(this));
    }

    function testNameIsSpacebear() public {
        assertEq(spacebear.name(), "Spacebear");
    }

    
    function testMintingNFTs() public {
        spacebear.safeMint(msg.sender);
        assertEq(spacebear.ownerOf(0), msg.sender);
    }
}