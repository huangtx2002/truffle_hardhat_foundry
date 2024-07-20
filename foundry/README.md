1. install foundry
   mkdir foundry
   cd foundry
   curl -L https://foundry.paradigm.xyz | bash

source /home/sean/.bashrc

foundryup

2. init a project
   forge init

3. build the project
   forge build

4. test the project
   forge test
   forge test -vvvv

5. install a lib
   forge install openzeppelin/openzeppelin-contracts

6. deploy contract to
   source .env
   forge script script/Deploy.sol:SpacebearScript --broadcast --verify --rpc-url ${SEPOLIA_RPC_URL}

## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
