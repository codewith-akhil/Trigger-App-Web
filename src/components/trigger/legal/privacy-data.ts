export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "contact"; label: string; value: string };

export type PolicySection = {
  id: number;
  title: string;
  blocks: PolicyBlock[];
};

export const PRIVACY_INTRO = {
  effectiveDate: "September 5, 2026",
  lastUpdated: "September 5, 2026",
  paragraphs: [
    "Trigger is a communication and social platform operated by Metric Flux Solutions Pvt Ltd, based in Kerala, India.",
    "This Privacy Policy explains how we collect, use, store, disclose, protect, and otherwise process information when you use the Trigger mobile application, website, services, live-streaming features, communication features, payment features, and related services (collectively, the \u201cServices\u201d).",
    "We respect your privacy and are committed to handling your personal information responsibly, transparently, and securely.",
    "By using Trigger, you acknowledge that you have read and understood this Privacy Policy.",
  ],
};

export const PRIVACY_SECTIONS: PolicySection[] = [
  {
    id: 1,
    title: "Who We Are",
    blocks: [
      { type: "p", text: "The Services are operated by:" },
      { type: "h", text: "Metric Flux Solutions Pvt Ltd" },
      {
        type: "contact",
        label: "Registered / Business Address",
        value:
          "46/A1, PKP Tower, Ground Floor, Kannur, Kerala, India \u2013 PIN 670702",
      },
      { type: "contact", label: "Privacy Contact", value: "METRICFLUXSOLUTIONS@GMAIL.COM" },
      { type: "contact", label: "Phone", value: "+91 9746109569" },
      {
        type: "p",
        text: "For privacy-related questions, requests, complaints, or concerns, please contact us using the details above.",
      },
    ],
  },
  {
    id: 2,
    title: "Scope of This Privacy Policy",
    blocks: [
      { type: "p", text: "This Privacy Policy applies to information processed through:" },
      {
        type: "ul",
        items: [
          "The Trigger Android application",
          "Trigger's website and web pages",
          "User accounts and profiles",
          "Private and group communications",
          "Voice and video calling",
          "Live streaming",
          "Scheduled live streams",
          "Media uploads",
          "Location-related features",
          "Payments and stream bookings",
          "Creator wallet and withdrawal features",
          "Notifications",
          "Customer support",
          "Account deletion and data-deletion requests",
        ],
      },
      {
        type: "p",
        text: "This Policy does not apply to third-party websites, applications, payment services, or platforms that have their own privacy policies.",
      },
    ],
  },
  {
    id: 3,
    title: "Eligibility",
    blocks: [
      { type: "p", text: "Trigger is intended for users who are 18 years of age or older." },
      { type: "p", text: "We do not knowingly permit individuals under 18 to create or maintain accounts." },
      {
        type: "p",
        text: "If we become aware that an individual under 18 has provided personal information to Trigger, we may take appropriate steps to remove the account and associated information in accordance with applicable law.",
      },
      { type: "p", text: "If you believe a person under 18 is using Trigger, please contact us." },
    ],
  },
  {
    id: 4,
    title: "Information We Collect",
    blocks: [
      { type: "p", text: "The information we collect depends on how you use Trigger." },
      { type: "p", text: "We may collect the following categories of information." },
      { type: "h", text: "4.1 Account and Authentication Information" },
      { type: "p", text: "When you create or access a Trigger account, we may collect:" },
      {
        type: "ul",
        items: [
          "Email address",
          "Authentication information",
          "Verification information",
          "Account identifier",
          "Username",
          "Login / session information",
          "Account creation date",
          "Account status",
          "Security and authentication events",
        ],
      },
      {
        type: "p",
        text: "Where email verification is used, we may send verification codes or links to your registered email address.",
      },
      { type: "p", text: "We do not require your password to be stored in plain text." },
    ],
  },
  {
    id: 5,
    title: "Profile Information",
    blocks: [
      {
        type: "p",
        text: "You may choose to provide information for your Trigger profile, including:",
      },
      {
        type: "ul",
        items: [
          "Name",
          "Username",
          "Profile photograph",
          "About / bio information",
          "Gender",
          "Links",
          "Other profile information you voluntarily provide",
        ],
      },
      {
        type: "p",
        text: "Depending on your privacy settings and the feature being used, portions of your profile may be visible to other Trigger users.",
      },
      {
        type: "p",
        text: "You should therefore avoid placing highly sensitive or confidential information in public profile fields.",
      },
    ],
  },
  {
    id: 6,
    title: "Messages and Communications",
    blocks: [
      {
        type: "p",
        text: "Trigger may process information necessary to provide communication features, including:",
      },
      {
        type: "ul",
        items: [
          "Text messages",
          "Message metadata",
          "Message timestamps",
          "Conversation identifiers",
          "Delivery status",
          "Read status",
          "Reply information",
          "Reactions",
          "Shared media",
          "Voice messages",
          "Shared documents",
          "Shared locations",
          "Call-related information",
        ],
      },
      {
        type: "p",
        text: "We use this information to provide, secure, maintain, and improve communication functionality.",
      },
      { type: "h", text: "Private Communications" },
      {
        type: "p",
        text: "Trigger does not use the content of private communications for unrelated advertising purposes.",
      },
      {
        type: "p",
        text: "However, communications may be processed, stored, transmitted, or temporarily accessed as necessary to provide the Services, prevent abuse, investigate violations, maintain security, comply with legal obligations, or respond to valid legal requests.",
      },
      {
        type: "p",
        text: "Users should not assume that information shared through Trigger is completely immune from disclosure under every legal circumstance.",
      },
    ],
  },
  {
    id: 7,
    title: "Photos, Videos, Files and Other Media",
    blocks: [
      {
        type: "p",
        text: "If you upload or share media through Trigger, we may process:",
      },
      {
        type: "ul",
        items: [
          "Photos",
          "Videos",
          "Images",
          "Documents",
          "Voice recordings",
          "Voice notes",
          "Profile images",
          "Live-stream covers",
          "Other files supported by the Services",
        ],
      },
      {
        type: "p",
        text: "We process uploaded media to provide the functionality you request, including storage, transmission, display, sharing, moderation, security, and delivery to intended recipients.",
      },
      {
        type: "p",
        text: "You are responsible for ensuring that you have the necessary rights and permissions to upload or share content.",
      },
    ],
  },
  {
    id: 8,
    title: "Camera and Microphone",
    blocks: [
      { type: "p", text: "Certain Trigger features require access to your device's:" },
      { type: "ul", items: ["Camera", "Microphone"] },
      { type: "p", text: "We may use camera and microphone access when you:" },
      {
        type: "ul",
        items: [
          "Make voice calls",
          "Make video calls",
          "Start or participate in live streams",
          "Record voice messages",
          "Capture profile photographs",
          "Capture photographs or videos",
          "Use other features requiring audio or video input",
        ],
      },
      {
        type: "p",
        text: "Trigger does not require continuous camera or microphone access when these features are not actively being used.",
      },
      { type: "p", text: "You can control these permissions through your device settings." },
    ],
  },
  {
    id: 9,
    title: "Location Information",
    blocks: [
      {
        type: "p",
        text: "Some Trigger features may allow you to share or use location information.",
      },
      {
        type: "p",
        text: "Depending on the feature, location information may include:",
      },
      {
        type: "ul",
        items: [
          "Approximate location",
          "Precise location",
          "Location selected by you",
          "Location shared with another user",
        ],
      },
      {
        type: "p",
        text: "Location is processed only when required for a feature you choose to use or where otherwise permitted by applicable law.",
      },
      {
        type: "p",
        text: "You can disable location permissions through your device settings. Certain location-based features may not work without the required permission.",
      },
    ],
  },
  {
    id: 10,
    title: "Contacts",
    blocks: [
      {
        type: "p",
        text: "If you choose to grant contacts permission, Trigger may access information from your device contacts to support features such as finding or connecting with people you know.",
      },
      {
        type: "p",
        text: "We do not require contacts permission merely to use the core application.",
      },
      {
        type: "p",
        text: "You can deny or revoke contacts permission through your device settings.",
      },
      {
        type: "p",
        text: "Where contacts information is processed, we use it only for legitimate functionality associated with the feature for which permission was provided and in accordance with applicable law.",
      },
    ],
  },
  {
    id: 11,
    title: "Live Streaming",
    blocks: [
      {
        type: "p",
        text: "Trigger allows users to create, schedule, host, and participate in live streams.",
      },
      { type: "p", text: "When you create or participate in a live stream, we may process:" },
      {
        type: "ul",
        items: [
          "Stream title",
          "Stream category",
          "Stream ID",
          "Cover image",
          "Host account information",
          "Stream date and time",
          "Stream settings",
          "Audience settings",
          "Viewer information",
          "Comments",
          "Gifts",
          "Participation information",
          "Booking information",
          "Payment information",
          "Stream-related technical information",
        ],
      },
      {
        type: "p",
        text: "Live-stream content may be visible to the audience selected by the host or otherwise permitted by the stream settings.",
      },
      {
        type: "p",
        text: "Users should understand that content shared during a live stream may be viewed, recorded, captured, or redistributed by other users.",
      },
      {
        type: "p",
        text: "Trigger cannot guarantee that content voluntarily made available to other users will never be copied or redistributed.",
      },
    ],
  },
  {
    id: 12,
    title: "Scheduled Live Streams and Shared Links",
    blocks: [
      {
        type: "p",
        text: "Trigger may allow users to create shareable links for scheduled streams.",
      },
      {
        type: "p",
        text: "A scheduled stream link may contain information such as:",
      },
      {
        type: "ul",
        items: [
          "Username",
          "Stream ID",
          "Stream title",
          "Category",
          "Cover image",
          "Scheduled date and time",
          "Free or paid status",
          "Slot availability",
          "Other information intentionally configured for public sharing",
        ],
      },
      {
        type: "p",
        text: "When you share a scheduled-stream link outside Trigger, information contained in the link or associated preview may become accessible to people who receive or access the link.",
      },
    ],
  },
  {
    id: 13,
    title: "Payments and Transactions",
    blocks: [
      {
        type: "p",
        text: "Trigger may provide paid live-stream bookings and other payment-related functionality.",
      },
      {
        type: "p",
        text: "When you make a payment, we may process information necessary to:",
      },
      {
        type: "ul",
        items: [
          "Create a transaction",
          "Identify the transaction",
          "Confirm payment status",
          "Verify payment",
          "Provide purchased access",
          "Prevent fraud",
          "Maintain transaction records",
          "Process refunds where applicable",
          "Comply with accounting, tax, legal, and regulatory obligations",
        ],
      },
      { type: "p", text: "Payment information may include:" },
      {
        type: "ul",
        items: [
          "Transaction ID",
          "Payment / order ID",
          "Amount",
          "Currency",
          "Payment status",
          "Booking ID",
          "Payment timestamps",
          "Relevant payment metadata",
        ],
      },
      { type: "h", text: "Payment Providers" },
      {
        type: "p",
        text: "Trigger may use third-party payment providers, including Razorpay, where supported and permitted.",
      },
      {
        type: "p",
        text: "Payment card, bank, UPI, or other payment credentials may be processed directly by the applicable payment provider rather than being stored by Trigger.",
      },
      {
        type: "p",
        text: "Payment providers may independently process information under their own privacy policies and terms.",
      },
      {
        type: "p",
        text: "Trigger does not request or intentionally store complete payment-card credentials unless specifically required and lawfully permitted for a particular payment process.",
      },
    ],
  },
  {
    id: 14,
    title: "Stream Booking Information",
    blocks: [
      {
        type: "p",
        text: "For paid or limited-capacity streams, Trigger may maintain booking and entitlement information, including:",
      },
      {
        type: "ul",
        items: [
          "User / account identifier",
          "Stream ID",
          "Booking ID",
          "Payment status",
          "Amount paid",
          "Currency",
          "Booking status",
          "Reservation status",
          "Access entitlement",
          "Relevant transaction information",
        ],
      },
      {
        type: "p",
        text: "This information is used to determine whether a user is authorized to access a particular stream.",
      },
    ],
  },
  {
    id: 15,
    title: "Creator Wallet and Withdrawals",
    blocks: [
      {
        type: "p",
        text: "Trigger may provide eligible creators with wallet and withdrawal functionality.",
      },
      { type: "p", text: "We may process:" },
      {
        type: "ul",
        items: [
          "Wallet balance",
          "Earnings",
          "Transaction history",
          "Withdrawal requests",
          "Withdrawal amount",
          "Applicable platform charges",
          "Payout status",
          "Payment-provider identifiers",
          "Bank / payment information required for payout processing",
          "Identity or verification information where required",
          "Fraud-prevention information",
        ],
      },
      {
        type: "p",
        text: "Financial and transaction information may be retained where necessary for accounting, fraud prevention, dispute resolution, taxation, legal compliance, or other legitimate purposes.",
      },
    ],
  },
  {
    id: 16,
    title: "Platform Charges and Taxes",
    blocks: [
      {
        type: "p",
        text: "Where applicable, Trigger may charge fees for certain transactions, including platform charges associated with stream bookings or creator withdrawals.",
      },
      {
        type: "p",
        text: "Trigger may process transaction information to calculate and record applicable charges.",
      },
      {
        type: "p",
        text: "Users are responsible for their own tax obligations relating to their earnings, transactions, or withdrawals to the extent required by applicable law.",
      },
      {
        type: "p",
        text: "Trigger may collect, report, withhold, or remit taxes where Trigger is legally required to do so.",
      },
    ],
  },
  {
    id: 17,
    title: "Device and Technical Information",
    blocks: [
      {
        type: "p",
        text: "When you use Trigger, we may automatically receive certain technical information, including:",
      },
      {
        type: "ul",
        items: [
          "Device type",
          "Device model",
          "Operating system",
          "Operating-system version",
          "Application version",
          "Device configuration",
          "IP address",
          "Network information",
          "Connection information",
          "Crash information",
          "Performance information",
          "Diagnostic information",
          "Security events",
          "Session information",
          "Approximate location derived from IP where appropriate",
        ],
      },
      { type: "p", text: "We use technical information to:" },
      {
        type: "ul",
        items: [
          "Operate the Services",
          "Diagnose problems",
          "Improve performance",
          "Detect fraud",
          "Protect accounts",
          "Prevent abuse",
          "Maintain security",
          "Troubleshoot errors",
          "Understand service reliability",
        ],
      },
    ],
  },
  {
    id: 18,
    title: "Push Notifications",
    blocks: [
      { type: "p", text: "Trigger may send push notifications for purposes including:" },
      {
        type: "ul",
        items: [
          "New messages",
          "Calls",
          "Live-stream events",
          "Stream reminders",
          "Booking confirmations",
          "Payment updates",
          "Security notifications",
          "Account notifications",
          "Important service announcements",
        ],
      },
      {
        type: "p",
        text: "You can control notification permissions through your device settings.",
      },
      {
        type: "p",
        text: "Certain notifications may be necessary for security or transactional purposes.",
      },
    ],
  },
  {
    id: 19,
    title: "Cookies and Similar Technologies",
    blocks: [
      { type: "p", text: "Our website may use cookies and similar technologies to:" },
      {
        type: "ul",
        items: [
          "Operate the website",
          "Maintain sessions",
          "Remember preferences",
          "Improve security",
          "Understand website usage",
          "Improve performance",
          "Support essential functionality",
        ],
      },
      {
        type: "p",
        text: "Where required by applicable law, we will provide appropriate choices regarding non-essential cookies and similar technologies.",
      },
      {
        type: "p",
        text: "You may control cookies through your browser settings, although disabling certain cookies may affect website functionality.",
      },
    ],
  },
  {
    id: 20,
    title: "How We Use Personal Information",
    blocks: [
      { type: "p", text: "We may use personal information for the following purposes:" },
      { type: "h", text: "Providing the Services" },
      {
        type: "ul",
        items: [
          "Creating and managing accounts",
          "Providing messaging",
          "Providing calls",
          "Providing live streaming",
          "Delivering media",
          "Providing profile functionality",
          "Processing bookings",
          "Processing payments",
          "Providing wallet and withdrawal functionality",
        ],
      },
      { type: "h", text: "Security" },
      {
        type: "ul",
        items: [
          "Detecting fraud",
          "Preventing unauthorized access",
          "Protecting accounts",
          "Preventing abuse",
          "Investigating suspicious activity",
          "Protecting users and the platform",
        ],
      },
      { type: "h", text: "Communication" },
      {
        type: "ul",
        items: [
          "Sending transactional messages",
          "Sending verification codes",
          "Sending security alerts",
          "Sending service notifications",
          "Providing customer support",
        ],
      },
      { type: "h", text: "Product Improvement" },
      {
        type: "ul",
        items: [
          "Diagnosing technical problems",
          "Measuring reliability",
          "Improving performance",
          "Developing new functionality",
          "Understanding feature usage",
        ],
      },
      { type: "h", text: "Legal and Regulatory Compliance" },
      { type: "p", text: "We may process information when necessary to:" },
      {
        type: "ul",
        items: [
          "Comply with applicable laws",
          "Respond to lawful requests",
          "Enforce our Terms",
          "Protect legal rights",
          "Investigate suspected violations",
          "Resolve disputes",
          "Maintain financial and accounting records",
        ],
      },
    ],
  },
  {
    id: 21,
    title: "Legal Bases for Processing",
    blocks: [
      {
        type: "p",
        text: "Depending on the applicable jurisdiction, we may process personal information based on:",
      },
      {
        type: "ul",
        items: [
          "Your consent",
          "Performance of a contract with you",
          "Your request for a service",
          "Compliance with legal obligations",
          "Legitimate interests, where permitted",
          "Protection of users, security, and the Services",
          "Other lawful grounds permitted by applicable law",
        ],
      },
      {
        type: "p",
        text: "Where processing is based on consent, you may withdraw consent where legally available.",
      },
      {
        type: "p",
        text: "Withdrawal of consent does not necessarily affect processing that occurred before withdrawal or processing based on another lawful basis.",
      },
    ],
  },
  {
    id: 22,
    title: "How We Share Personal Information",
    blocks: [
      {
        type: "p",
        text: "We do not sell your personal information as a general business practice.",
      },
      { type: "p", text: "We may disclose information to:" },
      { type: "h", text: "Service Providers" },
      {
        type: "p",
        text: "Companies that help us operate Trigger, including providers supporting:",
      },
      {
        type: "ul",
        items: [
          "Cloud infrastructure",
          "Database services",
          "Authentication",
          "File and media storage",
          "Push notifications",
          "Payment processing",
          "Voice / video communication",
          "Live streaming",
          "Security",
          "Analytics",
          "Customer support",
          "Email delivery",
        ],
      },
      { type: "h", text: "Legal and Regulatory Authorities" },
      {
        type: "p",
        text: "We may disclose information when reasonably necessary to:",
      },
      {
        type: "ul",
        items: [
          "Comply with law",
          "Respond to valid legal process",
          "Protect users",
          "Investigate fraud",
          "Prevent illegal activity",
          "Protect Trigger's rights",
        ],
      },
      { type: "h", text: "Business Transfers" },
      {
        type: "p",
        text: "If Trigger or substantially all of its assets are acquired, merged, reorganized, financed, or transferred, personal information may be transferred as part of that transaction, subject to applicable legal requirements.",
      },
      { type: "h", text: "With Your Direction" },
      {
        type: "p",
        text: "We may share information when you intentionally request or authorize us to do so.",
      },
    ],
  },
  {
    id: 23,
    title: "Third-Party Service Providers",
    blocks: [
      {
        type: "p",
        text: "Trigger may rely on third-party infrastructure and service providers.",
      },
      { type: "p", text: "These may include services for:" },
      {
        type: "ul",
        items: [
          "Authentication",
          "Database infrastructure",
          "Cloud storage",
          "Real-time communication",
          "Voice and video",
          "Live streaming",
          "Payment processing",
          "Email delivery",
          "Push notifications",
          "Security and monitoring",
        ],
      },
      {
        type: "p",
        text: "Examples may include Supabase, Agora, Razorpay, and infrastructure providers supporting the operation of the Services.",
      },
      {
        type: "p",
        text: "Each third party may process information according to its own contractual obligations and privacy practices.",
      },
      {
        type: "p",
        text: "Where required, we take reasonable steps to ensure that service providers process information only for authorized purposes and maintain appropriate safeguards.",
      },
    ],
  },
  {
    id: 24,
    title: "Supabase",
    blocks: [
      {
        type: "p",
        text: "Trigger may use Supabase infrastructure for services such as:",
      },
      {
        type: "ul",
        items: [
          "Authentication",
          "Database services",
          "Realtime functionality",
          "Storage",
          "Backend services",
        ],
      },
      {
        type: "p",
        text: "Information processed through these services is subject to appropriate contractual, technical, and organizational safeguards.",
      },
    ],
  },
  {
    id: 25,
    title: "Agora",
    blocks: [
      { type: "p", text: "Trigger may use Agora technology to provide:" },
      {
        type: "ul",
        items: [
          "Voice calls",
          "Video calls",
          "Live streaming",
          "Real-time audio / video communication",
        ],
      },
      {
        type: "p",
        text: "Agora may process technical and communication information required to provide these services.",
      },
    ],
  },
  {
    id: 26,
    title: "Razorpay",
    blocks: [
      { type: "p", text: "Trigger may use Razorpay for payment-related services." },
      { type: "p", text: "Razorpay may process information required to:" },
      {
        type: "ul",
        items: [
          "Process payments",
          "Authenticate transactions",
          "Prevent fraud",
          "Confirm payment status",
          "Process refunds",
          "Support payment disputes",
        ],
      },
      {
        type: "p",
        text: "Payment information processed by Razorpay is subject to Razorpay's own applicable privacy terms.",
      },
    ],
  },
  {
    id: 27,
    title: "Data Security",
    blocks: [
      {
        type: "p",
        text: "We use reasonable technical and organizational measures designed to protect personal information from:",
      },
      {
        type: "ul",
        items: [
          "Unauthorized access",
          "Unauthorized disclosure",
          "Accidental loss",
          "Destruction",
          "Alteration",
          "Misuse",
        ],
      },
      { type: "p", text: "Security measures may include:" },
      {
        type: "ul",
        items: [
          "Access controls",
          "Authentication controls",
          "Encryption in transit where supported",
          "Secure backend processing",
          "Permission controls",
          "Logging and monitoring",
          "Fraud detection",
          "Infrastructure security",
          "Data minimization",
          "Security updates",
        ],
      },
      {
        type: "p",
        text: "However, no internet service, storage system, transmission method, or electronic security measure can be guaranteed to be completely secure.",
      },
      {
        type: "p",
        text: "You are responsible for protecting your account credentials and device.",
      },
    ],
  },
  {
    id: 28,
    title: "Data Retention",
    blocks: [
      {
        type: "p",
        text: "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to:",
      },
      {
        type: "ul",
        items: [
          "Provide the Services",
          "Maintain account functionality",
          "Complete transactions",
          "Prevent fraud",
          "Resolve disputes",
          "Enforce agreements",
          "Maintain security",
          "Meet legal obligations",
          "Maintain financial records",
        ],
      },
      {
        type: "p",
        text: "Different categories of information may have different retention periods.",
      },
      {
        type: "p",
        text: "When information is no longer required, we may delete, anonymize, or securely dispose of it in accordance with applicable law.",
      },
    ],
  },
  {
    id: 29,
    title: "Account Deletion",
    blocks: [
      { type: "p", text: "You may request deletion of your Trigger account." },
      {
        type: "p",
        text: "Where available, account deletion can be initiated:",
      },
      {
        type: "ul",
        items: [
          "Within the Trigger application",
          "Through the designated account-deletion facility on our website",
        ],
      },
      {
        type: "p",
        text: "When an account is deleted, we will delete or anonymize associated personal information as required by applicable law.",
      },
      {
        type: "p",
        text: "However, certain information may need to be retained where legally permitted or required, including information necessary for:",
      },
      {
        type: "ul",
        items: [
          "Fraud prevention",
          "Security",
          "Legal compliance",
          "Financial / accounting records",
          "Tax obligations",
          "Dispute resolution",
          "Enforcement of legal rights",
          "Compliance with lawful requests",
        ],
      },
      {
        type: "p",
        text: "Retained information will not be used for unrelated purposes.",
      },
      {
        type: "p",
        text: "Google Play requires apps that support account creation to provide account deletion both inside the app and through an external web resource, and deletion must address associated user data subject to legitimate retention exceptions.",
      },
    ],
  },
  {
    id: 30,
    title: "Your Privacy Rights",
    blocks: [
      {
        type: "p",
        text: "Depending on where you live and applicable law, you may have rights including:",
      },
      {
        type: "ul",
        items: [
          "Right to know what information we process",
          "Right to access your personal information",
          "Right to correct inaccurate information",
          "Right to request deletion",
          "Right to restrict certain processing",
          "Right to object to certain processing",
          "Right to data portability",
          "Right to withdraw consent",
          "Right to opt out of certain processing",
          "Right to limit certain uses of sensitive personal information where applicable",
          "Right to lodge a complaint with a relevant privacy regulator",
        ],
      },
      {
        type: "p",
        text: "The availability and scope of these rights depend on applicable law.",
      },
      {
        type: "p",
        text: "GDPR, for example, provides rights including access, rectification, erasure, restriction, portability and objection in applicable circumstances.",
      },
    ],
  },
  {
    id: 31,
    title: "California Privacy Rights",
    blocks: [
      {
        type: "p",
        text: "If you are a California resident and applicable California privacy law applies to Trigger, you may have rights including:",
      },
      {
        type: "ul",
        items: [
          "Right to know",
          "Right to access",
          "Right to delete",
          "Right to correct",
          "Right to opt out of sale or sharing where applicable",
          "Right to limit certain uses or disclosures of sensitive personal information where applicable",
          "Right to non-discrimination for exercising applicable privacy rights",
        ],
      },
      {
        type: "p",
        text: "Trigger does not knowingly sell personal information as a general business practice.",
      },
      {
        type: "p",
        text: "California privacy law may provide additional rights and exceptions depending on the circumstances.",
      },
    ],
  },
  {
    id: 32,
    title: "India Data Protection Rights",
    blocks: [
      {
        type: "p",
        text: "For users whose personal data is governed by India's applicable data-protection framework, Trigger will process personal data in accordance with applicable requirements, including the Digital Personal Data Protection Act, 2023 and applicable rules and notifications as they come into force.",
      },
      {
        type: "p",
        text: "India's DPDP framework establishes obligations relating to lawful processing, security safeguards, transparency, user rights, and deletion / retention requirements. The DPDP Rules, 2025 were notified by the Government of India in November 2025 and provide the implementation framework for the Act.",
      },
      {
        type: "p",
        text: "You may contact us to exercise rights available to you under applicable Indian law.",
      },
    ],
  },
  {
    id: 33,
    title: "European Economic Area, United Kingdom and Switzerland",
    blocks: [
      {
        type: "p",
        text: "If you are located in the EEA, UK, or Switzerland, applicable data-protection laws may provide additional rights.",
      },
      { type: "p", text: "Where applicable, we will:" },
      {
        type: "ul",
        items: [
          "Identify an appropriate legal basis for processing",
          "Provide transparency regarding processing",
          "Respect applicable data-subject rights",
          "Apply appropriate security measures",
          "Limit retention",
          "Provide mechanisms for exercising applicable rights",
        ],
      },
      {
        type: "p",
        text: "Where required, you may also have the right to lodge a complaint with your local data-protection authority.",
      },
    ],
  },
  {
    id: 34,
    title: "International Data Transfers",
    blocks: [
      {
        type: "p",
        text: "Trigger is operated from India and may use service providers located in India or other countries.",
      },
      {
        type: "p",
        text: "As a result, your information may be processed or stored in countries other than the country where you live.",
      },
      {
        type: "p",
        text: "Where applicable, we use legally recognized mechanisms and safeguards for international transfers.",
      },
      {
        type: "p",
        text: "Different countries may have different privacy and data-protection laws.",
      },
    ],
  },
  {
    id: 35,
    title: "User-Generated Content",
    blocks: [
      {
        type: "p",
        text: "Trigger is a platform where users may create and share content.",
      },
      { type: "p", text: "This can include:" },
      {
        type: "ul",
        items: [
          "Profiles",
          "Messages",
          "Photos",
          "Videos",
          "Live streams",
          "Comments",
          "Voice recordings",
          "Links",
          "Other user-generated content",
        ],
      },
      {
        type: "p",
        text: "Content that you intentionally make available to other users may be accessible to those users.",
      },
      {
        type: "p",
        text: "Trigger cannot guarantee that another user will respect your privacy or refrain from copying or redistributing information you share with them.",
      },
      {
        type: "p",
        text: "Do not share passwords, financial credentials, identity documents, private keys, or other highly confidential information through public or inappropriate channels.",
      },
    ],
  },
  {
    id: 36,
    title: "Privacy and Live-Stream Moderation",
    blocks: [
      {
        type: "p",
        text: "Trigger may process live-stream and user-generated content for purposes including:",
      },
      {
        type: "ul",
        items: [
          "Safety",
          "Security",
          "Abuse prevention",
          "Fraud detection",
          "Enforcement of community rules",
          "Investigation of reports",
          "Compliance with law",
        ],
      },
      {
        type: "p",
        text: "Where appropriate and legally permitted, content or associated information may be reviewed by authorized personnel or automated systems.",
      },
    ],
  },
  {
    id: 37,
    title: "Fraud and Security Monitoring",
    blocks: [
      {
        type: "p",
        text: "We may process technical, account, transaction, and behavioral information to detect and prevent:",
      },
      {
        type: "ul",
        items: [
          "Fraud",
          "Payment abuse",
          "Account takeover",
          "Fake accounts",
          "Spam",
          "Automated abuse",
          "Unauthorized access",
          "Platform manipulation",
          "Other security threats",
        ],
      },
      {
        type: "p",
        text: "This may include analyzing unusual activity, transaction patterns, device information, login activity, and other security signals.",
      },
    ],
  },
  {
    id: 38,
    title: "Automated Decision-Making",
    blocks: [
      {
        type: "p",
        text: "Trigger may use automated systems for security, fraud detection, spam prevention, moderation, ranking, or service protection.",
      },
      {
        type: "p",
        text: "Where applicable law provides rights relating to significant automated decision-making or profiling, you may contact us to request information or exercise applicable rights.",
      },
      {
        type: "p",
        text: "We do not intend to make decisions producing legal or similarly significant effects solely through automated processing unless permitted by applicable law and subject to required safeguards.",
      },
    ],
  },
  {
    id: 39,
    title: "Advertising and Sale of Personal Information",
    blocks: [
      {
        type: "p",
        text: "Trigger does not operate its core service by selling users' personal information.",
      },
      {
        type: "p",
        text: "We do not intentionally sell personal information for monetary consideration as a general business practice.",
      },
      {
        type: "p",
        text: "If our practices change in a way that creates a legally regulated \u201csale,\u201d \u201csharing,\u201d or similar activity under an applicable privacy law, we will provide legally required notices and choices.",
      },
    ],
  },
  {
    id: 40,
    title: "Children's Privacy",
    blocks: [
      { type: "p", text: "Trigger is an 18+ service." },
      {
        type: "p",
        text: "We do not knowingly collect personal information from individuals under 18 for the purpose of maintaining a Trigger account.",
      },
      {
        type: "p",
        text: "If you believe a minor has created an account or provided information, contact us at:",
      },
      { type: "contact", label: "Email", value: "METRICFLUXSOLUTIONS@GMAIL.COM" },
      {
        type: "p",
        text: "We may take steps to verify the situation and delete the account and associated information where appropriate.",
      },
    ],
  },
  {
    id: 41,
    title: "Your Responsibilities",
    blocks: [
      { type: "p", text: "You are responsible for:" },
      {
        type: "ul",
        items: [
          "Keeping your account credentials secure",
          "Providing accurate information",
          "Updating inaccurate information",
          "Using privacy settings appropriately",
          "Avoiding unnecessary disclosure of sensitive information",
          "Respecting other users' privacy",
          "Obtaining necessary permissions before sharing another person's information",
          "Complying with applicable laws",
        ],
      },
    ],
  },
  {
    id: 42,
    title: "Third-Party Links",
    blocks: [
      {
        type: "p",
        text: "Trigger may contain links to websites, services, or platforms operated by third parties.",
      },
      {
        type: "p",
        text: "We are not responsible for the privacy practices, security, content, or policies of third-party services.",
      },
      {
        type: "p",
        text: "We encourage you to review their privacy policies before providing personal information.",
      },
    ],
  },
  {
    id: 43,
    title: "Data Breaches and Security Incidents",
    blocks: [
      {
        type: "p",
        text: "If we become aware of a personal-data security incident, we will assess the incident and take reasonable steps required by applicable law.",
      },
      {
        type: "p",
        text: "Where notification is legally required, we may notify affected users, regulators, or other relevant parties in accordance with applicable requirements.",
      },
    ],
  },
  {
    id: 44,
    title: "Changes to This Privacy Policy",
    blocks: [
      { type: "p", text: "We may update this Privacy Policy from time to time." },
      {
        type: "p",
        text: "When we make changes, we may update \u201cLast Updated\u201d at the beginning of this Policy.",
      },
      {
        type: "p",
        text: "For material changes, we may provide additional notice through the application, website, email, or other appropriate method where required.",
      },
      {
        type: "p",
        text: "Your continued use of Trigger after an updated Privacy Policy becomes effective means that the updated Policy applies to your use of the Services, to the extent permitted by applicable law.",
      },
    ],
  },
  {
    id: 45,
    title: "Contact Us",
    blocks: [
      {
        type: "p",
        text: "If you have questions, concerns, complaints, or requests regarding this Privacy Policy or your personal information, contact us:",
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
      {
        type: "p",
        text: "For privacy requests, please include enough information for us to understand and process your request. We may need to verify your identity before fulfilling certain requests.",
      },
    ],
  },
  {
    id: 46,
    title: "Privacy Requests",
    blocks: [
      { type: "p", text: "When submitting a privacy request, you may request:" },
      { type: "h", text: "Access my information" },
      {
        type: "p",
        text: "Request information about personal data associated with your account.",
      },
      { type: "h", text: "Correct my information" },
      {
        type: "p",
        text: "Request correction of inaccurate or incomplete information.",
      },
      { type: "h", text: "Delete my account" },
      {
        type: "p",
        text: "Request deletion of your Trigger account and associated information, subject to lawful retention requirements.",
      },
      { type: "h", text: "Request information about processing" },
      {
        type: "p",
        text: "Ask how your information is collected, used, stored, or disclosed.",
      },
      { type: "h", text: "Withdraw consent" },
      {
        type: "p",
        text: "Where processing is based on consent, request withdrawal of that consent.",
      },
      {
        type: "p",
        text: "We will handle requests within the timeframes required by applicable law.",
      },
    ],
  },
  {
    id: 47,
    title: "No Absolute Security Guarantee",
    blocks: [
      {
        type: "p",
        text: "Although Trigger takes reasonable measures to protect personal information, no online service can guarantee absolute security.",
      },
      {
        type: "p",
        text: "You acknowledge that transmission of information over the internet involves inherent risks.",
      },
      {
        type: "p",
        text: "We encourage you to use strong authentication credentials, protect your device, and avoid sharing confidential information unnecessarily.",
      },
    ],
  },
  {
    id: 48,
    title: "Governing Privacy Requirements",
    blocks: [
      {
        type: "p",
        text: "This Privacy Policy is intended to operate in conjunction with applicable privacy and data-protection laws.",
      },
      {
        type: "p",
        text: "Where a mandatory privacy law gives you rights or protections that conflict with this Policy, the applicable law will prevail to the extent required.",
      },
      {
        type: "p",
        text: "Nothing in this Privacy Policy is intended to limit any mandatory rights you have under applicable law.",
      },
    ],
  },
  {
    id: 49,
    title: "Important Notice Regarding Third-Party Services",
    blocks: [
      {
        type: "p",
        text: "Trigger integrates third-party technologies to provide certain features.",
      },
      {
        type: "p",
        text: "Third-party providers may independently process information required to provide their services.",
      },
      { type: "p", text: "Examples may include:" },
      {
        type: "ul",
        items: [
          "Supabase",
          "Agora",
          "Razorpay",
          "Email providers",
          "Push-notification providers",
          "Cloud infrastructure providers",
          "Security and monitoring providers",
        ],
      },
      {
        type: "p",
        text: "The specific providers used by Trigger may change over time as the Services evolve.",
      },
    ],
  },
  {
    id: 50,
    title: "Final Commitment",
    blocks: [
      {
        type: "p",
        text: "Trigger is designed around the principle that users should have meaningful control over their personal information.",
      },
      { type: "p", text: "We aim to:" },
      {
        type: "ul",
        items: [
          "Collect information responsibly",
          "Use information for legitimate purposes",
          "Minimize unnecessary collection",
          "Protect information using appropriate safeguards",
          "Be transparent about third-party processing",
          "Respect applicable privacy rights",
          "Provide account and data deletion mechanisms",
          "Retain information only as reasonably necessary",
          "Continuously improve our privacy and security practices",
        ],
      },
      {
        type: "p",
        text: "Your privacy matters to us, and we are committed to handling your information responsibly.",
      },
    ],
  },
];
