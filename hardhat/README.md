1. install Hardhat
   mkdir hardhat
   cd hrdhat
   npm init -y
   npm install --save-dev hardhat

2. init a Hardhat project
   npx hardhat

3. build contracts sol, unit test sol and deployment sol under folder contracts, test and scripts
   npm install @openzeppelin/contracts

4. run unit tests
   npx hardhat test

5. compile
   npx hardhat compile

6. deploy to local
   npx hardhat node -- start a node
   npx hardhat run --network localhost scripts/deploy.js

7. deploy to testnet Sepolia
   npx hardhat run --network sepolia scripts/deploy.js

8. verify contract on Sepolia
   npx hardhat verify --network sepolia <address of contract>
