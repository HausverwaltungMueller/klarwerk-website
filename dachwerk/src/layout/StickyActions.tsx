import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { company } from '@/content/company';
import { cta } from '@/content/cta';
import { telHref } from '@/lib/format';
import { track } from '@/lib/track';

/**
 * Mobile Aktionsleiste. Erscheint nach dem Hero und verschwindet im Kontaktbereich.
 * Genau ein Schatten im Projekt, hier.
 */
export function StickyActions() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const decide = () => {
      const hero = document.getElementById('hero');
      /* Kontaktabschnitt der Startseite oder der Anfragebereich der Kontaktseite. */
      const contact = document.getElementById('kontakt') ?? document.getElementById('anfrage');
      const heroPassed = hero ? hero.getBoundingClientRect().bottom < 80 : true;
      const inContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.7 : false;
      setOn(heroPassed && !inContact);
    };
    decide();
    window.addEventListener('scroll', decide, { passive: true });
    window.addEventListener('resize', decide);
    return () => {
      window.removeEventListener('scroll', decide);
      window.removeEventListener('resize', decide);
    };
  }, []);

  return (
    <div
      data-sticky-actions={on ? 'sichtbar' : 'verborgen'}
      className={`fixed inset-x-0 bottom-0 z-40 flex h-[62px] border-t border-energie bg-surface-2 shadow-sticky transition-transform duration-2 ease-out lg:hidden ${
        on ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={telHref(company.phone.value)}
        className="flex flex-1 items-center justify-center text-label text-text-1"
        onClick={() => { track('sticky_action_click', { ziel: 'telefon' }); }}
      >
        {cta.anrufen}
      </a>
      <Link
        to="/kontakt/"
        className="flex flex-1 items-center justify-center border-l border-hair text-label text-text-1"
        onClick={() => { track('sticky_action_click', { ziel: 'formular' }); }}
      >
        {cta.projekt}
      </Link>
    </div>
  );
}
