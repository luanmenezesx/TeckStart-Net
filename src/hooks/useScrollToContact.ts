import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Custom hook providing intelligent smooth scrolling to the contact form.
 * - If on the home page, smoothly scrolls to #contato and focuses the first input.
 * - If on another page, navigates to /?scroll=contato and scrolls.
 */
export const useScrollToContact = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }

    const isHomePage = location.pathname === '/';

    if (isHomePage) {
      const contactSection = document.getElementById('contato') || document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const firstInput = contactSection.querySelector<HTMLInputElement>('input[name="name"]') || contactSection.querySelector<HTMLInputElement>('input');
          firstInput?.focus({ preventScroll: true });
        }, 500);
      }
    } else {
      navigate('/?scroll=contato');
      setTimeout(() => {
        const contactSection = document.getElementById('contato') || document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            const firstInput = contactSection.querySelector<HTMLInputElement>('input[name="name"]') || contactSection.querySelector<HTMLInputElement>('input');
            firstInput?.focus({ preventScroll: true });
          }, 500);
        }
      }, 300);
    }
  };

  return scrollToContact;
};

export default useScrollToContact;
