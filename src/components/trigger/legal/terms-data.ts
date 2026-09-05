// Re-use the same block types as the privacy policy for consistency.
import type { PolicyBlock, PolicySection } from "./privacy-data";

export type TermsBlock = PolicyBlock;
export type TermsSection = PolicySection;

export const TERMS_INTRO = {
  effectiveDate: "September 5, 2026",
  lastUpdated: "September 5, 2026",
  paragraphs: [
    "Welcome to Trigger.",
    "These Terms and Conditions (\u201cTerms\u201d, \u201cTerms and Conditions\u201d, or \u201cAgreement\u201d) govern your access to and use of the Trigger mobile application, website, live-streaming services, messaging services, calling services, payment services, creator features, and other services provided by Metric Flux Solutions Pvt Ltd (\u201cTrigger\u201d, \u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d).",
    "By creating an account, accessing, or using Trigger, you agree to be legally bound by these Terms.",
    "If you do not agree with these Terms, you must not use Trigger.",
  ],
};

// Quick summary table — shown on page 1 below the intro.
export const TERMS_SUMMARY: { area: string; rule: string }[] = [
  { area: "Age", rule: "18+ only" },
  { area: "Account", rule: "Accurate information required" },
  { area: "Username", rule: "No impersonation, abuse or infringement" },
  { area: "Messaging", rule: "No spam, fraud, harassment or illegal activity" },
  { area: "Calls", rule: "Must comply with privacy / recording laws" },
  { area: "Live streaming", rule: "Host is responsible for broadcast content" },
  { area: "Paid streams", rule: "One-time booking unless explicitly stated otherwise" },
  { area: "Limited streams", rule: "Subject to available capacity" },
  { area: "Payments", rule: "Verified through applicable payment provider / backend" },
  { area: "Platform fee", rule: "Example: 3% on stream booking" },
  { area: "Withdrawal fee", rule: "Example: 9% platform charge" },
  { area: "Payout", rule: "Processing around 6 PM IST daily, not guaranteed arrival" },
  { area: "Taxes", rule: "Users responsible for their applicable tax obligations" },
  { area: "Wallet", rule: "Subject to verification, settlement and adjustments" },
  { area: "Fraud", rule: "Strictly prohibited" },
  { area: "Unauthorized access", rule: "Strictly prohibited" },
  { area: "Adult / minor safety", rule: "18+ platform; exploitation prohibited" },
  { area: "Account abuse", rule: "May result in suspension / termination" },
  { area: "User content", rule: "User retains ownership; limited operational license granted" },
  { area: "Privacy", rule: "Governed by Privacy Policy" },
  { area: "Third parties", rule: "Third-party terms may apply" },
  { area: "Liability", rule: "Limited to extent permitted by law" },
  { area: "Governing law", rule: "India, subject to mandatory local rights" },
];

export const TERMS_FINAL_NOTICE =
  "These Terms are intended to establish the rules for using Trigger and protect both users and Metric Flux Solutions Pvt Ltd. Because Trigger is a global 18+ platform with messaging, live streaming, paid digital access, creator earnings, withdrawals and international users, the final published Terms should be reviewed against the laws applicable to the countries in which Trigger is offered. In particular, the final legal review should verify consumer protection, payment / refund obligations, creator payouts, taxation, privacy / data protection, content moderation, intermediary / platform obligations, age restrictions, electronic contracts and dispute resolution for your target markets.";

export const TERMS_SECTIONS: TermsSection[] = [
  {
    id: 1,
    title: "About Trigger",
    blocks: [
      {
        type: "p",
        text: "Trigger is a communication and social platform that may provide features including:",
      },
      {
        type: "ul",
        items: [
          "User profiles",
          "Private messaging",
          "Media sharing",
          "Voice messages",
          "Voice calls",
          "Video calls",
          "Live streaming",
          "Scheduled live streams",
          "Free and paid streams",
          "Stream bookings",
          "User-generated content",
          "Notifications",
          "Wallet and creator earnings",
          "Withdrawals",
          "Other communication and social features",
        ],
      },
      {
        type: "p",
        text: "Features may be added, modified, suspended, or removed as Trigger evolves.",
      },
    ],
  },
  {
    id: 2,
    title: "Company Information",
    blocks: [
      { type: "p", text: "Trigger is operated by:" },
      { type: "h", text: "Metric Flux Solutions Pvt Ltd" },
      {
        type: "contact",
        label: "Address",
        value:
          "46/A1, PKP Tower, Ground Floor, Kannur, Kerala, India \u2013 PIN 670702",
      },
      { type: "contact", label: "Email", value: "METRICFLUXSOLUTIONS@GMAIL.COM" },
      { type: "contact", label: "Phone", value: "+91 9746109569" },
    ],
  },
  {
    id: 3,
    title: "Eligibility \u2014 18+ Only",
    blocks: [
      {
        type: "p",
        text: "Trigger is strictly intended for individuals 18 years of age or older.",
      },
      { type: "p", text: "By using Trigger, you represent and warrant that:" },
      {
        type: "ul",
        items: [
          "You are at least 18 years old.",
          "You have the legal capacity to enter into these Terms.",
          "You are not prohibited from using the Services under applicable law.",
          "The information you provide is accurate.",
        ],
      },
      {
        type: "p",
        text: "You must not create an account on behalf of a person under 18.",
      },
      {
        type: "p",
        text: "We may suspend or terminate accounts where we reasonably believe the user does not satisfy the minimum age requirement.",
      },
    ],
  },
  {
    id: 4,
    title: "Acceptance of These Terms",
    blocks: [
      { type: "p", text: "By:" },
      {
        type: "ul",
        items: [
          "Downloading Trigger",
          "Creating an account",
          "Logging into Trigger",
          "Accessing any Trigger feature",
          "Participating in a live stream",
          "Booking a paid stream",
          "Sending or receiving messages",
          "Using creator / wallet features",
        ],
      },
      {
        type: "p",
        text: "you agree to these Terms and our applicable policies.",
      },
      {
        type: "p",
        text: "These Terms form a legally binding agreement between you and Metric Flux Solutions Pvt Ltd.",
      },
    ],
  },
  {
    id: 5,
    title: "Privacy",
    blocks: [
      {
        type: "p",
        text: "Your use of Trigger is also subject to our Privacy Policy.",
      },
      {
        type: "p",
        text: "Our Privacy Policy explains how we collect, use, store, protect, and disclose personal information.",
      },
      {
        type: "p",
        text: "Your use of Trigger constitutes acknowledgment that you have reviewed the Privacy Policy.",
      },
    ],
  },
  {
    id: 6,
    title: "Account Registration",
    blocks: [
      {
        type: "p",
        text: "You may be required to create an account to access certain features.",
      },
      { type: "p", text: "You agree to:" },
      {
        type: "ul",
        items: [
          "Provide accurate information.",
          "Keep your information reasonably up to date.",
          "Maintain the security of your account.",
          "Protect your authentication credentials.",
          "Not share your account with another person.",
          "Notify us if you suspect unauthorized access.",
          "Not create accounts for fraudulent or abusive purposes.",
        ],
      },
      {
        type: "p",
        text: "You are responsible for activity occurring through your account unless caused by circumstances outside your reasonable control.",
      },
    ],
  },
  {
    id: 7,
    title: "Username",
    blocks: [
      {
        type: "p",
        text: "Trigger may allow users to reserve or select usernames.",
      },
      { type: "p", text: "Usernames must not:" },
      {
        type: "ul",
        items: [
          "Impersonate another person.",
          "Mislead users about affiliation with Trigger.",
          "Infringe another person's rights.",
          "Contain illegal or prohibited material.",
          "Be used for harassment or abuse.",
          "Be used to facilitate fraud.",
        ],
      },
      {
        type: "p",
        text: "We reserve the right to reclaim, change, suspend, or remove usernames where reasonably necessary.",
      },
      { type: "p", text: "Username availability is not guaranteed." },
    ],
  },
  {
    id: 8,
    title: "Profile Information",
    blocks: [
      {
        type: "p",
        text: "You may create a profile containing information such as:",
      },
      {
        type: "ul",
        items: [
          "Name",
          "Username",
          "Profile photograph",
          "About / bio",
          "Gender",
          "Links",
          "Other permitted information",
        ],
      },
      {
        type: "p",
        text: "You are responsible for the accuracy and legality of information you publish.",
      },
      {
        type: "p",
        text: "You must not use profile information to impersonate another person or organization.",
      },
    ],
  },
  {
    id: 9,
    title: "User Content",
    blocks: [
      {
        type: "p",
        text: "\u201cUser Content\u201d means anything you upload, create, transmit, publish, display, or share through Trigger.",
      },
      { type: "p", text: "This may include:" },
      {
        type: "ul",
        items: [
          "Text",
          "Photos",
          "Videos",
          "Audio",
          "Voice messages",
          "Live streams",
          "Comments",
          "Profile information",
          "Links",
          "Documents",
          "Other media",
        ],
      },
      {
        type: "p",
        text: "You retain ownership of your User Content to the extent you legally own it.",
      },
      {
        type: "p",
        text: "However, by submitting User Content to Trigger, you grant Trigger a non-exclusive, worldwide, royalty-free license to host, store, reproduce, transmit, process, display, technically modify, and distribute that content solely as reasonably necessary to operate, provide, secure, moderate, and improve the Services.",
      },
      {
        type: "p",
        text: "This license does not transfer ownership of your User Content to Trigger.",
      },
    ],
  },
  {
    id: 10,
    title: "Your Responsibility for Content",
    blocks: [
      {
        type: "p",
        text: "You are solely responsible for User Content you submit.",
      },
      { type: "p", text: "You represent that:" },
      {
        type: "ul",
        items: [
          "You own or have the necessary rights to the content.",
          "You have permission to use content belonging to others.",
          "Your content does not violate applicable law.",
          "Your content does not infringe intellectual-property rights.",
          "Your content does not violate these Terms.",
        ],
      },
      {
        type: "p",
        text: "Trigger does not guarantee that User Content is accurate, lawful, safe, or reliable.",
      },
    ],
  },
  {
    id: 11,
    title: "Prohibited Content",
    blocks: [
      {
        type: "p",
        text: "You must not upload, distribute, transmit, or promote content that:",
      },
      {
        type: "ul",
        items: [
          "Is illegal.",
          "Sexually exploits or endangers minors.",
          "Facilitates human trafficking.",
          "Promotes terrorism or violent extremism.",
          "Encourages serious violence.",
          "Threatens another person.",
          "Promotes hate against protected groups.",
          "Contains non-consensual intimate material.",
          "Facilitates sexual exploitation.",
          "Facilitates fraud or scams.",
          "Promotes illegal drugs.",
          "Facilitates money laundering.",
          "Promotes criminal activity.",
          "Infringes copyright or trademarks.",
          "Contains malware or malicious code.",
          "Deliberately impersonates another person.",
          "Contains serious harassment or stalking.",
          "Encourages self-harm or dangerous criminal activity.",
          "Violates applicable law.",
        ],
      },
      {
        type: "p",
        text: "Trigger may remove prohibited content and take appropriate action against associated accounts.",
      },
    ],
  },
  {
    id: 12,
    title: "Harassment and Abuse",
    blocks: [
      { type: "p", text: "You must not use Trigger to:" },
      {
        type: "ul",
        items: [
          "Harass another person.",
          "Threaten another person.",
          "Stalk another person.",
          "Repeatedly contact someone after being clearly asked to stop.",
          "Dox or expose private information.",
          "Blackmail another user.",
          "Intimidate or manipulate another user.",
          "Organize abuse against another person.",
        ],
      },
      {
        type: "p",
        text: "Users may report abusive behavior through available reporting mechanisms.",
      },
    ],
  },
  {
    id: 13,
    title: "Impersonation",
    blocks: [
      { type: "p", text: "You must not impersonate:" },
      {
        type: "ul",
        items: [
          "Another Trigger user",
          "A public figure",
          "A company",
          "A government authority",
          "Trigger or Metric Flux Solutions Pvt Ltd",
          "Another organization",
        ],
      },
      {
        type: "p",
        text: "Parody or clearly disclosed fan accounts may be treated differently where permitted by applicable law.",
      },
    ],
  },
  {
    id: 14,
    title: "Messaging",
    blocks: [
      { type: "p", text: "Trigger may provide private and group messaging." },
      { type: "p", text: "You agree not to use messaging functionality for:" },
      {
        type: "ul",
        items: [
          "Spam",
          "Fraud",
          "Phishing",
          "Harassment",
          "Threats",
          "Illegal solicitation",
          "Malicious links",
          "Malware",
          "Unsolicited commercial abuse",
        ],
      },
      {
        type: "p",
        text: "We may restrict messaging functionality when necessary to protect users or the platform.",
      },
    ],
  },
  {
    id: 15,
    title: "Voice and Video Calls",
    blocks: [
      {
        type: "p",
        text: "Trigger may provide voice and video calling.",
      },
      {
        type: "p",
        text: "You agree to use calling features lawfully and respectfully.",
      },
      { type: "p", text: "You must not:" },
      {
        type: "ul",
        items: [
          "Harass users through calls.",
          "Record calls unlawfully.",
          "Threaten users.",
          "Use calls to facilitate criminal activity.",
          "Circumvent platform restrictions.",
        ],
      },
      {
        type: "p",
        text: "Recording another person's communication may be subject to local consent and privacy laws. You are responsible for complying with applicable law.",
      },
    ],
  },
  {
    id: 16,
    title: "Live Streaming",
    blocks: [
      {
        type: "p",
        text: "Trigger allows eligible users to create and host live streams.",
      },
      {
        type: "p",
        text: "Hosts are responsible for the content of their broadcasts.",
      },
      { type: "p", text: "Live streams must comply with:" },
      {
        type: "ul",
        items: [
          "These Terms",
          "Community Guidelines",
          "Applicable laws",
          "Intellectual-property rights",
          "Privacy rights",
          "Safety requirements",
        ],
      },
      {
        type: "p",
        text: "Hosts must not use live streaming to facilitate illegal activities or prohibited content.",
      },
    ],
  },
  {
    id: 17,
    title: "Live Stream Categories",
    blocks: [
      { type: "p", text: "Trigger may provide categories including:" },
      {
        type: "ul",
        items: ["Education", "Business", "Motivation", "Personal"],
      },
      {
        type: "p",
        text: "Trigger may modify available categories at any time.",
      },
      {
        type: "p",
        text: "Selecting a category does not exempt a stream from any other rule.",
      },
    ],
  },
  {
    id: 18,
    title: "Free Live Streams",
    blocks: [
      { type: "p", text: "A host may create a free live stream." },
      { type: "p", text: "A free stream may be:" },
      {
        type: "ul",
        items: [
          "Unlimited",
          "Limited by available slots",
          "Restricted to a selected audience",
        ],
      },
      {
        type: "p",
        text: "The host is responsible for selecting appropriate stream settings.",
      },
    ],
  },
  {
    id: 19,
    title: "Paid Live Streams",
    blocks: [
      {
        type: "p",
        text: "Trigger may allow hosts to charge viewers for access to specific live streams.",
      },
      {
        type: "p",
        text: "Paid access is generally a one-time booking / payment for the applicable stream, unless explicitly stated otherwise.",
      },
      {
        type: "p",
        text: "The applicable price and currency will be displayed before payment.",
      },
      {
        type: "p",
        text: "Paid access does not automatically provide access to unrelated streams or future broadcasts.",
      },
    ],
  },
  {
    id: 20,
    title: "Stream Booking",
    blocks: [
      {
        type: "p",
        text: "For streams requiring booking, a user may need to reserve a slot before joining.",
      },
      { type: "p", text: "Depending on the stream configuration:" },
      {
        type: "ul",
        items: [
          "A booking may be free.",
          "A booking may require payment.",
          "A stream may have limited capacity.",
          "A stream may allow unlimited participants.",
        ],
      },
      {
        type: "p",
        text: "A booking does not necessarily mean that the stream is currently live.",
      },
      {
        type: "p",
        text: "Users may join only when the stream is available and the applicable access requirements have been satisfied.",
      },
    ],
  },
  {
    id: 21,
    title: "Limited Stream Capacity",
    blocks: [
      {
        type: "p",
        text: "Hosts may configure a maximum number of participants.",
      },
      { type: "p", text: "Where capacity is limited:" },
      {
        type: "ul",
        items: [
          "Availability is subject to remaining capacity.",
          "A booking is not considered final until successfully recorded by Trigger.",
          "Payment alone does not guarantee access if the transaction has not been successfully verified and the booking has not been confirmed.",
          "Trigger may use temporary reservations while payment is being completed.",
        ],
      },
      {
        type: "p",
        text: "Trigger will use reasonable technical measures to prevent overselling, but technical errors, payment delays, connectivity issues, or other circumstances may affect availability.",
      },
    ],
  },
  {
    id: 22,
    title: "Stream Audience",
    blocks: [
      { type: "p", text: "A host may configure an audience such as:" },
      { type: "h", text: "Everyone" },
      {
        type: "p",
        text: "The stream may be accessible to users who obtain the required link or otherwise satisfy the stream's access requirements.",
      },
      { type: "h", text: "Inner Circle" },
      {
        type: "p",
        text: "Access may be limited to users selected by the host through the Inner Circle functionality.",
      },
      { type: "h", text: "Custom Users" },
      {
        type: "p",
        text: "The host may select specific users, subject to applicable platform limits and functionality.",
      },
      {
        type: "p",
        text: "Hosts are responsible for configuring their audience correctly.",
      },
    ],
  },
  {
    id: 23,
    title: "Paid Inner Circle Streams",
    blocks: [
      {
        type: "p",
        text: "Where Trigger's functionality restricts Inner Circle hosts from creating paid streams, that restriction applies.",
      },
      {
        type: "p",
        text: "Attempting to circumvent such restrictions through another account or technical method is prohibited.",
      },
      {
        type: "p",
        text: "Trigger may suspend accounts that deliberately circumvent platform restrictions.",
      },
    ],
  },
  {
    id: 24,
    title: "Stream Links",
    blocks: [
      {
        type: "p",
        text: "Trigger may generate links for scheduled streams.",
      },
      {
        type: "p",
        text: "A link may contain information necessary to identify or display the scheduled stream.",
      },
      { type: "p", text: "You must not:" },
      {
        type: "ul",
        items: [
          "Modify links to bypass access controls.",
          "Attempt to access streams without authorization.",
          "Share private / restricted links in violation of the host's settings.",
          "Attempt to manipulate stream identifiers.",
        ],
      },
      {
        type: "p",
        text: "A stream link does not itself guarantee access.",
      },
    ],
  },
  {
    id: 25,
    title: "Paid Stream Access",
    blocks: [
      {
        type: "p",
        text: "For paid streams, Trigger may require successful payment verification before granting access.",
      },
      {
        type: "p",
        text: "Payment confirmation on the user's device alone is not sufficient to establish entitlement.",
      },
      {
        type: "p",
        text: "Trigger's backend records and payment verification systems determine whether access has been granted.",
      },
      {
        type: "p",
        text: "Users who have not successfully completed the required payment and verification process may not access paid streams.",
      },
    ],
  },
  {
    id: 26,
    title: "Payment Processing",
    blocks: [
      {
        type: "p",
        text: "Payments may be processed using third-party payment providers such as Razorpay, or other payment providers depending on location, platform, payment method, and applicable requirements.",
      },
      { type: "p", text: "Payment processing is subject to:" },
      {
        type: "ul",
        items: [
          "These Terms",
          "Applicable payment-provider terms",
          "Applicable laws",
          "Payment-provider security procedures",
        ],
      },
      {
        type: "p",
        text: "Trigger may not directly receive or store all payment credentials.",
      },
    ],
  },
  {
    id: 27,
    title: "Platform Fees",
    blocks: [
      {
        type: "p",
        text: "Trigger may charge platform fees for certain transactions.",
      },
      {
        type: "p",
        text: "For example, a paid stream may display:",
      },
      {
        type: "ul",
        items: [
          "Booking amount: \u20b9100",
          "Platform fee: 3% = \u20b93",
          "Total: \u20b9103",
        ],
      },
      {
        type: "p",
        text: "The actual applicable fee, taxes, currency, and total will be displayed before confirmation where applicable.",
      },
      {
        type: "p",
        text: "Fees may change in the future with appropriate notice.",
      },
    ],
  },
  {
    id: 28,
    title: "Creator Wallet",
    blocks: [
      {
        type: "p",
        text: "Eligible creators may receive earnings associated with qualifying transactions.",
      },
      { type: "p", text: "Wallet balances may include:" },
      {
        type: "ul",
        items: [
          "Stream earnings",
          "Adjustments",
          "Refunds",
          "Platform charges",
          "Reversals",
          "Other applicable transactions",
        ],
      },
      {
        type: "p",
        text: "Wallet balances shown in the application may be subject to reconciliation, payment settlement, fraud checks, refunds, chargebacks, disputes, and other adjustments.",
      },
      {
        type: "p",
        text: "A wallet balance does not necessarily mean that funds are immediately available for withdrawal.",
      },
    ],
  },
  {
    id: 29,
    title: "Withdrawal Charges",
    blocks: [
      {
        type: "p",
        text: "Trigger may apply a platform withdrawal charge.",
      },
      { type: "p", text: "For example:" },
      {
        type: "ul",
        items: [
          "Wallet balance: \u20b91,000",
          "Platform withdrawal charge (9%): \u20b990",
          "Amount payable: \u20b9910",
        ],
      },
      {
        type: "p",
        text: "The applicable charge will be displayed according to the applicable withdrawal process.",
      },
      {
        type: "p",
        text: "The platform charge is revenue of Trigger to the extent legally applicable.",
      },
    ],
  },
  {
    id: 30,
    title: "Payout Processing",
    blocks: [
      {
        type: "p",
        text: "Trigger may process eligible creator withdrawals around 6:00 PM IST each day.",
      },
      {
        type: "p",
        text: "This is a processing schedule and not a guarantee that funds will reach a user's bank account at exactly 6:00 PM.",
      },
      { type: "p", text: "Payouts may be delayed because of:" },
      {
        type: "ul",
        items: [
          "Payment-provider settlement",
          "Bank processing",
          "Weekends or holidays",
          "Verification",
          "Fraud / security checks",
          "Regulatory requirements",
          "Technical issues",
          "Incorrect payout information",
          "Other circumstances outside Trigger's reasonable control",
        ],
      },
    ],
  },
  {
    id: 31,
    title: "Taxes",
    blocks: [
      {
        type: "p",
        text: "Users are responsible for determining and fulfilling their own tax obligations arising from:",
      },
      {
        type: "ul",
        items: [
          "Earnings",
          "Withdrawals",
          "Payments",
          "Business activities",
          "Other transactions",
        ],
      },
      {
        type: "p",
        text: "Trigger may collect, withhold, report, or remit taxes where legally required.",
      },
      {
        type: "p",
        text: "Trigger's own tax obligations relating to its platform revenue are separate from a user's individual tax obligations.",
      },
    ],
  },
  {
    id: 32,
    title: "Payment Verification",
    blocks: [
      {
        type: "p",
        text: "Trigger may verify payments through the applicable payment provider and backend systems.",
      },
      {
        type: "p",
        text: "A payment may remain pending until verification is completed.",
      },
      {
        type: "p",
        text: "Trigger may delay access or payout where necessary to:",
      },
      {
        type: "ul",
        items: [
          "Verify payment",
          "Prevent fraud",
          "Resolve discrepancies",
          "Confirm settlement",
          "Investigate suspicious activity",
        ],
      },
    ],
  },
  {
    id: 33,
    title: "Failed, Reversed or Disputed Payments",
    blocks: [
      { type: "p", text: "If a payment:" },
      {
        type: "ul",
        items: [
          "Fails",
          "Is reversed",
          "Is refunded",
          "Is charged back",
          "Is disputed",
          "Is identified as fraudulent",
        ],
      },
      {
        type: "p",
        text: "Trigger may revoke the associated entitlement or booking.",
      },
      {
        type: "p",
        text: "If access was incorrectly granted due to a technical or payment-processing error, Trigger may correct the entitlement.",
      },
    ],
  },
  {
    id: 34,
    title: "Refunds",
    blocks: [
      { type: "p", text: "Refund eligibility depends on:" },
      {
        type: "ul",
        items: [
          "The applicable transaction",
          "Trigger's refund policy",
          "Payment-provider rules",
          "Applicable consumer-protection laws",
          "Whether the stream has started",
          "Whether the service / access has already been provided",
          "Fraud, chargeback, or payment circumstances",
        ],
      },
      {
        type: "p",
        text: "Where required by applicable law, mandatory consumer rights will apply.",
      },
    ],
  },
  {
    id: 35,
    title: "Booking ID",
    blocks: [
      {
        type: "p",
        text: "Trigger may generate a unique booking ID for paid stream bookings.",
      },
      { type: "p", text: "Booking IDs may be used for:" },
      {
        type: "ul",
        items: [
          "Identifying transactions",
          "Customer support",
          "Access verification",
          "Payment reconciliation",
          "Fraud prevention",
        ],
      },
      {
        type: "p",
        text: "A booking ID must not be treated as a transferable access credential unless Trigger explicitly permits transfer.",
      },
    ],
  },
  {
    id: 36,
    title: "Stream ID",
    blocks: [
      {
        type: "p",
        text: "Trigger may generate unique stream identifiers.",
      },
      {
        type: "p",
        text: "Stream IDs are used for identifying streams within Trigger's systems.",
      },
      {
        type: "p",
        text: "Users must not attempt to guess, enumerate, manipulate, or exploit stream IDs to gain unauthorized access.",
      },
    ],
  },
  {
    id: 37,
    title: "No Unauthorized Access",
    blocks: [
      { type: "p", text: "You must not:" },
      {
        type: "ul",
        items: [
          "Bypass authentication.",
          "Circumvent access controls.",
          "Attempt to obtain another user's private information.",
          "Access paid streams without entitlement.",
          "Manipulate booking status.",
          "Manipulate payment status.",
          "Generate unauthorized access tokens.",
          "Reverse engineer security controls for unauthorized purposes.",
          "Exploit application vulnerabilities.",
        ],
      },
      {
        type: "p",
        text: "Security vulnerabilities should be responsibly reported to Trigger.",
      },
    ],
  },
  {
    id: 38,
    title: "Agora and Real-Time Services",
    blocks: [
      {
        type: "p",
        text: "Trigger may use third-party technologies to provide voice, video, and live-streaming functionality.",
      },
      { type: "p", text: "Access to real-time communication may depend on:" },
      {
        type: "ul",
        items: [
          "Device compatibility",
          "Internet connectivity",
          "Third-party infrastructure",
          "Server availability",
          "Account authorization",
          "Stream status",
          "Applicable access permissions",
        ],
      },
      {
        type: "p",
        text: "Trigger does not guarantee uninterrupted real-time communication.",
      },
    ],
  },
  {
    id: 39,
    title: "Availability of the Services",
    blocks: [
      {
        type: "p",
        text: "We aim to provide reliable Services, but we do not guarantee that Trigger will:",
      },
      {
        type: "ul",
        items: [
          "Always be available",
          "Always operate without errors",
          "Never experience downtime",
          "Always support every device",
          "Always provide uninterrupted calls or streams",
          "Never experience delays",
          "Never experience technical failures",
        ],
      },
      { type: "p", text: "Services may be temporarily unavailable because of:" },
      {
        type: "ul",
        items: [
          "Maintenance",
          "Updates",
          "Infrastructure failures",
          "Network failures",
          "Security incidents",
          "Third-party outages",
          "Force majeure events",
        ],
      },
    ],
  },
  {
    id: 40,
    title: "No Guarantee of Stream Quality",
    blocks: [
      { type: "p", text: "Live-stream quality depends on factors including:" },
      {
        type: "ul",
        items: [
          "Internet connection",
          "Device capability",
          "Network congestion",
          "Server infrastructure",
          "Geographic location",
          "Third-party service availability",
        ],
      },
      {
        type: "p",
        text: "Trigger does not guarantee a specific video resolution, latency, bitrate, or uninterrupted stream.",
      },
    ],
  },
  {
    id: 41,
    title: "User Safety",
    blocks: [
      {
        type: "p",
        text: "You are responsible for exercising reasonable judgment when communicating with other users.",
      },
      { type: "p", text: "Do not:" },
      {
        type: "ul",
        items: [
          "Meet unknown users in unsafe circumstances.",
          "Send money directly to strangers based solely on their claims.",
          "Share passwords or authentication codes.",
          "Share financial credentials.",
          "Share highly sensitive documents unnecessarily.",
          "Trust claims of identity without appropriate verification.",
        ],
      },
      {
        type: "p",
        text: "Trigger does not guarantee the identity, intentions, or conduct of any user.",
      },
    ],
  },
  {
    id: 42,
    title: "User Reports and Moderation",
    blocks: [
      { type: "p", text: "Trigger may provide tools for users to report:" },
      {
        type: "ul",
        items: [
          "Accounts",
          "Messages",
          "Streams",
          "Comments",
          "Content",
          "Abuse",
          "Security concerns",
        ],
      },
      {
        type: "p",
        text: "We may investigate reports and take appropriate action.",
      },
      { type: "p", text: "Possible actions include:" },
      {
        type: "ul",
        items: [
          "Content removal",
          "Feature restrictions",
          "Warnings",
          "Temporary suspension",
          "Permanent account termination",
          "Payment / withdrawal review",
          "Stream cancellation",
          "Other protective measures",
        ],
      },
      {
        type: "p",
        text: "We are not required to disclose confidential moderation methods or investigation details.",
      },
    ],
  },
  {
    id: 43,
    title: "Content Moderation",
    blocks: [
      { type: "p", text: "Trigger may use:" },
      {
        type: "ul",
        items: [
          "Automated systems",
          "Human review",
          "User reports",
          "Security systems",
          "Other moderation mechanisms",
        ],
      },
      {
        type: "p",
        text: "to detect or address violations.",
      },
      {
        type: "p",
        text: "Automated systems may produce errors.",
      },
      {
        type: "p",
        text: "Where appropriate, users may contact us regarding moderation decisions.",
      },
    ],
  },
  {
    id: 44,
    title: "Account Suspension",
    blocks: [
      {
        type: "p",
        text: "We may suspend or restrict your account if we reasonably believe you:",
      },
      {
        type: "ul",
        items: [
          "Violated these Terms.",
          "Violated our policies.",
          "Engaged in fraud.",
          "Created a security risk.",
          "Abused another user.",
          "Circumvented access controls.",
          "Misused payments.",
          "Violated applicable law.",
          "Created significant risk to Trigger or its users.",
        ],
      },
      {
        type: "p",
        text: "Suspension may restrict access to some or all Services.",
      },
    ],
  },
  {
    id: 45,
    title: "Account Termination",
    blocks: [
      {
        type: "p",
        text: "We may terminate accounts in accordance with these Terms and applicable law.",
      },
      {
        type: "p",
        text: "You may also stop using Trigger at any time.",
      },
      { type: "p", text: "Termination may result in:" },
      {
        type: "ul",
        items: [
          "Loss of access to the account",
          "Removal of content",
          "Cancellation of active features",
          "Loss of access to certain services",
          "Restriction of future account creation",
        ],
      },
      {
        type: "p",
        text: "Legally required or legitimately retained information may remain after account termination.",
      },
    ],
  },
  {
    id: 46,
    title: "Wallets After Termination",
    blocks: [
      {
        type: "p",
        text: "If an account is terminated, any remaining wallet or payout balance may be subject to:",
      },
      {
        type: "ul",
        items: [
          "Verification",
          "Fraud investigation",
          "Payment-provider restrictions",
          "Chargebacks",
          "Legal requirements",
          "Contractual obligations",
          "Applicable laws",
        ],
      },
      {
        type: "p",
        text: "We will handle eligible remaining funds in accordance with applicable law and our applicable payout procedures.",
      },
    ],
  },
  {
    id: 47,
    title: "Intellectual Property",
    blocks: [
      {
        type: "p",
        text: "Trigger and its licensors own or control rights in:",
      },
      {
        type: "ul",
        items: [
          "Trigger branding",
          "Logos",
          "Software",
          "Application design",
          "Website design",
          "User interface",
          "Graphics",
          "Text",
          "Trademarks",
          "Service-related intellectual property",
        ],
      },
      {
        type: "p",
        text: "You may not copy, reproduce, modify, distribute, sell, or exploit Trigger intellectual property without authorization.",
      },
    ],
  },
  {
    id: 48,
    title: "Feedback",
    blocks: [
      {
        type: "p",
        text: "If you provide suggestions, ideas, or feedback about Trigger, you agree that we may use that feedback without compensation or obligation to you, to the extent permitted by law.",
      },
    ],
  },
  {
    id: 49,
    title: "Copyright Complaints",
    blocks: [
      {
        type: "p",
        text: "If you believe content on Trigger infringes your copyright, you may contact us with sufficient information to investigate the complaint.",
      },
      {
        type: "p",
        text: "Where applicable, we may remove or restrict access to allegedly infringing material and take appropriate action against repeat infringement.",
      },
    ],
  },
  {
    id: 50,
    title: "Third-Party Services",
    blocks: [
      {
        type: "p",
        text: "Trigger may integrate third-party services, including technologies supporting:",
      },
      {
        type: "ul",
        items: [
          "Authentication",
          "Cloud infrastructure",
          "Database services",
          "File storage",
          "Voice / video",
          "Live streaming",
          "Payments",
          "Email",
          "Notifications",
          "Security",
        ],
      },
      {
        type: "p",
        text: "Third-party services may have their own terms and policies.",
      },
      {
        type: "p",
        text: "Trigger is not responsible for independent failures or policies of third-party providers except to the extent required by applicable law.",
      },
    ],
  },
  {
    id: 51,
    title: "External Links",
    blocks: [
      {
        type: "p",
        text: "Trigger may contain links to third-party websites.",
      },
      {
        type: "p",
        text: "We do not control those websites and are not responsible for their:",
      },
      {
        type: "ul",
        items: [
          "Content",
          "Security",
          "Availability",
          "Privacy practices",
          "Terms",
        ],
      },
      {
        type: "p",
        text: "You access third-party websites at your own risk.",
      },
    ],
  },
  {
    id: 52,
    title: "Prohibited Activities",
    blocks: [
      { type: "p", text: "You must not use Trigger to:" },
      {
        type: "ul",
        items: [
          "Break the law.",
          "Commit fraud.",
          "Launder money.",
          "Facilitate illegal transactions.",
          "Exploit minors.",
          "Harass users.",
          "Threaten users.",
          "Distribute malware.",
          "Conduct phishing.",
          "Spam users.",
          "Manipulate payments.",
          "Circumvent stream access controls.",
          "Abuse refunds or chargebacks.",
          "Manipulate wallet balances.",
          "Create fake transactions.",
          "Exploit technical vulnerabilities.",
          "Scrape the platform without authorization.",
          "Reverse engineer the Services except where legally permitted.",
          "Interfere with platform operation.",
          "Circumvent account restrictions.",
          "Operate automated systems that abuse the Services.",
          "Attempt to gain unauthorized access to systems or accounts.",
        ],
      },
    ],
  },
  {
    id: 53,
    title: "No Fraudulent Payments",
    blocks: [
      { type: "p", text: "You must not use:" },
      {
        type: "ul",
        items: [
          "Stolen payment credentials",
          "Unauthorized payment methods",
          "Fraudulent accounts",
          "Chargeback abuse",
          "False payment claims",
          "Manipulated payment callbacks",
          "Fake screenshots",
          "Altered transaction information",
        ],
      },
      {
        type: "p",
        text: "to obtain Trigger services or access.",
      },
      {
        type: "p",
        text: "Fraudulent activity may result in immediate suspension or termination and may be reported to appropriate authorities where required or permitted.",
      },
    ],
  },
  {
    id: 54,
    title: "No Circumvention",
    blocks: [
      { type: "p", text: "You must not attempt to bypass:" },
      {
        type: "ul",
        items: [
          "Payment requirements",
          "Stream restrictions",
          "Audience restrictions",
          "Booking limits",
          "Account restrictions",
          "Security controls",
          "Rate limits",
          "Verification requirements",
        ],
      },
      {
        type: "p",
        text: "Attempting to circumvent platform controls may result in termination.",
      },
    ],
  },
  {
    id: 55,
    title: "Electronic Communications",
    blocks: [
      {
        type: "p",
        text: "By using Trigger, you consent to receiving electronic communications necessary to operate your account, including:",
      },
      {
        type: "ul",
        items: [
          "Verification messages",
          "Security alerts",
          "Transaction confirmations",
          "Booking notifications",
          "Stream notifications",
          "Account notices",
          "Service-related communications",
        ],
      },
      {
        type: "p",
        text: "Certain communications are essential to providing the Services and cannot necessarily be disabled.",
      },
    ],
  },
  {
    id: 56,
    title: "Promotional Communications",
    blocks: [
      {
        type: "p",
        text: "Where permitted by applicable law, Trigger may send promotional communications.",
      },
      {
        type: "p",
        text: "You may have the ability to opt out of non-essential promotional communications.",
      },
      {
        type: "p",
        text: "Opting out of promotional communications will not necessarily stop transactional or security messages.",
      },
    ],
  },
  {
    id: 57,
    title: "Changes to Trigger",
    blocks: [
      { type: "p", text: "We may:" },
      {
        type: "ul",
        items: [
          "Add features",
          "Remove features",
          "Change functionality",
          "Change pricing",
          "Modify limits",
          "Modify platform fees",
          "Change payment providers",
          "Change technical infrastructure",
        ],
      },
      {
        type: "p",
        text: "We may make these changes where reasonably necessary to operate and develop Trigger.",
      },
    ],
  },
  {
    id: 58,
    title: "Changes to These Terms",
    blocks: [
      {
        type: "p",
        text: "We may update these Terms periodically.",
      },
      {
        type: "p",
        text: "When changes are made, we may update the \u201cLast Updated\u201d date.",
      },
      {
        type: "p",
        text: "For material changes, we may provide additional notice where appropriate or legally required.",
      },
      {
        type: "p",
        text: "Your continued use of Trigger after the updated Terms become effective constitutes acceptance of the updated Terms, to the extent permitted by applicable law.",
      },
    ],
  },
  {
    id: 59,
    title: "Disclaimers",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, Trigger is provided on an \u201cas is\u201d and \u201cas available\u201d basis.",
      },
      { type: "p", text: "We do not guarantee that:" },
      {
        type: "ul",
        items: [
          "The Services will always be available.",
          "The Services will always be error-free.",
          "Content will always be accurate.",
          "Streams will always be uninterrupted.",
          "Calls will always connect.",
          "Payments will never fail.",
          "Notifications will always arrive immediately.",
          "User-generated content will be safe or reliable.",
          "Another user will behave lawfully.",
          "The Services will satisfy every user's particular requirements.",
        ],
      },
      {
        type: "p",
        text: "Nothing in these Terms excludes rights that cannot legally be excluded.",
      },
    ],
  },
  {
    id: 60,
    title: "User-to-User Interactions",
    blocks: [
      {
        type: "p",
        text: "Trigger provides tools that allow users to communicate and interact.",
      },
      {
        type: "p",
        text: "You are solely responsible for your interactions with other users.",
      },
      { type: "p", text: "Trigger is not responsible for:" },
      {
        type: "ul",
        items: [
          "User disputes",
          "User misconduct",
          "False statements made by users",
          "Offline interactions",
          "Transactions between users outside Trigger",
          "Personal arrangements between users",
        ],
      },
      {
        type: "p",
        text: "We may assist with reports where appropriate but are not obligated to resolve every dispute.",
      },
    ],
  },
  {
    id: 61,
    title: "Limitation of Liability",
    blocks: [
      {
        type: "p",
        text: "To the maximum extent permitted by applicable law, Metric Flux Solutions Pvt Ltd and its officers, employees, contractors, affiliates, and service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from your use of Trigger.",
      },
      { type: "p", text: "This may include losses relating to:" },
      {
        type: "ul",
        items: [
          "Lost profits",
          "Lost data",
          "Business interruption",
          "Loss of goodwill",
          "User interactions",
          "Service interruptions",
          "Unauthorized access",
          "Third-party service failures",
        ],
      },
      {
        type: "p",
        text: "Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by applicable law.",
      },
    ],
  },
  {
    id: 62,
    title: "Indemnification",
    blocks: [
      {
        type: "p",
        text: "To the extent permitted by applicable law, you agree to defend, indemnify, and hold harmless Metric Flux Solutions Pvt Ltd and its officers, employees, contractors, and affiliates from claims, losses, liabilities, damages, costs, and expenses arising from:",
      },
      {
        type: "ul",
        items: [
          "Your violation of these Terms",
          "Your User Content",
          "Your misuse of Trigger",
          "Your violation of another person's rights",
          "Your violation of applicable law",
          "Fraudulent or unauthorized activity associated with your account",
        ],
      },
      {
        type: "p",
        text: "This provision does not apply where prohibited by applicable law.",
      },
    ],
  },
  {
    id: 63,
    title: "Force Majeure",
    blocks: [
      {
        type: "p",
        text: "Trigger will not be responsible for delays or failures caused by circumstances beyond our reasonable control, including:",
      },
      {
        type: "ul",
        items: [
          "Natural disasters",
          "War",
          "Terrorism",
          "Government actions",
          "Internet failures",
          "Telecommunications failures",
          "Power failures",
          "Cyberattacks",
          "Infrastructure failures",
          "Payment-provider failures",
          "Cloud-service outages",
          "Labor disruptions",
          "Public emergencies",
        ],
      },
    ],
  },
  {
    id: 64,
    title: "Governing Law",
    blocks: [
      {
        type: "p",
        text: "Subject to mandatory laws applicable to you, these Terms shall be governed by the laws applicable to Metric Flux Solutions Pvt Ltd in India.",
      },
      {
        type: "p",
        text: "Nothing in this section is intended to deprive consumers of mandatory protections available under the laws of their country or jurisdiction.",
      },
    ],
  },
  {
    id: 65,
    title: "Dispute Resolution",
    blocks: [
      {
        type: "p",
        text: "If you have a dispute with Trigger, we encourage you to contact us first so that we can attempt to resolve the issue informally.",
      },
      { type: "p", text: "You may contact:" },
      {
        type: "contact",
        label: "Email",
        value: "METRICFLUXSOLUTIONS@GMAIL.COM",
      },
      {
        type: "p",
        text: "Where permitted by applicable law, disputes may be subject to applicable courts and dispute-resolution mechanisms in India.",
      },
      {
        type: "p",
        text: "Mandatory consumer-protection, privacy, or other statutory rights remain unaffected.",
      },
    ],
  },
  {
    id: 66,
    title: "Severability",
    blocks: [
      {
        type: "p",
        text: "If any provision of these Terms is determined to be invalid, unlawful, or unenforceable, that provision will be interpreted or modified to the minimum extent necessary, and the remaining provisions will continue to apply.",
      },
    ],
  },
  {
    id: 67,
    title: "No Waiver",
    blocks: [
      {
        type: "p",
        text: "Our failure to enforce any provision of these Terms does not constitute a waiver of our right to enforce that provision later.",
      },
    ],
  },
  {
    id: 68,
    title: "Assignment",
    blocks: [
      {
        type: "p",
        text: "You may not transfer your rights or obligations under these Terms without our prior written consent where such consent is legally required.",
      },
      {
        type: "p",
        text: "We may transfer or assign our rights and obligations in connection with a merger, acquisition, restructuring, sale of assets, or similar transaction, subject to applicable law.",
      },
    ],
  },
  {
    id: 69,
    title: "Entire Agreement",
    blocks: [
      {
        type: "p",
        text: "These Terms, together with our Privacy Policy and other policies referenced within them, constitute the agreement governing your use of Trigger, except where additional terms apply to a specific service.",
      },
    ],
  },
  {
    id: 70,
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions regarding these Terms, contact:",
      },
      { type: "h", text: "Metric Flux Solutions Pvt Ltd" },
      {
        type: "contact",
        label: "Address",
        value:
          "46/A1, PKP Tower, Ground Floor, Kannur, Kerala, India \u2013 PIN 670702",
      },
      { type: "contact", label: "Email", value: "METRICFLUXSOLUTIONS@GMAIL.COM" },
      { type: "contact", label: "Phone", value: "+91 9746109569" },
    ],
  },
];
