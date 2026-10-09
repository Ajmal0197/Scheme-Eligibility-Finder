import { useState, type FormEvent, type FC } from 'react';
import type { Scheme, Language } from '../types/scheme';
import { TRANSLATIONS } from '../locales/translations';
import { X, AlertCircle, CheckCircle } from 'lucide-react';

interface ReportModalProps {
  scheme: Scheme | null;
  lang: Language;
  onClose: () => void;
}

export const ReportModal: FC<ReportModalProps> = ({
  scheme,
  lang,
  onClose
}) => {
  if (!scheme) return null;

  const t = TRANSLATIONS[lang];
  const loc = scheme.i18n[lang] || scheme.i18n['en'];

  const [feedback, setFeedback] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    // Simulate feedback recording (could push to localStorage, Supabase, or Formspree)
    console.log(`Report submitted for ${scheme.id}:`, feedback);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2200);
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <AlertCircle className="modal-icon" size={20} />
            <h3 className="modal-title">{t.modal.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {submitted ? (
          <div className="modal-success animate-fade-in">
            <CheckCircle size={44} className="success-icon" />
            <p className="success-text">{t.modal.thankYou}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <p className="modal-desc">{t.modal.description}</p>

            <div className="modal-scheme-info">
              <span className="scheme-label">{t.modal.schemeName}</span>
              <span className="scheme-value">{loc.title}</span>
            </div>

            <textarea
              className="modal-textarea"
              rows={4}
              placeholder={t.modal.reasonPlaceholder}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />

            <div className="modal-actions">
              <button type="button" onClick={onClose} className="btn btn-secondary">
                {t.modal.cancel}
              </button>
              <button type="submit" className="btn btn-primary">
                {t.modal.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
