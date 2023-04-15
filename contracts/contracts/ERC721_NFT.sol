// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

abstract contract myERC721_NFT {

	event NFTCreated(address indexed nft, string indexed uri, address indexed owner);

	function mintMyNFT (string memory _name, string memory _symbol, string memory _baseURL, address _to) public {
		ERC721PresetMinterPauserAutoId NFTContract = new ERC721PresetMinterPauserAutoId(_name, _symbol, _baseURL);
		NFTContract.mint(_to);
		// emit NFTCreated(nft, NFTContract._baseURI(), _to);
		console.log("minted your NFT to ", _to);
	}
}