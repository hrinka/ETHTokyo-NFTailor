import { ethers } from "ethers";
import ERC721 from '../artifacts/contracts/ERC721_NFT.sol/myERC721_NFT.json';
import { program, Option } from "commander";
import * as dotenv from 'dotenv';
dotenv.config();

async function main(name: string, symbol: string, baseURL: string, account: string) {
        const privateKey: string = process.env.PRIVATE_KEY ?? "";
        if (privateKey === "") {
                throw new Error('No value set for environement variable PRIVATE_KEY');
        }
        const rpcUrl: string = process.env.SEPOLIA_URL ?? "";
        if (rpcUrl === "") {
                throw new Error('No value set for environement variable SEPOLIA_URL');
        }

        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const signer = new ethers.Wallet(privateKey, provider);
        const factory = new ethers.ContractFactory(ERC721.abi, ERC721.bytecode, signer);
        const contract = await factory.deploy();
        console.log(`ERC20 contract deploy address ${contract.address}`);
        console.log(`Transaction URL: http://sepolia.etherscan.io/tx/${contract.deployTransaction.hash}`);
        await contract.deployed();
        console.log("deploy completed");
        const tx = await contract.mintMyNFT(name, symbol, baseURL, account);
        tx.wait();

}


//コマンドライン引数を受け取るための処理
//実行コマンド↓
//npx ts-node scripts/deploy.ts --name Zenny --symbol ZNY --decimals 1
program
	.addOption(new Option('--name <string>', 'name of token (e.g. bitcoin)').makeOptionMandatory())
	.addOption(new Option('--symbol <string>', 'symbol of token (e.g. BTC)').makeOptionMandatory())
	.addOption(new Option('--baseURL <string>', 'link to nft (e.g. https://enftxamplebucket.s3.amazonaws.com/my-tokens/)').makeOptionMandatory())
	.addOption(new Option('--account <string>', 'account address (e.g. 0x64c92c4f3fb6110DF60565370D24B06C6DD49958)').makeOptionMandatory())
const options = program.opts();


main(options.name, options.symbol, options.baseURL, options.account).catch((error) => {
        console.log(error);
        process.exitCode = 1;
});
