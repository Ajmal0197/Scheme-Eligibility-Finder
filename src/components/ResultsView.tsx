import { useState, useEffect, type FC } from 'react';
import type { Scheme, UserProfile, MatchEvaluation, ConsolidatedDocument, Language } from '../types/scheme';
import { TRANSLATIONS } from '../locales/translations';
import confetti from 'canvas-confetti';
import { 
  CheckCircle, 
  ExternalLink, 
  Printer, 
  Share2, 
  FileText, 
  AlertCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Sparkles, 
  RotateCcw,
  Check,
  AlertTriangle,
  Info
} from 'lucide-react';

interface ResultsViewProps {
  lang: Language;
  profile: UserProfile;
  evaluations: MatchEvaluation[];
  consolidatedDocs: ConsolidatedDocument[];
  onEditProfile: () => void;
  onOpenReportModal: (scheme: Scheme) => void;
}

export const ResultsView: FC<ResultsViewProps> = ({
  lang,
  profile,
  evaluations,
  consolidatedDocs,
  onEditProfile,
  onOpenReportModal
}) => {
  const t = TRANSLATIONS[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSchemeId, setExpandedSchemeId] = useState<string | null>(null);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [showNearMisses, setShowNearMisses] = useState<boolean>(true);

  const eligibleEvaluations = evaluations.filter(e => e.isEligible);
  const nearMissEvaluations = evaluations.filter(e => e.isNearMiss && !e.isEligible);

  // Trigger celebration confetti once on mount if schemes are found
  useEffect(() => {
    if (eligibleEvaluations.length > 0) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, []);

  const toggleDocCheck = (docName: string) => {
    setCheckedDocs(prev => ({ ...prev, [docName]: !prev[docName] }));
  };

  const toggleSchemeExpand = (id: string) => {
    setExpandedSchemeId(prev => prev === id ? null : id);
  };

  // Filter schemes
  const filteredEligible = eligibleEvaluations.filter(({ scheme }) => {
    const loc = scheme.i18n[lang] || scheme.i18n['en'];
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory;
    const matchesQuery = 
      loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.shortBenefit.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppShare = () => {
    const topDocs = consolidatedDocs.slice(0, 5).map(d => d.documentName).join(', ');
    const text = t.results.whatsappShareText
      .replace('{count}', String(eligibleEvaluations.length))
      .replace('{docs}', topDocs);
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + window.location.href)}`;
    window.open(url, '_blank');
  };

  const categoriesList: { key: string; label: string }[] = [
    { key: 'all', label: t.results.filterAll },
    { key: 'agriculture', label: t.results.filterAgri },
    { key: 'healthcare', label: t.results.filterHealth },
    { key: 'housing', label: t.results.filterHousing },
    { key: 'women_child', label: t.results.filterWomen },
    { key: 'education', label: t.results.filterEdu },
    { key: 'pension', label: t.results.filterPension },
    { key: 'business_employment', label: t.results.filterLivelihood }
  ];

  return (
    <div className="results-wrapper animate-fade-in">
      {/* Hero Summary Banner */}
      <div className="results-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>{t.appBadge}</span>
          </div>
          <h1 className="hero-headline">
            {t.results.headline.replace('{count}', String(eligibleEvaluations.length))}
          </h1>
          <p className="hero-subheadline">{t.results.subheadline}</p>

          <div className="hero-stats-row">
            <div className="hero-stat-card">
              <span className="stat-number">{eligibleEvaluations.length}</span>
              <span className="stat-label">{t.results.eligibleCount}</span>
            </div>
            <div className="hero-stat-card">
              <span className="stat-number">{consolidatedDocs.length}</span>
              <span className="stat-label">{t.results.documentsCount}</span>
            </div>
            <div className="hero-stat-card highlight">
              <span className="stat-number">{profile.state}</span>
              <span className="stat-label">{profile.area === 'rural' ? 'Rural Citizen' : 'Urban Citizen'}</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <button onClick={onEditProfile} className="btn btn-secondary compact">
            <RotateCcw size={16} />
            {t.editAnswers}
          </button>
          <button onClick={handlePrint} className="btn btn-secondary compact print-hide">
            <Printer size={16} />
            {t.results.printChecklist}
          </button>
          <button onClick={handleWhatsAppShare} className="btn btn-whatsapp compact print-hide">
            <Share2 size={16} />
            {t.results.shareWhatsApp}
          </button>
        </div>
      </div>

      {/* Main Grid: Left is Schemes, Right is Consolidated Document Checklist */}
      <div className="results-grid">
        {/* Left Column: Schemes Directory */}
        <div className="schemes-column">
          {/* Search & Category Filter Toolbar */}
          <div className="filter-toolbar print-hide">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder={t.results.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="category-scroll-pills">
              {categoriesList.map(cat => (
                <button
                  key={cat.key}
                  className={`category-pill ${selectedCategory === cat.key ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scheme Cards */}
          {filteredEligible.length === 0 ? (
            <div className="empty-state-card">
              <Info size={40} className="empty-icon" />
              <h3>{t.results.noSchemesFound}</h3>
              <p>{t.results.noSchemesSubtitle}</p>
              <button onClick={onEditProfile} className="btn btn-primary">
                {t.editAnswers}
              </button>
            </div>
          ) : (
            <div className="schemes-list">
              {filteredEligible.map(({ scheme }) => {
                const loc = scheme.i18n[lang] || scheme.i18n['en'];
                const isExpanded = expandedSchemeId === scheme.id;

                return (
                  <div key={scheme.id} className="scheme-card">
                    {/* Top Meta Header */}
                    <div className="scheme-header">
                      <div className="scheme-tags">
                        <span className={`tag-level ${scheme.level}`}>
                          {scheme.level === 'central' ? 'Central Scheme' : `${scheme.state} State`}
                        </span>
                        <span className="tag-category">
                          {scheme.category.replace('_', ' ').toUpperCase()}
                        </span>
                      </div>
                      <span className="verified-stamp">
                        <ShieldCheck size={14} />
                        {t.results.verifiedOn} {scheme.lastVerifiedDate}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h2 className="scheme-title">{loc.title}</h2>
                    <p className="scheme-tagline">{loc.tagline}</p>

                    {/* Primary Benefit Callout */}
                    <div className="benefit-banner">
                      <div className="benefit-indicator">💰</div>
                      <div className="benefit-text">
                        <strong>{loc.shortBenefit}</strong>
                      </div>
                    </div>

                    {/* Expandable Section */}
                    {isExpanded && (
                      <div className="scheme-expanded-details animate-fade-in">
                        <div className="detail-section">
                          <h4 className="detail-heading">
                            <Info size={16} />
                            {lang === 'hi' ? 'विस्तृत लाभ विवरण' : lang === 'ta' ? 'திட்டத்தின் முழு பலன்கள்' : 'Detailed Benefit'}
                          </h4>
                          <p className="detail-body">{loc.detailedBenefit}</p>
                        </div>

                        <div className="detail-section">
                          <h4 className="detail-heading">
                            <CheckCircle size={16} />
                            {t.results.eligibilityCriteria}
                          </h4>
                          <ul className="bullet-list">
                            {loc.eligibilityBullets.map((bullet, idx) => (
                              <li key={idx}>{bullet}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="detail-section">
                          <h4 className="detail-heading">
                            <FileText size={16} />
                            {t.results.documentsNeeded}
                          </h4>
                          <div className="docs-pills-wrap">
                            {loc.requiredDocuments.map((doc, idx) => (
                              <span key={idx} className="doc-pill">
                                <Check size={14} />
                                {doc}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Citation & Source */}
                        <div className="source-citation">
                          <span>{t.results.source} {scheme.sourceCitation}</span>
                          <button
                            type="button"
                            className="report-link"
                            onClick={() => onOpenReportModal(scheme)}
                          >
                            <AlertCircle size={14} />
                            {t.results.reportDiscrepancy}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Card Action Footer */}
                    <div className="scheme-card-footer">
                      <button
                        type="button"
                        className="btn-text-toggle"
                        onClick={() => toggleSchemeExpand(scheme.id)}
                      >
                        {isExpanded ? (
                          <>
                            {lang === 'hi' ? 'कम विवरण देखें' : lang === 'ta' ? 'குறைவான விவரங்கள்' : 'Less Details'}
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            {lang === 'hi' ? 'पूर्ण विवरण व दस्तावेज देखें' : lang === 'ta' ? 'முழு விவரங்கள் காண்க' : 'View Full Details & Documents'}
                            <ChevronDown size={16} />
                          </>
                        )}
                      </button>

                      <a
                        href={scheme.officialApplyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-apply"
                      >
                        {t.results.applyOfficial}
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Near Misses Section */}
          {nearMissEvaluations.length > 0 && (
            <div className="near-misses-container">
              <div
                className="near-misses-header"
                onClick={() => setShowNearMisses(prev => !prev)}
                role="button"
                tabIndex={0}
              >
                <div className="near-misses-title-group">
                  <AlertTriangle className="near-miss-icon" size={20} />
                  <div>
                    <h3 className="near-misses-title">
                      {t.results.nearMissesTitle.replace('{count}', String(nearMissEvaluations.length))}
                    </h3>
                    <p className="near-misses-subtitle">{t.results.nearMissesSubtitle}</p>
                  </div>
                </div>
                {showNearMisses ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {showNearMisses && (
                <div className="near-misses-list animate-fade-in">
                  {nearMissEvaluations.map(({ scheme, nearMissReason }) => {
                    const loc = scheme.i18n[lang] || scheme.i18n['en'];
                    return (
                      <div key={scheme.id} className="near-miss-card">
                        <div className="near-miss-card-top">
                          <h4 className="near-miss-scheme-title">{loc.title}</h4>
                          <span className="near-miss-benefit">{loc.shortBenefit}</span>
                        </div>
                        <div className="near-miss-reason">
                          <span className="reason-label">{t.results.unmetCriteria}</span>
                          <span className="reason-text">{nearMissReason}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Consolidated Document Checklist */}
        <aside className="checklist-column">
          <div className="checklist-card">
            <div className="checklist-card-header">
              <div className="checklist-icon-wrap">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="checklist-title">{t.results.checklistTitle}</h3>
                <p className="checklist-subtitle">{t.results.checklistSubtitle}</p>
              </div>
            </div>

            <div className="checklist-progress-stat">
              <span>
                {Object.values(checkedDocs).filter(Boolean).length} / {consolidatedDocs.length} {lang === 'hi' ? 'दस्तावेज तैयार' : lang === 'ta' ? 'ஆவணங்கள் தயார்' : 'Documents Ready'}
              </span>
            </div>

            <div className="checklist-items-wrap">
              {consolidatedDocs.map((doc, idx) => {
                const isChecked = !!checkedDocs[doc.documentName];
                return (
                  <div
                    key={idx}
                    className={`checklist-item ${isChecked ? 'completed' : ''}`}
                    onClick={() => toggleDocCheck(doc.documentName)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={`doc-checkbox ${isChecked ? 'checked' : ''}`}>
                      {isChecked && <Check size={14} />}
                    </div>
                    <div className="doc-info">
                      <span className="doc-name">{doc.documentName}</span>
                      <span className="doc-scheme-count">
                        {lang === 'hi'
                          ? `${doc.schemes.length} योजनाओं में आवश्यक`
                          : lang === 'ta'
                          ? `${doc.schemes.length} திட்டங்களுக்கு தேவை`
                          : `Needed for ${doc.schemes.length} schemes`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="checklist-actions print-hide">
              <button onClick={handlePrint} className="btn btn-secondary full-width">
                <Printer size={16} />
                {t.results.printChecklist}
              </button>
              <button onClick={handleWhatsAppShare} className="btn btn-whatsapp full-width">
                <Share2 size={16} />
                {t.results.shareWhatsApp}
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};
