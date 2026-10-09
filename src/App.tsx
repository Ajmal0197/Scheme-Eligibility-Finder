import { useState, useEffect, useMemo } from 'react';
import type { UserProfile, Language, Scheme } from './types/scheme';
import { SCHEMES_DATABASE } from './data/schemes';
import { evaluateSchemeEligibility, consolidateDocuments } from './utils/engine';
import { TRANSLATIONS } from './locales/translations';
import { Navbar } from './components/Navbar';
import { Wizard } from './components/Wizard';
import { ResultsView } from './components/ResultsView';
import { ReportModal } from './components/ReportModal';

const DEFAULT_PROFILE: UserProfile = {
  state: "Uttar Pradesh",
  area: "rural",
  age: 32,
  gender: "female",
  category: "OBC",
  occupation: "farmer",
  annualIncome: 150000,
  rationCard: "bpl",
  hasDisability: false,
  isLandOwner: true,
  isStudent: false,
  isWidowOrSingleMother: false,
  isPregnantOrLactating: false,
};

export function App() {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('yojanasarthi_lang') as Language) || 'en';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('yojanasarthi_theme') as 'light' | 'dark') || 'light';
  });

  const [view, setView] = useState<'wizard' | 'results'>('wizard');
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [reportScheme, setReportScheme] = useState<Scheme | null>(null);

  // Sync theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('yojanasarthi_theme', theme);
  }, [theme]);

  // Sync language to local storage
  useEffect(() => {
    localStorage.setItem('yojanasarthi_lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleWizardSubmit = (submittedProfile: UserProfile) => {
    setProfile(submittedProfile);
    setView('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setProfile(DEFAULT_PROFILE);
    setView('wizard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compute matched evaluations
  const evaluations = useMemo(() => {
    return SCHEMES_DATABASE.map(scheme => evaluateSchemeEligibility(scheme, profile, lang));
  }, [profile, lang]);

  // Compute consolidated required documents
  const eligibleSchemes = useMemo(() => {
    return evaluations.filter(e => e.isEligible).map(e => e.scheme);
  }, [evaluations]);

  const consolidatedDocs = useMemo(() => {
    return consolidateDocuments(eligibleSchemes, lang);
  }, [eligibleSchemes, lang]);

  const t = TRANSLATIONS[lang];

  return (
    <div className="app-shell">
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        theme={theme}
        onThemeToggle={toggleTheme}
        onReset={handleReset}
        showReset={view === 'results'}
      />

      <main className="main-content">
        {view === 'wizard' ? (
          <div className="wizard-page animate-fade-in">
            {/* Introductory Hero on Wizard Start */}
            <div className="wizard-intro-hero">
              <span className="civic-flag-ribbon">🇮🇳 {t.appBadge}</span>
              <h1 className="intro-title">{t.tagline}</h1>
            </div>

            <Wizard
              lang={lang}
              initialProfile={profile}
              onSubmit={handleWizardSubmit}
            />
          </div>
        ) : (
          <ResultsView
            lang={lang}
            profile={profile}
            evaluations={evaluations}
            consolidatedDocs={consolidatedDocs}
            onEditProfile={() => {
              setView('wizard');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenReportModal={(scheme) => setReportScheme(scheme)}
          />
        )}
      </main>

      {/* Discrepancy Reporting Modal */}
      <ReportModal
        scheme={reportScheme}
        lang={lang}
        onClose={() => setReportScheme(null)}
      />

      {/* Footer */}
      <footer className="app-footer print-hide">
        <div className="footer-container">
          <p className="footer-disclaimer">{t.footer.disclaimer}</p>
          <p className="footer-powered">{t.footer.poweredBy}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
