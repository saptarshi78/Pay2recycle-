
# Pay2Recycle - Blockchain-based Waste Management System

**Pay2Recycle** is a blockchain-based waste management system that incentivizes recycling through a rewards mechanism. The project integrates recycling, blockchain, and user engagement to encourage responsible waste disposal while rewarding users with cryptocurrency tokens. These tokens can be redeemed for discounts, public utility credits, or donations, promoting environmental sustainability and user participation.

## Features
- **User Authentication**: Users can register and authenticate to track their recycling activities.
- **Reward System**: Users earn blockchain tokens based on their recycling contributions.
- **Blockchain Integration**: Smart contracts handle the distribution and management of rewards.
- **MongoDB Database**: Stores user data, recycling records, and reward balances.
- **Frontend**: A React.js frontend to interact with the backend and display the recycling dashboard.
- **Backend**: An Express.js server to manage API endpoints for user data, recycling activities, and token management.

## Project Structure

```
pay2recycle/
├── client/         # Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── package.json
├── server/         # Backend
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── wasteController.js
│   │   └── rewardController.js
│   ├── models/
│   │   ├── userModel.js
│   │   └── wasteModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── wasteRoutes.js
│   │   └── rewardRoutes.js
│   ├── app.js
│   └── .env
├── contracts/      # Smart Contracts
│   ├── Pay2Recycle.sol
│   ├── migrations/
│   │   └── deploy_contract.js
│   └── test/
│       └── contractTest.js
├── db/             # MongoDB (optional for database backups or utilities)
├── README.md       # Documentation
└── package.json    # Main project file
```

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Blockchain**: Solidity (for smart contracts on Ethereum or compatible chains)
- **Smart Contracts**: Deployed using Truffle or Hardhat
- **Cryptocurrency**: ERC-20 tokens for reward distribution

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (for local development, or use a cloud database service)
- Truffle or Hardhat (for blockchain development)

### Clone the Repository

```bash
git clone https://github.com/yourusername/pay2recycle.git
cd pay2recycle
```

### Backend Installation

1. Navigate to the **server** directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables in the `.env` file (e.g., MongoDB URI, JWT secrets).

4. Run the server:

    ```bash
    npm start
    ```

The backend should now be running at `http://localhost:5000`.

### Frontend Installation

1. Navigate to the **client** directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend application:

    ```bash
    npm start
    ```

The frontend should now be running at `http://localhost:3000`.

### Smart Contract Setup

1. Navigate to the **contracts** directory:

    ```bash
    cd contracts
    ```

2. Install dependencies for Truffle or Hardhat:

    ```bash
    npm install
    ```

3. Compile and deploy the smart contract to your local blockchain (e.g., Ganache) or a testnet:

    ```bash
    truffle migrate --network development
    ```

4. Ensure the smart contract is deployed correctly and linked to the frontend for interactions.

## Usage

- **User Registration**: Users can sign up through the frontend, where their information will be saved in the database.
- **Recycling Activity**: Users can log recycling activities, which will be stored in the backend.
- **Token Rewards**: Upon recycling, users will earn blockchain tokens that can be used for discounts or donations.

## Contributing

1. Fork the repository.
2. Clone your fork:

    ```bash
    git clone https://github.com/yourusername/pay2recycle.git
    ```

3. Create a new branch:

    ```bash
    git checkout -b feature/your-feature
    ```

4. Make your changes, and commit them:

    ```bash
    git commit -m "Add new feature"
    ```

5. Push to your branch:

    ```bash
    git push origin feature/your-feature
    ```

6. Create a pull request with a description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
