// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceFeedVersion {
    AggregatorV3Interface private s_priceFeed;

    constructor() {
        s_priceFeed = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );
    }

    function getVersion() public view returns (uint256) {
        return s_priceFeed.version();
    }
}
