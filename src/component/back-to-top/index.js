import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // show button after user scrolls down 300px
        const onScroll = () => {
            setVisible(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // initial check

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        // smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="
        fixed right-5 bottom-6 z-[999] flex items-center justify-center
        w-12 h-12 rounded-full shadow-lg
        bg-white/90 hover:bg-white transition
        ring-1 ring-gray-200 hover:scale-105
        focus:outline-none 
      "
        >
            {/* simple chevron up icon (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}
