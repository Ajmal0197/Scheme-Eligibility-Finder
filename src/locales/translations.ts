import type { Language } from '../types/scheme';

export interface UIStrings {
  appName: string;
  appBadge: string;
  tagline: string;
  startFinder: string;
  editAnswers: string;
  restart: string;
  questionCount: string;
  next: string;
  previous: string;
  seeResults: string;
  skipOptional: string;
  
  // Wizard Steps
  steps: {
    state: {
      title: string;
      subtitle: string;
      placeholder: string;
    };
    area: {
      title: string;
      subtitle: string;
      rural: string;
      ruralDesc: string;
      urban: string;
      urbanDesc: string;
    };
    demographics: {
      title: string;
      subtitle: string;
      ageLabel: string;
      agePlaceholder: string;
      genderLabel: string;
      male: string;
      female: string;
      transgender: string;
    };
    category: {
      title: string;
      subtitle: string;
      gen: string;
      obc: string;
      sc: string;
      st: string;
      ews: string;
    };
    occupation: {
      title: string;
      subtitle: string;
      farmer: string;
      student: string;
      artisan: string;
      worker: string;
      unemployed: string;
      homemaker: string;
      senior: string;
      business: string;
    };
    income: {
      title: string;
      subtitle: string;
      under1L: string;
      under2_5L: string;
      under5L: string;
      under8L: string;
      above8L: string;
    };
    rationCard: {
      title: string;
      subtitle: string;
      none: string;
      bpl: string;
      aay: string;
    };
    disability: {
      title: string;
      subtitle: string;
      no: string;
      yes: string;
      yesDesc: string;
    };
    specialConditions: {
      title: string;
      subtitle: string;
      ownsLand: string;
      enrolledStudent: string;
      widowSingleMother: string;
      pregnantLactating: string;
      noneOfAbove: string;
    };
  };

  // Results
  results: {
    headline: string;
    subheadline: string;
    eligibleCount: string;
    documentsCount: string;
    directLink: string;
    filterAll: string;
    filterAgri: string;
    filterHealth: string;
    filterHousing: string;
    filterWomen: string;
    filterEdu: string;
    filterPension: string;
    filterLivelihood: string;
    searchPlaceholder: string;
    applyOfficial: string;
    verifiedOn: string;
    source: string;
    reportDiscrepancy: string;
    documentsNeeded: string;
    eligibilityCriteria: string;
    nearMissesTitle: string;
    nearMissesSubtitle: string;
    unmetCriteria: string;
    checklistTitle: string;
    checklistSubtitle: string;
    printChecklist: string;
    shareWhatsApp: string;
    whatsappShareText: string;
    noSchemesFound: string;
    noSchemesSubtitle: string;
  };

  // Report Modal
  modal: {
    title: string;
    description: string;
    schemeName: string;
    reasonPlaceholder: string;
    submit: string;
    cancel: string;
    thankYou: string;
  };

  footer: {
    disclaimer: string;
    poweredBy: string;
  };
}

export const TRANSLATIONS: Record<Language, UIStrings> = {
  en: {
    appName: "YojanaSarthi",
    appBadge: "Govt Scheme Eligibility Finder",
    tagline: "Find all Central and State government schemes you qualify for in 90 seconds. Free, verified, and plain-language.",
    startFinder: "Check My Eligibility",
    editAnswers: "Edit Profile",
    restart: "Start Over",
    questionCount: "Step {current} of {total}",
    next: "Continue",
    previous: "Back",
    seeResults: "View Matched Schemes",
    skipOptional: "Skip",

    steps: {
      state: {
        title: "Which State or Union Territory do you live in?",
        subtitle: "Used to match both Central schemes and your State's specific benefits.",
        placeholder: "Search or select your state..."
      },
      area: {
        title: "Do you live in a Rural or Urban area?",
        subtitle: "Several housing and employment schemes specifically target rural or urban citizens.",
        rural: "Rural (Village / Gram Panchayat)",
        ruralDesc: "Farming zones, villages, or panchayat areas",
        urban: "Urban (City / Town / Municipality)",
        urbanDesc: "Corporations, municipalities, or metro towns"
      },
      demographics: {
        title: "What is your Age and Gender?",
        subtitle: "Schemes often have targeted age brackets (e.g., student scholarships, senior pensions).",
        ageLabel: "Your Age (Years)",
        agePlaceholder: "Enter age e.g. 32",
        genderLabel: "Gender",
        male: "Male",
        female: "Female",
        transgender: "Transgender / Other"
      },
      category: {
        title: "What is your Social Category?",
        subtitle: "Required to unlock targeted educational scholarships, affirmative action, and reservations.",
        gen: "General",
        obc: "OBC (Other Backward Class)",
        sc: "SC (Scheduled Caste)",
        st: "ST (Scheduled Tribe)",
        ews: "EWS (Economically Weaker Section)"
      },
      occupation: {
        title: "What is your primary Occupation?",
        subtitle: "Select the option that best reflects your current source of livelihood.",
        farmer: "Farmer / Cultivator",
        student: "Student",
        artisan: "Artisan / Craftsman (Carpenter, Mason, Tailor, etc.)",
        worker: "Daily Wage / Gig / Construction Worker",
        unemployed: "Unemployed / Looking for work",
        homemaker: "Homemaker",
        senior: "Retired / Senior",
        business: "Small Shopkeeper / Vendor"
      },
      income: {
        title: "What is your Approximate Annual Family Income?",
        subtitle: "Total combined income of all household members before taxes.",
        under1L: "Below ₹1,00,000 / year (Under ₹8,000/mo)",
        under2_5L: "₹1,00,000 – ₹2,50,000 / year",
        under5L: "₹2,50,000 – ₹5,00,000 / year",
        under8L: "₹5,00,000 – ₹8,00,000 / year (OBC Creamy Layer / EWS Limit)",
        above8L: "Above ₹8,00,000 / year"
      },
      rationCard: {
        title: "What type of Ration Card does your family hold?",
        subtitle: "Used to verify food security entitlements and healthcare subsidies.",
        none: "No Ration Card / General APL Card",
        bpl: "BPL (Below Poverty Line) / Priority Card (PHH)",
        aay: "Antyodaya Anna Yojana (AAY / Poorest of poor)"
      },
      disability: {
        title: "Do you have a certified physical disability?",
        subtitle: "Divyangjan schemes offer specialized pensions, free aids, and travel concessions.",
        no: "No disability",
        yes: "Yes, certified (40% or above)",
        yesDesc: "Holds a valid UDID Card or Medical Board Certificate"
      },
      specialConditions: {
        title: "Do any of these special conditions apply?",
        subtitle: "Select all that apply to unlock high-benefit niche schemes.",
        ownsLand: "Owns cultivable agricultural land (Unlocks PM-KISAN & KCC)",
        enrolledStudent: "Currently enrolled in School, College, or ITI",
        widowSingleMother: "Widowed or Single Mother",
        pregnantLactating: "Currently pregnant or lactating mother (Unlocks PMMVY)",
        noneOfAbove: "None of these apply"
      }
    },

    results: {
      headline: "You Qualify for {count} Government Schemes!",
      subheadline: "Based on your verified answers, here are the welfare programs you can apply for today.",
      eligibleCount: "Schemes Matched",
      documentsCount: "Core Documents to Carry",
      directLink: "Official Apply Link",
      filterAll: "All Schemes",
      filterAgri: "Agriculture",
      filterHealth: "Healthcare",
      filterHousing: "Housing",
      filterWomen: "Women & Child",
      filterEdu: "Education",
      filterPension: "Pensions",
      filterLivelihood: "Livelihood & Loans",
      searchPlaceholder: "Search schemes by name or benefit...",
      applyOfficial: "Apply on Official Portal",
      verifiedOn: "Verified on:",
      source: "Source:",
      reportDiscrepancy: "Report Wrong Info",
      documentsNeeded: "Documents Required",
      eligibilityCriteria: "Key Eligibility Rules",
      nearMissesTitle: "Schemes You Almost Qualified For ({count})",
      nearMissesSubtitle: "You missed these schemes by only 1 requirement. Review to see why:",
      unmetCriteria: "Reason you didn't qualify:",
      checklistTitle: "Consolidated Document Checklist",
      checklistSubtitle: "Take these common documents to your nearest Common Service Centre (CSC) or apply online to cover all your schemes:",
      printChecklist: "Print Checklist",
      shareWhatsApp: "Share to WhatsApp",
      whatsappShareText: "I found {count} government schemes I qualify for on YojanaSarthi! Here are the documents to carry: {docs}. Check yours free at:",
      noSchemesFound: "No Schemes Matched Your Exact Criteria",
      noSchemesSubtitle: "Try reviewing your income bracket or state selection, or browse our general directory below."
    },

    modal: {
      title: "Report Inaccurate Scheme Details",
      description: "Help us keep public data 100% accurate. Tell us what needs fixing:",
      schemeName: "Scheme:",
      reasonPlaceholder: "E.g. The income ceiling was recently raised to ₹3 Lakhs, or the link is broken...",
      submit: "Submit Report",
      cancel: "Cancel",
      thankYou: "Thank you! Your feedback has been noted for our verification team."
    },

    footer: {
      disclaimer: "Disclaimer: YojanaSarthi is an independent citizen-assist utility and is not affiliated with any ministry. Final eligibility is determined by the relevant government department upon official document verification.",
      poweredBy: "Crafted for India's 1.4 Billion Citizens • Zero APIs • 100% Client-Side Privacy"
    }
  },

  hi: {
    appName: "योजना सारथी",
    appBadge: "सरकारी योजना पात्रता खोजकर्ता",
    tagline: "मात्र 90 सेकंड में जानें कि आप किन-किन सरकारी योजनाओं के पात्र हैं। निःशुल्क, सत्यापित और सरल भाषा में।",
    startFinder: "मेरी पात्रता जांचें",
    editAnswers: "उत्तर बदलें",
    restart: "पुनः शुरू करें",
    questionCount: "चरण {current} का {total}",
    next: "आगे बढ़ें",
    previous: "पीछे जाएं",
    seeResults: "पात्र योजनाएं देखें",
    skipOptional: "छोड़ें",

    steps: {
      state: {
        title: "आप किस राज्य या केंद्र शासित प्रदेश में रहते हैं?",
        subtitle: "केंद्र और आपके राज्य की विशेष योजनाओं की जांच के लिए आवश्यक।",
        placeholder: "राज्य खोजें या चुनें..."
      },
      area: {
        title: "आप ग्रामीण या शहरी क्षेत्र में रहते हैं?",
        subtitle: "कई आवास और रोजगार योजनाएं विशेष रूप से ग्रामीण या शहरी क्षेत्रों के लिए होती हैं।",
        rural: "ग्रामीण (गांव / ग्राम पंचायत)",
        ruralDesc: "कृषि क्षेत्र, गांव या पंचायत क्षेत्र",
        urban: "शहरी (शहर / कस्बा / नगरपालिका)",
        urbanDesc: "नगर निगम, नगरपालिका या बड़े शहर"
      },
      demographics: {
        title: "आपकी आयु और लिंग क्या है?",
        subtitle: "योजनाओं में उम्र की सीमाएं (जैसे छात्रवृत्ति या वृद्धावस्था पेंशन) होती हैं।",
        ageLabel: "आपकी आयु (वर्षों में)",
        agePlaceholder: "जैसे 32",
        genderLabel: "लिंग",
        male: "पुरुष",
        female: "महिला",
        transgender: "ट्रांसजेंडर / अन्य"
      },
      category: {
        title: "आपका सामाजिक वर्ग (जाति श्रेणी) क्या है?",
        subtitle: "आरक्षण, छात्रवृत्ति और लक्षित सरकारी सहायता प्राप्त करने के लिए।",
        gen: "सामान्य (General)",
        obc: "अन्य पिछड़ा वर्ग (OBC)",
        sc: "अनुसूचित जाति (SC)",
        st: "अनुसूचित जनजाति (ST)",
        ews: "आर्थिक रूप से कमजोर (EWS)"
      },
      occupation: {
        title: "आपका मुख्य व्यवसाय क्या है?",
        subtitle: "वह विकल्प चुनें जो आपकी आजीविका का सबसे सही वर्णन करता हो।",
        farmer: "किसान / काश्तकार",
        student: "विद्यार्थी / छात्र",
        artisan: "दस्तकार / कारीगर (बढ़ई, मिस्त्री, दर्जी, मोची)",
        worker: "दैनिक मजदूर / निर्माण श्रमिक / कामगार",
        unemployed: "बेरोजगार / काम की तलाश में",
        homemaker: "गृहणी",
        senior: "सेवानिवृत्त / बुजुर्ग",
        business: "छोटा दुकानदार / रेहड़ी-पटरी विक्रेता"
      },
      income: {
        title: "आपके परिवार की अनुमानित वार्षिक आय क्या है?",
        subtitle: "परिवार के सभी सदस्यों की कुल वार्षिक आय।",
        under1L: "₹1,00,000 से कम (₹8,000 प्रति माह से कम)",
        under2_5L: "₹1,00,000 – ₹2,50,000 प्रति वर्ष",
        under5L: "₹2,50,000 – ₹5,00,000 प्रति वर्ष",
        under8L: "₹5,00,000 – ₹8,00,000 प्रति वर्ष (ओबीसी नॉन-क्रीमी/ईडब्ल्यूएस सीमा)",
        above8L: "₹8,00,000 प्रति वर्ष से अधिक"
      },
      rationCard: {
        title: "आपके परिवार के पास किस प्रकार का राशन कार्ड है?",
        subtitle: "खाद्य सुरक्षा और मुफ्त स्वास्थ्य योजनाओं की पात्रता हेतु।",
        none: "कोई राशन कार्ड नहीं / सामान्य एपीएल कार्ड",
        bpl: "बीपीएल (गरीबी रेखा से नीचे) / प्राथमिकता कार्ड (PHH)",
        aay: "अन्त्योदय अन्न योजना (AAY / सबसे निर्धन परिवार)"
      },
      disability: {
        title: "क्या आपके पास प्रमाणित दिव्यांगता (विकलांगता) है?",
        subtitle: "दिव्यांगजन पेंशन, उपकरण और यात्रा छूट योजनाओं हेतु।",
        no: "कोई दिव्यांगता नहीं",
        yes: "हाँ, प्रमाणित दिव्यांगता (40% या अधिक)",
        yesDesc: "यूडीआईडी (UDID) कार्ड या मेडिकल बोर्ड प्रमाण पत्र उपलब्ध है"
      },
      specialConditions: {
        title: "क्या इनमें से कोई विशेष स्थिति आप पर लागू होती है?",
        subtitle: "उच्च लाभ वाली योजनाओं को अनलॉक करने के लिए सभी लागू विकल्प चुनें।",
        ownsLand: "खेती योग्य भूमि का मालिकाना हक (पीएम-किसान और केसीसी हेतु)",
        enrolledStudent: "वर्तमान में स्कूल, कॉलेज या आईटीआई में पढ़ाई कर रहे हैं",
        widowSingleMother: "विधवा या एकल महिला",
        pregnantLactating: "गर्भवती या स्तनपान कराने वाली माता (पीएमएमवीवाई हेतु)",
        noneOfAbove: "इनमें से कोई नहीं"
      }
    },

    results: {
      headline: "आप {count} सरकारी योजनाओं के पात्र हैं!",
      subheadline: "आपकी जानकारी के आधार पर नीचे दी गई योजनाओं के लिए आप आज ही आवेदन कर सकते हैं।",
      eligibleCount: "पात्र योजनाएं",
      documentsCount: "ले जाने योग्य आवश्यक दस्तावेज",
      directLink: "आधिकारिक आवेदन लिंक",
      filterAll: "सभी योजनाएं",
      filterAgri: "कृषि व किसान",
      filterHealth: "स्वास्थ्य व चिकित्सा",
      filterHousing: "आवास व घर",
      filterWomen: "महिला व बाल विकास",
      filterEdu: "शिक्षा व छात्रवृत्ति",
      filterPension: "पेंशन योजनाएं",
      filterLivelihood: "रोजगार व व्यवसाय",
      searchPlaceholder: "योजना के नाम या लाभ से खोजें...",
      applyOfficial: "आधिकारिक पोर्टल पर आवेदन करें",
      verifiedOn: "सत्यापित तिथि:",
      source: "स्रोत:",
      reportDiscrepancy: "गलत जानकारी रिपोर्ट करें",
      documentsNeeded: "आवश्यक दस्तावेज",
      eligibilityCriteria: "पात्रता के मुख्य नियम",
      nearMissesTitle: "वे योजनाएं जिनके आप लगभग पात्र थे ({count})",
      nearMissesSubtitle: "आप केवल 1 नियम के कारण इन योजनाओं से वंचित रह गए:",
      unmetCriteria: "अपात्रता का कारण:",
      checklistTitle: "एकत्रित दस्तावेज चेकलिस्ट",
      checklistSubtitle: "इन सभी योजनाओं का एक साथ लाभ लेने के लिए अपने नजदीकी सीएससी (CSC) केंद्र पर केवल ये मुख्य दस्तावेज साथ लेकर जाएं:",
      printChecklist: "चेकलिस्ट प्रिंट करें",
      shareWhatsApp: "व्हाट्सएप पर शेयर करें",
      whatsappShareText: "मुझे योजना सारथी पर {count} सरकारी योजनाओं की पात्रता मिली! ले जाने के लिए आवश्यक दस्तावेज: {docs}। आप भी अपनी पात्रता निःशुल्क जांचें:",
      noSchemesFound: "आपकी सटीक जानकारी से कोई योजना मेल नहीं खाई",
      noSchemesSubtitle: "अपनी आय सीमा या राज्य की जानकारी बदलकर पुनः प्रयास करें।"
    },

    modal: {
      title: "योजना की गलत जानकारी रिपोर्ट करें",
      description: "डेटा को 100% सटीक रखने में हमारी मदद करें। क्या सुधार आवश्यक है बताएं:",
      schemeName: "योजना का नाम:",
      reasonPlaceholder: "उदाहरण: हाल ही में आय सीमा बढ़ाकर ₹3 लाख कर दी गई है या लिंक नहीं खुल रहा है...",
      submit: "रिपोर्ट भेजें",
      cancel: "रद्द करें",
      thankYou: "धन्यवाद! आपका सुझाव हमारी सत्यापन टीम द्वारा नोट कर लिया गया है।"
    },

    footer: {
      disclaimer: "अस्वीकरण: योजना सारथी एक स्वतंत्र नागरिक सेवा पोर्टल है और किसी भी मंत्रालय से संबद्ध नहीं है। अंतिम पात्रता आधिकारिक दस्तावेजों के सत्यापन के बाद संबंधित विभाग द्वारा तय की जाती है।",
      poweredBy: "भारत के 140 करोड़ नागरिकों के लिए समर्पित • शून्य एपीआई निर्भरता • 100% गोपनीयता"
    }
  },

  ta: {
    appName: "யோஜனா சாரதி",
    appBadge: "அரசு திட்ட தகுதி அறிதல்",
    tagline: "நீங்கள் தகுதியுடைய மத்திய மற்றும் மாநில அரசு நலத்திட்டங்களை 90 வினாடிகளில் அறிந்திடுங்கள். எளிய, நேரடி வழிகாட்டி.",
    startFinder: "என் தகுதியை சரிபார்க்கவும்",
    editAnswers: "பதில்களை மாற்றவும்",
    restart: "மீண்டும் தொடங்குக",
    questionCount: "படி {current} / {total}",
    next: "தொடரவும்",
    previous: "பின்செல்லவும்",
    seeResults: "தகுதியான திட்டங்களை காண்க",
    skipOptional: "தவிர்க்கவும்",

    steps: {
      state: {
        title: "நீங்கள் எந்த மாநிலம் அல்லது யூனியன் பிரதேசத்தில் வசிக்கிறீர்கள்?",
        subtitle: "மத்திய மற்றும் உங்கள் மாநிலத்திற்கான சிறப்புத் திட்டங்களை கண்டறிய.",
        placeholder: "மாநிலத்தைத் தேர்ந்தெடுக்கவும்..."
      },
      area: {
        title: "நீங்கள் கிராமப்புறத்திலா அல்லது நகர்ப்புறத்திலா வசிக்கிறீர்கள்?",
        subtitle: "வீட்டு வசதி மற்றும் வேலைவாய்ப்பு திட்டங்கள் பகுதி சார்ந்து மாறுபடும்.",
        rural: "கிராமப்புறம் (கிராமம் / ஊராட்சி)",
        ruralDesc: "விவசாய பகுதிகள் மற்றும் கிராம ஊராட்சிகள்",
        urban: "நகர்ப்புறம் (நகரம் / நகராட்சி / மாநகராட்சி)",
        urbanDesc: "பேரூராட்சி, நகராட்சி அல்லது பெருநகரங்கள்"
      },
      demographics: {
        title: "உங்கள் வயது மற்றும் பாலினம் என்ன?",
        subtitle: "திட்டங்களுக்கு குறிப்பிட்ட வயது வரம்புகள் உண்டு (கல்வி உதவித்தொகை, முதியோர் ஓய்வூதியம்).",
        ageLabel: "உங்கள் வயது (ஆண்டுகளில்)",
        agePlaceholder: "எ.கா. 32",
        genderLabel: "பாலினம்",
        male: "ஆண்",
        female: "பெண்",
        transgender: "திருநங்கை / பிற"
      },
      category: {
        title: "உங்கள் சமூகப் பிரிவு (சாதி பிரிவு) என்ன?",
        subtitle: "கல்வி உதவித்தொகை மற்றும் சிறப்பு நலத்திட்டங்களை அறிய.",
        gen: "பொதுப் பிரிவு (General)",
        obc: "பிற்படுத்தப்பட்டோர் (OBC / BC / MBC)",
        sc: "ஆதிதிராவிடர் (SC)",
        st: "பழங்குடியினர் (ST)",
        ews: "பொருளாதாரத்தில் பின்தங்கியவர் (EWS)"
      },
      occupation: {
        title: "உங்கள் முதன்மை தொழில் என்ன?",
        subtitle: "உங்கள் தற்போதைய வாழ்வாதார தொழிலைத் தேர்ந்தெடுக்கவும்.",
        farmer: "விவசாயி / நில உரிமையாளர்",
        student: "மாணவர் / மாணவி",
        artisan: "பாரம்பரிய கைவினைஞர் (தச்சர், கொத்தனார், தையல்காரர்)",
        worker: "தினக்கூலி / கட்டுமான தொழிலாளி / கூலித் தொழிலாளி",
        unemployed: "வேலையில்லாதவர் / வேலை தேடுபவர்",
        homemaker: "குடும்பத் தலைவி",
        senior: "ஓய்வுபெற்றவர் / முதியவர்",
        business: "சிறு வியாபாரி / தெருவோர கடைக்காரர்"
      },
      income: {
        title: "உங்கள் குடும்பத்தின் தோராயமான ஆண்டு வருமானம் என்ன?",
        subtitle: "குடும்பத்தின் அனைத்து உறுப்பினர்களின் மொத்த ஆண்டு வருமானம்.",
        under1L: "₹1,00,000-க்கு கீழ் (மாதம் ₹8,000-க்கு கீழ்)",
        under2_5L: "₹1,00,000 – ₹2,50,000 வரை",
        under5L: "₹2,50,000 – ₹5,00,000 வரை",
        under8L: "₹5,00,000 – ₹8,00,000 வரை (OBC/EWS உச்சவரம்பு)",
        above8L: "₹8,00,000-க்கு மேல்"
      },
      rationCard: {
        title: "உங்கள் குடும்பத்திடம் உள்ள ரேஷன் அட்டை வகை என்ன?",
        subtitle: "உணவு பாதுகாப்பு மற்றும் காப்பீட்டுத் திட்டங்களின் தகுதிக்கு.",
        none: "ரேஷன் அட்டை இல்லை / சாதாரண அட்டை",
        bpl: "வறுமைக் கோட்டிற்கு கீழ் (BPL) / முன்னுரிமை அட்டை (PHH)",
        aay: "அந்தியோதயா அன்ன யோஜனா (AAY / மிக ஏழ்மையான குடும்பம்)"
      },
      disability: {
        title: "உங்களுக்கு அரசு சான்றளிக்கப்பட்ட மாற்றுத்திறனாளி குறைபாடு உள்ளதா?",
        subtitle: "மாற்றுத்திறனாளிகளுக்கான சிறப்பு ஓய்வூதியம் மற்றும் உதவி உபகரணங்களுக்கு.",
        no: "இல்லை",
        yes: "ஆம், சான்றளிக்கப்பட்ட குறைபாடு (40% அல்லது அதற்கு மேல்)",
        yesDesc: "செல்லுபடியாகும் UDID அட்டை அல்லது மருத்துவ சான்றிதழ் உள்ளது"
      },
      specialConditions: {
        title: "உங்களுக்கு பொருந்தும் கூடுதல் சூழ்நிலைகளைத் தேர்ந்தெடுக்கவும்:",
        subtitle: "அதிக பயன் தரும் சிறப்புத் திட்டங்களை பெற தகுந்தவற்றைத் தேர்வு செய்க.",
        ownsLand: "சொந்த பெயரில் விவசாய நிலம் உள்ளது (PM-KISAN மற்றும் KCC-க்கு)",
        enrolledStudent: "பள்ளி, கல்லூரி அல்லது ஐடிஐ-யில் பயிலும் மாணவர்",
        widowSingleMother: "விதவை அல்லது கணவனைப் பிரிந்த தனிப் பெண்",
        pregnantLactating: "கர்ப்பிணி அல்லது பாலூட்டும் தாய் (PMMVY உதவிக்கு)",
        noneOfAbove: "இவற்றில் எதுவும் இல்லை"
      }
    },

    results: {
      headline: "நீங்கள் {count} அரசு திட்டங்களுக்கு தகுதியுடையவர்!",
      subheadline: "உங்கள் விவரங்களின்படி நீங்கள் இன்றே விண்ணப்பிக்கக்கூடிய அரசு நலத்திட்டங்கள் கீழே கொடுக்கப்பட்டுள்ளன.",
      eligibleCount: "தகுதியான திட்டங்கள்",
      documentsCount: "தேவையான முக்கிய ஆவணங்கள்",
      directLink: "அதிகாரப்பூர்வ விண்ணப்ப இணைப்பு",
      filterAll: "அனைத்து திட்டங்கள்",
      filterAgri: "விவசாயம்",
      filterHealth: "மருத்துவம் & சுகாதாரம்",
      filterHousing: "வீட்டு வசதி",
      filterWomen: "பெண்கள் & குழந்தைகள்",
      filterEdu: "கல்வி & உதவித்தொகை",
      filterPension: "ஓய்வூதியம்",
      filterLivelihood: "தொழில் & வாழ்வாதாரம்",
      searchPlaceholder: "திட்டத்தின் பெயர் அல்லது பயன் மூலம் தேடுக...",
      applyOfficial: "அரசு போர்ட்டலில் விண்ணப்பிக்கவும்",
      verifiedOn: "சரிபார்க்கப்பட்ட நாள்:",
      source: "ஆதாரம்:",
      reportDiscrepancy: "தவறான தகவலை தெரிவிக்க",
      documentsNeeded: "தேவையான ஆவணங்கள்",
      eligibilityCriteria: "முக்கிய தகுதி விதிகள்",
      nearMissesTitle: "நீங்கள் நூலிழையில் தவறவிட்ட திட்டங்கள் ({count})",
      nearMissesSubtitle: "ஒரே ஒரு விதி காரணமாக உங்களுக்கு பொருந்தாத திட்டங்கள்:",
      unmetCriteria: "தகுதி பெறாததற்கான காரணம்:",
      checklistTitle: "ஒருங்கிணைந்த ஆவணங்கள் பட்டியல்",
      checklistSubtitle: "இத்தனை திட்டங்களுக்கும் தனித்தனியாக அலைக்கழியாமல், உங்கள் அருகிலுள்ள இ-சேவை மையத்திற்கு (CSC) எடுத்துச் செல்ல வேண்டிய ஆவணங்கள்:",
      printChecklist: "பட்டியலை அச்சிடுக",
      shareWhatsApp: "வாட்ஸ்அப்பில் பகிர்க",
      whatsappShareText: "யோஜனா சாரதி மூலம் நான் {count} அரசு திட்டங்களுக்கு தகுதி பெற்றுள்ளேன்! தேவையான ஆவணங்கள்: {docs}. நீங்களும் இலவசமாக சரிபார்க்க:",
      noSchemesFound: "உங்கள் விவரங்களுக்கு நேரடி திட்டங்கள் கண்டறியப்படவில்லை",
      noSchemesSubtitle: "உங்கள் வருமான வரம்பு அல்லது மாநில விவரங்களை சரிபார்த்து மீண்டும் முயற்சிக்கவும்."
    },

    modal: {
      title: "திட்ட விவரங்களில் பிழையை தெரிவிக்கவும்",
      description: "தகவல்களை 100% துல்லியமாக பராமரிக்க உதவுங்கள். திருத்தப்பட வேண்டிய விவரத்தை குறிப்பிடவும்:",
      schemeName: "திட்டத்தின் பெயர்:",
      reasonPlaceholder: "எ.கா. வருமான வரம்பு சமீபத்தில் உயர்த்தப்பட்டுள்ளது அல்லது இணைப்பு செயல்படவில்லை...",
      submit: "சமர்ப்பிக்கவும்",
      cancel: "ரத்து செய்",
      thankYou: "நன்றி! உங்கள் தகவல் எங்கள் சரிபார்ப்புக் குழுவுக்கு அனுப்பப்பட்டுள்ளது."
    },

    footer: {
      disclaimer: "பொறுப்புத் துறப்பு: யோஜனா சாரதி என்பது ஒரு குடிமக்கள் வழிகாட்டி தளம் மட்டுமே. எந்தவொரு அரசு அமைச்சகத்துடனும் நேரடியாக இணைக்கப்படவில்லை. இறுதி தகுதி அரசு அதிகாரிகளால் ஆவண சரிபார்ப்புக்குப் பிறகே தீர்மானிக்கப்படும்.",
      poweredBy: "இந்தியாவின் 140 கோடி மக்களுக்காக • API தடைகள் இல்லை • 100% ரகசியத்தன்மை"
    }
  }
};
