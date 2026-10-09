import type { Scheme } from '../types/scheme';

export const INDIAN_STATES: string[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi (NCT)",
  "Jammu & Kashmir",
  "Ladakh",
  "Puducherry",
  "Chandigarh",
  "Other UT"
];

export const SCHEMES_DATABASE: Scheme[] = [
  {
    id: "pm-kisan",
    category: "agriculture",
    level: "central",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    officialApplyUrl: "https://pmkisan.gov.in/",
    sourceCitation: "PM-KISAN Operational Guidelines (pmkisan.gov.in)",
    lastVerifiedDate: "2026-09-01",
    criteria: {
      minAge: 18,
      genders: ["all"],
      states: ["All"],
      occupations: ["farmer"],
      requiresLandOwnership: true,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
        tagline: "Direct income support for cultivable landholding farmer families",
        shortBenefit: "₹6,000 per year directly in 3 installments into bank account",
        detailedBenefit: "Provides financial assistance of ₹6,000 per year in 3 equal installments of ₹2,000 every four months to all landholding farmer families to procure agricultural inputs.",
        eligibilityBullets: [
          "Must be a landholding farmer family with cultivable land in applicant's name",
          "Institutional landholders and institutional tax-paying professionals are excluded",
          "Bank account must be seeded with Aadhaar"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Land Ownership Record / Record of Rights (RoR / Khatauni)",
          "Aadhaar-linked Bank Passbook",
          "Active Mobile Number"
        ]
      },
      hi: {
        title: "पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि)",
        tagline: "खेती योग्य भूमि वाले किसान परिवारों के लिए सीधी आय सहायता",
        shortBenefit: "बैंक खाते में 3 किस्तों में ₹6,000 प्रति वर्ष",
        detailedBenefit: "सभी पात्र भूमिधारक किसान परिवारों को खेती की जरूरतों के लिए हर 4 महीने में ₹2,000 की तीन बराबर किस्तों में कुल ₹6,000 सालाना दिए जाते हैं।",
        eligibilityBullets: [
          "आवेदक के नाम पर कृषि योग्य भूमि का स्वामित्व होना चाहिए",
          "संस्थागत भूमिधारक और आयकर दाता परिवार अपात्र हैं",
          "बैंक खाता आधार से लिंक होना अनिवार्य है"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "जमीन के कागजात (खतौनी / जमाबंदी)",
          "आधार लिंक बैंक पासबुक",
          "मोबाइल नंबर"
        ]
      },
      ta: {
        title: "பிரதமர் கிசான் சம்மான் நிதி (PM-KISAN)",
        tagline: "விவசாய குடும்பங்களுக்கு நேரடி வருமான உதவி",
        shortBenefit: "ஆண்டுக்கு ₹6,000 மூன்று தவணைகளில் வங்கி கணக்கில்",
        detailedBenefit: "விவசாய நிலம் வைத்துள்ள தகுதியான குடும்பங்களுக்கு உரங்கள், விதைகள் வாங்க 4 மாதங்களுக்கு ஒருமுறை ₹2,000 வீதம் ஆண்டுக்கு ₹6,000 வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "சொந்த பெயரில் விவசாய நிலம் இருக்க வேண்டும்",
          "வருமான வரி செலுத்துபவர்கள் தவிர மற்ற விவசாயிகள் தகுதியானவர்கள்",
          "ஆதார் இணைக்கப்பட்ட வங்கிக் கணக்கு அவசியம்"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "நிலப் பட்டா / சிட்டா ஆவணம்",
          "ஆதார் இணைக்கப்பட்ட வங்கி கணக்கு புத்தகம்",
          "மொபைல் எண்"
        ]
      }
    }
  },
  {
    id: "ayushman-bharat",
    category: "healthcare",
    level: "central",
    ministry: "National Health Authority (Ministry of Health & Family Welfare)",
    officialApplyUrl: "https://beneficiary.nha.gov.in/",
    sourceCitation: "Ayushman Bharat PM-JAY Official Portal (pmjay.gov.in)",
    lastVerifiedDate: "2026-08-20",
    criteria: {
      genders: ["all"],
      states: ["All"],
      maxAnnualIncome: 300000,
      requiresBPL: false,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Ayushman Bharat (PM-JAY)",
        tagline: "World's largest government-funded health assurance scheme",
        shortBenefit: "Cashless health cover up to ₹5,00,000 per family per year",
        detailedBenefit: "Covers secondary and tertiary care hospitalization across 27,000+ empaneled public and private hospitals nationwide, covering pre-hospitalization, surgery, diagnostics, and medicines.",
        eligibilityBullets: [
          "Low-income households, BPL/SECC identified families, and senior citizens aged 70+",
          "No cap on family size or age of members",
          "All pre-existing diseases covered from day one"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Ration Card / Family ID",
          "Active Mobile Number for OTP Verification"
        ]
      },
      hi: {
        title: "आयुष्मान भारत (पीएम-जन आरोग्य योजना)",
        tagline: "प्रति परिवार ₹5 लाख तक का मुफ्त इलाज व स्वास्थ्य सुरक्षा",
        shortBenefit: "प्रति परिवार प्रति वर्ष ₹5,00,000 तक का कैशलेस इलाज",
        detailedBenefit: "देशभर के 27,000 से अधिक सरकारी और निजी अस्पतालों में गंभीर बीमारियों, सर्जरी और दवाइयों के लिए प्रति वर्ष ₹5 लाख का मुफ्त स्वास्थ्य कवर प्रदान किया जाता है।",
        eligibilityBullets: [
          "निम्न आय वर्ग, बीपीएल राशन कार्ड धारक एवं 70 वर्ष से अधिक उम्र के वरिष्ठ नागरिक",
          "परिवार के सदस्यों की संख्या पर कोई सीमा नहीं",
          "पहले से मौजूद बीमारियां भी पहले दिन से कवर होती हैं"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "राशन कार्ड / परिवार पहचान पत्र",
          "मोबाइल नंबर (ओटीपी हेतु)"
        ]
      },
      ta: {
        title: "ஆயுஷ்மான் பாரத் (PM-JAY மருத்துவக் காப்பீடு)",
        tagline: "குடும்பத்திற்கு ₹5 லட்சம் வரை இலவச மருத்துவ சிகிச்சை",
        shortBenefit: "ஆண்டுக்கு குடும்பத்திற்கு ₹5,00,000 பணமில்லா மருத்துவக் காப்பீடு",
        detailedBenefit: "அங்கீகரிக்கப்பட்ட அரசு மற்றும் தனியார் மருத்துவமனைகளில் அறுவை சிகிச்சை, தீவிர சிகிச்சைகளுக்கு ₹5 லட்சம் வரை இலவச மருத்துவ சிகிச்சை வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "குறைந்த வருமானக் குடும்பங்கள் மற்றும் 70 வயதுக்கு மேற்பட்ட முதியவர்கள்",
          "குடும்ப உறுப்பினர்களின் எண்ணிக்கைக்கு வரம்பு இல்லை",
          "ஏற்கனவே உள்ள நோய்களுக்கும் முதல் நாளிலிருந்தே காப்பீடு உண்டு"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "ரேஷன் அட்டை (குடும்ப அட்டை)",
          "கைபேசி எண்"
        ]
      }
    }
  },
  {
    id: "pm-awas-gramin",
    category: "housing",
    level: "central",
    ministry: "Ministry of Rural Development",
    officialApplyUrl: "https://pmayg.nic.in/",
    sourceCitation: "PMAY-G Framework for Implementation (pmayg.nic.in)",
    lastVerifiedDate: "2026-07-15",
    criteria: {
      minAge: 18,
      area: "rural",
      genders: ["all"],
      states: ["All"],
      maxAnnualIncome: 200000,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "PM Awas Yojana - Gramin (PMAY-G)",
        tagline: "Financial grant for building a pucca house in rural areas",
        shortBenefit: "₹1,20,000 grant (plains) / ₹1,30,000 (hilly states) + MGNREGA wages",
        detailedBenefit: "Direct financial assistance transferred in instalments to construct a disaster-resilient pucca house with basic amenities like toilet, power, and clean cooking fuel.",
        eligibilityBullets: [
          "Homeless families or living in kutcha/dilapidated houses in rural areas",
          "Family should not own a pucca house anywhere in India",
          "Must not own 2/3/4 wheeler or mechanized agricultural equipment"
        ],
        requiredDocuments: [
          "Aadhaar Card of all family members",
          "Bank Passbook (Aadhaar enabled)",
          "MGNREGA Job Card (if available)",
          "Land Possession / Gram Panchayat Certificate"
        ]
      },
      hi: {
        title: "प्रधानमंत्री आवास योजना - ग्रामीण",
        tagline: "ग्रामीण क्षेत्रों में पक्का मकान बनाने हेतु आर्थिक सहायता",
        shortBenefit: "मैदानी इलाकों में ₹1,20,000 तथा पहाड़ी राज्यों में ₹1,30,000 का अनुदान",
        detailedBenefit: "ग्रामीण बेघर या कच्चे मकानों में रहने वाले परिवारों को पक्का सुरक्षित घर बनाने के लिए सीधे बैंक खाते में किस्तों में सहायता दी जाती है।",
        eligibilityBullets: [
          "ग्रामीण क्षेत्रों के बेघर परिवार या कच्चे व जर्जर मकानों में रहने वाले",
          "भारत में कहीं भी पक्का मकान न हो",
          "परिवार में कोई सरकारी कर्मचारी या चौपहिया वाहन न हो"
        ],
        requiredDocuments: [
          "परिवार के सभी सदस्यों का आधार कार्ड",
          "आधार लिंक बैंक खाता पासबुक",
          "मनरेगा जॉब कार्ड",
          "ग्राम पंचायत द्वारा निवास प्रमाण पत्र"
        ]
      },
      ta: {
        title: "பிரதமர் ஊரக வீட்டு வசதி திட்டம் (PMAY-G)",
        tagline: "கிராமப்புறங்களில் கான்கிரீட் வீடு கட்ட அரசு மானியம்",
        shortBenefit: "வீடு கட்ட ₹1,20,000 நேரடி மானியம் + 90 நாள் ஊரக வேலைவாய்ப்பு கூலி",
        detailedBenefit: "கிராமப்புறங்களில் குடிசை அல்லது வாடகை வீட்டில் வசிக்கும் ஏழை குடும்பங்களுக்கு கான்கிரீட் வீடு கட்ட பல தவணைகளாக வங்கி கணக்கில் நிதி வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "கிராமப்புறத்தில் வசிப்பவர் மற்றும் சொந்தமாக கான்கிரீட் வீடு இல்லாதவர்",
          "குடும்பத்தில் யாரும் அரசு பணியில் இருக்கக்கூடாது",
          "வறுமைக் கோட்டிற்கு கீழ் உள்ள குடும்பங்கள்"
        ],
        requiredDocuments: [
          "அனைத்து குடும்ப உறுப்பினர்களின் ஆதார் அட்டை",
          "வங்கி கணக்கு புத்தகம்",
          "ஊரக வேலை அட்டை (MGNREGA Job Card)",
          "கிராம ஊராட்சி சான்றிதழ்"
        ]
      }
    }
  },
  {
    id: "pm-ujjwala",
    category: "women_child",
    level: "central",
    ministry: "Ministry of Petroleum and Natural Gas",
    officialApplyUrl: "https://www.pmuy.gov.in/",
    sourceCitation: "PMUY 2.0 Guidelines (pmuy.gov.in)",
    lastVerifiedDate: "2026-08-10",
    criteria: {
      minAge: 18,
      genders: ["female"],
      states: ["All"],
      maxAnnualIncome: 250000,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "PM Ujjwala Yojana 2.0",
        tagline: "Deposit-free LPG cylinder connection for adult women of low-income families",
        shortBenefit: "Free LPG connection + Free first cylinder refill & hotplate stove",
        detailedBenefit: "Provides a clean cooking fuel LPG connection in the name of an adult woman of a poor household with zero upfront security deposit, plus target subsidies on subsequent cylinder refills.",
        eligibilityBullets: [
          "Applicant must be an adult woman (18+ years)",
          "Household should not have any existing LPG connection",
          "Belongs to BPL, SC/ST, PMAY, or low-income poor household"
        ],
        requiredDocuments: [
          "Aadhaar Card of the applicant woman",
          "Ration Card showing family composition",
          "Bank Passbook linked to Aadhaar",
          "Self-declaration of address for migrant families"
        ]
      },
      hi: {
        title: "प्रधानमंत्री उज्ज्वला योजना 2.0",
        tagline: "गरीब परिवारों की वयस्क महिलाओं के लिए मुफ्त गैस कनेक्शन",
        shortBenefit: "मुफ्त एलपीजी गैस कनेक्शन + पहला सिलेंडर और चूल्हा बिल्कुल मुफ्त",
        detailedBenefit: "गरीब और वंचित परिवारों की महिला मुखिया के नाम पर बिना किसी सिक्योरिटी डिपॉजिट के नया एलपीजी कनेक्शन दिया जाता है तथा साथ में सब्सिडी भी मिलती है।",
        eligibilityBullets: [
          "आवेदक अनिवार्य रूप से 18 वर्ष या अधिक की महिला होनी चाहिए",
          "घर में पहले से कोई गैस कनेक्शन नहीं होना चाहिए",
          "बीपीएल, एससी/एसटी या निर्धन परिवार की श्रेणी में हों"
        ],
        requiredDocuments: [
          "महिला आवेदक का आधार कार्ड",
          "राशन कार्ड (परिवार के सदस्यों के नाम सहित)",
          "आधार लिंक बैंक पासबुक",
          "निवास प्रमाण पत्र / स्व-घोषणा पत्र"
        ]
      },
      ta: {
        title: "பிரதமர் உஜ்வாலா திட்டம் 2.0 (இலவச எரிவாயு)",
        tagline: "பெண்களுக்கு இலவச சமையல் எரிவாயு சிலிண்டர் இணைப்பு",
        shortBenefit: "இலவச எரிவாயு இணைப்பு + முதல் சிலிண்டர் மற்றும் அடுப்பு இலவசம்",
        detailedBenefit: "ஏழை எளிய குடும்பங்களைச் சேர்ந்த பெண் தலைவிகளுக்கு வைப்புத் தொகையின்றி இலவச கேஸ் இணைப்பு வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "விண்ணப்பதாரர் 18 வயது பூர்த்தியடைந்த பெண்ணாக இருக்க வேண்டும்",
          "வீட்டில் ஏற்கனவே எல்பிஜி இணைப்பு இருக்கக்கூடாது",
          "குறைந்த வருமானம் கொண்ட குடும்பங்களைச் சேர்ந்தவராக இருக்க வேண்டும்"
        ],
        requiredDocuments: [
          "பெண்ணின் ஆதார் அட்டை",
          "ரேஷன் அட்டை (குடும்ப அட்டை)",
          "வங்கி கணக்கு புத்தகம்",
          "முகவரி சான்று"
        ]
      }
    }
  },
  {
    id: "nsp-post-matric-scholarship",
    category: "education",
    level: "central",
    ministry: "Ministry of Social Justice and Empowerment / Ministry of Tribal Affairs",
    officialApplyUrl: "https://scholarships.gov.in/",
    sourceCitation: "National Scholarship Portal Guidelines (scholarships.gov.in)",
    lastVerifiedDate: "2026-08-01",
    criteria: {
      minAge: 15,
      maxAge: 35,
      genders: ["all"],
      states: ["All"],
      categories: ["SC", "ST", "OBC", "EWS"],
      occupations: ["student"],
      requiresStudentStatus: true,
      maxAnnualIncome: 250000
    },
    i18n: {
      en: {
        title: "Post-Matric Scholarship Scheme for SC/ST/OBC Students",
        tagline: "Tuition fees reimbursement and monthly maintenance allowance for higher education",
        shortBenefit: "100% compulsory course fees + up to ₹13,500/year maintenance allowance",
        detailedBenefit: "Supports students studying in classes 11, 12, ITI, Diploma, Undergraduate, and Postgraduate courses in recognized institutions by covering college tuition and living allowances.",
        eligibilityBullets: [
          "Currently enrolled student post class 10 (Higher Secondary, Degree, Technical courses)",
          "Belongs to SC, ST, OBC, or EWS category",
          "Total family annual income must not exceed ₹2,50,000"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Caste / Community Certificate",
          "Income Certificate from Competent Revenue Authority",
          "Class 10 / Previous Year Marksheet",
          "Current College Admission Fee Receipt & Bonafide Certificate",
          "Bank Passbook in Student's Name"
        ]
      },
      hi: {
        title: "मैट्रिकोत्तर छात्रवृत्ति योजना (Post-Matric Scholarship)",
        tagline: "एससी/एसटी/ओबीसी छात्रों के लिए कॉलेज फीस और मासिक छात्रवृत्ति सहायता",
        shortBenefit: "पूरी कॉलेज फीस वापसी + ₹13,500 प्रति वर्ष तक रखरखाव भत्ता",
        detailedBenefit: "10वीं के बाद 11वीं, 12वीं, आईटीआई, डिप्लोमा, बीए, बीएससी, बीटेक या पीजी कर रहे छात्रों की शिक्षा का खर्च उठाने हेतु केंद्र व राज्य सरकार द्वारा सहायता।",
        eligibilityBullets: [
          "10वीं पास कर किसी मान्यता प्राप्त संस्थान में नियमित पढ़ाई कर रहे हों",
          "एससी, एसटी या ओबीसी वर्ग से संबंधित हों",
          "पारिवारिक वार्षिक आय ₹2.5 लाख से अधिक न हो"
        ],
        requiredDocuments: [
          "छात्र का आधार कार्ड",
          "जाति प्रमाण पत्र",
          "आय प्रमाण पत्र (तहसीलदार/राजस्व अधिकारी द्वारा जारी)",
          "पिछली कक्षा की मार्कशीट",
          "वर्तमान कॉलेज की फीस रसीद एवं बोनाफाइड सर्टिफिकेट",
          "छात्र के नाम का बैंक खाता"
        ]
      },
      ta: {
        title: "பத்தாம் வகுப்புக்கு பிந்தைய கல்வி உதவித்தொகை (Post-Matric Scholarship)",
        tagline: "கல்லூரி கட்டணம் மற்றும் மாதாந்திர பராமரிப்பு உதவித்தொகை",
        shortBenefit: "முழு கல்லூரி கட்டணத் திருப்பிச் செலுத்தல் + ஆண்டுக்கு ₹13,500 பராமரிப்பு உதவி",
        detailedBenefit: "11, 12 ஆம் வகுப்பு, ஐடிஐ, டிப்ளமோ, இளங்கலை மற்றும் முதுகலை பயிலும் மாணவர்களுக்கு கல்லூரி கல்விக் கட்டணம் மற்றும் உதவித்தொகை வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "10 ஆம் வகுப்பு முடித்து உயர்கல்வி பயிலும் மாணவர்கள்",
          "SC, ST, OBC அல்லது EWS பிரிவைச் சேர்ந்தவர்கள்",
          "குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் இருக்க வேண்டும்"
        ],
        requiredDocuments: [
          "மாணவரின் ஆதார் அட்டை",
          "சாதிச் சான்றிதழ்",
          "வருமானச் சான்றிதழ்",
          "முந்தைய வகுப்பு மதிப்பெண் சான்றிதழ்",
          "கல்லூரி சேர்க்கை ரசீது மற்றும் போனஃபைட் சான்றிதழ்",
          "வங்கி கணக்கு புத்தகம்"
        ]
      }
    }
  },
  {
    id: "pm-svanidhi",
    category: "business_employment",
    level: "central",
    ministry: "Ministry of Housing and Urban Affairs",
    officialApplyUrl: "https://pmsvanidhi.mohua.gov.in/",
    sourceCitation: "PM SVANidhi Portal (pmsvanidhi.mohua.gov.in)",
    lastVerifiedDate: "2026-07-28",
    criteria: {
      minAge: 18,
      genders: ["all"],
      states: ["All"],
      occupations: ["artisan", "worker", "unemployed", "all"],
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "PM SVANidhi (Street Vendor Loan Scheme)",
        tagline: "Collateral-free working capital loan with 7% interest subsidy for street vendors",
        shortBenefit: "Collateral-free micro loans: ₹10,000 (1st tranche) up to ₹50,000 with 7% interest subsidy",
        detailedBenefit: "Micro-credit facility enabling urban, peri-urban, and rural street vendors to restart or scale livelihoods, featuring cash-back incentives on digital transactions and low interest.",
        eligibilityBullets: [
          "Vendors engaged in vending in urban or surrounding areas",
          "Possession of Vending Certificate / Identity Card issued by Urban Local Body (ULB)",
          "No collateral or third-party guarantee required"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Vending Certificate or Letter of Recommendation (LoR) from Municipality",
          "Aadhaar-linked Bank Passbook",
          "Mobile Number linked with Aadhaar"
        ]
      },
      hi: {
        title: "पीएम स्वनिधि योजना (स्ट्रीट वेंडर आत्मनिर्भर निधि)",
        tagline: "रेहड़ी-पटरी और छोटे दुकानदारों के लिए बिना गारंटी का सस्ता ऋण",
        shortBenefit: "बिना गारंटी ₹10,000 से ₹50,000 तक का कार्यशील पूंजी ऋण + 7% ब्याज सब्सिडी",
        detailedBenefit: "सड़क किनारे ठेला लगाने वाले, फेरीवाले और छोटे कारोबारियों को अपनी आजीविका बढ़ाने के लिए बिना किसी संपत्ति गिरवी रखे आसान किस्तों पर बैंक ऋण उपलब्ध कराया जाता है।",
        eligibilityBullets: [
          "शहरी या अर्ध-शहरी क्षेत्रों में रेहड़ी-पटरी, ठेला लगाने वाले विक्रेता",
          "नगर निगम या स्थानीय निकाय द्वारा वेंडिंग पहचान पत्र या अनुशंसा पत्र",
          "डिजिटल लेन-देन पर प्रति माह कैशबैक की सुविधा"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "नगर पालिका / नगर निगम द्वारा जारी वेंडिंग प्रमाण पत्र या अनुशंसा पत्र (LoR)",
          "बैंक पासबुक",
          "आधार लिंक मोबाइल नंबर"
        ]
      },
      ta: {
        title: "பிரதமர் ஸ்வநிதி திட்டம் (தெருவோர வியாபாரிகள் கடன்)",
        tagline: "தெருவோர வியாபாரிகளுக்கு பிணையற்ற எளிய தொழில் கடன்",
        shortBenefit: "பிணையற்ற கடன் ₹10,000 முதல் ₹50,000 வரை + 7% வட்டி மானியம்",
        detailedBenefit: "தெருவோர வியாபாரிகள் தங்கள் தொழிலை மேம்படுத்த பிணையற்ற எளிய கடன் மற்றும் டிஜிட்டல் பரிவர்த்தனைகளுக்கு கேஷ்பேக் சலுகை வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "நகர்ப்புற மற்றும் புறநகர் தெருவோர வியாபாரிகள்",
          "உள்ளாட்சி அமைப்பு வழங்கிய விற்பனையாளர் அடையாள அட்டை வைத்திருப்பவர்கள்",
          "எந்தவொரு பிணையமும் தேவையில்லை"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "நகராட்சி விற்பனையாளர் அடையாள அட்டை அல்லது பரிந்துரை கடிதம் (LoR)",
          "வங்கி கணக்கு புத்தகம்",
          "மொபைல் எண்"
        ]
      }
    }
  },
  {
    id: "pm-vishwakarma",
    category: "business_employment",
    level: "central",
    ministry: "Ministry of Micro, Small and Medium Enterprises",
    officialApplyUrl: "https://pmvishwakarma.gov.in/",
    sourceCitation: "PM Vishwakarma Scheme Guidelines (pmvishwakarma.gov.in)",
    lastVerifiedDate: "2026-08-15",
    criteria: {
      minAge: 18,
      genders: ["all"],
      states: ["All"],
      occupations: ["artisan", "worker"],
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "PM Vishwakarma Yojana",
        tagline: "End-to-end holistic support for traditional artisans and craftspersons",
        shortBenefit: "₹15,000 toolkit e-voucher + Collateral-free loan up to ₹3,00,000 at 5% interest",
        detailedBenefit: "Provides skill training with ₹500/day stipend, modern toolkit incentive of ₹15,000, and soft collateral-free enterprise loans in two tranches (₹1 Lakh + ₹2 Lakhs) for 18 designated traditional trades.",
        eligibilityBullets: [
          "Artisan working with hands and tools in one of 18 trades (Carpenter, Blacksmith, Potter, Mason, Tailor, Barber, Cobbler, etc.)",
          "Minimum age 18 years on the date of registration",
          "Restricted to one member per family with no government employee"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Active Mobile Number",
          "Bank Account Details",
          "Ration Card (for family verification)"
        ]
      },
      hi: {
        title: "पीएम विश्वकर्मा योजना",
        tagline: "पारंपरिक कारीगरों और शिल्पकारों के लिए टूलकिट व कम ब्याज का ऋण",
        shortBenefit: "₹15,000 मुफ्त टूलकिट वाउचर + ₹3 लाख तक का सस्ता लोन मात्र 5% ब्याज पर",
        detailedBenefit: "बढ़ई, लोहार, कुम्हार, राजमिस्त्री, दर्जी, धोबी, मोची सहित 18 पारंपरिक पेशों में काम करने वाले कारीगरों को आधुनिक टूलकिट, दैनिक ₹500 भत्ते के साथ प्रशिक्षण और रियायती लोन मिलता है।",
        eligibilityBullets: [
          "हाथ और औजारों से 18 पारंपरिक शिल्पों में काम करने वाले कारीगर",
          "न्यूनतम आयु 18 वर्ष",
          "परिवार में केवल एक सदस्य को लाभ, सरकारी नौकरी वाला सदस्य न हो"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "मोबाइल नंबर",
          "बैंक खाता विवरण",
          "राशन कार्ड"
        ]
      },
      ta: {
        title: "பிரதமர் விஸ்வகர்மா திட்டம்",
        tagline: "பாரம்பரிய கைவினைஞர்கள் மற்றும் தொழிலாளர்களுக்கான சிறப்பு திட்டம்",
        shortBenefit: "₹15,000 இலவச கருவித்தொகுப்பு கூப்பன் + 5% வட்டியில் ₹3 லட்சம் வரை கடன்",
        detailedBenefit: "தச்சர், கொல்லர், குயவர், தையல்காரர், கொத்தனார் உள்ளிட்ட 18 பாரம்பரிய கைவினைத் தொழிலாளர்களுக்கு தொழில் உபகரண மானியம், பயிற்சி உதவித்தொகை மற்றும் மிகக் குறைந்த வட்டியில் தொழில் கடன் வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "18 பாரம்பரிய தொழில்களில் ஏதேனும் ஒன்றில் கைவினைஞராக பணிபுரிபவர்",
          "18 வயது பூர்த்தியடைந்திருக்க வேண்டும்",
          "குடும்பத்திற்கு ஒருவர் மட்டுமே விண்ணப்பிக்க முடியும்"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "கைபேசி எண்",
          "வங்கி கணக்கு விவரங்கள்",
          "ரேஷன் அட்டை"
        ]
      }
    }
  },
  {
    id: "atal-pension-yojana",
    category: "pension",
    level: "central",
    ministry: "PFRDA (Ministry of Finance)",
    officialApplyUrl: "https://enps.nsdl.com/eNPS/ApySubRegistration.html",
    sourceCitation: "PFRDA Atal Pension Yojana Master Circular (pfrda.org.in)",
    lastVerifiedDate: "2026-07-20",
    criteria: {
      minAge: 18,
      maxAge: 40,
      genders: ["all"],
      states: ["All"],
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Atal Pension Yojana (APY)",
        tagline: "Government-guaranteed lifelong pension for unorganized sector citizens",
        shortBenefit: "Guaranteed monthly pension between ₹1,000 and ₹5,000 after age 60",
        detailedBenefit: "A voluntary retirement scheme where small monthly contributions from ages 18 to 40 guarantee a fixed monthly pension of ₹1,000 to ₹5,000 for life, backed by the Government of India.",
        eligibilityBullets: [
          "Indian citizen aged between 18 and 40 years",
          "Must have a savings bank account with auto-debit facility",
          "Applicant must not be an income taxpayer (as per recent rules)"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Bank / Post Office Savings Passbook",
          "Mobile Number for SMS alerts"
        ]
      },
      hi: {
        title: "अटल पेंशन योजना (APY)",
        tagline: "असंगठित क्षेत्र के नागरिकों के लिए सरकार द्वारा गारंटीकृत मासिक पेंशन",
        shortBenefit: "60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 तक की आजीवन गारंटीकृत मासिक पेंशन",
        detailedBenefit: "18 से 40 वर्ष की आयु में छोटा सा मासिक अंशदान करके 60 वर्ष पूरे होने पर हर महीने ₹1,000 से ₹5,000 तक की निश्चित सरकारी पेंशन प्राप्त करें।",
        eligibilityBullets: [
          "भारतीय नागरिक जिनकी आयु 18 से 40 वर्ष के बीच हो",
          "बचत बैंक खाता होना चाहिए",
          "आवेदक आयकर दाता नहीं होना चाहिए"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "बैंक / डाकघर बचत खाता पासबुक",
          "मोबाइल नंबर"
        ]
      },
      ta: {
        title: "அடல் ஓய்வூதியத் திட்டம் (APY)",
        tagline: "அமைப்புசாரா தொழிலாளர்களுக்கு அரசு உத்தரவாதமளிக்கப்பட்ட ஓய்வூதியம்",
        shortBenefit: "60 வயதுக்கு பிறகு மாதம் ₹1,000 முதல் ₹5,000 வரை ஆயுட்கால ஓய்வூதியம்",
        detailedBenefit: "18 முதல் 40 வயது வரை உள்ளவர்கள் சிறிய மாதாந்திர சேமிப்பு மூலம் 60 வயதிற்குப் பிறகு ஆயுள் முழுவதும் நிலையான அரசு ஓய்வூதியம் பெறலாம்.",
        eligibilityBullets: [
          "18 முதல் 40 வயதுடைய இந்திய குடிமகன்",
          "சேமிப்பு வங்கிக் கணக்கு இருக்க வேண்டும்",
          "வருமான வரி செலுத்துபவராக இருக்கக்கூடாது"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "வங்கி சேமிப்பு கணக்கு புத்தகம்",
          "மொபைல் எண்"
        ]
      }
    }
  },
  {
    id: "ign-old-age-pension",
    category: "pension",
    level: "central",
    ministry: "Ministry of Rural Development",
    officialApplyUrl: "https://nsap.nic.in/",
    sourceCitation: "National Social Assistance Programme Guidelines (nsap.nic.in)",
    lastVerifiedDate: "2026-08-05",
    criteria: {
      minAge: 60,
      genders: ["all"],
      states: ["All"],
      maxAnnualIncome: 100000,
      requiresBPL: true,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Indira Gandhi National Old Age Pension (IGNOAPS)",
        tagline: "Monthly pension for destitute and elderly senior citizens below poverty line",
        shortBenefit: "Monthly pension of ₹500 to ₹2,000 (Central + State combined contribution)",
        detailedBenefit: "Provides monthly financial sustenance to senior citizens aged 60 and above living below the poverty line, with enhanced amounts for super seniors aged 80+.",
        eligibilityBullets: [
          "Applicant must be 60 years of age or older",
          "Must belong to a household living Below Poverty Line (BPL / Antyodaya)",
          "Must possess verified age proof and BPL listing"
        ],
        requiredDocuments: [
          "Aadhaar Card or Voter ID (Age Proof)",
          "BPL Ration Card / SECC Household Certificate",
          "Bank Passbook (Single Account)",
          "Passport Size Photographs"
        ]
      },
      hi: {
        title: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना",
        tagline: "गरीबी रेखा से नीचे जीवनयापन करने वाले बुजुर्गों के लिए मासिक पेंशन",
        shortBenefit: "प्रति माह ₹500 से ₹2,000 की वृद्धावस्था पेंशन (केंद्र व राज्य का संयुक्त अंश)",
        detailedBenefit: "60 वर्ष या उससे अधिक उम्र के बीपीएल बुजुर्गों को सम्मानपूर्वक जीवन जीने के लिए हर महीने पेंशन उनके बैंक खाते में सीधे भेजी जाती है।",
        eligibilityBullets: [
          "आयु 60 वर्ष या उससे अधिक होनी चाहिए",
          "परिवार गरीबी रेखा (BPL) से नीचे का होना अनिवार्य",
          "आयु का वैध प्रमाण पत्र उपलब्ध होना चाहिए"
        ],
        requiredDocuments: [
          "आधार कार्ड / मतदाता पहचान पत्र (आयु प्रमाण)",
          "बीपीएल राशन कार्ड",
          "बैंक पासबुक",
          "पासपोर्ट साइज फोटो"
        ]
      },
      ta: {
        title: "இந்திரா காந்தி முதியோர் ஓய்வூதியத் திட்டம் (IGNOAPS)",
        tagline: "வறுமைக் கோட்டிற்கு கீழ் உள்ள மூத்த குடிமக்களுக்கான மாதாந்திர உதவித்தொகை",
        shortBenefit: "மாதம் ₹500 முதல் ₹2,000 வரை முதியோர் ஓய்வூதியம்",
        detailedBenefit: "60 வயது நிரம்பிய ஏழை முதியவர்கள் கண்ணியத்துடன் வாழ மாதாந்திர ஓய்வூதியம் நேரடியாக வங்கி கணக்கில் வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "60 வயது பூர்த்தியடைந்தவராக இருக்க வேண்டும்",
          "வறுமைக் கோட்டிற்கு கீழ் உள்ள குடும்பத்தைச் சேர்ந்தவராக இருக்க வேண்டும்",
          "முறையான வயதுச் சான்றிதழ் அவசியம்"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை / வாக்காளர் அட்டை (வயதுச் சான்று)",
          "வறுமைக் கோட்டிற்கு கீழ் உள்ளதற்கான ரேஷன் அட்டை",
          "வங்கி கணக்கு புத்தகம்",
          "புகைப்படம்"
        ]
      }
    }
  },
  {
    id: "ign-widow-pension",
    category: "pension",
    level: "central",
    ministry: "Ministry of Rural Development",
    officialApplyUrl: "https://nsap.nic.in/",
    sourceCitation: "NSAP Guidelines - IGNWPS (nsap.nic.in)",
    lastVerifiedDate: "2026-08-05",
    criteria: {
      minAge: 40,
      genders: ["female"],
      states: ["All"],
      maxAnnualIncome: 150000,
      requiresWidowOrSingleMother: true,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Indira Gandhi National Widow Pension (IGNWPS)",
        tagline: "Monthly pension support for widowed women from underprivileged households",
        shortBenefit: "Monthly pension of ₹500 to ₹1,500 directly credited to bank account",
        detailedBenefit: "Ensures financial security and social safety net for widowed women aged 40 and above from economically disadvantaged families.",
        eligibilityBullets: [
          "Must be a widowed woman aged 40 years or above",
          "Belonging to a household living Below Poverty Line (BPL)",
          "Must possess Husband's Death Certificate"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Husband's Death Certificate",
          "BPL Ration Card / Income Certificate",
          "Bank Passbook",
          "Passport Size Photographs"
        ]
      },
      hi: {
        title: "इंदिरा गांधी राष्ट्रीय विधवा पेंशन योजना",
        tagline: "आर्थिक रूप से कमजोर विधवा महिलाओं के लिए मासिक आर्थिक सहायता",
        shortBenefit: "प्रति माह ₹500 से ₹1,500 तक की विधवा पेंशन सीधे बैंक खाते में",
        detailedBenefit: "पति के निधन के पश्चात 40 वर्ष या अधिक उम्र की गरीब महिलाओं को आर्थिक संबल प्रदान करने हेतु मासिक पेंशन दी जाती है।",
        eligibilityBullets: [
          "महिला की आयु 40 वर्ष या उससे अधिक होनी चाहिए",
          "आवेदक महिला विधवा हो और परिवार बीपीएल श्रेणी में आता हो",
          "पति का मृत्यु प्रमाण पत्र उपलब्ध होना अनिवार्य"
        ],
        requiredDocuments: [
          "महिला का आधार कार्ड",
          "पति का मृत्यु प्रमाण पत्र",
          "बीपीएल राशन कार्ड / आय प्रमाण पत्र",
          "बैंक पासबुक",
          "पासपोर्ट साइज फोटो"
        ]
      },
      ta: {
        title: "விதவை பெண்கள் மாதாந்திர ஓய்வூதியத் திட்டம் (IGNWPS)",
        tagline: "ஏழை விதவைப் பெண்களுக்கு அரசு வழங்கும் மாதாந்திர வாழ்வாதார உதவி",
        shortBenefit: "மாதம் ₹500 முதல் ₹1,500 வரை உதவித்தொகை",
        detailedBenefit: "கணவனை இழந்த 40 வயதுக்கு மேற்பட்ட ஏழைப் பெண்களுக்கு சமூகப் பாதுகாப்பு மற்றும் மாதாந்திர வாழ்வாதார உதவி வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "40 வயது அல்லது அதற்கு மேற்பட்ட விதவைப் பெண்கள்",
          "வறுமைக் கோட்டிற்கு கீழ் உள்ள குடும்பத்தைச் சேர்ந்தவர்கள்",
          "கணவரின் இறப்புச் சான்றிதழ் அவசியம்"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "கணவரின் இறப்புச் சான்றிதழ்",
          "வருமானச் சான்றிதழ் / ரேஷன் அட்டை",
          "வங்கி கணக்கு புத்தகம்",
          "புகைப்படம்"
        ]
      }
    }
  },
  {
    id: "ign-disability-pension",
    category: "social_welfare",
    level: "central",
    ministry: "Ministry of Social Justice & Empowerment",
    officialApplyUrl: "https://nsap.nic.in/",
    sourceCitation: "Divyangjan Welfare & NSAP Guidelines (nsap.nic.in)",
    lastVerifiedDate: "2026-08-05",
    criteria: {
      minAge: 18,
      genders: ["all"],
      states: ["All"],
      requiresDisability: true,
      maxAnnualIncome: 150000,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "National Disability Pension (IGNDPS / Divyang Pension)",
        tagline: "Monthly pension and rehabilitation aid for persons with severe disabilities",
        shortBenefit: "Monthly pension of ₹1,000 to ₹3,000 depending on state top-up",
        detailedBenefit: "Provides dignified livelihood sustenance for persons aged 18 and above with 40%+ certified severe or multiple disabilities belonging to BPL households.",
        eligibilityBullets: [
          "Person with disability aged 18 years or above",
          "Disability must be certified at 40% or more (UDID card or Medical Board Certificate)",
          "Family living below poverty line or low-income threshold"
        ],
        requiredDocuments: [
          "UDID Card / Disability Certificate issued by Medical Board",
          "Aadhaar Card",
          "BPL Card / Income Certificate",
          "Bank Passbook",
          "Passport Size Photograph"
        ]
      },
      hi: {
        title: "दिव्यांग पेंशन योजना (IGNDPS)",
        tagline: "गंभीर दिव्यांगता वाले व्यक्तियों के लिए मासिक भरण-पोषण पेंशन",
        shortBenefit: "प्रति माह ₹1,000 से ₹3,000 तक की दिव्यांग पेंशन (राज्य अनुसार)",
        detailedBenefit: "18 वर्ष या अधिक उम्र के 40% या अधिक प्रमाणित दिव्यांग नागरिकों को आत्मनिर्भरता और गरिमापूर्ण जीवन हेतु मासिक पेंशन प्रदान की जाती है।",
        eligibilityBullets: [
          "आवेदक की आयु 18 वर्ष या उससे अधिक हो",
          "40% या अधिक दिव्यांगता का प्रमाण पत्र (UDID कार्ड) अनिवार्य",
          "गरीबी रेखा या निम्न आय वर्ग के अंतर्गत आते हों"
        ],
        requiredDocuments: [
          "UDID कार्ड या मेडिकल बोर्ड द्वारा जारी दिव्यांगता प्रमाण पत्र",
          "आधार कार्ड",
          "आय प्रमाण पत्र / बीपीएल राशन कार्ड",
          "बैंक पासबुक",
          "पासपोर्ट साइज फोटो"
        ]
      },
      ta: {
        title: "மாற்றுத்திறனாளிகள் மாதாந்திர ஓய்வூதியத் திட்டம் (IGNDPS)",
        tagline: "மாற்றுத்திறனாளிகளுக்கு அரசு வழங்கும் சிறப்பு மாதாந்திர உதவித்தொகை",
        shortBenefit: "மாதம் ₹1,000 முதல் ₹3,000 வரை மாதாந்திர உதவித்தொகை",
        detailedBenefit: "40% அல்லது அதற்கு மேற்பட்ட குறைபாடுடைய 18 வயதுக்கு மேற்பட்ட மாற்றுத்திறனாளிகளுக்கு மாதாந்திர உதவித்தொகை வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "18 வயது அல்லது அதற்கு மேற்பட்ட மாற்றுத்திறனாளிகள்",
          "40% அல்லது அதற்கு மேற்பட்ட மருத்துவ சான்றிதழ் / UDID அட்டை",
          "குறைந்த வருமானம் கொண்ட குடும்பத்தைச் சேர்ந்தவர்கள்"
        ],
        requiredDocuments: [
          "UDID அட்டை / மருத்துவக் குழு வழங்கிய மாற்றுத்திறனாளி சான்றிதழ்",
          "ஆதார் அட்டை",
          "வருமானச் சான்றிதழ் / ரேஷன் அட்டை",
          "வங்கி கணக்கு புத்தகம்",
          "புகைப்படம்"
        ]
      }
    }
  },
  {
    id: "pm-matru-vandana",
    category: "women_child",
    level: "central",
    ministry: "Ministry of Women and Child Development",
    officialApplyUrl: "https://pmmvy.wcd.gov.in/",
    sourceCitation: "PMMVY Scheme Implementation Guidelines (pmmvy.wcd.gov.in)",
    lastVerifiedDate: "2026-08-18",
    criteria: {
      minAge: 19,
      maxAge: 45,
      genders: ["female"],
      states: ["All"],
      requiresPregnantOrLactating: true,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
        tagline: "Direct cash maternity incentive for pregnant women & lactating mothers",
        shortBenefit: "₹5,000 in two installments for 1st child + ₹6,000 for 2nd girl child",
        detailedBenefit: "Provides wage-loss compensation and nutritional support to pregnant women and lactating mothers for health check-ups, institutional delivery, and child vaccination.",
        eligibilityBullets: [
          "Pregnant women and lactating mothers aged 19 years and above",
          "Applicable for the first living child (₹5,000) and second child if female (₹6,000)",
          "Regular government and PSU salaried employees are excluded"
        ],
        requiredDocuments: [
          "Mother's and Father's Aadhaar Card",
          "Mother and Child Protection (MCP) Card issued by Anganwadi / Health Centre",
          "Bank Passbook of the mother (Aadhaar linked)",
          "Child Birth Certificate (for second installment)"
        ]
      },
      hi: {
        title: "प्रधानमंत्री मातृ वंदना योजना (PMMVY)",
        tagline: "गर्भवती व धात्री माताओं के पोषण और स्वास्थ्य हेतु नकद सहायता",
        shortBenefit: "पहले बच्चे पर ₹5,000 तथा दूसरे बच्चे के रूप में कन्या होने पर ₹6,000 की सहायता",
        detailedBenefit: "गर्भवती महिलाओं को प्रसव पूर्व जांच, पोषण और संस्थागत प्रसव को बढ़ावा देने के लिए सीधे उनके बैंक खाते में नकद प्रोत्साहन राशि प्रदान की जाती है।",
        eligibilityBullets: [
          "19 वर्ष या उससे अधिक उम्र की गर्भवती व स्तनपान कराने वाली माताएं",
          "पहले बच्चे हेतु ₹5,000 तथा दूसरी कन्या शिशु होने पर ₹6,000",
          "सरकारी या सार्वजनिक क्षेत्र में नियमित कार्यरत महिलाएं अपात्र हैं"
        ],
        requiredDocuments: [
          "माता व पिता दोनों का आधार कार्ड",
          "मातृ एवं शिशु सुरक्षा कार्ड (MCP कार्ड / जच्चा-बच्चा कार्ड)",
          "माता का आधार लिंक बैंक खाता",
          "बच्चे का जन्म प्रमाण पत्र (दूसरी किस्त हेतु)"
        ]
      },
      ta: {
        title: "பிரதமர் கர்ப்பிணி பெண்கள் உதவித் திட்டம் (PMMVY)",
        tagline: "கர்ப்பிணி மற்றும் பாலூட்டும் தாய்மார்களுக்கு ஊட்டச்சத்து நிதி உதவி",
        shortBenefit: "முதல் குழந்தைக்கு ₹5,000 மற்றும் 2-வது பெண் குழந்தைக்கு ₹6,000 நேரடி உதவி",
        detailedBenefit: "கர்ப்பிணி தாய்மார்களுக்கு சத்தான உணவு மற்றும் மருத்துவப் பரிசோதனைகளை உறுதி செய்ய வங்கி கணக்கில் தவணைகளாக நிதி உதவி வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "19 வயது அல்லது அதற்கு மேற்பட்ட கர்ப்பிணி தாய்மார்கள்",
          "முதல் குழந்தை மற்றும் 2-வது பெண் குழந்தை பெற்ற தாய்மார்கள்",
          "அரசு ஊழியர்கள் தவிர மற்றவர்கள் தகுதியானவர்கள்"
        ],
        requiredDocuments: [
          "தாய் மற்றும் தந்தையின் ஆதார் அட்டை",
          "தாய்-சேய் பாதுகாப்பு அட்டை (MCP Card)",
          "தாயின் வங்கி கணக்கு புத்தகம்",
          "குழந்தையின் பிறப்புச் சான்றிதழ்"
        ]
      }
    }
  },
  {
    id: "pm-fasal-bima",
    category: "agriculture",
    level: "central",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    officialApplyUrl: "https://pmfby.gov.in/",
    sourceCitation: "PMFBY Revised Operational Guidelines (pmfby.gov.in)",
    lastVerifiedDate: "2026-07-10",
    criteria: {
      minAge: 18,
      genders: ["all"],
      states: ["All"],
      occupations: ["farmer"],
      requiresLandOwnership: true,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        tagline: "Comprehensive crop insurance against non-preventable natural risks",
        shortBenefit: "Low premium (1.5% to 2%) with full financial risk cover for crop loss",
        detailedBenefit: "Protects farmers against post-harvest losses, localized calamities, unseasonal rainfall, drought, floods, and pest attacks at nominal premium rates.",
        eligibilityBullets: [
          "All farmers including sharecroppers and tenant farmers growing notified crops",
          "Farmer must hold insurable land interest in notified areas",
          "Cut-off dates strictly linked to seasonal sowing cycles"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Land Possession Document / RoR / Khasra-Khatauni",
          "Sowing Certificate issued by Patwari / Village Officer",
          "Bank Passbook"
        ]
      },
      hi: {
        title: "प्रधानमंत्री फसल बीमा योजना (PMFBY)",
        tagline: "प्राकृतिक आपदाओं से फसल नुकसान पर व्यापक बीमा सुरक्षा",
        shortBenefit: "मात्र 1.5% से 2% के मामूली प्रीमियम पर फसल नुकसान का पूरा मुआवजा",
        detailedBenefit: "सूखा, बाढ़, ओलावृष्टि, कीट या बेमौसम बारिश से फसल के नुकसान पर किसानों को आर्थिक सुरक्षा प्रदान की जाती है ताकि उनकी आजीविका सुरक्षित रहे।",
        eligibilityBullets: [
          "अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले सभी किसान (बटाईदार भी शामिल)",
          "खेत में बुवाई की पुष्टि होना आवश्यक",
          "बैंक या सीएससी केंद्र के माध्यम से आवेदन संभव"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "जमीन के दस्तावेज (खसरा / खतौनी)",
          "पटवारी या कृषि अधिकारी द्वारा जारी बुवाई प्रमाण पत्र",
          "बैंक पासबुक"
        ]
      },
      ta: {
        title: "பிரதமர் பயிர் காப்பீட்டுத் திட்டம் (PMFBY)",
        tagline: "இயற்கை பேரிடர்களால் ஏற்படும் பயிர் இழப்புகளுக்கு முழு காப்பீடு",
        shortBenefit: "1.5% முதல் 2% வரையிலான குறைந்த பிரீமியத்தில் முழு பயிர் இழப்பீடு",
        detailedBenefit: "வறட்சி, வெள்ளம், பூச்சித் தாக்குதல் அல்லது எதிர்பாராத மழையினால் ஏற்படும் பயிர் சேதங்களுக்கு விவசாயிகளுக்கு உரிய இழப்பீடு வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "அறிவிக்கப்பட்ட பயிர்களை சாகுபடி செய்யும் அனைத்து விவசாயிகள்",
          "நிலப் பாத்தியதை அல்லது குத்தகை ஒப்பந்தம் இருக்க வேண்டும்",
          "பயிர் சாகுபடி காலத்திற்குள் விண்ணப்பிக்க வேண்டும்"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "நிலப் பட்டா / சிட்டா ஆவணம்",
          "கிராம நிர்வாக அலுவலர் வழங்கிய அடங்கல் / சாகுபடி சான்றிதழ்",
          "வங்கி கணக்கு புத்தகம்"
        ]
      }
    }
  },
  {
    id: "kisan-credit-card",
    category: "agriculture",
    level: "central",
    ministry: "Ministry of Agriculture & Farmers Welfare / RBI",
    officialApplyUrl: "https://pmkisan.gov.in/",
    sourceCitation: "RBI Master Circular - Kisan Credit Card Scheme",
    lastVerifiedDate: "2026-06-30",
    criteria: {
      minAge: 18,
      maxAge: 75,
      genders: ["all"],
      states: ["All"],
      occupations: ["farmer"],
      requiresLandOwnership: true,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Kisan Credit Card (KCC)",
        tagline: "Low-interest institutional credit for seeds, fertilizers, and animal husbandry",
        shortBenefit: "Loans up to ₹3,00,000 at concessional 4% effective interest rate (with prompt repayment)",
        detailedBenefit: "Provides flexible short-term revolving credit to farmers for crop cultivation, harvesting, animal husbandry, dairy, fisheries, and post-harvest expenses.",
        eligibilityBullets: [
          "Individual / joint borrowers who are owner cultivators or tenant farmers",
          "Subsidized interest rate of 7% with 3% prompt repayment incentive (effective 4%)",
          "Collateral-free limit available up to ₹1,60,000"
        ],
        requiredDocuments: [
          "Aadhaar Card & PAN Card",
          "Land Ownership Record (7/12, Khatauni or Patta)",
          "Crop Cultivation Details",
          "Passport Size Photos"
        ]
      },
      hi: {
        title: "किसान क्रेडिट कार्ड (KCC)",
        tagline: "खाद, बीज और कृषि उपकरणों के लिए 4% की रियायती ब्याज दर पर आसान लोन",
        shortBenefit: "समय पर भुगतान करने पर मात्र 4% ब्याज पर ₹3 लाख तक का कृषि ऋण",
        detailedBenefit: "किसानों को साहूकारों के भारी ब्याज से बचाने हेतु खाद, बीज, कीटनाशक तथा पशुपालन व डेयरी हेतु सस्ती ब्याज दर पर बैंक ऋण की सुविधा दी जाती है।",
        eligibilityBullets: [
          "स्वयं की भूमि पर खेती करने वाले किसान, बटाईदार या पशुपालक",
          "समय पर लोन चुकाने पर 3% अतिरिक्त ब्याज छूट (प्रभावी ब्याज दर केवल 4%)",
          "₹1.60 लाख तक का लोन बिना किसी जमीन को गिरवी रखे मिलता है"
        ],
        requiredDocuments: [
          "आधार कार्ड व पैन कार्ड",
          "जमीन के कागजात (खतौनी, खसरा नकल)",
          "फसल बुवाई का विवरण",
          "पासपोर्ट साइज फोटो"
        ]
      },
      ta: {
        title: "கிசான் கிரெடிட் கார்டு (KCC விவசாய கடன்)",
        tagline: "விவசாயிகளுக்கு 4% குறைந்த வட்டியில் எளிய விவசாய கடன்",
        shortBenefit: "நேரத்திற்கு திருப்பிச் செலுத்தினால் 4% வட்டியில் ₹3 லட்சம் வரை கடன்",
        detailedBenefit: "விதை, உரம், பூச்சிக்கொல்லி மருந்துகள் வாங்க மற்றும் கால்நடை பராமரிப்புக்கு வங்கிகள் மூலம் குறைந்த வட்டியில் நடைமுறை மூலதன கடன் வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "விவசாய நிலம் வைத்துள்ள விவசாயிகள் மற்றும் குத்தகைதாரர்கள்",
          "முறையாக திருப்பிச் செலுத்தினால் 3% கூடுதல் வட்டி தள்ளுபடி (நிகர வட்டி 4%)",
          "₹1.60 லட்சம் வரை எந்தவொரு அடமானமும் தேவையில்லை"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை மற்றும் பான் அட்டை",
          "நிலப் பட்டா / சிட்டா ஆவணம்",
          "பயிர் சாகுபடி விவரங்கள்",
          "புகைப்படம்"
        ]
      }
    }
  },
  {
    id: "kalaignar-magalir-urimai",
    category: "women_child",
    level: "state",
    state: "Tamil Nadu",
    ministry: "Special Programme Implementation Department, Govt. of Tamil Nadu",
    officialApplyUrl: "https://kmut.tn.gov.in/",
    sourceCitation: "Govt of Tamil Nadu G.O. Ms. No. 46 (kmut.tn.gov.in)",
    lastVerifiedDate: "2026-08-15",
    criteria: {
      minAge: 21,
      genders: ["female"],
      states: ["Tamil Nadu"],
      maxAnnualIncome: 250000,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Kalaignar Magalir Urimai Thogai (KMUT)",
        tagline: "Monthly universal basic income of ₹1,000 for women heads of households in Tamil Nadu",
        shortBenefit: "₹1,000 transferred every month directly into the woman's bank account",
        detailedBenefit: "A flagship social entitlement scheme acknowledging women's unpaid household labor, improving financial independence and supporting basic family expenses.",
        eligibilityBullets: [
          "Woman head of the family as recorded on the Smart Family Card in Tamil Nadu",
          "Age 21 years or above",
          "Annual family income under ₹2.5 Lakhs & electricity consumption below 3,600 units/year",
          "Family must not own a 4-wheeler (tractor/tiller exempt)"
        ],
        requiredDocuments: [
          "Tamil Nadu Smart Ration Card (Family Card)",
          "Aadhaar Card of the woman applicant",
          "Aadhaar-linked Bank Passbook",
          "TNEB Electricity Consumer Number / Bill"
        ]
      },
      hi: {
        title: "कलैग्नार महिला अधिकार निधि (तमिलनाडु)",
        tagline: "तमिलनाडु में परिवार की महिला मुखिया को ₹1,000 प्रति माह की आर्थिक सहायता",
        shortBenefit: "हर महीने ₹1,000 सीधे महिला के बैंक खाते में",
        detailedBenefit: "तमिलनाडु सरकार द्वारा गृहणियों के श्रम का सम्मान करते हुए आर्थिक आत्मनिर्भरता के लिए ₹1,000 प्रतिमाह की मासिक सम्मान राशि दी जाती है।",
        eligibilityBullets: [
          "तमिलनाडु स्मार्ट राशन कार्ड में महिला परिवार की मुखिया होनी चाहिए",
          "न्यूनतम आयु 21 वर्ष",
          "पारिवारिक वार्षिक आय ₹2.5 लाख से कम तथा सालाना बिजली खपत 3600 यूनिट से कम",
          "परिवार के पास चौपहिया वाहन न हो"
        ],
        requiredDocuments: [
          "तमिलनाडु स्मार्ट राशन कार्ड",
          "महिला का आधार कार्ड",
          "आधार लिंक बैंक पासबुक",
          "बिजली बिल उपभोक्ता संख्या"
        ]
      },
      ta: {
        title: "கலைஞர் மகளிர் உரிமைத் திட்டம் (KMUT)",
        tagline: "தமிழ்நாட்டு குடும்பத் தலைவிகளுக்கு மாதம் ₹1,000 உரிமைத் தொகை",
        shortBenefit: "ஒவ்வொரு மாதமும் ₹1,000 நேரடியாக பெண்களின் வங்கி கணக்கில்",
        detailedBenefit: "பெண்களின் உழைப்பை அங்கீகரித்து, பொருளாதார தற்சார்பை உறுதி செய்ய மாதந்தோறும் ₹1,000 மகளிர் உரிமைத் தொகை வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "தமிழ்நாடு குடும்ப அட்டையில் குடும்பத் தலைவியாக உள்ள பெண்கள்",
          "21 வயது பூர்த்தியடைந்திருக்க வேண்டும்",
          "குடும்ப ஆண்டு வருமானம் ₹2.5 லட்சத்திற்குள் மற்றும் மின் நுகர்வு ஆண்டுக்கு 3600 யூனிட்டுக்குள்",
          "நான்கு சக்கர வாகனம் வைத்திருக்கக்கூடாது"
        ],
        requiredDocuments: [
          "ஸ்மார்ட் ரேஷன் அட்டை (குடும்ப அட்டை)",
          "விண்ணப்பதாரர் பெண்ணின் ஆதார் அட்டை",
          "ஆதார் இணைக்கப்பட்ட வங்கி கணக்கு புத்தகம்",
          "மின் கட்டண அட்டை / ரசீது"
        ]
      }
    }
  },
  {
    id: "gruha-lakshmi-karnataka",
    category: "women_child",
    level: "state",
    state: "Karnataka",
    ministry: "Department of Women and Child Development, Govt of Karnataka",
    officialApplyUrl: "https://sevasindhu.karnataka.gov.in/",
    sourceCitation: "Karnataka Seva Sindhu Portal (sevasindhu.karnataka.gov.in)",
    lastVerifiedDate: "2026-08-15",
    criteria: {
      minAge: 18,
      genders: ["female"],
      states: ["Karnataka"],
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Gruha Lakshmi Scheme (Karnataka)",
        tagline: "Monthly ₹2,000 financial support for woman head of every eligible household",
        shortBenefit: "₹2,000 transferred every month directly via DBT",
        detailedBenefit: "Guarantees ₹2,000 every month to the designated female head of the family as identified in the Ration Card (APL / BPL / Antyodaya).",
        eligibilityBullets: [
          "Woman head of the family listed in Karnataka Ration Card",
          "Neither the woman nor her husband should be income taxpayers or GST filers",
          "Only one woman per household eligible"
        ],
        requiredDocuments: [
          "Karnataka Ration Card (BPL/APL/AAY)",
          "Aadhaar Card of the woman applicant and husband",
          "Aadhaar-linked Bank Account Passbook",
          "Mobile Number registered with Aadhaar"
        ]
      },
      hi: {
        title: "गृह लक्ष्मी योजना (कर्नाटक)",
        tagline: "कर्नाटक में परिवार की महिला मुखिया को ₹2,000 प्रति माह की आर्थिक सहायता",
        shortBenefit: "प्रति माह ₹2,000 सीधे बैंक खाते में (डीबीटी द्वारा)",
        detailedBenefit: "कर्नाटक के राशन कार्ड में दर्ज महिला मुखिया को हर महीने ₹2,000 की वित्तीय सहायता सीधे बैंक खाते में दी जाती है।",
        eligibilityBullets: [
          "कर्नाटक राशन कार्ड में दर्ज महिला मुखिया",
          "महिला या उसका पति आयकर दाता या जीएसटी फाइलर नहीं होना चाहिए",
          "प्रति परिवार केवल एक महिला पात्र"
        ],
        requiredDocuments: [
          "कर्नाटक राशन कार्ड",
          "महिला व पति का आधार कार्ड",
          "आधार लिंक बैंक पासबुक",
          "आधार से जुड़ा मोबाइल नंबर"
        ]
      },
      ta: {
        title: "கிருஹ லட்சுமி திட்டம் (கர்நாடகா)",
        tagline: "கர்நாடக குடும்பத் தலைவிகளுக்கு மாதம் ₹2,000 உதவித்தொகை",
        shortBenefit: "மாதம் தோறும் ₹2,000 நேரடியாக வங்கி கணக்கில்",
        detailedBenefit: "கர்நாடக ரேஷன் அட்டையில் குடும்பத் தலைவியாக உள்ள பெண்களுக்கு மாதாந்திர செலவுகளுக்கு ₹2,000 வங்கி கணக்கில் செலுத்தப்படுகிறது.",
        eligibilityBullets: [
          "கர்நாடக ரேஷன் கார்டில் குடும்பத் தலைவியாக உள்ள பெண்கள்",
          "பெண்ணோ அல்லது அவரது கணவரோ வருமான வரி அல்லது ஜிஎஸ்டி செலுத்துபவராக இருக்கக்கூடாது",
          "குடும்பத்திற்கு ஒரு பெண் மட்டுமே தகுதியானவர்"
        ],
        requiredDocuments: [
          "கர்நாடக ரேஷன் அட்டை",
          "பெண் மற்றும் கணவரின் ஆதார் அட்டை",
          "வங்கி கணக்கு புத்தகம்",
          "மொபைல் எண்"
        ]
      }
    }
  },
  {
    id: "mukhyamantri-kanya-sumangala",
    category: "women_child",
    level: "state",
    state: "Uttar Pradesh",
    ministry: "Women and Child Development, Govt. of Uttar Pradesh",
    officialApplyUrl: "https://mksy.up.gov.in/",
    sourceCitation: "MKSY Portal Govt of UP (mksy.up.gov.in)",
    lastVerifiedDate: "2026-07-25",
    criteria: {
      minAge: 0,
      maxAge: 25,
      genders: ["female"],
      states: ["Uttar Pradesh"],
      maxAnnualIncome: 300000,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)",
        tagline: "Financial grant up to ₹25,000 across 6 milestones from girl's birth to graduation",
        shortBenefit: "₹25,000 staggered financial assistance for daughter's education & health",
        detailedBenefit: "Supports daughters in UP with phased transfers: on birth, complete vaccination, class 1 admission, class 6 admission, class 9 admission, and entry to degree/diploma.",
        eligibilityBullets: [
          "Permanent resident of Uttar Pradesh with max 2 daughters per family",
          "Family annual income must be below ₹3,00,000",
          "Girl child must be enrolled in school or higher education"
        ],
        requiredDocuments: [
          "UP Domicile Certificate",
          "Income Certificate (under ₹3 Lakhs)",
          "Aadhaar of Girl Child & Parents",
          "Birth Certificate / School Admission Certificate",
          "Bank Passbook of Girl Child or Joint Account"
        ]
      },
      hi: {
        title: "मुख्यमंत्री कन्या सुमंगला योजना (उत्तर प्रदेश)",
        tagline: "बालिका के जन्म से लेकर स्नातक तक 6 चरणों में कुल ₹25,000 की वित्तीय सहायता",
        shortBenefit: "बेटी की पढ़ाई और स्वास्थ्य हेतु 6 चरणों में ₹25,000 का अनुदान",
        detailedBenefit: "उत्तर प्रदेश में बालिकाओं को उच्च शिक्षा दिलाने और भ्रूण हत्या रोकने हेतु जन्म, टीकाकरण, कक्षा 1, 6, 9 में प्रवेश तथा स्नातक में प्रवेश पर नकद सहायता दी जाती है।",
        eligibilityBullets: [
          "उत्तर प्रदेश का स्थायी निवासी परिवार, अधिकतम 2 बेटियां",
          "परिवार की वार्षिक आय ₹3,00,000 से कम हो",
          "बालिका स्कूल या कॉलेज में नामांकित हो"
        ],
        requiredDocuments: [
          "उत्तर प्रदेश निवास प्रमाण पत्र",
          "आय प्रमाण पत्र (₹3 लाख से कम)",
          "बालिका और माता-पिता का आधार कार्ड",
          "जन्म प्रमाण पत्र / स्कूल प्रवेश रसीद",
          "बैंक पासबुक"
        ]
      },
      ta: {
        title: "முதலமைச்சர் கன்யா சுமங்கலா திட்டம் (உத்தரப் பிரதேசம்)",
        tagline: "பெண் குழந்தைகளின் பிறப்பு முதல் பட்டப்படிப்பு வரை ₹25,000 கல்வி உதவி",
        shortBenefit: "6 கட்டங்களாக ₹25,000 நேரடி நிதி உதவி",
        detailedBenefit: "பெண் குழந்தைகளின் கல்வி, தடுப்பூசி மற்றும் பட்டப்படிப்பு வரை ஆறு கட்டங்களாக நிதி உதவி வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "உத்தரப் பிரதேசத்தில் வசிப்பவர் (குடும்பத்திற்கு அதிகபட்சம் 2 பெண் குழந்தைகள்)",
          "குடும்ப ஆண்டு வருமானம் ₹3 லட்சத்திற்குள் இருக்க வேண்டும்",
          "பள்ளியில் அல்லது கல்லூரியில் சேர்ந்திருக்க வேண்டும்"
        ],
        requiredDocuments: [
          "இருப்பிடச் சான்றிதழ்",
          "வருமானச் சான்றிதழ்",
          "ஆதார் அட்டை",
          "பிறப்புச் சான்றிதழ் / பள்ளி சேர்க்கை ரசீது",
          "வங்கி கணக்கு புத்தகம்"
        ]
      }
    }
  },
  {
    id: "swachh-bharat-gramin",
    category: "housing",
    level: "central",
    ministry: "Department of Drinking Water and Sanitation (Ministry of Jal Shakti)",
    officialApplyUrl: "https://sbm.gov.in/sbmphase2/",
    sourceCitation: "Swachh Bharat Mission (Gramin) Phase-II Guidelines",
    lastVerifiedDate: "2026-06-15",
    criteria: {
      minAge: 18,
      area: "rural",
      genders: ["all"],
      states: ["All"],
      maxAnnualIncome: 250000,
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Swachh Bharat Mission (Gramin) Toilet Subsidy",
        tagline: "Cash incentive of ₹12,000 for constructing an Individual Household Latrine (IHHL)",
        shortBenefit: "₹12,000 cash grant directly credited upon constructing a household toilet",
        detailedBenefit: "Incentive provided to rural BPL families and identified APL categories (SC/ST, small farmers, disabled persons, female-headed households) to eliminate open defecation.",
        eligibilityBullets: [
          "Rural household that does not currently possess a functional toilet",
          "Belonging to BPL or eligible APL categories (SC/ST, small/marginal farmers, PwD, women-headed)",
          "Must construct a twin-pit or approved sanitary toilet"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Bank Passbook (Aadhaar linked)",
          "Photograph of applicant in front of the constructed toilet",
          "Gram Panchayat Verification Certificate"
        ]
      },
      hi: {
        title: "स्वच्छ भारत मिशन (ग्रामीण) शौचालय अनुदान",
        tagline: "ग्रामीण क्षेत्र में व्यक्तिगत घरेलू शौचालय निर्माण हेतु ₹12,000 की प्रोत्साहन राशि",
        shortBenefit: "शौचालय निर्माण पर ₹12,000 की सीधी नकद सहायता बैंक खाते में",
        detailedBenefit: "ग्रामीण बीपीएल तथा पात्र एपीएल परिवारों (एससी/एसटी, सीमांत किसान, दिव्यांग, महिला मुखिया) को खुले में शौच मुक्ति हेतु शौचालय बनाने पर ₹12,000 दिए जाते हैं।",
        eligibilityBullets: [
          "ग्रामीण परिवार जिसके घर में पहले से कोई शौचालय न हो",
          "बीपीएल या पात्र श्रेणी (एससी/एसटी, सीमांत किसान, दिव्यांग)",
          "शौचालय का निर्माण पूरा होने पर सत्यापन आवश्यक"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "बैंक पासबुक (आधार लिंक)",
          "निर्मित शौचालय के साथ आवेदक का फोटो",
          "ग्राम पंचायत द्वारा सत्यापन"
        ]
      },
      ta: {
        title: "தூய்மை பாரத இயக்கம் (கிராமப்புற கழிப்பறை மானியம்)",
        tagline: "வீட்டு கழிப்பறை கட்ட ₹12,000 அரசு மானியம்",
        shortBenefit: "கழிப்பறை கட்டிய பிறகு நேரடியாக வங்கி கணக்கில் ₹12,000 நிதி உதவி",
        detailedBenefit: "கிராமப்புறங்களில் கழிப்பறை வசதி இல்லாத ஏழை குடும்பங்களுக்கு சுகாதாரமான கழிப்பறை கட்ட நிதி வழங்கப்படுகிறது.",
        eligibilityBullets: [
          "வீட்டில் கழிப்பறை இல்லாத கிராமப்புற குடும்பங்கள்",
          "வறுமைக் கோட்டிற்கு கீழ் உள்ளவர்கள் அல்லது எஸ்சி/எஸ்டி/சிறு விவசாயிகள்",
          "கழிப்பறை கட்டி முடிக்கப்பட்ட பிறகு ஆய்வு செய்யப்படும்"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "வங்கி கணக்கு புத்தகம்",
          "கட்டப்பட்ட கழிப்பறையுடன் விண்ணப்பதாரரின் புகைப்படம்",
          "கிராம ஊராட்சி சான்றிதழ்"
        ]
      }
    }
  },
  {
    id: "sukanya-samriddhi",
    category: "women_child",
    level: "central",
    ministry: "Ministry of Finance / India Post",
    officialApplyUrl: "https://www.indiapost.gov.in/",
    sourceCitation: "Department of Economic Affairs - Small Savings Guidelines",
    lastVerifiedDate: "2026-08-01",
    criteria: {
      minAge: 0,
      maxAge: 10,
      genders: ["female"],
      states: ["All"],
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "Sukanya Samriddhi Yojana (SSY)",
        tagline: "High-interest tax-free government savings scheme for girl child's education and marriage",
        shortBenefit: "Highest sovereign interest rate (~8.2% p.a.) + 100% Tax-Free under Sec 80C & EEE",
        detailedBenefit: "Parents can open an account in a Post Office or bank in the name of a girl child below 10 years of age, depositing between ₹250 and ₹1,50,000 per year with guaranteed high compounding returns.",
        eligibilityBullets: [
          "Girl child must be an Indian citizen under 10 years of age",
          "Maximum of two girl children per family (triplets/twins exception)",
          "Account operates until the daughter turns 21 or gets married after age 18"
        ],
        requiredDocuments: [
          "Girl Child's Birth Certificate",
          "Parent/Guardian's Aadhaar Card & PAN Card",
          "Proof of Residence",
          "Passport Size Photos of Guardian & Child"
        ]
      },
      hi: {
        title: "सुकन्या समृद्धि योजना (SSY)",
        tagline: "बेटियों की उच्च शिक्षा व विवाह हेतु सरकार की सबसे अधिक ब्याज वाली बचत योजना",
        shortBenefit: "लगभग 8.2% की उच्चतम ब्याज दर + 100% टैक्स फ्री (धारा 80C के तहत छूट)",
        detailedBenefit: "10 वर्ष से कम उम्र की बेटियों के नाम डाकघर या बैंक में खाता खोलकर मात्र ₹250 सालाना से बचत शुरू करें और 21 वर्ष की आयु पर भारी सुरक्षित फंड पाएं।",
        eligibilityBullets: [
          "बालिका की आयु खाता खुलवाते समय 10 वर्ष से कम होनी चाहिए",
          "एक परिवार में अधिकतम 2 बेटियों के लिए खाता खोला जा सकता है",
          "18 वर्ष की आयु के बाद उच्च शिक्षा हेतु 50% तक निकासी संभव"
        ],
        requiredDocuments: [
          "बालिका का जन्म प्रमाण पत्र",
          "माता-पिता/अभिभावक का आधार कार्ड व पैन कार्ड",
          "निवास प्रमाण पत्र",
          "पासपोर्ट साइज फोटो"
        ]
      },
      ta: {
        title: "செல்வ மகள் சேமிப்புத் திட்டம் (சுகன்யா சம்ரிதி யோஜனா)",
        tagline: "பெண் குழந்தைகளின் கல்வி மற்றும் திருமணத்திற்கான அதிக வட்டி சேமிப்புத் திட்டம்",
        shortBenefit: "ஆண்டுக்கு 8.2% வரை அதிக வட்டி + 100% வருமான வரி விலக்கு",
        detailedBenefit: "10 வயதுக்குட்பட்ட பெண் குழந்தைகளின் பெயரில் தபால் நிலையம் அல்லது வங்கியில் குறைந்தபட்சம் ₹250 செலுத்தி தொடங்கலாம்.",
        eligibilityBullets: [
          "10 வயதுக்குட்பட்ட இந்திய பெண் குழந்தைகள்",
          "ஒரு குடும்பத்திற்கு அதிகபட்சம் இரண்டு பெண் குழந்தைகள்",
          "18 வயது முடிந்த பிறகு உயர்கல்விக்கு 50% பணம் எடுக்கலாம்"
        ],
        requiredDocuments: [
          "பெண் குழந்தையின் பிறப்புச் சான்றிதழ்",
          "பெற்றோரின் ஆதார் அட்டை மற்றும் பான் அட்டை",
          "முகவரி சான்று",
          "புகைப்படம்"
        ]
      }
    }
  },
  {
    id: "pm-jeevan-jyoti",
    category: "social_welfare",
    level: "central",
    ministry: "Department of Financial Services (Ministry of Finance)",
    officialApplyUrl: "https://financialservices.gov.in/beta/en/pmjjby",
    sourceCitation: "DFS Rules for PMJJBY (financialservices.gov.in)",
    lastVerifiedDate: "2026-07-01",
    criteria: {
      minAge: 18,
      maxAge: 50,
      genders: ["all"],
      states: ["All"],
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "PM Jeevan Jyoti Bima Yojana (PMJJBY)",
        tagline: "Ultra-low-cost government term life insurance cover for every bank account holder",
        shortBenefit: "₹2,00,000 life insurance cover for just ₹436/year auto-debited",
        detailedBenefit: "Provides financial protection of ₹2 Lakh to the nominee in case of death of the insured due to any reason (illness, natural, or accidental).",
        eligibilityBullets: [
          "Bank or Post Office savings account holders aged 18 to 50 years",
          "Annual premium of ₹436 automatically debited in a single installment",
          "Cover terminates at age 55"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Bank Savings Passbook with Auto-Debit Consent",
          "Nominee's Aadhaar / ID Details"
        ]
      },
      hi: {
        title: "प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY)",
        tagline: "मात्र ₹436 सालाना में ₹2 लाख का सरकारी जीवन बीमा कवर",
        shortBenefit: "किसी भी कारण से मृत्यु होने पर नॉमिनी को ₹2,00,000 की बीमा राशि",
        detailedBenefit: "18 से 50 वर्ष के बैंक खाताधारकों को बीमारी या प्राकृतिक किसी भी कारण से मृत्यु होने पर उनके परिवार को ₹2 लाख की आर्थिक सहायता मिलती है।",
        eligibilityBullets: [
          "18 से 50 वर्ष की आयु के बैंक या डाकघर बचत खाताधारक",
          "प्रति वर्ष मात्र ₹436 का प्रीमियम बैंक खाते से ऑटो-डेबिट होता है",
          "सरल क्लेम प्रक्रिया सीधे बैंक के माध्यम से"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "बैंक खाता पासबुक",
          "नॉमिनी (वारिस) का विवरण व आधार"
        ]
      },
      ta: {
        title: "பிரதமர் ஜீவன் ஜோதி பீமா திட்டம் (PMJJBY ஆயுள் காப்பீடு)",
        tagline: "ஆண்டுக்கு ₹436 செலுத்தி ₹2 லட்சம் ஆயுள் காப்பீடு பெறுங்கள்",
        shortBenefit: "இயற்கை அல்லது நோய் மரணங்களுக்கு ₹2,00,000 காப்பீட்டுத் தொகை",
        detailedBenefit: "18 முதல் 50 வயது வரை உள்ள வங்கிக் கணக்கு வைத்திருப்பவர்கள் மிகக் குறைந்த கட்டணத்தில் ₹2 லட்சம் மதிப்பிலான ஆயுள் காப்பீடு பெறலாம்.",
        eligibilityBullets: [
          "18 முதல் 50 வயதுடைய வங்கிக் கணக்கு வைத்திருப்பவர்கள்",
          "ஆண்டுக்கு ₹436 மட்டுமே வங்கிக் கணக்கிலிருந்து தானாகப் பிடிக்கப்படும்",
          "எந்த காரணத்தினால் ஏற்படும் மரணத்திற்கும் காப்பீடு பொருந்தும்"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "வங்கி கணக்கு புத்தகம்",
          "வாரிசுதாரரின் அடையாளச் சான்று"
        ]
      }
    }
  },
  {
    id: "pm-suraksha-bima",
    category: "social_welfare",
    level: "central",
    ministry: "Department of Financial Services (Ministry of Finance)",
    officialApplyUrl: "https://financialservices.gov.in/beta/en/pmsby",
    sourceCitation: "DFS Rules for PMSBY (financialservices.gov.in)",
    lastVerifiedDate: "2026-07-01",
    criteria: {
      minAge: 18,
      maxAge: 70,
      genders: ["all"],
      states: ["All"],
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "PM Suraksha Bima Yojana (PMSBY)",
        tagline: "Accidental death & disability insurance for just ₹20 per year",
        shortBenefit: "₹2,00,000 accidental death & full disability cover / ₹1,00,000 partial disability",
        detailedBenefit: "Affordable insurance scheme protecting bank account holders against unfortunate road accidents, rail accidents, and disability risks.",
        eligibilityBullets: [
          "Individual bank account holders aged 18 to 70 years",
          "Premium of just ₹20 per year deducted automatically via auto-debit",
          "Covers accidental death, loss of eyes, limbs, and total disability"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Bank Savings Passbook",
          "Nominee Information"
        ]
      },
      hi: {
        title: "प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY)",
        tagline: "मात्र ₹20 प्रति वर्ष में ₹2 लाख का दुर्घटना बीमा कवर",
        shortBenefit: "दुर्घटना में मृत्यु या पूर्ण विकलांगता पर ₹2,00,000 / आंशिक विकलांगता पर ₹1,00,000",
        detailedBenefit: "18 से 70 वर्ष के बैंक खाताधारकों को सड़क दुर्घटना, करंट या अन्य हादसों में मृत्यु अथवा अंग-भंग होने पर परिवार को वित्तीय सुरक्षा दी जाती है।",
        eligibilityBullets: [
          "आयु 18 से 70 वर्ष के बीच",
          "सालाना केवल ₹20 का प्रीमियम बैंक से स्वतः कटता है",
          "हर भारतीय बैंक खाताधारक के लिए उपलब्ध"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "बैंक पासबुक",
          "नॉमिनी की जानकारी"
        ]
      },
      ta: {
        title: "பிரதமர் சுரக்ஷா பீமா விபத்துக் காப்பீடு (PMSBY)",
        tagline: "ஆண்டுக்கு வெறும் ₹20 செலுத்தி ₹2 லட்சம் விபத்துக் காப்பீடு பெறுங்கள்",
        shortBenefit: "விபத்து மரணம் மற்றும் முழு ஊனத்திற்கு ₹2,00,000 / பகுதி ஊனத்திற்கு ₹1,00,000",
        detailedBenefit: "18 முதல் 70 வயது வரை உள்ளவர்கள் வருடத்திற்கு ₹20 கட்டணத்தில் விபத்து மற்றும் ஊனத்திற்கான காப்பீடு பெறலாம்.",
        eligibilityBullets: [
          "18 முதல் 70 வயதுடைய வங்கிக் கணக்கு வைத்திருப்பவர்கள்",
          "ஆண்டுக்கு வெறும் ₹20 மட்டுமே பிரீமியம்",
          "விபத்து மரணங்கள் மற்றும் நிரந்தர ஊனங்களுக்கு பாதுகாப்பு"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "வங்கி கணக்கு புத்தகம்",
          "வாரிசுதாரர் விவரம்"
        ]
      }
    }
  },
  {
    id: "e-shram-card",
    category: "business_employment",
    level: "central",
    ministry: "Ministry of Labour & Employment",
    officialApplyUrl: "https://eshram.gov.in/",
    sourceCitation: "National Database of Unorganised Workers (eshram.gov.in)",
    lastVerifiedDate: "2026-08-10",
    criteria: {
      minAge: 16,
      maxAge: 59,
      genders: ["all"],
      states: ["All"],
      occupations: ["worker", "artisan", "unemployed", "all"],
      categories: ["ALL"]
    },
    i18n: {
      en: {
        title: "e-Shram Universal Social Security Card",
        tagline: "Universal 12-digit UAN card unlocking national social security benefits for informal workers",
        shortBenefit: "₹2,00,000 accidental cover + Priority access to disaster relief & welfare schemes",
        detailedBenefit: "Creates a national identity for unorganized workers (construction workers, domestic maids, gig workers, rickshaw pullers, agriculture laborers) granting access to social security pensions, rations portability, and calamity grants.",
        eligibilityBullets: [
          "Unorganized worker aged 16 to 59 years",
          "Not an EPFO / ESIC member or income taxpayer",
          "Aadhaar linked with mobile number"
        ],
        requiredDocuments: [
          "Aadhaar Card",
          "Aadhaar-linked Mobile Number",
          "Bank Savings Account Passbook"
        ]
      },
      hi: {
        title: "ई-श्रम कार्ड (e-Shram Social Security)",
        tagline: "असंगठित मजदूरों के लिए 12 अंकों का राष्ट्रीय पहचान पत्र व सामाजिक सुरक्षा",
        shortBenefit: "₹2 लाख का मुफ्त दुर्घटना बीमा + सरकारी आपदा राहत में सीधी वित्तीय मदद",
        detailedBenefit: "मजदूर, घरेलू नौकर, निर्माण श्रमिक, रेहड़ी वाले, ड्राइवर और खेत मजदूरों को एक राष्ट्रीय पहचान मिलती है जिसके तहत केंद्र व राज्य की योजनाओं का सीधा लाभ मिलता है।",
        eligibilityBullets: [
          "असंगठित क्षेत्र के कामगार जिनकी आयु 16 से 59 वर्ष के बीच हो",
          "ईपीएफओ (EPFO) या ईएसआईसी (ESIC) के सदस्य न हों",
          "आयकर दाता नहीं होने चाहिए"
        ],
        requiredDocuments: [
          "आधार कार्ड",
          "आधार से लिंक मोबाइल नंबर",
          "बैंक खाता पासबुक"
        ]
      },
      ta: {
        title: "இ-ஷ்ரம் அடையாள அட்டை (e-Shram Card)",
        tagline: "அமைப்புசாரா தொழிலாளர்களுக்கான தேசிய சமூகப் பாதுகாப்பு அட்டை",
        shortBenefit: "₹2,00,000 விபத்து காப்பீடு + பேரிடர் காலங்களில் நேரடி அரசு நிவாரணம்",
        detailedBenefit: "கட்டுமானத் தொழிலாளர்கள், வீட்டுப் பணியாளர்கள், கூலித் தொழிலாளர்கள் மற்றும் விவசாயத் தொழிலாளர்களுக்கு அரசின் சமூகப் பாதுகாப்பு பலன்கள் கிடைக்க உதவுகிறது.",
        eligibilityBullets: [
          "16 முதல் 59 வயதுடைய அமைப்புசாரா தொழிலாளர்கள்",
          "EPFO அல்லது ESIC உறுப்பினர் அல்லாதவர்கள்",
          "வருமான வரி செலுத்துபவராக இருக்கக்கூடாது"
        ],
        requiredDocuments: [
          "ஆதார் அட்டை",
          "ஆதார் இணைக்கப்பட்ட கைபேசி எண்",
          "வங்கி கணக்கு புத்தகம்"
        ]
      }
    }
  }
];
