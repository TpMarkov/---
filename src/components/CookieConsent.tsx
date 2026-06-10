import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert } from "lucide-react";

interface CookieConsentProps {
  lang: "BG" | "EN";
}

export default function CookieConsent({ lang }: CookieConsentProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem("atlanta_cookie_consent_approved");
    if (!consent) {
      // Small delay on first slide-in
      const timer = setTimeout(() => setIsVisible(true), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("atlanta_cookie_consent_approved", "true");
    setIsVisible(false);
  };

  const tr = {
    BG: {
      text: "Ние използваме бисквитки, за да гарантираме, че ви предоставяме най-доброто изживяване на нашия уебсайт. Ако продължите да използвате този сайт, ще приемем, че сте доволни от него.",
      ok: "ОК",
      policy: "Политика за поверителност",
    },
    EN: {
      text: "We use cookies to guarantee that you receive the finest premium experience on our portal. Continuing constitutes standard approval.",
      ok: "Accept Cookies",
      policy: "Privacy Policy",
    },
  }[lang];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-zinc-900 text-white rounded-3xl p-5 shadow-2xl border border-neutral-800 z-50 flex flex-col gap-4"
          id="cookie-notice"
          role="dialog"
          aria-label="Compliance notification"
        >
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="font-sans text-[11px] md:text-xs text-neutral-300 leading-relaxed" id="cn-notice-text">
              {tr.text}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-end" id="cn-notice-buttons">
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-xl bg-primary hover:bg-red-600 transition-all font-jura text-[10px] font-extrabold uppercase tracking-widest text-white cursor-pointer"
              id="cn-accept-cookie"
            >
              {tr.ok}
            </button>
            <a
              href="https://www.lilovi88.com/privacy-policy/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-all font-jura text-[10px] text-neutral-400 hover:text-white uppercase tracking-widest text-center"
              id="cn-more-info"
            >
              {tr.policy}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
