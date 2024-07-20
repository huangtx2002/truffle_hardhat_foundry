1. setup env

1) download/install nodejs - https://nodejs.org/en
   node -v
   npm -v

2) install git - under linux ubuntu
   apt update
   apt install git
   git --version

3) install Visual Studi Code - VS Code
   install extesions - Solidity Visual Developer, Solity Juan Blanco, DotENV, Dracula Official

4) install truffle
   npm install -g truffle

5) init a truffle project
   truffle init
   npm init -y
   npm install --save @openzeppelin/contracts

6) add .sol files to folder contracts

7) compile contracts
   truffle compile

8) deploy contracts
   add deployment.js to folder migrations
   truffle develop - run migrate command on the CLI

9) install ganache
   npm install --global ganache

10) run ganache and truffle
    (1) add the below config to tuffle-config.js
    ==================
    ganache: {
    host: "127.0.0.1", // Localhost (default: none)
    port: 8545, // Standard Ethereum port (default: none)
    network_id: "\*", // Any network (default: none)
    },
    ===================

(2) run ganache command on terminal

(3) run 'truffle migrate --network ganache' - deploy contract to ganache

(4) run 'truffle console --network garache' - interact with contracts on ganache
truffle(ganache)> web3.eth.getAccounts()
truffle(ganache)> const spacebearInstance = await Spacebear.deployed()
truffle(ganache)> spacebearInstance.name()
truffle(ganache)> const accounts = await web3.eth.getAccounts()
truffle(ganache)> await spacebearInstance.safeMint(accounts[1], "spacebear_1.json")
truffle(ganache)> spacebearInstance.ownerOf(0)
truffle(ganache)> accounts[1]
truffle(ganache)> spacebearInstance.tokenURI(0)

11. unit tests
    (1) build unit tests js file under folder test
    (2) run unit tests
    truffle(ganache)> test
