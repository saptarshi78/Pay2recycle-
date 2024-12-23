// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Pay2Recycle {
    struct User {
        address userAddress;
        uint rewardPoints;
    }

    mapping(address => User) public users;

    function logRecycling(address _user, uint _points) public {
        if (users[_user].userAddress == address(0)) {
            users[_user] = User(_user, 0);
        }
        users[_user].rewardPoints += _points;
    }

    function getRewardPoints(address _user) public view returns (uint) {
        return users[_user].rewardPoints;
    }
}
