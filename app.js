// Ihsanprojects – Frontend Interactions & Video Management

document.addEventListener('DOMContentLoaded', () => {
  // 1. Ensure Video Autoplays Muted in Header
  const heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;
    heroVideo.setAttribute('muted', '');
    heroVideo.setAttribute('playsinline', '');

    const playPromise = heroVideo.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.log('Video autoplay prevented, retrying muted...', err);
        heroVideo.muted = true;
        heroVideo.play();
      });
    }
  }

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // 3. Spenden-Auswahl (Donation Module Selection)
  const amountButtons = document.querySelectorAll('.amount-btn');
  const customAmountInput = document.getElementById('customAmountInput');
  const selectDonationBtns = document.querySelectorAll('.select-donation-btn');
  const donateNowBtn = document.getElementById('donateNowBtn');

  let currentAmount = 15;

  function setAmount(amount) {
    currentAmount = amount;
    amountButtons.forEach(btn => {
      if (parseInt(btn.getAttribute('data-val'), 10) === amount) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    if (customAmountInput) {
      customAmountInput.value = '';
    }
  }

  amountButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = parseInt(btn.getAttribute('data-val'), 10);
      setAmount(val);
    });
  });

  if (customAmountInput) {
    customAmountInput.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      if (val > 0) {
        currentAmount = val;
        amountButtons.forEach(b => b.classList.remove('active'));
      }
    });
  }

  selectDonationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.donation-card');
      const amount = parseInt(card.getAttribute('data-amount'), 10);
      setAmount(amount);
      
      // Scroll to donation box smoothly
      const box = document.querySelector('.donation-box-direct');
      if (box) {
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        box.style.boxShadow = '0 0 0 3px var(--gold-400)';
        setTimeout(() => {
          box.style.boxShadow = '';
        }, 1500);
      }
    });
  });

  if (donateNowBtn) {
    donateNowBtn.addEventListener('click', () => {
      // Direct link to official Twingle donation form
      const twingleUrl = 'https://spenden.twingle.de/initium-care-die-gesundheitskasse-fuer-afrika-e-v/ihsanprojects/tw65bb8df6e2c62/form?tw_amount=' + currentAmount;
      window.open(twingleUrl, '_blank');
    });
  }

  // 4. Modals (Impressum, Datenschutz, Infografik, Partner)
  const modals = {
    openImpressumBtn: 'impressumModal',
    openDatenschutzBtn: 'datenschutzModal',
    openInfographicBtn: 'infographicModal',
    partnerModalBtn: 'partnerModal'
  };

  Object.entries(modals).forEach(([btnId, modalId]) => {
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    if (btn && modal) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
  });

  // Close modals on close button or clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.active').forEach(modal => {
        modal.classList.remove('active');
      });
      document.body.style.overflow = '';
    }
  });
});
