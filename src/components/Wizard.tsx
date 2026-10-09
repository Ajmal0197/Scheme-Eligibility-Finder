import { useState, type FC } from 'react';
import type { UserProfile, Language, SocialCategory, RationCardType } from '../types/scheme';
import { TRANSLATIONS } from '../locales/translations';
import { INDIAN_STATES } from '../data/schemes';
import { 
  MapPin, 
  Home, 
  Building2, 
  User, 
  GraduationCap, 
  Tractor, 
  Hammer, 
  HardHat, 
  Briefcase, 
  HeartHandshake, 
  Wallet, 
  CreditCard, 
  Accessibility, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Store 
} from 'lucide-react';

interface WizardProps {
  lang: Language;
  initialProfile: UserProfile;
  onSubmit: (profile: UserProfile) => void;
}

export const Wizard: FC<WizardProps> = ({
  lang,
  initialProfile,
  onSubmit
}) => {
  const t = TRANSLATIONS[lang];
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 9;

  const [profile, setProfile] = useState<UserProfile>(initialProfile);

  const updateProfile = <K extends keyof UserProfile>(key: K, value: UserProfile[K]) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onSubmit(profile);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const popularStates = ["Uttar Pradesh", "Tamil Nadu", "Maharashtra", "Bihar", "Karnataka", "West Bengal", "Delhi (NCT)"];

  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="wizard-wrapper">
      {/* Step Indicator Header */}
      <div className="wizard-header">
        <div className="step-counter-badge">
          {t.questionCount.replace('{current}', String(currentStep)).replace('{total}', String(totalSteps))}
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <div className="wizard-card">
        {/* STEP 1: State / UT */}
        {currentStep === 1 && (
          <div className="step-content animate-fade-in">
            <div className="step-title-group">
              <div className="step-icon-bubble">
                <MapPin size={24} />
              </div>
              <div>
                <h2 className="step-title">{t.steps.state.title}</h2>
                <p className="step-subtitle">{t.steps.state.subtitle}</p>
              </div>
            </div>

            {/* Quick Pick Popular States */}
            <div className="quick-picks-label">
              {lang === 'hi' ? 'लोकप्रिय राज्य चुनें:' : lang === 'ta' ? 'அடிக்கடி தேர்ந்தெடுக்கப்படும் மாநிலங்கள்:' : 'Quick Select:'}
            </div>
            <div className="quick-pills-row">
              {popularStates.map(st => (
                <button
                  key={st}
                  type="button"
                  className={`pill-btn ${profile.state === st ? 'active' : ''}`}
                  onClick={() => updateProfile('state', st)}
                >
                  {st}
                </button>
              ))}
            </div>

            <div className="input-field-group">
              <label htmlFor="state-select" className="input-label">
                {lang === 'hi' ? 'सभी राज्य व केंद्र शासित प्रदेश' : lang === 'ta' ? 'அனைத்து மாநிலங்கள்' : 'All States & UTs'}
              </label>
              <select
                id="state-select"
                className="select-input"
                value={profile.state}
                onChange={(e) => updateProfile('state', e.target.value)}
              >
                {INDIAN_STATES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* STEP 2: Rural vs Urban */}
        {currentStep === 2 && (
          <div className="step-content animate-fade-in">
            <div className="step-title-group">
              <div className="step-icon-bubble">
                <Building2 size={24} />
              </div>
              <div>
                <h2 className="step-title">{t.steps.area.title}</h2>
                <p className="step-subtitle">{t.steps.area.subtitle}</p>
              </div>
            </div>

            <div className="options-grid cols-2">
              <div
                className={`choice-card ${profile.area === 'rural' ? 'selected' : ''}`}
                onClick={() => updateProfile('area', 'rural')}
                role="button"
                tabIndex={0}
              >
                <div className="choice-card-header">
                  <Home className="choice-icon" size={28} />
                  {profile.area === 'rural' && <CheckCircle2 className="check-badge" size={20} />}
                </div>
                <h3 className="choice-title">{t.steps.area.rural}</h3>
                <p className="choice-desc">{t.steps.area.ruralDesc}</p>
              </div>

              <div
                className={`choice-card ${profile.area === 'urban' ? 'selected' : ''}`}
                onClick={() => updateProfile('area', 'urban')}
                role="button"
                tabIndex={0}
              >
                <div className="choice-card-header">
                  <Building2 className="choice-icon" size={28} />
                  {profile.area === 'urban' && <CheckCircle2 className="check-badge" size={20} />}
                </div>
                <h3 className="choice-title">{t.steps.area.urban}</h3>
                <p className="choice-desc">{t.steps.area.urbanDesc}</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Age & Gender */}
        {currentStep === 3 && (
          <div className="step-content animate-fade-in">
            <div className="step-title-group">
              <div className="step-icon-bubble">
                <User size={24} />
              </div>
              <div>
                <h2 className="step-title">{t.steps.demographics.title}</h2>
                <p className="step-subtitle">{t.steps.demographics.subtitle}</p>
              </div>
            </div>

            {/* Age input */}
            <div className="form-section">
              <label htmlFor="age-input" className="input-label">{t.steps.demographics.ageLabel}</label>
              <div className="age-stepper">
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => updateProfile('age', Math.max(0, profile.age - 1))}
                >
                  -
                </button>
                <input
                  id="age-input"
                  type="number"
                  min="0"
                  max="120"
                  className="age-number-input"
                  value={profile.age}
                  onChange={(e) => updateProfile('age', parseInt(e.target.value) || 0)}
                />
                <button
                  type="button"
                  className="stepper-btn"
                  onClick={() => updateProfile('age', Math.min(120, profile.age + 1))}
                >
                  +
                </button>
              </div>
            </div>

            {/* Gender selection */}
            <div className="form-section">
              <label className="input-label">{t.steps.demographics.genderLabel}</label>
              <div className="options-grid cols-3">
                {(['male', 'female', 'transgender'] as const).map(g => (
                  <button
                    key={g}
                    type="button"
                    className={`choice-card compact ${profile.gender === g ? 'selected' : ''}`}
                    onClick={() => updateProfile('gender', g)}
                  >
                    <span className="choice-title">
                      {g === 'male' ? t.steps.demographics.male : g === 'female' ? t.steps.demographics.female : t.steps.demographics.transgender}
                    </span>
                    {profile.gender === g && <CheckCircle2 className="check-badge small" size={16} />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Social Category */}
        {currentStep === 4 && (
          <div className="step-content animate-fade-in">
            <div className="step-title-group">
              <div className="step-icon-bubble">
                <HeartHandshake size={24} />
              </div>
              <div>
                <h2 className="step-title">{t.steps.category.title}</h2>
                <p className="step-subtitle">{t.steps.category.subtitle}</p>
              </div>
            </div>

            <div className="options-vertical-list">
              {[
                { key: 'GEN', label: t.steps.category.gen },
                { key: 'OBC', label: t.steps.category.obc },
                { key: 'SC', label: t.steps.category.sc },
                { key: 'ST', label: t.steps.category.st },
                { key: 'EWS', label: t.steps.category.ews }
              ].map(cat => (
                <div
                  key={cat.key}
                  className={`list-choice-item ${profile.category === cat.key ? 'selected' : ''}`}
                  onClick={() => updateProfile('category', cat.key as SocialCategory)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="list-choice-label">{cat.label}</span>
                  <div className={`radio-indicator ${profile.category === cat.key ? 'checked' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: Occupation */}
        {currentStep === 5 && (
          <div className="step-content animate-fade-in">
            <div className="step-title-group">
              <div className="step-icon-bubble">
                <Briefcase size={24} />
              </div>
              <div>
                <h2 className="step-title">{t.steps.occupation.title}</h2>
                <p className="step-subtitle">{t.steps.occupation.subtitle}</p>
              </div>
            </div>

            <div className="options-grid cols-2">
              {[
                { key: 'farmer', icon: Tractor, label: t.steps.occupation.farmer },
                { key: 'student', icon: GraduationCap, label: t.steps.occupation.student },
                { key: 'artisan', icon: Hammer, label: t.steps.occupation.artisan },
                { key: 'worker', icon: HardHat, label: t.steps.occupation.worker },
                { key: 'business', icon: Store, label: t.steps.occupation.business },
                { key: 'homemaker', icon: Home, label: t.steps.occupation.homemaker },
                { key: 'senior', icon: HeartHandshake, label: t.steps.occupation.senior },
                { key: 'unemployed', icon: Briefcase, label: t.steps.occupation.unemployed }
              ].map(occ => {
                const IconComponent = occ.icon;
                const isSelected = profile.occupation === occ.key;
                return (
                  <div
                    key={occ.key}
                    className={`choice-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      updateProfile('occupation', occ.key);
                      // Auto-sync special condition shortcuts
                      if (occ.key === 'farmer') updateProfile('isLandOwner', true);
                      if (occ.key === 'student') updateProfile('isStudent', true);
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="choice-card-header">
                      <IconComponent className="choice-icon" size={26} />
                      {isSelected && <CheckCircle2 className="check-badge" size={18} />}
                    </div>
                    <h3 className="choice-title">{occ.label}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: Annual Family Income */}
        {currentStep === 6 && (
          <div className="step-content animate-fade-in">
            <div className="step-title-group">
              <div className="step-icon-bubble">
                <Wallet size={24} />
              </div>
              <div>
                <h2 className="step-title">{t.steps.income.title}</h2>
                <p className="step-subtitle">{t.steps.income.subtitle}</p>
              </div>
            </div>

            <div className="options-vertical-list">
              {[
                { amount: 80000, label: t.steps.income.under1L },
                { amount: 200000, label: t.steps.income.under2_5L },
                { amount: 400000, label: t.steps.income.under5L },
                { amount: 700000, label: t.steps.income.under8L },
                { amount: 1200000, label: t.steps.income.above8L }
              ].map(inc => (
                <div
                  key={inc.amount}
                  className={`list-choice-item ${profile.annualIncome === inc.amount ? 'selected' : ''}`}
                  onClick={() => updateProfile('annualIncome', inc.amount)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="list-choice-label">{inc.label}</span>
                  <div className={`radio-indicator ${profile.annualIncome === inc.amount ? 'checked' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 7: Ration Card Status */}
        {currentStep === 7 && (
          <div className="step-content animate-fade-in">
            <div className="step-title-group">
              <div className="step-icon-bubble">
                <CreditCard size={24} />
              </div>
              <div>
                <h2 className="step-title">{t.steps.rationCard.title}</h2>
                <p className="step-subtitle">{t.steps.rationCard.subtitle}</p>
              </div>
            </div>

            <div className="options-vertical-list">
              {[
                { key: 'none', label: t.steps.rationCard.none },
                { key: 'bpl', label: t.steps.rationCard.bpl },
                { key: 'aay', label: t.steps.rationCard.aay }
              ].map(rc => (
                <div
                  key={rc.key}
                  className={`list-choice-item ${profile.rationCard === rc.key ? 'selected' : ''}`}
                  onClick={() => updateProfile('rationCard', rc.key as RationCardType)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="list-choice-label">{rc.label}</span>
                  <div className={`radio-indicator ${profile.rationCard === rc.key ? 'checked' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 8: Disability Status */}
        {currentStep === 8 && (
          <div className="step-content animate-fade-in">
            <div className="step-title-group">
              <div className="step-icon-bubble">
                <Accessibility size={24} />
              </div>
              <div>
                <h2 className="step-title">{t.steps.disability.title}</h2>
                <p className="step-subtitle">{t.steps.disability.subtitle}</p>
              </div>
            </div>

            <div className="options-grid cols-2">
              <div
                className={`choice-card ${!profile.hasDisability ? 'selected' : ''}`}
                onClick={() => updateProfile('hasDisability', false)}
                role="button"
                tabIndex={0}
              >
                <div className="choice-card-header">
                  <User className="choice-icon" size={28} />
                  {!profile.hasDisability && <CheckCircle2 className="check-badge" size={20} />}
                </div>
                <h3 className="choice-title">{t.steps.disability.no}</h3>
              </div>

              <div
                className={`choice-card ${profile.hasDisability ? 'selected' : ''}`}
                onClick={() => updateProfile('hasDisability', true)}
                role="button"
                tabIndex={0}
              >
                <div className="choice-card-header">
                  <Accessibility className="choice-icon" size={28} />
                  {profile.hasDisability && <CheckCircle2 className="check-badge" size={20} />}
                </div>
                <h3 className="choice-title">{t.steps.disability.yes}</h3>
                <p className="choice-desc">{t.steps.disability.yesDesc}</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 9: Special Circumstances */}
        {currentStep === 9 && (
          <div className="step-content animate-fade-in">
            <div className="step-title-group">
              <div className="step-icon-bubble">
                <Sparkles size={24} />
              </div>
              <div>
                <h2 className="step-title">{t.steps.specialConditions.title}</h2>
                <p className="step-subtitle">{t.steps.specialConditions.subtitle}</p>
              </div>
            </div>

            <div className="options-vertical-list">
              <div
                className={`list-choice-item checkbox ${profile.isLandOwner ? 'selected' : ''}`}
                onClick={() => updateProfile('isLandOwner', !profile.isLandOwner)}
                role="button"
                tabIndex={0}
              >
                <span className="list-choice-label">{t.steps.specialConditions.ownsLand}</span>
                <div className={`checkbox-indicator ${profile.isLandOwner ? 'checked' : ''}`}></div>
              </div>

              <div
                className={`list-choice-item checkbox ${profile.isStudent ? 'selected' : ''}`}
                onClick={() => updateProfile('isStudent', !profile.isStudent)}
                role="button"
                tabIndex={0}
              >
                <span className="list-choice-label">{t.steps.specialConditions.enrolledStudent}</span>
                <div className={`checkbox-indicator ${profile.isStudent ? 'checked' : ''}`}></div>
              </div>

              {profile.gender === 'female' && (
                <>
                  <div
                    className={`list-choice-item checkbox ${profile.isWidowOrSingleMother ? 'selected' : ''}`}
                    onClick={() => updateProfile('isWidowOrSingleMother', !profile.isWidowOrSingleMother)}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="list-choice-label">{t.steps.specialConditions.widowSingleMother}</span>
                    <div className={`checkbox-indicator ${profile.isWidowOrSingleMother ? 'checked' : ''}`}></div>
                  </div>

                  <div
                    className={`list-choice-item checkbox ${profile.isPregnantOrLactating ? 'selected' : ''}`}
                    onClick={() => updateProfile('isPregnantOrLactating', !profile.isPregnantOrLactating)}
                    role="button"
                    tabIndex={0}
                  >
                    <span className="list-choice-label">{t.steps.specialConditions.pregnantLactating}</span>
                    <div className={`checkbox-indicator ${profile.isPregnantOrLactating ? 'checked' : ''}`}></div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Wizard Controls Footer */}
        <div className="wizard-actions">
          {currentStep > 1 ? (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handlePrev}
            >
              <ArrowLeft size={16} />
              {t.previous}
            </button>
          ) : <div />}

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}
          >
            {currentStep === totalSteps ? (
              <>
                {t.seeResults}
                <Sparkles size={16} />
              </>
            ) : (
              <>
                {t.next}
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
