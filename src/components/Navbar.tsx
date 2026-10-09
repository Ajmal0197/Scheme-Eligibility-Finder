import type { FC } from 'react';
import type { Language } from '../types/scheme';
import { TRANSLATIONS } from '../locales/translations';
import { Moon, Sun, RotateCcw, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  onReset: () => void;
  showReset: boolean;
}

export const Navbar: FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  theme,
  onThemeToggle,
  onReset,
  showReset
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <div className="brand-group" onClick={onReset} role="button" tabIndex={0}>
          <div className="brand-icon-wrapper">
            <span className="brand-chakra">🏛️</span>
          </div>
          <div className="brand-text">
            <div className="brand-title-row">
              <span className="brand-title">{t.appName}</span>
              <span className="brand-badge">{t.appBadge}</span>
            </div>
            <span className="brand-subtitle">
              {lang === 'hi' ? '100% निःशुल्क व सटीक नागरिक सेवा' : lang === 'ta' ? 'இலவச மக்கள் நல வழிகாட்டி' : 'Empowering Indian Citizens'}
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="nav-controls">
          {/* Language Selector */}
          <div className="lang-switcher">
            <Globe className="lang-icon" size={16} />
            <select
              value={lang}
              onChange={(e) => onLanguageChange(e.target.value as Language)}
              className="lang-select"
              aria-label="Select Language"
            >
              <option value="en">English (EN)</option>
              <option value="hi">हिंदी (HI)</option>
              <option value="ta">தமிழ் (TA)</option>
            </select>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            className="icon-button"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} className="theme-icon sun" /> : <Moon size={18} className="theme-icon moon" />}
          </button>

          {/* Restart Button */}
          {showReset && (
            <button
              onClick={onReset}
              className="reset-button"
              title={t.restart}
            >
              <RotateCcw size={15} />
              <span className="reset-button-text">{t.restart}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
