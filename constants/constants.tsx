import { FaRegClock } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsHeartPulse } from "react-icons/bs";
import { GrStorage } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineDataObject } from "react-icons/md";

export const tokenomicsButtons = [
  {
    id: "tb1",
    text: "SCADS",
  },
  {
    id: "tb2",
    text: "TWINE",
  },
  {
    id: "tb3",
    text: "MARKET CAP",
  },
  {
    id: "tb4",
    text: "MINTING SPEED",
  },
  {
    id: "tb5",
    text: "PULSE",
  },
  {
    id: "tb6",
    text: "LIQUIDITY WALLET",
  },
  {
    id: "tb7",
    text: "TREASURY",
  },
  {
    id: "tb8",
    text: "DECENTRALIZATION",
  },
  {
    id: "tb9",
    text: "PROTECTION",
  },
  {
    id: "tb10",
    text: "SEIGNORAGE",
  },
  {
    id: "tb11",
    text: "TRANSPARENCY",
  },
  {
    id: "tb12",
    text: "PROOF OF HOLD",
  },
];

export const tokenomicsContent = [
  {
    id: "SCADS",
    paragraph:
      "SCADS is a stablecoin, its value referencing the USD for ease of use. It's important to note that SCADS is not pegged to the USD. It can only be minted when backed by collateral, specifically through the exchange of stablecoins for SCADS. This system operates independently, is characterized by fairness, and operates in a permissionless and fully decentralized manner. It continuously evolves within an automated, self-sustaining environment. Crucially, SCADS cannot be subject to seizure or freezing, as each user holds it in their own wallet. This ensures complete and genuine decentralized freedom and independence. It's worth emphasizing that SCADS has no owners who could be compelled to jeopardize users funds.",
  },
  {
    id: "TWINE",
    paragraph:
      "TWINE is a speculative token that also functions as a linear token, ensuring steady price growth and granting an advantageous position for exclusive SCADS minting.",
    list: [
      {
        list_one:
          "EXCLUSIVITY: Upon reaching a circulation supply of 5.5 million, TWINE gains exclusive rights to purchase SCADS. This exclusivity feature presents the potential for significant price appreciation, making it an enticing choice for investors seeking higher returns. This status of exclusivity is effective for a duration of 5 years.",
      },
      {
        list_two:
          "THE CURVED LINEAR FACTOR: The value encapsulated within the token is determined by the number of minted TWINE tokens. With each new TWINE token minted, the price experiences a consistent increase of 0.0000001.",
      },
    ],
  },
  {
    id: "MARKET CAP",
    paragraph:
      "The market cap for TWINE is defined by a lifetime supply of 21 million tokens. When the cap of 21 million tokens is reached, the calculated linear curved price for each TWINE will be $2.10. However, it's important to note that the market demand price range for TWINE is virtually limitless and will be determined by the level of demand in the market. This means that the price of TWINE can potentially exceed the calculated $2.10 per token based on market dynamics and demand levels.",
  },
  {
    id: "MINTING SPEED",
    paragraph:
      "As a fair algorithm, the minting speed is dynamically adjusted in response to the market capitalization of SCADS and the allocated time frame to reach the 21 million market cap. This adaptive approach ensures a balanced and equitable minting process within the ecosystem.",
    list: [
      {
        list_one:
          "Reward Speed Calculation: Minting Speed = (TWINE < 21,000,000 TWINE - TWINE ALREADY MINTED>) / (SCADS <TOTAL SCADS IN THE MARKET> * TIME <IN MINUTES, 15 YEARS IN MINUTES - TIME ELAPSED SINCE THE BEGINNING>)",
      },
      {
        list_two:
          "Reward Amount Calculation: TWINE Mint Amount = Hold SCADS Amount * Minting Speed * Difference in Time (in minutes)",
      },
      {
        list_three:
          "Function to Calculate Current Reward Speed: getCurrentRewardSpeed(): This function calculates the current minting speed. These formulas and functions are integral to the reward distribution mechanism within the algorithm. They ensure that rewards are distributed in a manner that aligns with the algorithm's design and objectives.",
      },
    ],
  },
  {
    id: "PULSE",
    paragraph:
      "s a smart contract that performs daily operations within the algorithm It buys (SCADS), mint (TWINE), and sells (TWINE) to (SCADS). It generates profits for the system and allocates them as follows: 80% goes back as a sinking fund increasing its investment in the system, and 20% goes to the LQUIDITY wallet in (SCADS) currency, which strengthens the collateralization of (SACDS). While creating a network effect due to transacting constantly. The self-sustaining network effect is a first that pioneers the algorithm on another layer.",
  },
  {
    id: "LIQUIDITY WALLET",
    paragraph:
      "The wallet functions as a repository for surplus liquidity within the algorithm. This excess liquidity is strategically invested as a liquidity provider and market maker within the cryptocurrency industry. All assets within the wallet are denominated in SCADS and TWINE and are allocated exclusively as investments in SCADS. The algorithm oversees and manages the wallet, ensuring that liquidity is supplied based on predefined criteria, contributing to the stability and functionality of the SCADS ecosystem.",
  },
  {
    id: "TREASURY",
    paragraph:
      "Security at the Core: PROOF OF RESERVE and PROOF OF COLLATERAL in SCADS Reserve and Collateral Crucial in SCADS: Integral Components: SCADS places utmost importance on the concept of reserve and collateral, considering them integral components of its operational framework. These elements are securely held in the treasury and users' wallets, forming the backbone of SCADS's financial robustness. Contracts for PROOF OF RESERVE and PROOF OF COLLATERAL: Proactive Measures: Despite having reserves and collateral securely held, SCADS reinforces its commitment to transparency through specific contracts. Contracts for PROOF OF RESERVE and PROOF OF COLLATERAL are established, providing clear verification mechanisms for the community. Mandatory Collateral for SCADS Minting: Risk Mitigation: SCADS takes a stringent approach to minting, requiring collateral for every SCADS minted. This ensures a risk-averse model, preventing the scenario where SCADS would exist without the necessary backing. Interconnected System: Collateralization Linkages: Logically intertwined, the SCADS ecosystem establishes a strong link between SCADS minting, collateral, and the subsequent minting of TWINE. This collateralized system contrasts with other stablecoins, such as USDT or USDC, providing a more tangible and secure financial foundation. Collateralized Assurance: SCADS, through the implementation of PROOF OF RESERVE and PROOF OF COLLATERAL contracts, reinforces its commitment to a robust and transparent financial model. By ensuring that every SCADS is minted with collateral, and subsequently linking the minting of TWINE to SCADS, SCADS establishes a genuinely collateralized system, setting it apart from other stablecoins in the digital financial landscape.",
  },
  {
    id: "DECENTRALIZATION",
    paragraph:
      "The algorithm operates in a permissionless, completely decentralized, and independent manner. There are no admin keys or owners, the system functions autonomously through interactions between contracts, without any human intervention. Upon launch, the Algorithm will have admin keys enabled for 3 month, allowing for potential fixes if necessary. However, during this access period, admins will have no access to contracts. Following this initial period, public admin keys will be burned, making them visible to all users. After the burning, developers will only have access to the front end for UI/UX improvements, ensuring that the core functionality remains decentralized and secure. The algorithm is immutable; it cannot be modified, updated, or changed. Any new venture or addition would need to be implemented as an added Layer 2. This emphasizes the unalterable nature of the algorithm's core functionality.",
  },
  {
    id: "PROTECTION",
    paragraph:
      "With a primary focus on the security and well-being of all users, SCADS, functioning as a stable coin, is inherently resistant to price manipulation. Additionally, the SCADS ecosystem has implemented a limited set of rules designed to ensure the safety of both the system and its participants:",
    list: [
      {
        list_one: "A 25% penalty for withdrawals made within a 24-hour period.",
      },
      {
        list_two: "A cap of 50,000 SCADS on withdrawals per day.",
      },
      {
        list_three:
          "Should a user require immediate access to their full capital, SCADS, being a stable asset, can be employed as a high-quality collateral for obtaining loans or bridge funding from various platforms.",
      },
    ],
    paragraph_two:
      "These rules act as safeguards, fortifying the algorithm against sudden fund withdrawals or potential manipulation. They are structured to maintain the stability and integrity of the system for all participants.",
  },
  {
    id: "SEIGNORAGE",
    paragraph:
      "Every system requires operational costs, which in this case, include decentralized anonymous servers. These servers serve critical functions such as acting as data nodes, providing redundancy, managing system flow, ensuring security, and preventing congestion. To sustain these essential services, a tax of 1.77% per transaction has been established. This tax contributes to the continuous and smooth operation of the system, enabling it to meet its objectives effectively. AS for exchanges. The minimum order is 100k SCADS.",
  },
  {
    id: "TRANSPARENCY",
    paragraph:
      "Every transaction conducted within the system is capable of being verified on the blockchain. In addition, the SCADS algorithm provides real-time tracking of all contract transactions, which are conveniently listed in the contract list. Users have accessible and immediate viewing of this information on the main page, ensuring transparency and ease of access to all participants. This emphasis on transparency enhances trust and confidence within the system.",
  },
  {
    id: "PROOF OF HOLD",
    paragraph:
      "SCADS introduces an innovative concept called Proof of Hold (POH) to ensure safety, security, and minimize investment risks. This approach involves users simply purchasing the stable coin and holding it. By doing so, they automatically mint TWINE, the linear token. To facilitate this process, the algorithm incorporates a mapping feature called 'isHolder' to monitor addresses that qualify as holders. The 'ProofOfHolding' function enables an address to include itself in this list, allowing for seamless participation in the Proof of Hold mechanism. This inventive approach provides a secure and risk-reduced investment experience for users.",
  },
];

export const statItems = [
  {
    id: "s1",
    name: "Adaptive minting speed",
    placeholder: "0.0000006",
    icon: <IoSpeedometerOutline />,
  },
  {
    id: "s2",
    name: "Funds in Pulse",
    placeholder: "8079.49",
    icon: <BsHeartPulse />,
  },
  {
    id: "s3",
    name: "Next Pulse",
    placeholder: "05:26:15",
    icon: <FaRegClock />,
  },
  {
    id: "s4",
    name: "Minted TWINE",
    placeholder: "1650851.99",
    icon: <GrStorage />,
  },
  {
    id: "s5",
    name: "TWINE price increase",
    placeholder: "0.17",
    icon: <FaArrowTrendUp />,
  },
  {
    id: "s6",
    name: "SCADS Held",
    placeholder: "26513.82",
    icon: <MdOutlineDataObject />,
  },
];

export const treasuryItems = [
  {
    id: "ti1",
    name: "Total balance",
    amount: "$34781.63",
  },
  {
    id: "ti2",
    name: "SCADS balance",
    amount: "536",
  },
  {
    id: "ti3",
    name: "TWINE balance",
    amount: "145017",
  },
  {
    id: "ti4",
    name: "USDT balance",
    amount: "$10304",
  },
  {
    id: "ti5",
    name: "USDC balance",
    amount: "$0",
  },
];

export const blogSectionItems = [
  {
    id: "bi1",
    imgSrc: "/images/blogs/blog-1.jpg",
    text: `Use The world's first self-sufficient monetary system based on innovative Proof Of Hold protocol, providing safety of Holding scads in own user's wallets, without the risk of staking or commitment of funds to any platform. 
The Assets are stored in user's WEB3 wallets. Users can always sell them or keep them for the long term, thereby generating passive income, by minting TWINE, the price of which linearly in accordance to number of TWINE minted
The prospect of growth of TWINES at the current price of 0.17 cents will ensure its value up to 10 thousand US dollars in the next 2-3 years! due it exclusivity use case, and scarcity. 
Invest into your safe crypto future!`,
  },
  {
    id: "bi2",
    imgSrc: "/images/blogs/blog-2.jpg",
    text: `When TWINE market supply reach's 5.5m it will gain exclusivity to buy SCADS at that point the demand will grow exponentially and very fast.  Smart investor's will catch up to buy SCADS and mint twine as fast as possible, don't miss the chance to build your bag's fast.
It's a good time to buy Scads to get Twines 🚀`,
  },
  {
    id: "bi3",
    imgSrc: "/images/blogs/blog-3.jpg",
    text: `When you use a a credit card, or any current crypto off boarding card, we all pay 3.5 % per each transaction. In Q4 2024. 
SCADS  will release its own Blockchain layer 0, along with payment system and settlement solution. USER'S will pay only GAS fees, eliminating all extra charges and reducing the cost of retail.
Help us build it for you and own it  same as SCADS . IDO launch will be announced in February 2024. Make sure to participate in building the new future of money.`,
  },
];

export const addresses = [
  { address: "Scads: 0x6D036B813C63c2c2D84De16369F2b532a37A5E97" },
  { address: "Twine: 0xa86C718a38515699773a1FEB9c3A891A2BE982A1" },
  { address: "USDT: 0x55d398326f99059ff775485246999027b3197955" },
  { address: "USDC: 0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" },
];
