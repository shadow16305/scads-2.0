import { FaRegClock } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { BsHeartPulse } from "react-icons/bs";
import { GrStorage } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineDataObject } from "react-icons/md";
import { Grid, Paperclip } from "lucide-react";

export const tokenomicsContent = [
  {
    id: "proof-of-hold",
    title: "Proof of hold",
    paragraph:
      "SCADS introduces an innovative concept called Proof of Hold (POH) to ensure safety, security, and minimize investment risks. This approach involves users simply purchasing the stable coin and holding it. By doing so, they automatically mint TWINE, the linear token. To facilitate this process, the algorithm incorporates a mapping feature called 'isHolder' to monitor addresses that qualify as holders. The 'ProofOfHolding' function enables an address to include itself in this list, allowing for seamless participation in the Proof of Hold mechanism. This inventive approach provides a secure and risk-reduced investment experience for users.",
  },
  {
    id: "scads",
    title: "Scads",
    paragraph:
      "SCADS is a stablecoin, its value referencing the USD for ease of use. It's important to note that SCADS is not pegged to the USD. It can only be minted when backed by collateral, specifically through the exchange of stablecoins for SCADS. This system operates independently, is characterized by fairness, and operates in a permissionless and fully decentralized manner. It continuously evolves within an automated, self-sustaining environment. Crucially, SCADS cannot be subject to seizure or freezing, as each user holds it in their own wallet. This ensures complete and genuine decentralized freedom and independence. It's worth emphasizing that SCADS has no owners who could be compelled to jeopardize users funds.",
  },
  {
    id: "twine",
    title: "Twine",
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
    id: "market-cap",
    title: "Market cap",
    paragraph:
      "The market cap for TWINE is defined by a lifetime supply of 21 million tokens. When the cap of 21 million tokens is reached, the calculated linear curved price for each TWINE will be $2.10. However, it's important to note that the market demand price range for TWINE is virtually limitless and will be determined by the level of demand in the market. This means that the price of TWINE can potentially exceed the calculated $2.10 per token based on market dynamics and demand levels.",
  },
  {
    id: "minting-speed",
    title: "Minting speed",
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
    id: "pulse",
    title: "Pulse",
    paragraph:
      "Is a smart contract that performs daily operations within the algorithm It buys (SCADS), mint (TWINE), and sells (TWINE) to (SCADS). It generates profits for the system and allocates them as follows: 80% goes back as a sinking fund increasing its investment in the system, and 20% goes to the LQUIDITY wallet in (SCADS) currency, which strengthens the collateralization of (SACDS). While creating a network effect due to transacting constantly. The self-sustaining network effect is a first that pioneers the algorithm on another layer.",
  },
  {
    id: "liquidity-wallet",
    title: "Liquidity wallet",
    paragraph:
      "The wallet functions as a repository for surplus liquidity within the algorithm. This excess liquidity is strategically invested as a liquidity provider and market maker within the cryptocurrency industry. All assets within the wallet are denominated in SCADS and TWINE and are allocated exclusively as investments in SCADS. The algorithm oversees and manages the wallet, ensuring that liquidity is supplied based on predefined criteria, contributing to the stability and functionality of the SCADS ecosystem.",
  },
  {
    id: "treasury",
    title: "Treasury",
    paragraph:
      "Security at the Core: PROOF OF RESERVE and PROOF OF COLLATERAL in SCADS Reserve and Collateral Crucial in SCADS: Integral Components: SCADS places utmost importance on the concept of reserve and collateral, considering them integral components of its operational framework. These elements are securely held in the treasury and users' wallets, forming the backbone of SCADS's financial robustness. Contracts for PROOF OF RESERVE and PROOF OF COLLATERAL: Proactive Measures: Despite having reserves and collateral securely held, SCADS reinforces its commitment to transparency through specific contracts. Contracts for PROOF OF RESERVE and PROOF OF COLLATERAL are established, providing clear verification mechanisms for the community. Mandatory Collateral for SCADS Minting: Risk Mitigation: SCADS takes a stringent approach to minting, requiring collateral for every SCADS minted. This ensures a risk-averse model, preventing the scenario where SCADS would exist without the necessary backing. Interconnected System: Collateralization Linkages: Logically intertwined, the SCADS ecosystem establishes a strong link between SCADS minting, collateral, and the subsequent minting of TWINE. This collateralized system contrasts with other stablecoins, such as USDT or USDC, providing a more tangible and secure financial foundation. Collateralized Assurance: SCADS, through the implementation of PROOF OF RESERVE and PROOF OF COLLATERAL contracts, reinforces its commitment to a robust and transparent financial model. By ensuring that every SCADS is minted with collateral, and subsequently linking the minting of TWINE to SCADS, SCADS establishes a genuinely collateralized system, setting it apart from other stablecoins in the digital financial landscape.",
  },
  {
    id: "decentralization",
    title: "Decentralization",
    paragraph:
      "The algorithm operates in a permissionless, completely decentralized, and independent manner. There are no admin keys or owners, the system functions autonomously through interactions between contracts, without any human intervention. Upon launch, the Algorithm will have admin keys enabled for 3 month, allowing for potential fixes if necessary. However, during this access period, admins will have no access to contracts. Following this initial period, public admin keys will be burned, making them visible to all users. After the burning, developers will only have access to the front end for UI/UX improvements, ensuring that the core functionality remains decentralized and secure. The algorithm is immutable; it cannot be modified, updated, or changed. Any new venture or addition would need to be implemented as an added Layer 2. This emphasizes the unalterable nature of the algorithm's core functionality.",
  },
  {
    id: "protection",
    title: "Protection",
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
    id: "seignorage",
    title: "Seignorage",
    paragraph:
      "Is the difference between the value of money and the cost to produce and distribute it. Seniorage covers vital operational expenses, supporting decentralized anonymous servers. They perform crucial roles like data nodes, security management, and congestion prevention.",
  },
  {
    id: "transparency",
    title: "Transparency",
    paragraph:
      "Every transaction conducted within the system is capable of being verified on the blockchain. In addition, the SCADS algorithm provides real-time tracking of all contract transactions, which are conveniently listed in the contract list. Users have accessible and immediate viewing of this information on the main page, ensuring transparency and ease of access to all participants. This emphasis on transparency enhances trust and confidence within the system.",
  },
];

export const tokenomicsLinks = [
  {
    name: "Proof of hold",
    path: "/tokenomics/#proof-of-hold",
  },
  {
    name: "Scads",
    path: "/tokenomics/#scads",
  },
  {
    name: "Twine",
    path: "/tokenomics/#twine",
  },
  {
    name: "Market cap",
    path: "/tokenomics/#market-cap",
  },
  {
    name: "Minting speed",
    path: "/tokenomics/#minting-speed",
  },
  {
    name: "Pulse",
    path: "/tokenomics/#pulse",
  },
  {
    name: "Liquidity wallet",
    path: "/tokenomics/#liquidity-wallet",
  },
  {
    name: "Treasury",
    path: "/tokenomics/#treasury",
  },
  {
    name: "Decentralization",
    path: "/tokenomics/#decentralization",
  },
  {
    name: "Protection",
    path: "/tokenomics/#protection",
  },
  {
    name: "Seignorage",
    path: "/tokenomics/#seignorage",
  },
  {
    name: "Transparency",
    path: "/tokenomics/#transparency",
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

export const addresses = [
  {
    address: "Scads: ",
    value: "0x6D036B813C63c2c2D84De16369F2b532a37A5E97",
  },
  {
    address: "Twine: ",
    value: "0xa86C718a38515699773a1FEB9c3A891A2BE982A1",
  },
  {
    address: "USDT: ",
    value: "0x55d398326f99059ff775485246999027b3197955",
  },
  {
    address: "USDC: ",
    value: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
  },
];

export const roadmapContent = [
  {
    id: "r1",
    date: "April 2019",
    l1: "Research initiation.",
    right: false,
  },
  {
    id: "r2",
    date: "3 Months",
    l1: "Project Planning.",
    l2: "Risk Assessment and Management.",
    l3: "Project Team Formation.",
    right: true,
  },
  {
    id: "r3",
    date: "July 2019",
    l1: "Development process commences.",
    right: false,
  },
  {
    id: "r4",
    date: "11 Months",
    l1: "Start building anticipation.",
    l2: "Gather reviews from beta testers.",
    right: true,
  },
  {
    id: "r5",
    date: "March 2021",
    l1: "Base algorithm completed.",
    right: false,
  },
  {
    id: "r6",
    date: "2 Weeks",
    l1: "Scads contract implemented.",
    right: true,
  },
  {
    id: "r7",
    date: "2 Weeks",
    l1: "Twine contract implemented.",
    right: false,
  },
  {
    id: "r8",
    date: "January 2022",
    l1: "Pulse contract implemented.",
    right: true,
  },
  {
    id: "r9",
    date: "April 2022",
    l1: "Reserve contract implemented.",
    right: false,
  },
  {
    id: "r10",
    date: "May 2022",
    l1: "Seignorage contract implemented.",
    l2: "Treasury contract implemented.",
    right: true,
  },
  {
    id: "r11",
    date: "2 Months",
    l1: "Proof of Holding protocol completed.",
    right: false,
  },
  {
    id: "r12",
    date: "August 2022",
    l1: "Modifications to all smart contracts are implemented in response to alterations in regulatory requirements.",
    right: true,
  },
  {
    id: "r13",
    date: "3 Months",
    l1: "Securing smart contracts.",
    right: false,
  },
  {
    id: "r14",
    date: "December 2022",
    l1: " Adaptive minting speed completed.",
    right: true,
  },
  {
    id: "r15",
    date: "3 Weeks",
    l1: "v2 modifications to all smart contracts are implemented in response to alterations in regulatory requirements.",
    right: false,
  },
  {
    id: "r16",
    date: "April 2023",
    l1: "Proof of Concept release on testnet.",
    right: true,
  },
  {
    id: "r17",
    date: "September 2023",
    l1: "Revision and final updates.",
    right: false,
  },
  {
    id: "r18",
    date: "October 2023",
    l1: "Official release on mainnet.",
    right: true,
  },
  {
    id: "r19",
    date: "November 2023",
    l1: "The commencement of the media campaign.",
    l2: "Seeding social media.",
    right: false,
  },
  {
    id: "r20",
    date: "February 2024",
    l1: "The media campaign kicks off in the mainstream media.",
    l2: "Scads secured wallet completed.",
    right: true,
  },
  {
    id: "r21",
    date: "February 2024",
    l1: "Lending will be added based on a user's self-provided collateral for withdrawal (lending does not incur interest, only transactions fees).",
    right: false,
  },
  {
    id: "r22",
    date: "March 2024",
    l1: "Payment system. Users will be able to pay locally with scads pegged to value in local currency. (The pegging occurs only on the time of transaction).",
    right: true,
  },
  {
    id: "r23",
    date: "March 2024",
    l1: "New layer 0 blockchain, inspired by ZK protocol executed & based on POH.",
    right: false,
  },
  {
    id: "r23",
    date: "September 2024",
    l1: "Launch date",
    right: true,
  },
];

export const wallets = [
  {
    name: "Metamask",
    icon: "/images/metamask.svg",
  },
  {
    name: "Trust wallet",
    icon: "/images/trust.svg",
  },
  {
    name: "Binance chain",
    icon: "/images/binance.svg",
  },
  {
    name: "WalletConnect",
    icon: "/images/wallet-connect.svg",
  },
];

export const cardItems = [
  {
    title: "SCADS",
    description:
      "Decentralized, stable digital currency for secure global transactions, not pegged based on (POH).",
  },
  {
    title: "TWINE",
    description:
      "Linearly growing digital asset for minted by holding SCADS long-term, secured and trusted investment.",
  },
  {
    title: "SEIGNORAGE",
    description: "The system self cost of minting.",
  },
  {
    title: "PULSE",
    description:
      "Self-sustained investment protocol & network effect within SCADS ecosystem.",
  },
  {
    id: "ci5",
    title: "TREASURY",
    description: "Financial backbone of SCADS, managing assets and liquidity.",
  },
  {
    title: "LIQUIDITY WALLET",
    description:
      "Is a depository to supply liquidity to the market as makers and liquidity providers.",
  },
];

export const documents = [
  {
    name: "Use Cases",
    path: "/use-cases",
    description: "The use cases for the scads ecosystem.",
    icon: <Grid size={16} />,
  },
  {
    name: "Whitepaper",
    path: "/whitepaper",
    description: "All the detailed information.",
    icon: <Paperclip size={16} />,
  },
];

export const tutorialDesktop = {
  metamask: [
    {
      label: "Step 1: Install MetaMask Extension",
      list: {
        li1: "1. Open your preferred web browser (e.g., Chrome, Firefox).",
        li2: "2. Go to the extension store (Chrome Web Store for Chrome, Add-ons for Firefox).",
        li3: `3. Search for "MetaMask" and click on the official MetaMask extension.`,
        li4: `4. Click on "Add to Chrome" (or equivalent for your browser) and follow the prompts to install the extension.`,
        li5: "5. Once installed, you'll see the MetaMask fox icon in your browser's toolbar.",
        li6: null,
      },
    },
    {
      label: "Step 2: Set Up MetaMask",
      list: {
        li1: "1. Click on the MetaMask fox icon in your browser's toolbar.",
        li2: `2. Click on "Get Started" to begin the setup process.`,
        li3: `3. Follow the prompts to create a new wallet or import an existing one. Be sure to write down your seed phrase and store it in a safe place.`,
        li4: `4. Create a password for your MetaMask wallet and confirm it.`,
        li5: "5. Once your wallet is set up, you'll be prompted to agree to the terms of use and privacy policy.",
        li6: null,
      },
    },
    {
      label: "Step 3: Connect MetaMask to the Scads Website",
      list: {
        li1: "1. Navigate to the website you want to connect your MetaMask wallet to.",
        li2: `2. Look for the "Connect Wallet" button in the header (navigation menu) of the website.`,
        li3: `3. Click on the "Connect Wallet" button. This will prompt MetaMask to open and ask for your permission to connect.`,
        li4: `4. In the MetaMask popup, review the permissions requested by the website and click "Connect" if you agree.`,
        li5: null,
        li6: null,
      },
    },
    {
      label:
        "Step 4: Add BNB to your wallet balance to cover gas fees on the network.",
      list: {
        li1: "Refer to",
        li2: null,
        li3: null,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 5: Add Token Addresses to MetaMask",
      list: {
        li1: "1. Once your MetaMask wallet is connected to the website, click on the flame icon in the header (navigation menu) where you can copy token addresses.",
        li2: `2. Look for an option to "Add Token" or "Custom Token" within MetaMask.`,
        li3: `3. Click on the "Add Token" or "Custom Token" button.`,
        li4: `4. Enter the token contract address for the token you want to add.`,
        li5: "5. MetaMask should automatically populate the token symbol and decimal places. Verify that this information is correct.",
        li6: `6. Click "Next" or "Add Token" to finalize adding the token to your MetaMask wallet.`,
      },
    },
    {
      label: "Step 6: Verify Token Addition",
      list: {
        li1: "1. After adding the token address, you should see the token listed in your MetaMask wallet along with your other assets.",
        li2: "2. Double-check that the token symbol and balance are displayed correctly.",
        li3: `3. You may need to manually switch to view the added token if it's not already selected.`,
        li4: null,
        li5: null,
        li6: null,
      },
    },
    {
      label: "Step 7: Minting Scads",
      list: {
        li1: `1. Open the invest modal by clicking on the "Invest" button either in the header (navigation menu) or hero section (at the top of the main page).`,
        li2: "2. Choose the stable coin available in your wallet (USDT or USDC), enter the amount, and enable it for the first time. Once enabled, you can start minting SCADS.",
        li3: `3. Once you've minted SCADS, you'll see the total amount in your wallet.`,
        li4: "Depending on the holding period, your wallet will automatically mint TWINE. The balance is displayed on the site when you log in and in your wallet on your tablet or phone.",
        li5: "Claim your minted TWINE. You can hold or buy more SCADS to mint more.",
        li6: "Optionally, you can enable auto-compound, where the system claims your TWINE daily and converts it to SCADS for you.",
      },
    },
  ],
  trust: [
    // { text: "Trust Wallet Lorem ipsum 1" },
    // { text: "Trust Wallet Lorem ipsum 2" },
  ],
  binance: [
    // { text: "Binance Chain Lorem ipsum 1" },
    // { text: "Binance Chain Lorem ipsum 2" },
  ],
};
