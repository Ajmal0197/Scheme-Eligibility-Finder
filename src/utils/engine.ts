import type { Scheme, UserProfile, MatchEvaluation, ConsolidatedDocument, Language } from '../types/scheme';

export function evaluateSchemeEligibility(scheme: Scheme, profile: UserProfile, lang: Language = 'en'): MatchEvaluation {
  const c = scheme.criteria;
  const failedCriteria: string[] = [];

  // 1. State check
  if (!c.states.includes("All") && !c.states.includes(profile.state)) {
    const statesList = c.states.join(', ');
    const msg = lang === 'hi' 
      ? `यह योजना केवल ${statesList} के निवासियों के लिए है`
      : lang === 'ta'
      ? `இந்த திட்டம் ${statesList} மாநிலத்திற்கு மட்டுமே பொருந்தும்`
      : `Only available in ${statesList}`;
    failedCriteria.push(msg);
  }

  // 2. Gender check
  if (!c.genders.includes("all") && !c.genders.includes(profile.gender)) {
    const msg = lang === 'hi'
      ? `केवल ${c.genders.map(g => g === 'female' ? 'महिला' : g === 'male' ? 'पुरुष' : g).join(', ')} के लिए`
      : lang === 'ta'
      ? `${c.genders.map(g => g === 'female' ? 'பெண்களுக்கு' : 'ஆண்களுக்கு').join(', ')} மட்டுமே`
      : `Restricted to ${c.genders.join(', ')}`;
    failedCriteria.push(msg);
  }

  // 3. Age check
  if (c.minAge !== undefined && profile.age < c.minAge) {
    const msg = lang === 'hi'
      ? `न्यूनतम आयु सीमा ${c.minAge} वर्ष है (वर्तमान आयु: ${profile.age})`
      : lang === 'ta'
      ? `குறைந்தபட்ச வயது ${c.minAge} (உங்கள் வயது: ${profile.age})`
      : `Minimum age required is ${c.minAge} years (You are ${profile.age})`;
    failedCriteria.push(msg);
  }
  if (c.maxAge !== undefined && profile.age > c.maxAge) {
    const msg = lang === 'hi'
      ? `अधिकतम आयु सीमा ${c.maxAge} वर्ष है (वर्तमान आयु: ${profile.age})`
      : lang === 'ta'
      ? `அதிகபட்ச வயது வரம்பு ${c.maxAge} (உங்கள் வயது: ${profile.age})`
      : `Maximum age ceiling is ${c.maxAge} years (You are ${profile.age})`;
    failedCriteria.push(msg);
  }

  // 4. Area check (Rural vs Urban)
  if (c.area && c.area !== 'all' && c.area !== profile.area) {
    const msg = lang === 'hi'
      ? `केवल ${c.area === 'rural' ? 'ग्रामीण' : 'शहरी'} क्षेत्रों के लिए`
      : lang === 'ta'
      ? `${c.area === 'rural' ? 'கிராமப்புற' : 'நகர்ப்புற'} பகுதிகளுக்கு மட்டுமே`
      : `Applicable only to ${c.area} areas`;
    failedCriteria.push(msg);
  }

  // 5. Income check
  if (c.maxAnnualIncome !== undefined && profile.annualIncome > c.maxAnnualIncome) {
    const formattedLimit = `₹${c.maxAnnualIncome.toLocaleString('en-IN')}`;
    const msg = lang === 'hi'
      ? `अधिकतम वार्षिक आय सीमा ${formattedLimit} है`
      : lang === 'ta'
      ? `ஆண்டு வருமான உச்சவரம்பு ${formattedLimit}`
      : `Annual income exceeds limit of ${formattedLimit}`;
    failedCriteria.push(msg);
  }

  // 6. Social Category check
  if (!c.categories.includes("ALL") && !c.categories.includes(profile.category)) {
    const catList = c.categories.join(', ');
    const msg = lang === 'hi'
      ? `केवल ${catList} श्रेणी के लिए आरक्षित`
      : lang === 'ta'
      ? `${catList} பிரிவினருக்கு மட்டுமே`
      : `Restricted to categories: ${catList}`;
    failedCriteria.push(msg);
  }

  // 7. Occupation check
  if (c.occupations && !c.occupations.includes("all") && !c.occupations.includes(profile.occupation)) {
    const msg = lang === 'hi'
      ? `व्यवसाय आवश्यकता: ${c.occupations.join(', ')}`
      : lang === 'ta'
      ? `குறிப்பிட்ட தொழில்களுக்கு மட்டுமே: ${c.occupations.join(', ')}`
      : `Restricted to occupation: ${c.occupations.join(', ')}`;
    failedCriteria.push(msg);
  }

  // 8. Land Ownership
  if (c.requiresLandOwnership && !profile.isLandOwner) {
    const msg = lang === 'hi'
      ? `कृषि भूमि का स्वामित्व अनिवार्य है`
      : lang === 'ta'
      ? `விவசாய நிலம் வைத்திருக்க வேண்டும்`
      : `Requires agricultural land ownership`;
    failedCriteria.push(msg);
  }

  // 9. Disability Requirement
  if (c.requiresDisability && !profile.hasDisability) {
    const msg = lang === 'hi'
      ? `प्रमाणित दिव्यांगता (40%+) अनिवार्य है`
      : lang === 'ta'
      ? `40%+ மாற்றுத்திறனாளி சான்றிதழ் தேவை`
      : `Requires certified disability (40%+)`;
    failedCriteria.push(msg);
  }

  // 10. BPL / Ration card requirement
  if (c.requiresBPL && profile.rationCard === 'none') {
    const msg = lang === 'hi'
      ? `बीपीएल या अन्त्योदय राशन कार्ड आवश्यक है`
      : lang === 'ta'
      ? `வறுமைக் கோட்டிற்கு கீழ் (BPL) அட்டை தேவை`
      : `Requires BPL or Antyodaya ration card`;
    failedCriteria.push(msg);
  }

  // 11. Student status
  if (c.requiresStudentStatus && !profile.isStudent) {
    const msg = lang === 'hi'
      ? `वर्तमान में स्कूल या कॉलेज में अध्यनरत होना आवश्यक`
      : lang === 'ta'
      ? `பள்ளி அல்லது கல்லூரியில் பயில வேண்டும்`
      : `Must be a currently enrolled student`;
    failedCriteria.push(msg);
  }

  // 12. Widow / Single Mother
  if (c.requiresWidowOrSingleMother && !profile.isWidowOrSingleMother) {
    const msg = lang === 'hi'
      ? `विधवा या एकल महिला होना आवश्यक`
      : lang === 'ta'
      ? `விதவை பெண்கள் மட்டுமே விண்ணப்பிக்கலாம்`
      : `Requires widow or single mother status`;
    failedCriteria.push(msg);
  }

  // 13. Pregnant / Lactating
  if (c.requiresPregnantOrLactating && !profile.isPregnantOrLactating) {
    const msg = lang === 'hi'
      ? `गर्भवती या धात्री माता होना आवश्यक`
      : lang === 'ta'
      ? `கர்ப்பிணி அல்லது பாலூட்டும் தாய்மார்களுக்கு மட்டுமே`
      : `Requires pregnant or lactating mother status`;
    failedCriteria.push(msg);
  }

  const isEligible = failedCriteria.length === 0;
  const isNearMiss = failedCriteria.length === 1;

  return {
    scheme,
    isEligible,
    isNearMiss,
    failedCriteria,
    nearMissReason: isNearMiss ? failedCriteria[0] : undefined
  };
}

export function consolidateDocuments(matchedSchemes: Scheme[], lang: Language = 'en'): ConsolidatedDocument[] {
  const docMap = new Map<string, { id: string; title: string }[]>();

  for (const s of matchedSchemes) {
    const localized = s.i18n[lang] || s.i18n['en'];
    const title = localized.title;
    for (const doc of localized.requiredDocuments) {
      const normalizedDoc = doc.trim();
      const existing = docMap.get(normalizedDoc) || [];
      existing.push({ id: s.id, title });
      docMap.set(normalizedDoc, existing);
    }
  }

  const result: ConsolidatedDocument[] = [];
  const standardKeywords = ['aadhaar', 'आधार', 'ஆதார்', 'bank', 'passbook', 'बैंक', 'வங்கி', 'photo', 'फोटो', 'புகைப்படம்'];

  for (const [docName, schemes] of docMap.entries()) {
    const isStandard = standardKeywords.some(k => docName.toLowerCase().includes(k));
    result.push({
      documentName: docName,
      schemes,
      isStandardIdentityDoc: isStandard
    });
  }

  // Sort by popularity (schemes count desc)
  return result.sort((a, b) => b.schemes.length - a.schemes.length);
}
