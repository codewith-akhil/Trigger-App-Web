import type { PolicyBlock, PolicySection } from "./privacy-data";

export type PricingBlock = PolicyBlock;
export type PricingSection = PolicySection;

// Reuse a fee-table block by encoding it as a special block type.
// We extend the renderer to handle "table" blocks (defined below).
export type FeeTable = {
  type: "table";
  caption?: string;
  rows: { label: string; amount: string; strong?: boolean }[];
};

export type PricingBlockExtended = PricingBlock | FeeTable;

export type PricingSectionExtended = {
  id: number;
  title: string;
  blocks: PricingBlockExtended[];
};

export const PRICING_INTRO = {
  effectiveDate: "September 5, 2026",
  lastUpdated: "September 5, 2026",
  paragraphs: [
    "This Pricing Policy explains the pricing, platform charges, payments, bookings, creator earnings, withdrawals, and related fees applicable to the Trigger platform.",
    "Trigger is operated by Metric Flux Solutions Pvt Ltd, Kannur, Kerala, India.",
  ],
};

export const PRICING_FINAL_NOTE =
  "This Pricing Policy should be read together with Trigger's Terms & Conditions, Privacy Policy, and Payment & Refund Policy. Where mandatory consumer, tax, payment, or other laws provide rights that differ from this Policy, those mandatory legal rights will prevail.";

export const PRICING_SECTIONS: PricingSectionExtended[] = [
  {
    id: 1,
    title: "Free Services",
    blocks: [
      {
        type: "p",
        text: "Certain Trigger features may be available free of charge, including:",
      },
      {
        type: "ul",
        items: [
          "Account creation",
          "User profiles",
          "Messaging features",
          "Voice / video calling features",
          "Free live streams",
          "Other features specifically identified as free",
        ],
      },
      {
        type: "p",
        text: "Trigger may introduce charges for currently free features in the future, with appropriate notice where required by applicable law.",
      },
    ],
  },
  {
    id: 2,
    title: "Paid Live Streams",
    blocks: [
      {
        type: "p",
        text: "Creators may choose to make individual live streams paid.",
      },
      {
        type: "p",
        text: "The stream creator determines the booking price, subject to Trigger's applicable rules and supported currencies.",
      },
      {
        type: "p",
        text: "Before completing a booking, the user will be shown:",
      },
      {
        type: "ul",
        items: [
          "Stream price",
          "Currency",
          "Trigger platform fee",
          "Applicable taxes or charges, where required",
          "Total amount payable",
        ],
      },
      {
        type: "p",
        text: "A paid stream booking is generally a one-time payment for that specific stream and does not create a recurring subscription unless explicitly stated otherwise.",
      },
    ],
  },
  {
    id: 3,
    title: "Platform Fee for Stream Bookings",
    blocks: [
      {
        type: "p",
        text: "Trigger may charge a 3% platform fee on paid stream bookings.",
      },
      {
        type: "table",
        caption: "Example",
        rows: [
          { label: "Stream booking", amount: "\u20b9100" },
          { label: "Trigger platform fee (3%)", amount: "\u20b93" },
          { label: "Total payable", amount: "\u20b9103", strong: true },
        ],
      },
      {
        type: "p",
        text: "The exact amount displayed at checkout is authoritative.",
      },
      {
        type: "p",
        text: "Where taxes are legally applicable to Trigger's services or fees, the applicable tax treatment will be displayed or applied as required by law.",
      },
    ],
  },
  {
    id: 4,
    title: "Creator Earnings",
    blocks: [
      {
        type: "p",
        text: "When a user successfully pays for a creator's paid stream, the creator may receive an eligible earning after applicable platform charges, refunds, reversals, payment adjustments, taxes, or other legally required deductions.",
      },
      {
        type: "p",
        text: "The amount shown in a creator's wallet may be subject to payment settlement and verification.",
      },
      {
        type: "p",
        text: "A wallet balance does not necessarily mean the amount is immediately available for withdrawal.",
      },
    ],
  },
  {
    id: 5,
    title: "Withdrawal Platform Charge",
    blocks: [
      {
        type: "p",
        text: "Trigger may charge a 9% platform withdrawal charge when an eligible creator withdraws funds.",
      },
      {
        type: "table",
        caption: "Example",
        rows: [
          { label: "Wallet balance", amount: "\u20b91,000" },
          { label: "Trigger withdrawal charge (9%)", amount: "\u20b990" },
          { label: "Amount payable to creator", amount: "\u20b9910", strong: true },
        ],
      },
      {
        type: "p",
        text: "The 9% withdrawal charge is a Trigger platform / service charge.",
      },
      {
        type: "p",
        text: "The applicable charge will be shown during the withdrawal process where applicable.",
      },
    ],
  },
  {
    id: 6,
    title: "Payout Processing",
    blocks: [
      {
        type: "p",
        text: "Eligible withdrawals may be processed around 6:00 PM IST each day.",
      },
      {
        type: "p",
        text: "This is a processing schedule, not a guaranteed bank-credit time.",
      },
      { type: "p", text: "Actual receipt of funds may be affected by:" },
      {
        type: "ul",
        items: [
          "Payment-provider processing",
          "Bank processing",
          "Settlement periods",
          "Verification",
          "Security / fraud checks",
          "Weekends and holidays",
          "Regulatory requirements",
          "Incorrect payout information",
          "Technical issues",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Taxes",
    blocks: [
      {
        type: "p",
        text: "Users are responsible for their own tax obligations arising from payments, earnings, or withdrawals, to the extent required under applicable law.",
      },
      {
        type: "p",
        text: "Trigger may collect, withhold, report, or remit taxes where legally required.",
      },
      {
        type: "p",
        text: "Trigger is responsible for taxes applicable to its own revenue and platform charges as required by applicable law.",
      },
      {
        type: "p",
        text: "Tax treatment may differ depending on the user's location, transaction type, currency, and applicable jurisdiction.",
      },
    ],
  },
  {
    id: 8,
    title: "Payment Processing",
    blocks: [
      {
        type: "p",
        text: "Trigger may use third-party payment providers, including Razorpay, and other providers where appropriate.",
      },
      {
        type: "p",
        text: "The payment provider may apply its own terms, processing requirements, and applicable charges.",
      },
      {
        type: "p",
        text: "Trigger does not guarantee that every payment method or currency will be available in every country.",
      },
      {
        type: "p",
        text: "The payment amount and currency supported for a transaction will be determined by the applicable payment provider and Trigger's systems.",
      },
    ],
  },
  {
    id: 9,
    title: "Payment Confirmation",
    blocks: [
      {
        type: "p",
        text: "A payment is considered successful only after the applicable payment and backend verification processes confirm the transaction.",
      },
      {
        type: "p",
        text: "A payment screenshot, client-side callback, or similar indication alone does not establish successful payment.",
      },
      {
        type: "p",
        text: "For paid streams, access will be granted only after the required payment has been successfully verified.",
      },
    ],
  },
  {
    id: 10,
    title: "Refunds and Failed Payments",
    blocks: [
      {
        type: "p",
        text: "Refunds, cancellations, failed payments, reversals, and chargebacks are handled according to Trigger's applicable Payment & Refund Policy, payment-provider rules, and mandatory consumer-protection laws.",
      },
      {
        type: "p",
        text: "If a payment is reversed, refunded, charged back, or identified as fraudulent, Trigger may revoke the associated stream entitlement.",
      },
      {
        type: "p",
        text: "Nothing in this Pricing Policy limits any mandatory refund or consumer rights provided by applicable law.",
      },
    ],
  },
  {
    id: 11,
    title: "Price Changes",
    blocks: [
      { type: "p", text: "Trigger may change:" },
      {
        type: "ul",
        items: [
          "Platform fees",
          "Withdrawal charges",
          "Feature pricing",
          "Other service charges",
        ],
      },
      {
        type: "p",
        text: "Future pricing changes will be communicated or displayed as required by applicable law.",
      },
      {
        type: "p",
        text: "The price shown to you before confirmation will generally apply to that transaction.",
      },
    ],
  },
  {
    id: 12,
    title: "Currency and Rounding",
    blocks: [
      {
        type: "p",
        text: "Prices are displayed in supported currencies.",
      },
      {
        type: "p",
        text: "Not every currency is necessarily supported in every country or through every payment provider.",
      },
      {
        type: "p",
        text: "Where percentage-based fees produce fractional minor units, Trigger may apply a reasonable rounding method consistent with applicable payment and accounting requirements. The final amount displayed at checkout is the amount payable.",
      },
    ],
  },
  {
    id: 13,
    title: "No Hidden Charges",
    blocks: [
      {
        type: "p",
        text: "Trigger aims to clearly display applicable Trigger charges before a transaction is confirmed.",
      },
      {
        type: "p",
        text: "Third-party fees, bank charges, foreign-exchange charges, taxes, or other charges imposed independently by payment providers, banks, card networks, or authorities may apply where legally permitted and applicable.",
      },
    ],
  },
  {
    id: 14,
    title: "Pricing Errors",
    blocks: [
      {
        type: "p",
        text: "If a technical or administrative error causes an incorrect price to be displayed, Trigger may correct the error.",
      },
      {
        type: "p",
        text: "Where legally required, users will be given the applicable option to cancel the affected transaction or receive an appropriate remedy.",
      },
    ],
  },
  {
    id: 15,
    title: "Contact",
    blocks: [
      {
        type: "p",
        text: "For questions regarding pricing, payments, fees, or withdrawals:",
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
