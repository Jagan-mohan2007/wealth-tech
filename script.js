(function () {
  'use strict';

  /* ======================================================================
     1. MOCK DATA
     ====================================================================== */

  const stockDatabase = {
    'reliance': {
      name: 'Reliance Industries', ticker: 'RELIANCE', type: 'stock',
      riskScore: 35, volatility: 'Medium', beginnerFriendly: true,
      longTermSuitability: 'Excellent',
      explanation: 'A diversified conglomerate and India\'s most valuable company. Offers stable growth but is exposed to global energy market fluctuations and regulatory changes.',
      riskFactors: ['Market risk', 'Regulatory changes', 'Energy price volatility', 'Conglomerate discount'],
      hypeLevel: 25
    },
    'tcs': {
      name: 'Tata Consultancy Services', ticker: 'TCS', type: 'stock',
      riskScore: 30, volatility: 'Low', beginnerFriendly: true,
      longTermSuitability: 'Excellent',
      explanation: 'India\'s largest IT services company. Known for consistent dividends, strong revenue visibility, and stable returns over decades.',
      riskFactors: ['Currency fluctuation', 'Global economic slowdown', 'High attrition rates'],
      hypeLevel: 15
    },
    'infosys': {
      name: 'Infosys', ticker: 'INFY', type: 'stock',
      riskScore: 32, volatility: 'Low', beginnerFriendly: true,
      longTermSuitability: 'Excellent',
      explanation: 'A leading global IT service provider with strong fundamentals but depends heavily on US and EU markets for revenue.',
      riskFactors: ['Global tech slowdown', 'Currency risk', 'Margin pressures'],
      hypeLevel: 18
    },
    'hdfc bank': {
      name: 'HDFC Bank', ticker: 'HDFCBANK', type: 'stock',
      riskScore: 28, volatility: 'Low', beginnerFriendly: true,
      longTermSuitability: 'Excellent',
      explanation: 'India\'s largest private sector bank. Historically delivers consistent compounding returns with strict risk management practices.',
      riskFactors: ['Interest rate changes', 'NPA increases', 'Macroeconomic downturn'],
      hypeLevel: 20
    },
    'wipro': {
      name: 'Wipro', ticker: 'WIPRO', type: 'stock',
      riskScore: 38, volatility: 'Medium', beginnerFriendly: true,
      longTermSuitability: 'Good',
      explanation: 'Prominent IT consulting company currently undergoing turnaround efforts, adding slight execution risk.',
      riskFactors: ['Execution risk', 'Global tech spending', 'Currency fluctuations'],
      hypeLevel: 22
    },
    'sbi': {
      name: 'State Bank of India', ticker: 'SBIN', type: 'stock',
      riskScore: 40, volatility: 'Medium', beginnerFriendly: false,
      longTermSuitability: 'Good',
      explanation: 'India\'s largest public sector bank. Offers immense scale but is subject to government policy changes and cyclical NPAs.',
      riskFactors: ['Government intervention', 'Asset quality', 'Economic cycles'],
      hypeLevel: 25
    },
    'itc': {
      name: 'ITC Limited', ticker: 'ITC', type: 'stock',
      riskScore: 25, volatility: 'Low', beginnerFriendly: true,
      longTermSuitability: 'Excellent',
      explanation: 'FMCG and tobacco giant with high dividend yield. Extremely stable but ESG concerns limit institutional investment.',
      riskFactors: ['Taxation on tobacco', 'ESG restrictions', 'FMCG competition'],
      hypeLevel: 30
    },
    'tata motors': {
      name: 'Tata Motors', ticker: 'TATAMOTORS', type: 'stock',
      riskScore: 55, volatility: 'High', beginnerFriendly: false,
      longTermSuitability: 'Good',
      explanation: 'Leading automaker with massive EV push and JLR ownership. Highly cyclical and sensitive to global supply chains.',
      riskFactors: ['Cyclical demand', 'Raw material costs', 'JLR performance', 'EV transition risk'],
      hypeLevel: 60
    },
    'apple': {
      name: 'Apple Inc.', ticker: 'AAPL', type: 'stock',
      riskScore: 25, volatility: 'Low', beginnerFriendly: true,
      longTermSuitability: 'Excellent',
      explanation: 'Global tech leader with strong brand loyalty, massive cash reserves, and a robust services ecosystem providing recurring revenue.',
      riskFactors: ['Supply chain disruptions', 'Consumer spending drops', 'Regulatory scrutiny'],
      hypeLevel: 45
    },
    'tesla': {
      name: 'Tesla Inc.', ticker: 'TSLA', type: 'stock',
      riskScore: 70, volatility: 'Very High', beginnerFriendly: false,
      longTermSuitability: 'Moderate',
      explanation: 'EV pioneer with high growth potential but extreme valuation volatility and significant key-man risk around CEO decisions.',
      riskFactors: ['Extreme valuation', 'Key-man risk (CEO)', 'Rising EV competition', 'Regulatory uncertainty'],
      hypeLevel: 85
    },
    'google': {
      name: 'Alphabet Inc.', ticker: 'GOOGL', type: 'stock',
      riskScore: 30, volatility: 'Medium', beginnerFriendly: true,
      longTermSuitability: 'Excellent',
      explanation: 'Dominant in search and digital advertising. Heavily investing in AI, cloud, and autonomous vehicles.',
      riskFactors: ['Antitrust regulations', 'Ad market slowdown', 'AI competition'],
      hypeLevel: 50
    },
    'amazon': {
      name: 'Amazon.com', ticker: 'AMZN', type: 'stock',
      riskScore: 35, volatility: 'Medium', beginnerFriendly: true,
      longTermSuitability: 'Excellent',
      explanation: 'E-commerce and cloud computing giant. Strong growth engines but faces labor and regulatory challenges.',
      riskFactors: ['Retail margin pressure', 'AWS competition', 'Regulatory risk'],
      hypeLevel: 45
    },
    'bitcoin': {
      name: 'Bitcoin', ticker: 'BTC', type: 'crypto',
      riskScore: 75, volatility: 'Very High', beginnerFriendly: false,
      longTermSuitability: 'Moderate',
      explanation: 'The largest cryptocurrency, seen as digital gold. Subject to extreme cyclicality, regulatory news, and macro liquidity.',
      riskFactors: ['Regulatory bans', 'Market manipulation', 'Extreme volatility', 'Environmental concerns'],
      hypeLevel: 80
    },
    'ethereum': {
      name: 'Ethereum', ticker: 'ETH', type: 'crypto',
      riskScore: 80, volatility: 'Very High', beginnerFriendly: false,
      longTermSuitability: 'Moderate',
      explanation: 'Leading smart contract platform foundational to DeFi and Web3. Highly complex and volatile with protocol upgrade risks.',
      riskFactors: ['Protocol bugs', 'Competitor chains', 'Macro liquidity', 'Gas fee volatility'],
      hypeLevel: 75
    },
    'dogecoin': {
      name: 'Dogecoin', ticker: 'DOGE', type: 'crypto',
      riskScore: 95, volatility: 'Extreme', beginnerFriendly: false,
      longTermSuitability: 'Poor',
      explanation: 'A meme coin with infinite supply, driven entirely by social sentiment and influencer tweets. No fundamental value.',
      riskFactors: ['No intrinsic value', 'Infinite inflation', 'Influencer dependence', 'Pump-and-dump risk'],
      hypeLevel: 98
    },
    'solana': {
      name: 'Solana', ticker: 'SOL', type: 'crypto',
      riskScore: 85, volatility: 'Extreme', beginnerFriendly: false,
      longTermSuitability: 'Moderate',
      explanation: 'High-speed blockchain network. Innovative technology but plagued by network outages and centralization concerns.',
      riskFactors: ['Network stability', 'Centralization concerns', 'Extreme volatility'],
      hypeLevel: 70
    },
    'gamestop': {
      name: 'GameStop', ticker: 'GME', type: 'stock',
      riskScore: 95, volatility: 'Extreme', beginnerFriendly: false,
      longTermSuitability: 'Poor',
      explanation: 'The original meme stock. Price often wildly decouples from the underlying struggling retail business fundamentals.',
      riskFactors: ['Fundamentals disconnect', 'Retail mania', 'Business decline', 'Short squeeze risk'],
      hypeLevel: 90
    },
    'nft art': {
      name: 'NFT Art', ticker: 'NFT', type: 'crypto',
      riskScore: 98, volatility: 'Extreme', beginnerFriendly: false,
      longTermSuitability: 'Poor',
      explanation: 'Digital collectibles. Extremely illiquid, highly speculative, and prone to wash trading and rug pulls.',
      riskFactors: ['Illiquidity', 'Scams and rug pulls', 'Fad risk', 'No intrinsic value'],
      hypeLevel: 85
    }
  };

  const quizQuestions = [
    {
      question: 'How would you react if your investment dropped 20% in a single week?',
      options: [
        { text: 'Sell immediately to prevent more losses', score: 1 },
        { text: 'Hold and wait patiently for recovery', score: 2 },
        { text: 'Buy more at the discounted price', score: 3 }
      ]
    },
    {
      question: 'What is your primary goal for investing?',
      options: [
        { text: 'Keep my money safe and beat inflation slightly', score: 1 },
        { text: 'Build wealth steadily over many years', score: 2 },
        { text: 'Maximize returns as fast as possible', score: 3 }
      ]
    },
    {
      question: 'How long do you plan to keep your money invested?',
      options: [
        { text: 'Less than 2 years', score: 1 },
        { text: '3 to 7 years', score: 2 },
        { text: 'More than 7 years', score: 3 }
      ]
    },
    {
      question: 'You receive a surprise ₹50,000 bonus. What do you do?',
      options: [
        { text: 'Put it all in a Fixed Deposit or savings account', score: 1 },
        { text: 'Invest half in mutual funds and save the rest', score: 2 },
        { text: 'Put it all into individual stocks or crypto', score: 3 }
      ]
    },
    {
      question: 'How do you view stock market crashes?',
      options: [
        { text: 'Terrifying — I want my money out immediately', score: 1 },
        { text: 'Unfortunate, but a normal part of investing', score: 2 },
        { text: 'Exciting — it\'s a discount sale!', score: 3 }
      ]
    },
    {
      question: 'What does "diversification" mean to you?',
      options: [
        { text: 'Unnecessary if you pick the right safe asset', score: 1 },
        { text: 'Spreading money across different assets to lower risk', score: 2 },
        { text: 'Buying 10 different cryptocurrencies', score: 3 }
      ]
    },
    {
      question: 'What percentage of your income are you comfortable investing?',
      options: [
        { text: 'Less than 10%', score: 1 },
        { text: '10% to 25%', score: 2 },
        { text: 'More than 25%', score: 3 }
      ]
    },
    {
      question: 'What is your opinion on Cryptocurrencies?',
      options: [
        { text: 'Too risky — I stay away completely', score: 1 },
        { text: 'I\'d allocate a very small portion (1-5%)', score: 2 },
        { text: 'It\'s the future — I invest heavily', score: 3 }
      ]
    },
    {
      question: 'How would you rate your financial knowledge?',
      options: [
        { text: 'Beginner — I\'m just getting started', score: 1 },
        { text: 'Intermediate — I understand the basics well', score: 2 },
        { text: 'Advanced — I research and analyze before investing', score: 3 }
      ]
    },
    {
      question: 'How often do you plan to check your portfolio?',
      options: [
        { text: 'Rarely, maybe once a quarter or year', score: 1 },
        { text: 'Monthly to stay informed', score: 2 },
        { text: 'Every single day', score: 3 }
      ]
    }
  ];

  const hypeDatabase = {
    'dogecoin': {
      hypeScore: 98,
      warnings: ['Extreme social media hype detected', 'No underlying fundamentals', 'Driven by influencer tweets', 'Price is pure speculation'],
      recommendation: 'This trend is driven by pure social media hype. Extremely high risk of sudden crashes. Not suitable for first-time investors.',
      riskLevel: 'Extreme'
    },
    'gamestop': {
      hypeScore: 92,
      warnings: ['Meme stock mania', 'Fundamentals do not match price', 'High retail manipulation risk', 'Extreme short squeeze volatility'],
      recommendation: 'High social media coordination detected. Price action is detached from company reality. Research fundamentals before investing.',
      riskLevel: 'Very High'
    },
    'nft art': {
      hypeScore: 85,
      warnings: ['Fad risk is extremely high', 'Extremely illiquid market', 'High chance of wash trading', 'Most NFTs lose 90%+ value'],
      recommendation: 'Hype has peaked and is heavily speculative. Most digital art NFTs will likely go to zero. Not suitable for first-time investors.',
      riskLevel: 'Very High'
    },
    'ai stocks': {
      hypeScore: 78,
      warnings: ['Sector overvaluation possible', 'High expectations already priced in', 'Rapidly changing competitive landscape'],
      recommendation: 'AI is a legitimate secular trend, but current valuations may be stretched. Invest carefully in profitable leaders, not speculative plays.',
      riskLevel: 'High'
    },
    'penny stocks': {
      hypeScore: 88,
      warnings: ['Pump and dump schemes are common', 'Very low liquidity', 'Lack of public information', 'Often promoted by scammers on social media'],
      recommendation: 'Often promoted heavily by social media scammers. Extremely risky. Most retail investors lose money on penny stocks.',
      riskLevel: 'Very High'
    },
    'bitcoin': {
      hypeScore: 65,
      warnings: ['High macro sensitivity', 'Regulatory news impacts price', 'Cyclical crypto winter risks'],
      recommendation: 'Established crypto asset but still highly volatile. Suitable only for small portfolio allocations with a long time horizon.',
      riskLevel: 'High'
    },
    'meme coins': {
      hypeScore: 95,
      warnings: ['Zero real utility', 'Rug pull risk is extremely high', 'Usually infinite supply', 'Created purely for speculation'],
      recommendation: 'Pure gambling. Driven by community hype on X and Reddit. Expect to lose 100% of your investment.',
      riskLevel: 'Extreme'
    },
    'shiba inu': {
      hypeScore: 94,
      warnings: ['Dogecoin clone', 'Massive circulating supply', 'Whale manipulation common', 'No real-world utility'],
      recommendation: 'A hype-driven token with little to no real-world use case. Avoid for any serious investing.',
      riskLevel: 'Extreme'
    }
  };

  /* ======================================================================
     2. STATE & GLOBALS
     ====================================================================== */
  let userProfile = {
    completedProfile: false,
    completedQuiz: false,
    investorType: null,
    quizScore: 0
  };

  let currentQuestionIndex = 0;
  let userAnswers = new Array(quizQuestions.length).fill(null);

  let charts = {
    riskGauge: null,
    allocation: null,
    dashboardRisk: null,
    dashboardAlloc: null
  };

  /* ======================================================================
     3. UTILITY FUNCTIONS
     ====================================================================== */
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency', currency: 'INR', maximumFractionDigits: 0
    }).format(amount);
  };

  const animateValue = (el, start, end, duration) => {
    let startTs = null;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      el.textContent = Math.floor(progress * (end - start) + start);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const getScoreColor = (score) => {
    if (score < 40) return '#00d09c';
    if (score < 70) return '#ffb703';
    return '#ff4757';
  };

  const showToast = (message, type = 'success') => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    const colors = { success: '#00d09c', error: '#ff4757', warning: '#ffd700', info: '#00b4d8' };

    toast.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;">
        <span style="font-size:1.2rem;">${icons[type] || icons.info}</span>
        <span style="flex:1;">${message}</span>
        <button onclick="this.closest('.toast').remove()" style="background:none;border:none;color:inherit;cursor:pointer;font-size:1.2rem;opacity:0.7;">&times;</button>
      </div>
    `;
    toast.style.borderLeftColor = colors[type] || colors.info;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.5s';
      setTimeout(() => { if (toast.parentElement) toast.remove(); }, 500);
    }, 4000);
  };

  /* ======================================================================
     4. NAVIGATION & SCROLL
     ====================================================================== */
  const initNavigation = () => {
    const navbar = document.querySelector('.navbar');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (navbar) {
        navbar.style.background = window.scrollY > 50
          ? 'rgba(10,22,40,0.98)' : 'rgba(10,22,40,0.95)';
      }

      // Scroll-to-top button
      const scrollBtn = document.getElementById('scroll-top');
      if (scrollBtn) {
        scrollBtn.classList.toggle('visible', window.scrollY > 500);
      }
    });

    // Scroll-to-top click
    const scrollBtn = document.getElementById('scroll-top');
    if (scrollBtn) {
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        e.preventDefault();
        try {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Close mobile menu
            document.querySelector('.nav-links')?.classList.remove('active');
          }
        } catch (err) {
          // ignore invalid selector
        }
      });
    });

    // Mobile menu toggle — matches HTML id="mobile-menu-toggle"
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }

    // Active nav link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    const observerNav = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
          const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -60% 0px' });

    sections.forEach(sec => observerNav.observe(sec));
  };

  /* ======================================================================
     5. SCROLL ANIMATIONS
     ====================================================================== */
  const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .section-header, .search-container, .hype-search-area').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  };

  /* ======================================================================
     6. PROFILE FORM — matches HTML id="profile-form"
     ====================================================================== */
  const initProfileForm = () => {
    const form = document.getElementById('profile-form');
    if (!form) return;

    // Radio card selection styling
    form.querySelectorAll('.radio-card').forEach(card => {
      card.addEventListener('click', () => {
        form.querySelectorAll('.radio-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const age = document.getElementById('age')?.value;
      const occupation = document.getElementById('occupation')?.value;
      const income = document.getElementById('monthly-income')?.value;
      const savings = document.getElementById('monthly-savings')?.value;
      const goal = document.getElementById('financial-goal')?.value;
      const duration = document.getElementById('investment-duration')?.value;
      const riskEl = form.querySelector('input[name="risk-tolerance"]:checked');
      const risk = riskEl ? riskEl.value : '';

      if (!age || !occupation || !income || !savings || !goal || !duration || !risk) {
        showToast('Please fill out all fields.', 'error');
        return;
      }

      userProfile = {
        ...userProfile,
        age, occupation, income, savings, goal, duration, risk,
        completedProfile: true
      };

      // Show profile results
      const resultsDiv = document.getElementById('profile-results');
      if (resultsDiv) {
        const goalLabels = { emergency: 'Emergency Fund', wealth: 'Wealth Building', retirement: 'Retirement', education: 'Education', home: 'Home Purchase' };
        const occLabels = { student: 'Student', professional: 'Working Professional', freelancer: 'Freelancer', business: 'Business Owner' };

        resultsDiv.classList.remove('hidden');
        resultsDiv.innerHTML = `
          <div class="card" style="margin-top:2rem;animation:fadeInUp 0.5s ease forwards;">
            <h3 style="margin-bottom:1.5rem;background:var(--gradient-primary);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;">✅ Profile Summary</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;">
              <div class="dash-stat"><div class="dash-stat-label">Age</div><div class="dash-stat-value">${age}</div></div>
              <div class="dash-stat"><div class="dash-stat-label">Occupation</div><div class="dash-stat-value" style="font-size:1.2rem;">${occLabels[occupation] || occupation}</div></div>
              <div class="dash-stat"><div class="dash-stat-label">Monthly Income</div><div class="dash-stat-value" style="font-size:1.2rem;">${formatCurrency(income)}</div></div>
              <div class="dash-stat"><div class="dash-stat-label">Monthly Savings</div><div class="dash-stat-value" style="font-size:1.2rem;">${formatCurrency(savings)}</div></div>
              <div class="dash-stat"><div class="dash-stat-label">Financial Goal</div><div class="dash-stat-value" style="font-size:1.2rem;">${goalLabels[goal] || goal}</div></div>
              <div class="dash-stat"><div class="dash-stat-label">Duration</div><div class="dash-stat-value" style="font-size:1.2rem;">${duration}</div></div>
              <div class="dash-stat"><div class="dash-stat-label">Risk Tolerance</div><div class="dash-stat-value" style="font-size:1.2rem;text-transform:capitalize;">${risk}</div></div>
            </div>
          </div>
        `;
      }

      showToast('Profile saved successfully!', 'success');
      checkDashboardReady();
    });
  };

  /* ======================================================================
     7. RISK ASSESSMENT QUIZ
     Matches: #quiz-container, #quiz-progress .progress-fill,
              #question-counter, #prev-btn, #next-btn, #submit-quiz-btn,
              #quiz-results
     ====================================================================== */
  const initQuiz = () => {
    const container = document.getElementById('quiz-container');
    const progressFill = document.querySelector('#quiz-progress .progress-fill');
    const counter = document.getElementById('question-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-quiz-btn');
    const resultsDiv = document.getElementById('quiz-results');

    if (!container) return;

    currentQuestionIndex = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);

    const renderQuestion = () => {
      const q = quizQuestions[currentQuestionIndex];

      container.innerHTML = `
        <div class="quiz-question">
          <h3>${q.question}</h3>
          <div class="quiz-options">
            ${q.options.map((opt, i) => `
              <label class="quiz-option ${userAnswers[currentQuestionIndex] === opt.score ? 'selected' : ''}">
                <input type="radio" name="q${currentQuestionIndex}" value="${opt.score}" ${userAnswers[currentQuestionIndex] === opt.score ? 'checked' : ''}>
                <span>${opt.text}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `;

      // Option click handlers
      container.querySelectorAll('.quiz-option').forEach(label => {
        label.addEventListener('click', () => {
          container.querySelectorAll('.quiz-option').forEach(l => l.classList.remove('selected'));
          label.classList.add('selected');
          const radio = label.querySelector('input[type="radio"]');
          if (radio) {
            radio.checked = true;
            userAnswers[currentQuestionIndex] = parseInt(radio.value);
          }
        });
      });

      // Update progress
      if (progressFill) {
        progressFill.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
      }
      if (counter) {
        counter.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
      }

      // Button visibility
      if (prevBtn) prevBtn.disabled = currentQuestionIndex === 0;
      if (nextBtn) nextBtn.classList.toggle('hidden', currentQuestionIndex === quizQuestions.length - 1);
      if (submitBtn) submitBtn.classList.toggle('hidden', currentQuestionIndex !== quizQuestions.length - 1);
    };

    // Navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) { currentQuestionIndex--; renderQuestion(); }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (userAnswers[currentQuestionIndex] === null) {
          showToast('Please select an answer before continuing.', 'warning');
          return;
        }
        if (currentQuestionIndex < quizQuestions.length - 1) {
          currentQuestionIndex++;
          renderQuestion();
        }
      });
    }

    // Submit
    if (submitBtn) {
      submitBtn.addEventListener('click', () => {
        if (userAnswers[currentQuestionIndex] === null) {
          showToast('Please select an answer before submitting.', 'warning');
          return;
        }
        submitQuiz();
      });
    }

    renderQuestion();
  };

  const submitQuiz = () => {
    const totalScore = userAnswers.reduce((a, b) => a + (b || 0), 0);
    userProfile.quizScore = totalScore;
    userProfile.completedQuiz = true;

    if (totalScore <= 13) userProfile.investorType = 'Conservative';
    else if (totalScore <= 22) userProfile.investorType = 'Moderate';
    else userProfile.investorType = 'Aggressive';

    const descriptions = {
      Conservative: 'You prioritize capital preservation. You prefer stable, low-risk investments and are uncomfortable with market volatility.',
      Moderate: 'You seek a balance between growth and safety. You can tolerate some market fluctuations for better long-term returns.',
      Aggressive: 'You are comfortable with high volatility and potential short-term losses for the chance of maximum long-term growth.'
    };

    // Hide quiz, show results
    const container = document.getElementById('quiz-container');
    const quizActions = document.querySelector('.quiz-actions');
    const progressBar = document.getElementById('quiz-progress');
    const counterEl = document.getElementById('question-counter');
    const resultsDiv = document.getElementById('quiz-results');

    if (container) container.classList.add('hidden');
    if (quizActions) quizActions.classList.add('hidden');
    if (progressBar) progressBar.classList.add('hidden');
    if (counterEl) counterEl.classList.add('hidden');

    if (resultsDiv) {
      resultsDiv.classList.remove('hidden');
      resultsDiv.innerHTML = `
        <div class="result-badge">${userProfile.investorType} Investor</div>
        <div class="score-display">Score: ${totalScore}/30</div>
        <p class="result-description">${descriptions[userProfile.investorType]}</p>
        <button class="btn-primary" style="margin-top:2rem;" onclick="document.getElementById('recommendations').scrollIntoView({behavior:'smooth'})">
          <i class="fas fa-arrow-right"></i> View Recommendations
        </button>
      `;
    }

    showToast(`Quiz completed! You are a ${userProfile.investorType} Investor.`, 'success');
    updateRecommendations(userProfile.investorType);
    checkDashboardReady();
  };

  /* ======================================================================
     8. STOCK RISK ANALYZER
     Matches: #stock-search, #search-btn, .quick-pick, #analyzer-results,
              #risk-score-value, #risk-gauge, #volatility-level,
              #beginner-friendly, #long-term, #risk-explanation, #risk-factors
     ====================================================================== */
  const initAnalyzer = () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('stock-search');

    const runAnalysis = (query) => {
      if (!query || !query.trim()) {
        showToast('Please enter a stock or crypto name.', 'warning');
        return;
      }

      const resultsDiv = document.getElementById('analyzer-results');
      if (resultsDiv) {
        resultsDiv.classList.remove('hidden');
        resultsDiv.style.opacity = '0.4';
      }

      // Simulate loading delay
      setTimeout(() => {
        const q = query.toLowerCase().trim();
        let result = stockDatabase[q];

        // Fuzzy match
        if (!result) {
          for (const key in stockDatabase) {
            if (key.includes(q) || stockDatabase[key].name.toLowerCase().includes(q) ||
                stockDatabase[key].ticker.toLowerCase() === q.toUpperCase()) {
              result = stockDatabase[key];
              break;
            }
          }
        }

        if (!result) {
          const mockRisk = Math.floor(Math.random() * 40) + 40;
          result = {
            name: query, ticker: query.toUpperCase(), type: 'Unknown',
            riskScore: mockRisk,
            volatility: mockRisk > 70 ? 'High' : 'Medium',
            beginnerFriendly: mockRisk < 50,
            longTermSuitability: 'Unknown — insufficient data',
            explanation: `We don't have detailed coverage for "${query}". This is an estimated risk profile based on general market metrics. Always research thoroughly before investing.`,
            riskFactors: ['Limited data available', 'Market volatility', 'Liquidity risk']
          };
          showToast('Asset not in database. Showing estimated profile.', 'info');
        } else {
          showToast(`Analysis complete for ${result.name}`, 'success');
        }

        updateAnalyzerUI(result);

        if (resultsDiv) {
          resultsDiv.style.opacity = '1';
          resultsDiv.style.transition = 'opacity 0.3s';
        }
      }, 500);
    };

    // Search button & enter key
    if (searchBtn) searchBtn.addEventListener('click', () => runAnalysis(searchInput?.value));
    if (searchInput) searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') runAnalysis(searchInput.value);
    });

    // Quick picks — matches class="quick-pick" buttons in HTML
    document.querySelectorAll('.quick-pick').forEach(btn => {
      btn.addEventListener('click', () => {
        if (searchInput) searchInput.value = btn.textContent.trim();
        runAnalysis(btn.textContent.trim());
      });
    });
  };

  const updateAnalyzerUI = (data) => {
    const color = getScoreColor(data.riskScore);

    // Risk Score
    const scoreEl = document.getElementById('risk-score-value');
    if (scoreEl) {
      scoreEl.style.background = 'none';
      scoreEl.style.webkitTextFillColor = color;
      scoreEl.style.color = color;
      animateValue(scoreEl, 0, data.riskScore, 1000);
    }

    // Risk Gauge Chart
    const gaugeCanvas = document.getElementById('risk-gauge');
    if (gaugeCanvas && window.Chart) {
      if (charts.riskGauge) charts.riskGauge.destroy();
      charts.riskGauge = new Chart(gaugeCanvas.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: ['Risk', 'Safe'],
          datasets: [{
            data: [data.riskScore, 100 - data.riskScore],
            backgroundColor: [color, 'rgba(42,63,107,0.3)'],
            borderWidth: 0
          }]
        },
        options: {
          rotation: -90, circumference: 180, cutout: '75%',
          responsive: true, maintainAspectRatio: true,
          plugins: { legend: { display: false }, tooltip: { enabled: false } }
        }
      });
    }

    // Volatility
    const volEl = document.getElementById('volatility-level');
    if (volEl) {
      volEl.textContent = data.volatility;
      volEl.className = 'badge';
      if (data.volatility === 'Low') volEl.classList.add('badge-green');
      else if (data.volatility === 'Medium') volEl.classList.add('badge-orange');
      else volEl.classList.add('badge-red');
    }

    // Beginner Friendly
    const begEl = document.getElementById('beginner-friendly');
    if (begEl) {
      begEl.textContent = data.beginnerFriendly ? 'Yes ✓' : 'No ✗';
      begEl.className = `badge ${data.beginnerFriendly ? 'badge-green' : 'badge-red'}`;
    }

    // Long Term
    const ltEl = document.getElementById('long-term');
    if (ltEl) {
      const stars = { Excellent: '★★★★★', Good: '★★★★☆', Moderate: '★★★☆☆', Poor: '★★☆☆☆' };
      ltEl.textContent = `${data.longTermSuitability} ${stars[data.longTermSuitability] || '★★★☆☆'}`;
    }

    // Explanation
    const expEl = document.getElementById('risk-explanation');
    if (expEl) expEl.textContent = data.explanation;

    // Risk Factors
    const factorsEl = document.getElementById('risk-factors');
    if (factorsEl) {
      factorsEl.innerHTML = data.riskFactors.map(f => {
        const icon = f.includes('Strong') || f.includes('liquidity')
          ? '<i class="fas fa-check-circle" style="color:#00d09c;"></i>'
          : '<i class="fas fa-exclamation-circle" style="color:#ff6b35;"></i>';
        return `<li>${icon} ${f}</li>`;
      }).join('');
    }
  };

  /* ======================================================================
     9. AI RECOMMENDATIONS
     Matches: .rec-card[data-type], #allocation-chart, #rec-tips
     ====================================================================== */
  const updateRecommendations = (investorType) => {
    const typeKey = investorType.toLowerCase();

    // Highlight matching card
    document.querySelectorAll('.rec-card').forEach(card => {
      card.classList.toggle('active', card.dataset.type === typeKey);
    });

    const allocations = {
      conservative: { 'Savings/FD': 60, 'Gold/Bonds': 20, 'Index SIP': 20 },
      moderate: { 'Equity SIP': 50, 'Gold/Debt': 30, 'Blue-chip Stocks': 20 },
      aggressive: { 'Direct Stocks': 40, 'Equity SIP': 40, 'Gold/Bonds': 20 }
    };

    const tips = {
      conservative: [
        'Focus on capital preservation through Fixed Deposits and PPF.',
        'Start a systematic investment plan (SIP) in large-cap index funds.',
        'Maintain an emergency fund covering 6-12 months of expenses.',
        'Avoid investing based on social media tips or trending stocks.'
      ],
      moderate: [
        'Diversify across large-cap and mid-cap mutual funds via SIP.',
        'Limit direct equity to stable blue-chip companies you understand.',
        'Rebalance your portfolio annually to maintain target percentages.',
        'Keep 10-15% in gold or debt funds as a hedge against volatility.'
      ],
      aggressive: [
        'You can afford higher volatility — focus on long-term compounding.',
        'Research companies thoroughly before making direct stock purchases.',
        'Keep crypto allocation strictly under 5% despite high risk tolerance.',
        'Use market corrections as buying opportunities, not panic triggers.'
      ]
    };

    const alloc = allocations[typeKey] || allocations.moderate;
    const tipList = tips[typeKey] || tips.moderate;

    // Tips
    const tipsEl = document.getElementById('rec-tips');
    if (tipsEl) {
      tipsEl.innerHTML = tipList.map(t =>
        `<li><i class="fas fa-lightbulb text-accent" style="color:#00d09c;margin-right:8px;"></i>${t}</li>`
      ).join('');
    }

    // Allocation Chart
    const canvas = document.getElementById('allocation-chart');
    if (canvas && window.Chart) {
      if (charts.allocation) charts.allocation.destroy();
      const colors = ['#00d09c', '#ffd700', '#00b4d8', '#ff6b35'];
      charts.allocation = new Chart(canvas.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: Object.keys(alloc),
          datasets: [{
            data: Object.values(alloc),
            backgroundColor: colors.slice(0, Object.keys(alloc).length),
            borderWidth: 3, borderColor: '#1e2d4a'
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: true,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#8899aa', padding: 15, font: { family: 'Inter' } } }
          }
        }
      });
    }
  };

  /* ======================================================================
     10. FINANCIAL LITERACY CARDS
     Matches: .btn-toggle, .learn-more-content
     ====================================================================== */
  const initLiteracyCards = () => {
    document.querySelectorAll('.btn-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.learn-card');
        if (!card) return;
        const content = card.querySelector('.learn-more-content');
        if (!content) return;

        const isExpanded = content.classList.contains('expanded');
        content.classList.toggle('expanded');
        content.classList.toggle('hidden', isExpanded);

        const icon = btn.querySelector('i');
        if (isExpanded) {
          btn.innerHTML = 'Learn More <i class="fas fa-chevron-down"></i>';
        } else {
          btn.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
        }
      });
    });
  };

  /* ======================================================================
     11. DASHBOARD
     Matches: #dashboard-placeholder, #dashboard-content, #dash-profile,
              #risk-meter-canvas, #dash-allocation-chart, #dash-timeline,
              #generate-report-btn
     ====================================================================== */
  const checkDashboardReady = () => {
    if (userProfile.completedProfile && userProfile.completedQuiz) {
      updateDashboard();
    }
  };

  const updateDashboard = () => {
    const placeholder = document.getElementById('dashboard-placeholder');
    const content = document.getElementById('dashboard-content');

    if (placeholder) placeholder.classList.add('hidden');
    if (content) content.classList.remove('hidden');

    // Profile Summary
    const profileCard = document.getElementById('dash-profile');
    if (profileCard) {
      const summaryStats = profileCard.querySelector('.summary-stats');
      if (summaryStats) {
        summaryStats.innerHTML = `
          <div class="d-stat"><span class="d-label">Investor Type</span><strong class="d-value" style="color:#00d09c;">${userProfile.investorType}</strong></div>
          <div class="d-stat"><span class="d-label">Age</span><strong class="d-value">${userProfile.age || '--'}</strong></div>
          <div class="d-stat"><span class="d-label">Monthly Savings</span><strong class="d-value">${userProfile.savings ? formatCurrency(userProfile.savings) : '--'}</strong></div>
          <div class="d-stat"><span class="d-label">Goal</span><strong class="d-value" style="text-transform:capitalize;">${userProfile.goal || '--'}</strong></div>
          <div class="d-stat"><span class="d-label">Duration</span><strong class="d-value">${userProfile.duration || '--'}</strong></div>
          <div class="d-stat"><span class="d-label">Risk Tolerance</span><strong class="d-value" style="text-transform:capitalize;">${userProfile.risk || '--'}</strong></div>
        `;
      }
    }

    // Risk Meter (semi-circle gauge)
    const riskCanvas = document.getElementById('risk-meter-canvas');
    if (riskCanvas && window.Chart) {
      if (charts.dashboardRisk) charts.dashboardRisk.destroy();

      const riskValue = userProfile.investorType === 'Conservative' ? 25
        : userProfile.investorType === 'Moderate' ? 55 : 85;

      charts.dashboardRisk = new Chart(riskCanvas.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: ['Low Risk', 'Medium Risk', 'High Risk'],
          datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['#00d09c', '#ffb703', '#ff4757'],
            borderWidth: 0
          }]
        },
        options: {
          rotation: -90, circumference: 180, cutout: '70%',
          responsive: true, maintainAspectRatio: true,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          }
        },
        plugins: [{
          id: 'riskNeedle',
          afterDraw(chart) {
            const { ctx, chartArea } = chart;
            const cx = (chartArea.left + chartArea.right) / 2;
            const cy = chartArea.bottom - 10;
            const angle = Math.PI + (riskValue / 100) * Math.PI;
            const len = (chartArea.right - chartArea.left) / 2 * 0.6;

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + Math.cos(angle) * len, cy + Math.sin(angle) * len);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 3;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(cx, cy, 6, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 16px Inter';
            ctx.textAlign = 'center';
            ctx.fillText(userProfile.investorType, cx, cy + 30);
            ctx.restore();
          }
        }]
      });
    }

    // Dashboard Allocation Chart
    const allocCanvas = document.getElementById('dash-allocation-chart');
    if (allocCanvas && window.Chart) {
      if (charts.dashboardAlloc) charts.dashboardAlloc.destroy();

      const allocs = {
        Conservative: { 'Savings/FD': 60, 'Gold/Bonds': 20, 'Index SIP': 20 },
        Moderate: { 'Equity SIP': 50, 'Gold/Debt': 30, 'Stocks': 20 },
        Aggressive: { 'Stocks': 40, 'Equity SIP': 40, 'Gold': 20 }
      };
      const alloc = allocs[userProfile.investorType] || allocs.Moderate;

      charts.dashboardAlloc = new Chart(allocCanvas.getContext('2d'), {
        type: 'doughnut',
        data: {
          labels: Object.keys(alloc),
          datasets: [{
            data: Object.values(alloc),
            backgroundColor: ['#00d09c', '#ffd700', '#00b4d8'],
            borderWidth: 3, borderColor: '#1e2d4a'
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: true,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#8899aa', font: { family: 'Inter' } } }
          }
        }
      });
    }

    // Timeline / Projected Growth
    const timelineCard = document.getElementById('dash-timeline');
    if (timelineCard) {
      const savings = parseFloat(userProfile.savings) || 0;
      const durationMap = { '<1': 12, '1-3': 24, '3-5': 48, '5-10': 84, '10+': 120 };
      const months = durationMap[userProfile.duration] || 60;
      const rateMap = { Conservative: 0.06, Moderate: 0.10, Aggressive: 0.14 };
      const annualRate = rateMap[userProfile.investorType] || 0.10;
      const monthlyRate = annualRate / 12;

      const futureValue = savings * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
      const totalInvested = savings * months;
      const returns = futureValue - totalInvested;

      const timelineStats = timelineCard.querySelector('.timeline-stats');
      if (timelineStats) {
        timelineStats.innerHTML = `
          <div class="growth-stat"><span>Total Invested:</span><strong>${formatCurrency(totalInvested)}</strong></div>
          <div class="growth-stat" style="color:#00d09c;"><span>Est. Returns (${(annualRate * 100).toFixed(0)}% p.a.):</span><strong>${formatCurrency(returns)}</strong></div>
          <div class="growth-stat total" style="border-top:1px solid var(--border-card);padding-top:1rem;margin-top:0.5rem;"><span>Expected Value:</span><strong style="font-size:1.5rem;color:#00d09c;">${formatCurrency(futureValue)}</strong></div>
        `;
      }
    }

    // Generate Report button
    const reportBtn = document.getElementById('generate-report-btn');
    if (reportBtn) {
      reportBtn.onclick = () => showToast('📊 Financial Report Generated! Summary saved.', 'success');
    }
  };

  /* ======================================================================
     12. SOCIAL MEDIA HYPE CHECKER
     Matches: #hype-input, #hype-check-btn, .trend-btn, #hype-results,
              .hype-fill, #hype-score, #hype-warnings, #hype-recommendation
     ====================================================================== */
  const initHypeChecker = () => {
    const searchBtn = document.getElementById('hype-check-btn');
    const searchInput = document.getElementById('hype-input');

    const runHypeCheck = (query) => {
      if (!query || !query.trim()) {
        showToast('Please enter a trend to check.', 'warning');
        return;
      }

      const resultsDiv = document.getElementById('hype-results');
      if (resultsDiv) resultsDiv.classList.remove('hidden');

      // Clean query — remove emojis for lookup
      const q = query.replace(/[^\w\s]/gi, '').toLowerCase().trim();
      let data = hypeDatabase[q];

      if (!data) {
        // Try partial match
        for (const key in hypeDatabase) {
          if (q.includes(key) || key.includes(q)) {
            data = hypeDatabase[key];
            break;
          }
        }
      }

      if (!data) {
        const randomScore = Math.floor(Math.random() * 30) + 40;
        data = {
          hypeScore: randomScore,
          warnings: ['Normal social media interest', 'No extreme anomalies detected', 'Standard market activity'],
          recommendation: 'This asset shows average social media interest. Conduct your own fundamental analysis before investing.',
          riskLevel: 'Moderate'
        };
      }

      // Hype meter fill
      const hypeFill = document.querySelector('.hype-fill');
      if (hypeFill) {
        hypeFill.style.width = '0%';
        setTimeout(() => { hypeFill.style.width = `${data.hypeScore}%`; }, 100);
      }

      // Hype score
      const scoreEl = document.getElementById('hype-score');
      if (scoreEl) {
        const level = data.hypeScore >= 80 ? 'Extreme Hype' : data.hypeScore >= 60 ? 'High Hype' : data.hypeScore >= 40 ? 'Moderate' : 'Low';
        scoreEl.textContent = `${data.hypeScore}/100`;
        scoreEl.style.color = getScoreColor(data.hypeScore);
        scoreEl.parentElement.innerHTML = `Hype Score: <span id="hype-score" class="font-bold" style="color:${getScoreColor(data.hypeScore)};font-size:1.3rem;">${data.hypeScore}/100</span> (${level})`;
      }

      // Warnings
      const warningsDiv = document.getElementById('hype-warnings');
      if (warningsDiv) {
        warningsDiv.innerHTML = data.warnings.map(w => `
          <div class="alert alert-${data.hypeScore >= 70 ? 'danger' : 'warning'}" style="display:flex;align-items:center;gap:8px;padding:0.75rem 1.25rem;margin-bottom:0.5rem;background:${data.hypeScore >= 70 ? 'rgba(255,71,87,0.1)' : 'rgba(255,215,0,0.1)'};border:1px solid ${data.hypeScore >= 70 ? 'rgba(255,71,87,0.3)' : 'rgba(255,215,0,0.3)'};border-radius:10px;color:${data.hypeScore >= 70 ? '#ff4757' : '#ffd700'};">
            <i class="fas fa-exclamation-triangle"></i> ${w}
          </div>
        `).join('');
      }

      // Recommendation
      const recEl = document.getElementById('hype-recommendation');
      if (recEl) recEl.textContent = data.recommendation;
    };

    if (searchBtn) searchBtn.addEventListener('click', () => runHypeCheck(searchInput?.value));
    if (searchInput) searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') runHypeCheck(searchInput.value);
    });

    // Quick trend buttons — matches class="trend-btn"
    document.querySelectorAll('.trend-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (searchInput) searchInput.value = btn.textContent.trim();
        runHypeCheck(btn.textContent.trim());
      });
    });
  };

  /* ======================================================================
     13. DEMO MODE
     ====================================================================== */
  const initDemoMode = () => {
    const demoBtn = document.getElementById('demo-mode-btn');
    const heroDemoBtn = document.getElementById('hero-demo-btn');

    const activateDemo = () => {
      showToast('🚀 Demo mode activated! Exploring all features with sample data...', 'info');

      // 1. Fill & submit profile form
      const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val;
      };

      setVal('age', '22');
      setVal('occupation', 'student');
      setVal('monthly-income', '15000');
      setVal('monthly-savings', '5000');
      setVal('financial-goal', 'wealth');
      setVal('investment-duration', '3-5');

      // Check the medium risk radio
      const mediumRadio = document.querySelector('input[name="risk-tolerance"][value="medium"]');
      if (mediumRadio) {
        mediumRadio.checked = true;
        mediumRadio.closest('.radio-card')?.classList.add('selected');
      }

      // Auto-submit profile
      const form = document.getElementById('profile-form');
      if (form) form.dispatchEvent(new Event('submit', { cancelable: true }));

      // 2. Auto-complete quiz with moderate answers
      userAnswers = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
      submitQuiz();

      // 3. Show Reliance in analyzer
      const stockInput = document.getElementById('stock-search');
      if (stockInput) stockInput.value = 'Reliance';
      setTimeout(() => {
        document.getElementById('search-btn')?.click();
      }, 300);

      // 4. Also trigger Goal Planner Demo calculation
      document.getElementById('gp-demo-btn')?.click();

      // 5. Scroll to profile
      setTimeout(() => {
        document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    };

    if (demoBtn) demoBtn.addEventListener('click', activateDemo);
    if (heroDemoBtn) heroDemoBtn.addEventListener('click', activateDemo);
  };

  /* ======================================================================
     15. INVESTWISE RISK MENTOR — AI CHATBOT ENGINE
     ====================================================================== */
  const initChatbot = () => {
    // --- State ---
    const chatState = {
      isOpen: false,
      messages: [],
      riskFlow: { active: false, step: 0, data: {} },
      stockQuery: false,
      welcomed: false
    };

    // --- Knowledge Base ---
    const knowledgeBase = {
      sip: {
        title: 'Systematic Investment Plan (SIP)',
        content: 'A <strong>SIP</strong> allows you to invest a fixed amount regularly (monthly/quarterly) in mutual funds. Key benefits:<ul><li><strong>Rupee Cost Averaging</strong> — buy more units when prices are low, fewer when high</li><li><strong>Power of Compounding</strong> — returns generate further returns over time</li><li><strong>Discipline</strong> — automates saving and investing habits</li><li><strong>Accessibility</strong> — start with as little as ₹500/month</li></ul>SIPs are one of the best ways for beginners to enter the market with minimal risk.'
      },
      diversification: {
        title: 'Diversification',
        content: '<strong>Diversification</strong> means spreading your investments across different asset classes to reduce risk.<ul><li><strong>Asset diversification</strong> — mix of stocks, bonds, gold, FDs</li><li><strong>Sector diversification</strong> — invest across IT, banking, pharma, FMCG</li><li><strong>Geographic diversification</strong> — domestic + international exposure</li></ul>"Don\'t put all your eggs in one basket." If one investment underperforms, others can compensate.'
      },
      risk_management: {
        title: 'Risk Management',
        content: '<strong>Risk Management</strong> is the process of identifying, assessing, and controlling threats to your investment capital.<ul><li><strong>Know your risk tolerance</strong> — how much loss can you handle emotionally and financially?</li><li><strong>Set stop-losses</strong> — predefined exit points to limit downside</li><li><strong>Diversify</strong> — don\'t concentrate in one asset</li><li><strong>Emergency fund first</strong> — keep 6 months\' expenses separate before investing</li><li><strong>Review regularly</strong> — rebalance your portfolio annually</li></ul>'
      },
      asset_allocation: {
        title: 'Asset Allocation',
        content: '<strong>Asset Allocation</strong> is how you distribute your investments across different asset classes:<ul><li><strong>Equity (Stocks/MFs)</strong> — high growth, high risk</li><li><strong>Debt (FDs/Bonds)</strong> — stable returns, low risk</li><li><strong>Gold</strong> — inflation hedge, moderate risk</li><li><strong>Cash/Savings</strong> — liquidity, no growth</li></ul>Your ideal allocation depends on your age, goals, and risk tolerance. A common rule: <strong>(100 - your age) % in equity</strong>.'
      },
      compounding: {
        title: 'Power of Compounding',
        content: '<strong>Compounding</strong> is earning returns on your returns — often called the 8th wonder of the world.<ul><li>₹5,000/month SIP at 12% for 10 years = ~₹11.6 Lakhs (invested ₹6L)</li><li>Same SIP for 20 years = ~₹49.9 Lakhs (invested ₹12L)</li><li>For 30 years = ~₹1.76 Crores (invested ₹18L)</li></ul>The key is <strong>starting early</strong> and <strong>staying invested</strong>. Time is your greatest asset.'
      },
      inflation: {
        title: 'Inflation',
        content: '<strong>Inflation</strong> is the rate at which prices rise over time, reducing the purchasing power of your money.<ul><li>India\'s average inflation: ~5-6% per year</li><li>₹1 Lakh today will be worth only ~₹55,000 in 10 years at 6% inflation</li><li>Savings accounts (3-4%) <strong>lose</strong> money to inflation</li><li>Your investments must beat inflation to create real wealth</li></ul>This is why just "saving" isn\'t enough — you need to <strong>invest</strong>.'
      },
      mutual_fund: {
        title: 'Mutual Funds',
        content: 'A <strong>Mutual Fund</strong> pools money from many investors to invest in stocks, bonds, or other assets, managed by professional fund managers.<ul><li><strong>Equity MFs</strong> — invest in stocks, higher risk & return</li><li><strong>Debt MFs</strong> — invest in bonds/FDs, lower risk</li><li><strong>Hybrid MFs</strong> — mix of equity and debt</li><li><strong>Index MFs</strong> — track market indices like Nifty 50</li></ul><strong>Benefits:</strong> Professional management, diversification, regulated by SEBI, accessible via SIP.<br><strong>Risks:</strong> Market risk, no guaranteed returns, exit loads.'
      },
      etf: {
        title: 'Exchange Traded Funds (ETFs)',
        content: 'An <strong>ETF</strong> is a type of fund that tracks an index, commodity, or basket of assets and trades on stock exchanges like a regular stock.<ul><li><strong>Lower fees</strong> than actively managed mutual funds</li><li><strong>Real-time trading</strong> — buy/sell anytime during market hours</li><li><strong>Transparent</strong> — holdings are disclosed daily</li><li><strong>Types:</strong> Index ETFs, Gold ETFs, Sector ETFs, International ETFs</li></ul><strong>Best for:</strong> Cost-conscious investors who want broad market exposure with minimal effort.'
      },
      stocks: {
        title: 'Stock Market / Equities',
        content: 'When you buy a <strong>stock</strong>, you\'re buying partial ownership in a company.<ul><li><strong>Benefits:</strong> High growth potential, dividends, liquidity, ownership rights</li><li><strong>Risks:</strong> Market volatility, company-specific risk, emotional decision-making</li><li><strong>Types:</strong> Large-cap (stable), Mid-cap (growth), Small-cap (high risk/reward)</li></ul><strong>For beginners:</strong> Start with large-cap blue-chip stocks or index funds. Research fundamentals before investing. Never invest money you can\'t afford to lose.'
      },
      gold: {
        title: 'Gold Investments',
        content: '<strong>Gold</strong> has been a trusted store of value for centuries and acts as a hedge against inflation and market crashes.<ul><li><strong>Physical Gold</strong> — jewelry, coins, bars (storage risk, making charges)</li><li><strong>Gold ETFs</strong> — trade gold on exchanges without physical holding</li><li><strong>Sovereign Gold Bonds (SGBs)</strong> — government-backed, 2.5% annual interest + gold price appreciation</li><li><strong>Digital Gold</strong> — buy small amounts online</li></ul><strong>Recommendation:</strong> Allocate 10-15% of your portfolio to gold for stability.'
      },
      fd: {
        title: 'Fixed Deposits (FDs)',
        content: 'A <strong>Fixed Deposit</strong> is a savings instrument where you deposit money for a fixed tenure at a predetermined interest rate.<ul><li><strong>Safety:</strong> Guaranteed returns, insured up to ₹5 Lakhs (DICGC)</li><li><strong>Returns:</strong> 5-7% per annum (varies by bank and tenure)</li><li><strong>Liquidity:</strong> Premature withdrawal possible with penalty</li><li><strong>Tax:</strong> Interest is taxable as per your income slab</li></ul><strong>Best for:</strong> Emergency funds, risk-averse investors, and short-term goals. However, FD returns often barely beat inflation.'
      },
      savings: {
        title: 'Savings Accounts',
        content: 'A <strong>Savings Account</strong> is the most basic financial instrument for parking your money.<ul><li><strong>Interest:</strong> 2.5-4% per annum (major banks)</li><li><strong>Liquidity:</strong> Instant access to your money</li><li><strong>Safety:</strong> Insured up to ₹5 Lakhs</li><li><strong>Use:</strong> Day-to-day expenses and emergency buffer</li></ul><strong>Important:</strong> Savings account returns do NOT beat inflation. Keep only 1-2 months\' expenses here; invest the rest.'
      }
    };

    const sectorDatabase = {
      it: {
        name: 'Information Technology (IT) Sector',
        riskScore: 60,
        volatility: 'Moderate to High',
        longTermSuitability: 'High',
        beginnerFriendly: true,
        explanation: 'The IT sector is driven by global tech spending, cloud adoption, and AI advancements. Indian IT firms earn revenue largely in foreign currencies (USD/EUR).',
        riskFactors: ['Global recession and client budget cuts', 'Currency exchange fluctuations (USD/INR)', 'Rapid technological disruptions & AI automation', 'High attrition and talent costs']
      },
      banking: {
        name: 'Banking & Financial Services (BFSI)',
        riskScore: 50,
        volatility: 'Moderate',
        longTermSuitability: 'High',
        beginnerFriendly: true,
        explanation: 'Banking is the backbone of the economy. It benefits from credit growth, rising incomes, and corporate investments.',
        riskFactors: ['Non-Performing Assets (NPA) and loan default risks', 'Interest rate cycles and RBI monetary policy changes', 'Economic slowdown impacting credit demand', 'Cybersecurity and digital banking frauds']
      },
      pharma: {
        name: 'Pharmaceutical & Healthcare Sector',
        riskScore: 55,
        volatility: 'Moderate',
        longTermSuitability: 'High',
        beginnerFriendly: true,
        explanation: 'Pharma is traditionally defensive because healthcare demand remains constant regardless of economic cycles.',
        riskFactors: ['US FDA inspections, import alerts & compliance scrutiny', 'Price control regulations on essential medicines', 'Intense generic competition & patent expiries', 'High R&D gestation periods']
      },
      auto: {
        name: 'Automobile Sector',
        riskScore: 65,
        volatility: 'High',
        longTermSuitability: 'Moderate',
        beginnerFriendly: false,
        explanation: 'Automobile is cyclical and sensitive to economic health, fuel prices, interest rates on vehicle loans, and EV transition.',
        riskFactors: ['Raw material commodity inflation (steel, semiconductors)', 'EV disruption and capital-intensive transformation', 'High sensitivity to fuel prices and interest rates', 'Cyclical consumer demand swings']
      },
      fmcg: {
        name: 'Fast Moving Consumer Goods (FMCG)',
        riskScore: 35,
        volatility: 'Low',
        longTermSuitability: 'Very High',
        beginnerFriendly: true,
        explanation: 'FMCG companies sell daily household essentials. It offers defensive stability, consistent dividends, and steady compounding.',
        riskFactors: ['Rural demand slowdown due to monsoon variation', 'Agricultural input cost inflation', 'Intense local brand competition', 'Lower rapid growth compared to high-beta tech sectors']
      },
      energy: {
        name: 'Energy, Oil & Renewable Power Sector',
        riskScore: 70,
        volatility: 'High',
        longTermSuitability: 'Moderate to High',
        beginnerFriendly: false,
        explanation: 'Energy is vital but heavily exposed to global crude oil prices, geopolitical unrest, and the global green energy transition.',
        riskFactors: ['Global geopolitical conflicts & OPEC production shifts', 'Government subsidies & windfall tax policies', 'High capital expenditure in clean energy transition', 'Environmental regulatory risks']
      }
    };

    const websiteGuide = {
      quiz: 'The <strong>Risk Assessment Quiz</strong> is a 10-question questionnaire that evaluates your investing temperament. It classifies you as a Conservative, Moderate, or Aggressive investor. <span class="chat-link" onclick="document.getElementById(\'quiz\').scrollIntoView({behavior:\'smooth\'})">Take the Quiz →</span>',
      calculator: 'The <strong>Goal Planner & SIP Calculator</strong> calculates your projected future wealth with monthly SIP, lumpsum, step-up %, and inflation adjustments. <span class="chat-link" onclick="document.getElementById(\'goal-planner\').scrollIntoView({behavior:\'smooth\'})">Open Goal Planner →</span>',
      dashboard: 'The <strong>Investment Dashboard</strong> shows your complete financial profile — investor type, risk meter, asset allocation pie chart, and projected growth over your investment horizon. <span class="chat-link" onclick="document.getElementById(\'dashboard\').scrollIntoView({behavior:\'smooth\'})">View Dashboard →</span>',
      analyzer: 'The <strong>Stock & Crypto Risk Analyzer</strong> lets you search for any stock or cryptocurrency and see its risk score, volatility, beginner-friendliness, and detailed risk factors. <span class="chat-link" onclick="document.getElementById(\'analyzer\').scrollIntoView({behavior:\'smooth\'})">Try the Analyzer →</span>',
      literacy: 'The <strong>Financial Literacy Hub</strong> covers essential investment concepts — SIP, ETFs, Mutual Funds, Diversification, and Stock Market Risks. Expand each card for detailed explanations. <span class="chat-link" onclick="document.getElementById(\'learn\').scrollIntoView({behavior:\'smooth\'})">Explore the Hub →</span>',
      whatif: 'The <strong>What-If Simulator</strong> allows you to simulate changes in SIP amount, step-up percentage, lumpsum, and extra years in real time. <span class="chat-link" onclick="document.getElementById(\'gp-whatif\').scrollIntoView({behavior:\'smooth\'})">Try What-If Simulator →</span>',
      copilot: 'The <strong>InvestWise Copilot</strong> analyzes your financial goals and explains the numbers in simple, conversational English. <span class="chat-link" onclick="document.getElementById(\'gp-copilot\').scrollIntoView({behavior:\'smooth\'})">Open AI Copilot →</span>'
    };

    const safetyDisclaimer = '<span class="chat-disclaimer">⚠️ Disclaimer: This is educational guidance, not financial advice. All investments carry risk. Please consult a certified financial advisor before making investment decisions.</span>';

    // --- DOM Elements ---
    const toggleBtn = document.getElementById('chatbot-toggle');
    const chatWindow = document.getElementById('chatbot-window');
    const messagesContainer = document.getElementById('chatbot-messages');
    const inputField = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send');
    const closeBtn = document.getElementById('chatbot-close');
    const minimizeBtn = document.getElementById('chatbot-minimize');
    const quickActions = document.getElementById('chatbot-quick-actions');
    const badge = document.querySelector('.chatbot-badge');

    if (!toggleBtn || !chatWindow) return;

    // --- Helpers ---
    const getTimeString = () => {
      return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    };

    const addMessage = (text, sender = 'bot') => {
      const msgDiv = document.createElement('div');
      msgDiv.className = `chat-message ${sender}`;

      const avatar = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

      msgDiv.innerHTML = `
        <div class="chat-msg-avatar">${avatar}</div>
        <div>
          <div class="chat-msg-bubble">${text}</div>
          <span class="chat-msg-time">${getTimeString()}</span>
        </div>
      `;

      messagesContainer.appendChild(msgDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      chatState.messages.push({ text, sender, time: getTimeString() });
    };

    const showTyping = () => {
      const typingDiv = document.createElement('div');
      typingDiv.className = 'chat-message bot';
      typingDiv.id = 'chatbot-typing';
      typingDiv.innerHTML = `
        <div class="chat-msg-avatar"><i class="fas fa-robot"></i></div>
        <div class="chat-msg-bubble typing-indicator">
          <div class="typing-dots"><span></span><span></span><span></span></div>
        </div>
      `;
      messagesContainer.appendChild(typingDiv);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const hideTyping = () => {
      const typing = document.getElementById('chatbot-typing');
      if (typing) typing.remove();
    };

    const botReply = (text, delay = 1000) => {
      showTyping();
      setTimeout(() => {
        hideTyping();
        addMessage(text, 'bot');
      }, delay);
    };

    // --- Risk Flow ---
    const riskFlowQuestions = [
      { key: 'age', question: 'Let\'s build your risk profile! 📊<br><br>First, <strong>how old are you?</strong> (Enter your age as a number)' },
      { key: 'income', question: 'Got it! What is your <strong>monthly income</strong>? (Enter amount in ₹, e.g., 25000)' },
      { key: 'savings', question: 'How much can you <strong>save per month</strong>? (Enter amount in ₹)' },
      { key: 'goal', question: 'What is your <strong>primary financial goal</strong>?<br><br><ul><li>1️⃣ Emergency Fund</li><li>2️⃣ Wealth Building</li><li>3️⃣ Retirement</li><li>4️⃣ Education</li><li>5️⃣ Home Purchase</li></ul>Enter the number or type the goal:' },
      { key: 'duration', question: 'How long do you plan to <strong>stay invested</strong>?<br><br><ul><li>1️⃣ Less than 1 year</li><li>2️⃣ 1-3 years</li><li>3️⃣ 3-5 years</li><li>4️⃣ 5-10 years</li><li>5️⃣ 10+ years</li></ul>Enter the number:' },
      { key: 'risk', question: 'Last question! What is your <strong>risk tolerance</strong>?<br><br><ul><li>1️⃣ <strong>Low</strong> — I cannot tolerate losing my principal</li><li>2️⃣ <strong>Medium</strong> — I can accept some fluctuations for moderate growth</li><li>3️⃣ <strong>High</strong> — I\'m comfortable with significant volatility for long-term growth</li></ul>Enter the number:' }
    ];

    const processRiskInput = (input) => {
      const flow = chatState.riskFlow;
      const step = flow.step;
      const q = riskFlowQuestions[step];
      const val = input.trim();

      switch (q.key) {
        case 'age': {
          const age = parseInt(val);
          if (isNaN(age) || age < 10 || age > 100) {
            botReply('Please enter a valid age between 10 and 100.');
            return;
          }
          flow.data.age = age;
          break;
        }
        case 'income': {
          const income = parseInt(val.replace(/[^\d]/g, ''));
          if (isNaN(income) || income <= 0) {
            botReply('Please enter a valid monthly income amount in ₹.');
            return;
          }
          flow.data.income = income;
          break;
        }
        case 'savings': {
          const savings = parseInt(val.replace(/[^\d]/g, ''));
          if (isNaN(savings) || savings < 0) {
            botReply('Please enter a valid savings amount.');
            return;
          }
          flow.data.savings = savings;
          break;
        }
        case 'goal': {
          const goalMap = { '1': 'Emergency Fund', '2': 'Wealth Building', '3': 'Retirement', '4': 'Education', '5': 'Home Purchase' };
          flow.data.goal = goalMap[val] || val;
          break;
        }
        case 'duration': {
          const durMap = { '1': '<1 year', '2': '1-3 years', '3': '3-5 years', '4': '5-10 years', '5': '10+ years' };
          flow.data.duration = durMap[val] || val;
          break;
        }
        case 'risk': {
          const riskMap = { '1': 'low', '2': 'medium', '3': 'high' };
          flow.data.risk = riskMap[val] || val.toLowerCase();
          break;
        }
      }

      flow.step++;

      if (flow.step < riskFlowQuestions.length) {
        botReply(riskFlowQuestions[flow.step].question, 800);
      } else {
        completeRiskAnalysis();
      }
    };

    const completeRiskAnalysis = () => {
      const d = chatState.riskFlow.data;
      let score = 0;

      // Age scoring
      if (d.age < 25) score += 3;
      else if (d.age < 35) score += 2.5;
      else if (d.age < 45) score += 2;
      else if (d.age < 55) score += 1;
      else score += 0.5;

      // Savings ratio
      const savingsRatio = d.income > 0 ? d.savings / d.income : 0;
      if (savingsRatio > 0.3) score += 2;
      else if (savingsRatio > 0.2) score += 1.5;
      else if (savingsRatio > 0.1) score += 1;
      else score += 0.5;

      // Duration
      if (d.duration && (d.duration.includes('10+') || d.duration.includes('5-10'))) score += 3;
      else if (d.duration && d.duration.includes('3-5')) score += 2;
      else if (d.duration && d.duration.includes('1-3')) score += 1;
      else score += 0.5;

      // Risk tolerance
      if (d.risk === 'high') score += 3;
      else if (d.risk === 'medium') score += 2;
      else score += 1;

      let investorType, allocation, advice;

      if (score <= 5) {
        investorType = 'Conservative';
        allocation = '60% Savings/FDs, 20% Gold/Bonds, 20% Index SIP';
        advice = 'Focus on capital preservation. Start with Fixed Deposits, PPF, and small SIPs in index funds. Build an emergency fund of 6-12 months\' expenses first.';
      } else if (score <= 8.5) {
        investorType = 'Moderate';
        allocation = '50% Equity SIP, 30% Gold/Debt, 20% Blue-chip Stocks';
        advice = 'Balance growth and safety. Invest through SIPs in diversified mutual funds, keep gold for hedging, and explore blue-chip stocks with thorough research.';
      } else {
        investorType = 'Aggressive';
        allocation = '40% Direct Stocks, 40% Equity SIP, 20% Gold/Alternatives';
        advice = 'You can handle volatility well. Focus on long-term compounding through equity. Research stocks carefully, use SIPs for discipline, and keep some gold as insurance.';
      }

      const resultHTML = 'Based on your inputs, here\'s your risk analysis:<br><br>' +
        '<div class="chat-risk-result">' +
        '<h4>📊 Your Risk Profile</h4>' +
        '<div class="chat-risk-badge">' + investorType + ' Investor</div>' +
        '<div class="chat-stock-stat"><span class="label">Age</span><span class="value">' + d.age + '</span></div>' +
        '<div class="chat-stock-stat"><span class="label">Monthly Income</span><span class="value">₹' + d.income.toLocaleString('en-IN') + '</span></div>' +
        '<div class="chat-stock-stat"><span class="label">Monthly Savings</span><span class="value">₹' + d.savings.toLocaleString('en-IN') + '</span></div>' +
        '<div class="chat-stock-stat"><span class="label">Goal</span><span class="value">' + d.goal + '</span></div>' +
        '<div class="chat-stock-stat"><span class="label">Duration</span><span class="value">' + d.duration + '</span></div>' +
        '</div><br>' +
        '<strong>Suggested Allocation:</strong> ' + allocation + '<br><br>' +
        '💡 ' + advice + '<br><br>' +
        'Want a more detailed analysis? <span class="chat-link" onclick="document.getElementById(\'profile\').scrollIntoView({behavior:\'smooth\'})">Fill out the full profile form →</span> and <span class="chat-link" onclick="document.getElementById(\'quiz\').scrollIntoView({behavior:\'smooth\'})">take the Risk Quiz →</span>' +
        safetyDisclaimer;

      chatState.riskFlow.active = false;
      chatState.riskFlow.step = 0;
      chatState.riskFlow.data = {};

      botReply(resultHTML, 1500);
    };

    // --- Intent Detection ---
    const detectIntent = (input) => {
      const lower = input.toLowerCase().trim();

      // Greetings
      if (/^(hi|hello|hey|hola|greetings|good\s*(morning|afternoon|evening)|sup|yo)\b/.test(lower)) return 'greeting';

      // Farewells
      if (/^(bye|goodbye|thanks|thank\s*you|thx|see\s*you|take\s*care)\b/.test(lower)) return 'farewell';

      // Risk profile
      if (/\b(analyze|assess|check|know|find|determine|what\s*is)\b.*\b(my|risk|profile|type|investor)\b/i.test(lower) ||
          /\b(risk\s*(profile|analysis|assessment|tolerance)|my\s*risk|investor\s*type)\b/i.test(lower)) return 'risk_profile';

      // Stock risk query
      if (/\b(check|analyze|risk|how\s*risky|safe|should\s*i\s*(invest|buy))\b.*\b(stock|share|equity|company)\b/i.test(lower) ||
          /\b(stock\s*risk|risk\s*of)\b/i.test(lower)) {
        chatState.pendingStockQuery = lower;
        return 'stock_risk';
      }

      // Check for specific stock/crypto names in the database
      for (const key in stockDatabase) {
        if (lower.includes(key) || lower.includes(stockDatabase[key].ticker.toLowerCase())) {
          chatState.pendingStockQuery = key;
          return 'stock_lookup';
        }
      }

      // Check for specific sector names
      for (const sKey in sectorDatabase) {
        if (lower.includes(sKey) || lower.includes(sectorDatabase[sKey].name.toLowerCase())) {
          chatState.pendingSectorQuery = sKey;
          return 'sector_lookup';
        }
      }

      // Hype / social media
      if (/\b(hype|trending|viral|social\s*media|influencer|fomo|meme\s*(stock|coin)|pump\s*and\s*dump|tiktok|instagram|reddit|youtube)\b/i.test(lower)) return 'hype_warning';

      // Financial concepts
      if (/\b(what\s*is\s*(a\s*)?sip|explain\s*sip|sip\s*(meaning|work|benefit)|systematic\s*investment)\b/i.test(lower)) return 'explain_sip';
      if (/\b(diversif|spread\s*invest)\b/i.test(lower)) return 'explain_diversification';
      if (/\b(risk\s*manag|manage\s*risk|control\s*risk)\b/i.test(lower)) return 'explain_risk_management';
      if (/\b(asset\s*alloc|portfolio\s*alloc|how\s*to\s*allocat)\b/i.test(lower)) return 'explain_asset_allocation';
      if (/\b(compound|compounding|compound\s*interest)\b/i.test(lower)) return 'explain_compounding';
      if (/\b(inflat|purchasing\s*power|prices?\s*ris)\b/i.test(lower)) return 'explain_inflation';
      if (/\b(mutual\s*fund|what\s*is\s*(a\s*)?mf)\b/i.test(lower)) return 'explain_mutual_fund';
      if (/\b(etf|exchange\s*traded)\b/i.test(lower)) return 'explain_etf';
      if (/\b(stock\s*market|equit|what\s*(is|are)\s*stocks?)\b/i.test(lower)) return 'explain_stocks';
      if (/\b(gold\s*(invest|etf|bond|saving)|invest.*gold|sovereign\s*gold)\b/i.test(lower)) return 'explain_gold';
      if (/\b(fixed\s*deposit|\bfd\b|fds\b)\b/i.test(lower)) return 'explain_fd';
      if (/\b(savings?\s*account)\b/i.test(lower)) return 'explain_savings';

      // Website features
      if (/\b(quiz|risk\s*assessment|assessment\s*quiz)\b/i.test(lower)) return 'help_quiz';
      if (/\b(calculator|sip\s*calc|calculate|goal\s*plan|plan\s*goal)\b/i.test(lower)) return 'help_calculator';
      if (/\b(dashboard|my\s*dashboard)\b/i.test(lower)) return 'help_dashboard';
      if (/\b(analyzer|stock\s*analy|crypto\s*analy)\b/i.test(lower)) return 'help_analyzer';
      if (/\b(learn|literacy|education|financial\s*lit)\b/i.test(lower)) return 'help_literacy';
      if (/\b(hype\s*check|hype\s*detect|social\s*media\s*check)\b/i.test(lower)) return 'help_hype';
      if (/\b(what\s*if|simulator|simulate)\b/i.test(lower)) return 'help_whatif';
      if (/\b(copilot|ai\s*copilot)\b/i.test(lower)) return 'help_copilot';

      // Recommendations
      if (/\b(recommend|suggest|what\s*should\s*i\s*(invest|buy|do)|where\s*to\s*invest|best\s*invest|portfolio)\b/i.test(lower)) return 'recommendation';

      // Basics / getting started
      if (/\b(basic|beginner|start|getting\s*start|new\s*to|first\s*time|how\s*to\s*(begin|start|invest))\b/i.test(lower)) return 'investment_basics';

      // Help
      if (/\b(help|what\s*can\s*you|features|menu|options)\b/i.test(lower)) return 'help';

      return 'unknown';
    };

    // --- Response Generator ---
    const generateResponse = (intent, input) => {
      switch (intent) {
        case 'greeting':
          return 'Hello! 👋 Welcome to <strong>InvestWise Risk Mentor</strong>. I can help you with:<br><br><ul><li>📊 Analyzing your risk profile</li><li>📈 Understanding investment options (SIP, stocks, mutual funds, ETFs, Gold, FDs)</li><li>🔍 Checking stock/crypto/sector risk levels</li><li>⚠️ Social media hype detection</li><li>📚 Financial literacy concepts</li><li>🗺️ Navigating this website (Goal Planner, Quiz, Analyzer)</li></ul>What would you like to explore?';

        case 'farewell':
          return 'Thank you for chatting! 🙏 Remember: <strong>Invest smart, not viral.</strong> If you have more questions in the future, I\'m always here to help. Happy investing! 🎯';

        case 'risk_profile':
          chatState.riskFlow.active = true;
          chatState.riskFlow.step = 0;
          chatState.riskFlow.data = {};
          return riskFlowQuestions[0].question;

        case 'stock_risk':
          chatState.stockQuery = true;
          return 'Sure! I can analyze the risk of any stock, sector, or cryptocurrency. 🔍<br><br><strong>Enter a stock name or sector</strong> (e.g., Reliance, TCS, Tesla, Bitcoin, Dogecoin, IT sector, Banking, Pharma):';

        case 'sector_lookup': {
          const sKey = chatState.pendingSectorQuery;
          const sec = sectorDatabase[sKey];
          if (!sec) return 'I could not find details for that sector. Try IT, Banking, Pharma, Automobile, FMCG, or Energy.';
          const riskColor = sec.riskScore < 40 ? '#00d09c' : sec.riskScore < 70 ? '#ffb703' : '#ff4757';
          const friendlyText = sec.beginnerFriendly ? '✅ Yes' : '❌ Moderate to High Learning Curve';

          return '<div class="chat-stock-card">' +
            '<h4>' + sec.name + '</h4>' +
            '<div class="chat-stock-stat"><span class="label">Sector Risk Score</span><span class="value" style="color:' + riskColor + '">' + sec.riskScore + '/100</span></div>' +
            '<div class="chat-stock-stat"><span class="label">Volatility</span><span class="value">' + sec.volatility + '</span></div>' +
            '<div class="chat-stock-stat"><span class="label">Beginner Friendly</span><span class="value">' + friendlyText + '</span></div>' +
            '<div class="chat-stock-stat"><span class="label">Long-term Suitability</span><span class="value">' + sec.longTermSuitability + '</span></div>' +
            '</div><br>' +
            sec.explanation + '<br><br>' +
            '<strong>Key Sector Risk Factors:</strong><ul>' + sec.riskFactors.map(function(f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
            safetyDisclaimer;
        }

        case 'stock_lookup': {
          chatState.stockQuery = false;
          const key = chatState.pendingStockQuery;
          const stock = stockDatabase[key];
          if (!stock) return 'I couldn\'t find that stock in our database. Try names like Reliance, TCS, Tesla, Bitcoin, etc.';

          const riskColor = stock.riskScore < 40 ? '#00d09c' : stock.riskScore < 70 ? '#ffb703' : '#ff4757';
          const friendlyText = stock.beginnerFriendly ? '✅ Yes' : '❌ No';

          let hypeWarning = '';
          if (stock.hypeLevel && stock.hypeLevel > 60) {
            hypeWarning = '<br><br>⚠️ <strong>Social Media Hype Alert:</strong> This asset has a high hype level (' + stock.hypeLevel + '/100). Be cautious of FOMO-driven decisions.';
          }

          return '<div class="chat-stock-card">' +
            '<h4>' + stock.name + ' (' + stock.ticker + ')</h4>' +
            '<div class="chat-stock-stat"><span class="label">Risk Score</span><span class="value" style="color:' + riskColor + '">' + stock.riskScore + '/100</span></div>' +
            '<div class="chat-stock-stat"><span class="label">Volatility</span><span class="value">' + stock.volatility + '</span></div>' +
            '<div class="chat-stock-stat"><span class="label">Beginner Friendly</span><span class="value">' + friendlyText + '</span></div>' +
            '<div class="chat-stock-stat"><span class="label">Long-term</span><span class="value">' + stock.longTermSuitability + '</span></div>' +
            '</div><br>' +
            stock.explanation + '<br><br>' +
            '<strong>Key Risk Factors:</strong><ul>' + stock.riskFactors.map(function(f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
            hypeWarning + safetyDisclaimer;
        }

        case 'hype_warning':
          return '⚠️ <strong>Social Media Hype Alert</strong><br><br>Investing based on social media trends is one of the biggest risks for new investors. Here\'s what you need to know:<br><br>' +
            '<ul><li>🚫 <strong>Influencers are NOT financial advisors</strong> — many are paid to promote</li>' +
            '<li>📉 <strong>Hype-driven stocks often crash</strong> after the initial buzz fades</li>' +
            '<li>🎰 <strong>FOMO (Fear Of Missing Out)</strong> leads to buying at peak prices</li>' +
            '<li>💡 <strong>If it sounds too good to be true, it probably is</strong></li></ul>' +
            '<strong>What to do instead:</strong><ul>' +
            '<li>✅ Research the company\'s fundamentals</li>' +
            '<li>✅ Check our <span class="chat-link" onclick="document.getElementById(\'hype-check\').scrollIntoView({behavior:\'smooth\'})">Hype Checker tool →</span></li>' +
            '<li>✅ Diversify — never put all money in one trending asset</li>' +
            '<li>✅ Use our <span class="chat-link" onclick="document.getElementById(\'analyzer\').scrollIntoView({behavior:\'smooth\'})">Risk Analyzer →</span> before investing</li></ul>' + safetyDisclaimer;

        case 'explain_sip': return knowledgeBase.sip.content + safetyDisclaimer;
        case 'explain_diversification': return knowledgeBase.diversification.content + safetyDisclaimer;
        case 'explain_risk_management': return knowledgeBase.risk_management.content + safetyDisclaimer;
        case 'explain_asset_allocation': return knowledgeBase.asset_allocation.content + safetyDisclaimer;
        case 'explain_compounding': return knowledgeBase.compounding.content + safetyDisclaimer;
        case 'explain_inflation': return knowledgeBase.inflation.content + safetyDisclaimer;
        case 'explain_mutual_fund': return knowledgeBase.mutual_fund.content + safetyDisclaimer;
        case 'explain_etf': return knowledgeBase.etf.content + safetyDisclaimer;
        case 'explain_stocks': return knowledgeBase.stocks.content + safetyDisclaimer;
        case 'explain_gold': return knowledgeBase.gold.content + safetyDisclaimer;
        case 'explain_fd': return knowledgeBase.fd.content + safetyDisclaimer;
        case 'explain_savings': return knowledgeBase.savings.content + safetyDisclaimer;

        case 'help_quiz': return websiteGuide.quiz;
        case 'help_calculator': return websiteGuide.calculator;
        case 'help_dashboard': return websiteGuide.dashboard;
        case 'help_analyzer': return websiteGuide.analyzer;
        case 'help_literacy': return websiteGuide.literacy;
        case 'help_whatif': return websiteGuide.whatif;
        case 'help_copilot': return websiteGuide.copilot;
        case 'help_hype': return 'The <strong>Social Media Hype Checker</strong> analyzes trending stocks and cryptos to detect if they\'re driven by genuine value or social media hype. Enter any buzzy investment name and get a hype score, warnings, and our recommendation. <span class="chat-link" onclick="document.getElementById(\'hype-check\').scrollIntoView({behavior:\'smooth\'})">Try the Hype Checker →</span>';

        case 'recommendation': {
          const type = userProfile.investorType;
          if (type) {
            const recs = {
              Conservative: 'Based on your <strong>Conservative</strong> profile:<ul><li>📌 60% in Savings/FDs — capital preservation first</li><li>📌 20% in Gold/Bonds — inflation hedge</li><li>📌 20% in Index SIP — steady long-term growth</li></ul>Start small with SIPs and avoid direct stock trading until you\'re comfortable.',
              Moderate: 'Based on your <strong>Moderate</strong> profile:<ul><li>📌 50% in Equity SIPs — diversified growth</li><li>📌 30% in Gold/Debt funds — stability</li><li>📌 20% in Blue-chip Stocks — selective direct equity</li></ul>Balance is key. Rebalance your portfolio every year.',
              Aggressive: 'Based on your <strong>Aggressive</strong> profile:<ul><li>📌 40% in Direct Stocks — research-backed picks</li><li>📌 40% in Equity SIPs — compounding engine</li><li>📌 20% in Gold/Alternatives — portfolio insurance</li></ul>Stay disciplined and avoid emotional trading.'
            };
            return (recs[type] || recs.Moderate) + '<br><br><span class="chat-link" onclick="document.getElementById(\'recommendations\').scrollIntoView({behavior:\'smooth\'})">View detailed recommendations →</span>' + safetyDisclaimer;
          }
          return 'I\'d love to give you personalized recommendations! Let me first assess your risk profile.<br><br>Would you like to <strong>start the risk analysis</strong>? Just say "Analyze my risk" or click the button below. 👇';
        }

        case 'investment_basics':
          return '📚 <strong>Investment Basics for Beginners</strong><br><br>Here\'s a quick roadmap to get started:<br><br>' +
            '<ul><li>1️⃣ <strong>Build an Emergency Fund</strong> — save 6 months\' expenses in a savings account or FD</li>' +
            '<li>2️⃣ <strong>Understand Risk</strong> — take our <span class="chat-link" onclick="document.getElementById(\'quiz\').scrollIntoView({behavior:\'smooth\'})">Risk Quiz →</span></li>' +
            '<li>3️⃣ <strong>Start with SIPs</strong> — invest ₹500-5000/month in index mutual funds</li>' +
            '<li>4️⃣ <strong>Learn before you leap</strong> — explore our <span class="chat-link" onclick="document.getElementById(\'learn\').scrollIntoView({behavior:\'smooth\'})">Financial Literacy Hub →</span></li>' +
            '<li>5️⃣ <strong>Diversify</strong> — never put all your money in one asset</li>' +
            '<li>6️⃣ <strong>Ignore hype</strong> — avoid investing based on social media tips</li></ul>' +
            '<strong>Golden Rule:</strong> Only invest money you won\'t need for at least 3-5 years.' + safetyDisclaimer;

        case 'help':
          return 'Here\'s everything I can help you with:<br><br>' +
            '<ul><li>📊 <strong>"Analyze my risk"</strong> — personalized risk profiling</li>' +
            '<li>📈 <strong>"Explain SIP/Mutual Funds/ETFs"</strong> — learn investment types</li>' +
            '<li>🔍 <strong>"Check risk of [stock name]"</strong> — stock/crypto risk analysis</li>' +
            '<li>⚠️ <strong>"Is [stock] overhyped?"</strong> — hype detection</li>' +
            '<li>📚 <strong>"What is diversification/compounding?"</strong> — financial concepts</li>' +
            '<li>🗺️ <strong>"How to use the quiz/dashboard?"</strong> — website navigation</li>' +
            '<li>💡 <strong>"Recommend investments"</strong> — personalized suggestions</li>' +
            '<li>🚀 <strong>"Investment basics"</strong> — beginner\'s guide</li></ul>' +
            'Just type your question or use the quick buttons below! 👇';

        default: {
          // Try to find stock name in the input
          const lowerInput = input.toLowerCase().trim();
          for (const key in stockDatabase) {
            if (lowerInput.includes(key) || lowerInput.includes(stockDatabase[key].ticker.toLowerCase())) {
              chatState.pendingStockQuery = key;
              return generateResponse('stock_lookup', input);
            }
          }

          return 'I\'m not sure I understand that completely. 🤔 Here are some things you can ask me:<br><br>' +
            '<ul><li>"Analyze my risk profile"</li>' +
            '<li>"Explain SIP" or "What is compounding?"</li>' +
            '<li>"Check risk of Reliance" or "Is Tesla risky?"</li>' +
            '<li>"Investment basics" for a beginner guide</li>' +
            '<li>"Recommend investments" for personalized tips</li></ul>' +
            'Or use the quick action buttons below! 👇';
        }
      }
    };

    // --- Handle User Input ---
    const handleUserInput = () => {
      const input = inputField.value.trim();
      if (!input) return;

      addMessage(input, 'user');
      inputField.value = '';

      // If in risk flow
      if (chatState.riskFlow.active) {
        processRiskInput(input);
        return;
      }

      // If waiting for stock name
      if (chatState.stockQuery) {
        chatState.stockQuery = false;
        chatState.pendingStockQuery = input.toLowerCase().trim();
        const response = generateResponse('stock_lookup', input);
        botReply(response, 1200);
        return;
      }

      // Normal intent detection
      const intent = detectIntent(input);
      const response = generateResponse(intent, input);

      botReply(response, 1000 + Math.random() * 500);
    };

    // --- Quick Action Handlers ---
    const quickActionMap = {
      risk_profile: 'Analyze my risk profile',
      explain_sip: 'What is SIP?',
      stock_risk: 'Check stock risk',
      investment_basics: 'Investment basics for beginners',
      get_started: 'Help me get started with investing'
    };

    // --- Event Listeners ---
    // Toggle chat
    toggleBtn.addEventListener('click', () => {
      chatState.isOpen = !chatState.isOpen;
      chatWindow.classList.toggle('hidden', !chatState.isOpen);
      toggleBtn.classList.toggle('active', chatState.isOpen);

      const icon = toggleBtn.querySelector('i');
      if (icon) {
        icon.className = chatState.isOpen ? 'fas fa-times' : 'fas fa-robot';
      }

      if (badge) badge.classList.add('hidden');

      if (chatState.isOpen && !chatState.welcomed) {
        chatState.welcomed = true;
        setTimeout(() => {
          addMessage('Hello! 👋 I\'m <strong>InvestWise Risk Mentor</strong>. I can help you understand investment risks, explain financial concepts, analyze your risk profile, and guide you toward informed investment decisions.<br><br>How can I help you today?', 'bot');
        }, 300);
      }

      if (chatState.isOpen) {
        setTimeout(() => inputField?.focus(), 400);
      }
    });

    // Close
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        chatState.isOpen = false;
        chatWindow.classList.add('hidden');
        toggleBtn.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-robot';
      });
    }

    // Minimize
    if (minimizeBtn) {
      minimizeBtn.addEventListener('click', () => {
        chatState.isOpen = false;
        chatWindow.classList.add('hidden');
        toggleBtn.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) icon.className = 'fas fa-robot';
      });
    }

    // Send message
    if (sendBtn) {
      sendBtn.addEventListener('click', handleUserInput);
    }

    if (inputField) {
      inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleUserInput();
      });
    }

    // Quick actions
    if (quickActions) {
      quickActions.querySelectorAll('.chatbot-quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.action;
          const displayText = quickActionMap[action] || action;

          addMessage(displayText, 'user');

          if (action === 'get_started') {
            const response = generateResponse('investment_basics', displayText);
            botReply(response, 1000);
          } else {
            if (action === 'risk_profile') {
              chatState.riskFlow.active = true;
              chatState.riskFlow.step = 0;
              chatState.riskFlow.data = {};
            }
            const response = generateResponse(action, displayText);
            botReply(response, 1000);
          }
        });
      });
    }
  };

  /* ======================================================================
     16. GOAL PLANNER & FINANCIAL PROJECTION ENGINE
     ====================================================================== */
  const initGoalPlanner = () => {
    // --- State ---
    let gpState = {
      calculated: false,
      inputs: {
        goalName: 'Retirement',
        goalAmount: 5000000,
        duration: 10,
        lumpsum: 500000,
        sip: 20000,
        stepUp: 10,
        expectedReturn: 12,
        inflation: 6
      },
      results: null
    };

    // Chart instances
    let growthChart = null;
    let stepUpChart = null;
    let scenarioChart = null;

    // --- DOM Elements ---
    const goalNameSelect = document.getElementById('gp-goal-name');
    const goalAmountInput = document.getElementById('gp-goal-amount');
    const durationInput = document.getElementById('gp-duration');
    const lumpsumInput = document.getElementById('gp-lumpsum');
    const sipInput = document.getElementById('gp-sip');
    const stepUpInput = document.getElementById('gp-stepup');
    const returnInput = document.getElementById('gp-return');
    const inflationInput = document.getElementById('gp-inflation');
    const returnWarning = document.getElementById('gp-return-warning');
    const calcBtn = document.getElementById('gp-calc-btn');
    const demoBtn = document.getElementById('gp-demo-btn');
    const dashboardSec = document.getElementById('gp-dashboard');
    const whatifNotice = document.getElementById('gp-whatif-notice');
    const whatifGrid = document.getElementById('gp-whatif-grid');

    if (!calcBtn || !goalAmountInput) return;

    // --- Financial Calculations ---
    const simulateInvestment = (lumpsum, sip, stepUpPct, annualReturnPct, years) => {
      const r_m = (annualReturnPct / 100) / 12;
      const s_pct = stepUpPct / 100;
      let totalMonths = Math.max(1, Math.round(years * 12));
      let corpus = lumpsum;
      let totalInvested = lumpsum;
      const yearlyData = [];

      for (let m = 1; m <= totalMonths; m++) {
        const yearIdx = Math.floor((m - 1) / 12);
        const curSIP = sip * Math.pow(1 + s_pct, yearIdx);
        totalInvested += curSIP;
        corpus = (corpus + curSIP) * (1 + r_m);

        if (m % 12 === 0 || m === totalMonths) {
          const yr = Math.ceil(m / 12);
          yearlyData.push({
            year: yr,
            invested: Math.round(totalInvested),
            corpus: Math.round(corpus)
          });
        }
      }

      return {
        finalCorpus: Math.round(corpus),
        totalInvested: Math.round(totalInvested),
        growth: Math.round(corpus - totalInvested),
        yearlyData
      };
    };

    const calcInflationGoal = (todayAmount, inflationPct, years) => {
      const inf_rate = inflationPct / 100;
      return Math.round(todayAmount * Math.pow(1 + inf_rate, years));
    };

    const formatCurrencyLakhCrore = (num) => {
      if (num === null || num === undefined || isNaN(num)) return '₹0';
      const absVal = Math.abs(num);
      const sign = num < 0 ? '-' : '';
      if (absVal >= 10000000) {
        return `${sign}₹${(absVal / 10000000).toFixed(2)} Cr`;
      } else if (absVal >= 100000) {
        return `${sign}₹${(absVal / 100000).toFixed(2)} L`;
      } else {
        return `${sign}₹${absVal.toLocaleString('en-IN')}`;
      }
    };

    const formatIndianNumber = (num) => {
      if (num === null || num === undefined || isNaN(num)) return '₹0';
      return `₹${Math.round(num).toLocaleString('en-IN')}`;
    };

    // --- Return Warning Trigger ---
    if (returnInput && returnWarning) {
      returnInput.addEventListener('input', () => {
        const val = parseFloat(returnInput.value) || 0;
        if (val > 15) {
          returnWarning.classList.remove('hidden');
        } else {
          returnWarning.classList.add('hidden');
        }
      });
    }

    // --- Main Calculation Engine ---
    const runCalculation = () => {
      const goalName = goalNameSelect ? goalNameSelect.value : 'Goal';
      const goalAmount = Math.max(1000, parseFloat(goalAmountInput.value) || 5000000);
      const duration = Math.max(1, parseInt(durationInput.value) || 10);
      const lumpsum = Math.max(0, parseFloat(lumpsumInput.value) || 0);
      const sip = Math.max(0, parseFloat(sipInput.value) || 0);
      const stepUp = Math.max(0, parseFloat(stepUpInput.value) || 0);
      const expectedReturn = Math.max(0, parseFloat(returnInput.value) || 12);
      const inflation = Math.max(0, parseFloat(inflationInput.value) || 6);

      // Save to state
      gpState.inputs = {
        goalName,
        goalAmount,
        duration,
        lumpsum,
        sip,
        stepUp,
        expectedReturn,
        inflation
      };

      // Perform calculations
      const sim = simulateInvestment(lumpsum, sip, stepUp, expectedReturn, duration);
      const inflatedGoal = calcInflationGoal(goalAmount, inflation, duration);
      const progressPct = Math.min(100, Math.round((sim.finalCorpus / inflatedGoal) * 100));
      const shortfall = Math.max(0, inflatedGoal - sim.finalCorpus);

      gpState.results = {
        ...sim,
        inflatedGoal,
        progressPct,
        shortfall
      };
      gpState.calculated = true;

      // Update UI Elements
      updateDashboardUI();
      updateWhatIfUI();
      updateCopilotAnalysis();

      // Reveal sections
      if (dashboardSec) {
        dashboardSec.classList.remove('hidden');
        dashboardSec.scrollIntoView({ behavior: 'smooth' });
      }
      if (whatifNotice) whatifNotice.classList.add('hidden');
      if (whatifGrid) whatifGrid.classList.remove('hidden');

      showToast('🎉 Financial plan calculated successfully!', 'success');
    };

    // --- Dashboard UI Updater ---
    const updateDashboardUI = () => {
      const { inputs, results } = gpState;
      if (!results) return;

      // Banner
      const titleEl = document.getElementById('gp-goal-title');
      const subEl = document.getElementById('gp-goal-subtitle');
      const badgeEl = document.getElementById('gp-status-badge');

      if (titleEl) titleEl.textContent = `Your ${inputs.goalName} Plan`;
      if (subEl) subEl.textContent = `Projected financial future over ${inputs.duration} years with ${inputs.expectedReturn}% return assumption.`;

      if (badgeEl) {
        badgeEl.className = 'gp-status-badge';
        if (results.finalCorpus >= results.inflatedGoal) {
          badgeEl.className += ' gp-on-track';
          badgeEl.innerHTML = '🟢 ON TRACK';
        } else if (results.finalCorpus >= results.inflatedGoal * 0.8) {
          badgeEl.className += ' gp-close-goal';
          badgeEl.innerHTML = '🟡 CLOSE TO GOAL';
        } else {
          badgeEl.className += ' gp-shortfall';
          badgeEl.innerHTML = '🔴 SHORTFALL';
        }
      }

      // Summary Cards
      const corpusEl = document.getElementById('gp-corpus');
      const adjGoalEl = document.getElementById('gp-adj-goal');
      const investedEl = document.getElementById('gp-total-invested');
      const growthEl = document.getElementById('gp-est-growth');

      if (corpusEl) corpusEl.textContent = formatCurrencyLakhCrore(results.finalCorpus);
      if (adjGoalEl) adjGoalEl.textContent = formatCurrencyLakhCrore(results.inflatedGoal);
      if (investedEl) investedEl.textContent = formatCurrencyLakhCrore(results.totalInvested);
      if (growthEl) growthEl.textContent = formatCurrencyLakhCrore(results.growth);

      // Progress Ring
      const ringFill = document.getElementById('gp-ring-fill');
      const pctEl = document.getElementById('gp-progress-pct');
      const corpusLbl = document.getElementById('gp-corpus-lbl');
      const goalLbl = document.getElementById('gp-goal-lbl');

      if (pctEl) pctEl.textContent = `${results.progressPct}%`;
      if (corpusLbl) corpusLbl.textContent = formatCurrencyLakhCrore(results.finalCorpus);
      if (goalLbl) goalLbl.textContent = formatCurrencyLakhCrore(results.inflatedGoal);

      if (ringFill) {
        const circumference = 2 * Math.PI * 52; // ~326.7
        const offset = circumference - (results.progressPct / 100) * circumference;
        ringFill.style.strokeDashoffset = offset;
        ringFill.style.stroke = results.progressPct >= 100 ? '#00d09c' : results.progressPct >= 80 ? '#ffb703' : '#ff4757';
      }

      // Inflation Card
      const infTodayEl = document.getElementById('gp-inf-today');
      const infFutureEl = document.getElementById('gp-inf-future');
      const infRateEl = document.getElementById('gp-inf-rate');
      const infYrsEl = document.getElementById('gp-inf-yrs');

      if (infTodayEl) infTodayEl.textContent = formatCurrencyLakhCrore(inputs.goalAmount);
      if (infFutureEl) infFutureEl.textContent = formatCurrencyLakhCrore(results.inflatedGoal);
      if (infRateEl) infRateEl.textContent = inputs.inflation;
      if (infYrsEl) infYrsEl.textContent = inputs.duration;

      // Breakdown Box
      const bkSip = document.getElementById('gp-bk-sip');
      const bkStepUp = document.getElementById('gp-bk-stepup');
      const bkLumpsum = document.getElementById('gp-bk-lumpsum');
      const bkReturn = document.getElementById('gp-bk-return');

      if (bkSip) bkSip.textContent = `₹${inputs.sip.toLocaleString('en-IN')}/mo`;
      if (bkStepUp) bkStepUp.textContent = `${inputs.stepUp}% annually`;
      if (bkLumpsum) bkLumpsum.textContent = formatCurrencyLakhCrore(inputs.lumpsum);
      if (bkReturn) bkReturn.textContent = `${inputs.expectedReturn}% p.a.`;

      // Render Charts & Tables
      renderGrowthChart();
      renderStepUpComparison();
      renderShortfallStrategies();
      renderScenarioAnalysis();
    };

    // --- Growth Chart ---
    const renderGrowthChart = () => {
      const canvas = document.getElementById('gp-growth-chart');
      if (!canvas) return;

      const { inputs, results } = gpState;
      const labels = results.yearlyData.map(d => `Year ${d.year}`);
      const corpusData = results.yearlyData.map(d => d.corpus);
      const investedData = results.yearlyData.map(d => d.invested);

      // Inflation goal curve
      const goalCurve = results.yearlyData.map(d => {
        return Math.round(inputs.goalAmount * Math.pow(1 + (inputs.inflation / 100), d.year));
      });

      if (growthChart) {
        growthChart.destroy();
      }

      const ctx = canvas.getContext('2d');
      growthChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Projected Corpus',
              data: corpusData,
              borderColor: '#00d09c',
              backgroundColor: 'rgba(0, 208, 156, 0.1)',
              fill: true,
              tension: 0.35,
              pointRadius: 4,
              pointHoverRadius: 7
            },
            {
              label: 'Total Invested',
              data: investedData,
              borderColor: '#00b4d8',
              backgroundColor: 'rgba(0, 180, 216, 0.05)',
              fill: true,
              tension: 0.35,
              pointRadius: 4,
              pointHoverRadius: 7
            },
            {
              label: 'Inflation-Adjusted Goal',
              data: goalCurve,
              borderColor: '#ff6b35',
              borderDash: [6, 6],
              fill: false,
              pointRadius: 3,
              pointHoverRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => `${context.dataset.label}: ${formatCurrencyLakhCrore(context.parsed.y)}`
              }
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(42, 63, 107, 0.3)' },
              ticks: { color: '#8899aa' }
            },
            y: {
              grid: { color: 'rgba(42, 63, 107, 0.3)' },
              ticks: {
                color: '#8899aa',
                callback: (val) => formatCurrencyLakhCrore(val)
              }
            }
          }
        }
      });
    };

    // --- Step-Up Comparison ---
    const renderStepUpComparison = () => {
      const grid = document.getElementById('gp-stepup-grid');
      const canvas = document.getElementById('gp-stepup-chart');
      if (!grid) return;

      const { inputs } = gpState;
      const stepUps = [0, 5, 10, 15];
      const resultsArray = stepUps.map(rate => {
        const sim = simulateInvestment(inputs.lumpsum, inputs.sip, rate, inputs.expectedReturn, inputs.duration);
        return { rate, ...sim };
      });

      const baseCorpus = resultsArray[0].finalCorpus;

      grid.innerHTML = resultsArray.map(item => {
        const diff = item.finalCorpus - baseCorpus;
        const diffText = diff > 0 ? `+${formatCurrencyLakhCrore(diff)} vs Regular` : 'Baseline';
        return `
          <div class="gp-su-box">
            <div class="gp-su-tag">${item.rate === 0 ? 'Regular SIP' : `${item.rate}% Step-Up`}</div>
            <div class="gp-su-val">${formatCurrencyLakhCrore(item.finalCorpus)}</div>
            <div class="gp-su-diff">${diffText}</div>
          </div>
        `;
      }).join('');

      if (canvas) {
        if (stepUpChart) stepUpChart.destroy();
        const ctx = canvas.getContext('2d');
        stepUpChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: resultsArray.map(r => r.rate === 0 ? 'No Step-Up' : `${r.rate}% Step-Up`),
            datasets: [{
              label: 'Projected Corpus',
              data: resultsArray.map(r => r.finalCorpus),
              backgroundColor: ['#1e2d4a', '#0077b6', '#00b4d8', '#00d09c'],
              borderRadius: 8
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => `Corpus: ${formatCurrencyLakhCrore(ctx.parsed.y)}`
                }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#8899aa' } },
              y: {
                grid: { color: 'rgba(42, 63, 107, 0.3)' },
                ticks: {
                  color: '#8899aa',
                  callback: (val) => formatCurrencyLakhCrore(val)
                }
              }
            }
          }
        });
      }
    };

    // --- Shortfall Strategies ---
    const renderShortfallStrategies = () => {
      const container = document.getElementById('gp-strategies');
      const msgEl = document.getElementById('gp-shortfall-msg');
      const grid = document.getElementById('gp-strat-grid');
      if (!container || !grid) return;

      const { inputs, results } = gpState;

      if (results.shortfall <= 0) {
        container.classList.add('hidden');
        return;
      }

      container.classList.remove('hidden');
      if (msgEl) {
        msgEl.textContent = `You're approximately ${formatCurrencyLakhCrore(results.shortfall)} short of your target. Here are possible ways to close the gap:`;
      }

      // Calculate options:
      // Option 1: Extra SIP needed
      const r_m = (inputs.expectedReturn / 100) / 12;
      const n_months = inputs.duration * 12;
      let sipFactor = 0;
      for (let m = 1; m <= n_months; m++) {
        const yIdx = Math.floor((m - 1) / 12);
        sipFactor += Math.pow(1 + (inputs.stepUp / 100), yIdx) * Math.pow(1 + r_m, n_months - m + 1);
      }
      const extraSIP = sipFactor > 0 ? Math.round(results.shortfall / sipFactor) : 0;

      // Option 2: Higher Step-Up
      let targetStepUp = inputs.stepUp + 5;
      for (let s = inputs.stepUp + 1; s <= 30; s++) {
        const testSim = simulateInvestment(inputs.lumpsum, inputs.sip, s, inputs.expectedReturn, inputs.duration);
        if (testSim.finalCorpus >= results.inflatedGoal) {
          targetStepUp = s;
          break;
        }
      }

      // Option 3: Additional Lumpsum today
      const neededLumpsum = Math.round(results.shortfall / Math.pow(1 + (inputs.expectedReturn / 100), inputs.duration));

      // Option 4: Extra Years
      let extraYearsNeeded = 1;
      for (let yr = 1; yr <= 15; yr++) {
        const testYears = inputs.duration + yr;
        const testSim = simulateInvestment(inputs.lumpsum, inputs.sip, inputs.stepUp, inputs.expectedReturn, testYears);
        const testGoal = calcInflationGoal(inputs.goalAmount, inputs.inflation, testYears);
        if (testSim.finalCorpus >= testGoal) {
          extraYearsNeeded = yr;
          break;
        }
      }

      grid.innerHTML = `
        <div class="gp-strat-card">
          <div class="gp-strat-label">Option 1: Increase SIP</div>
          <div class="gp-strat-val">+₹${extraSIP.toLocaleString('en-IN')}/mo</div>
          <div class="gp-strat-sub">New SIP: ₹${(inputs.sip + extraSIP).toLocaleString('en-IN')}</div>
        </div>
        <div class="gp-strat-card">
          <div class="gp-strat-label">Option 2: Increase Step-Up</div>
          <div class="gp-strat-val">${inputs.stepUp}% → ${targetStepUp}%</div>
          <div class="gp-strat-sub">Annual contribution bump</div>
        </div>
        <div class="gp-strat-card">
          <div class="gp-strat-label">Option 3: Add Lumpsum</div>
          <div class="gp-strat-val">+${formatCurrencyLakhCrore(neededLumpsum)}</div>
          <div class="gp-strat-sub">One-time initial deposit</div>
        </div>
        <div class="gp-strat-card">
          <div class="gp-strat-label">Option 4: Extend Horizon</div>
          <div class="gp-strat-val">+${extraYearsNeeded} ${extraYearsNeeded === 1 ? 'Year' : 'Years'}</div>
          <div class="gp-strat-sub">Total: ${inputs.duration + extraYearsNeeded} years</div>
        </div>
      `;
    };

    // --- Scenario Analysis ---
    const renderScenarioAnalysis = () => {
      const grid = document.getElementById('gp-scenario-grid');
      const canvas = document.getElementById('gp-scenario-chart');
      if (!grid) return;

      const { inputs } = gpState;
      const scenarios = [
        { name: 'Conservative', rate: 8, color: '#ffb703' },
        { name: 'Moderate', rate: 10, color: '#00b4d8' },
        { name: 'Optimistic', rate: 12, color: '#00d09c' }
      ];

      const scenarioResults = scenarios.map(sc => {
        const sim = simulateInvestment(inputs.lumpsum, inputs.sip, inputs.stepUp, sc.rate, inputs.duration);
        return { ...sc, corpus: sim.finalCorpus };
      });

      grid.innerHTML = scenarioResults.map(sc => `
        <div class="gp-sc-box" style="border-top: 3px solid ${sc.color}">
          <div class="gp-sc-rate">${sc.name} (${sc.rate}%)</div>
          <div class="gp-sc-val">${formatCurrencyLakhCrore(sc.corpus)}</div>
        </div>
      `).join('');

      if (canvas) {
        if (scenarioChart) scenarioChart.destroy();
        const ctx = canvas.getContext('2d');
        scenarioChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: scenarioResults.map(s => `${s.name} (${s.rate}%)`),
            datasets: [{
              label: 'Projected Corpus',
              data: scenarioResults.map(s => s.corpus),
              backgroundColor: scenarioResults.map(s => s.color),
              borderRadius: 8
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => `Corpus: ${formatCurrencyLakhCrore(ctx.parsed.y)}`
                }
              }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#8899aa' } },
              y: {
                grid: { color: 'rgba(42, 63, 107, 0.3)' },
                ticks: {
                  color: '#8899aa',
                  callback: (val) => formatCurrencyLakhCrore(val)
                }
              }
            }
          }
        });
      }
    };

    // --- What-If Simulator ---
    const updateWhatIfUI = () => {
      if (!gpState.calculated || !gpState.results) return;

      const { inputs, results } = gpState;
      const baseCorpus = results.finalCorpus;

      // 1. Extra SIP
      const sipExtraInput = document.getElementById('wi-sip-extra');
      const sipCurEl = document.getElementById('wi-sip-current');
      const sipNewEl = document.getElementById('wi-sip-new');
      const sipDeltaEl = document.getElementById('wi-sip-delta');

      const recalcSip = () => {
        const extra = Math.max(0, parseFloat(sipExtraInput.value) || 0);
        const sim = simulateInvestment(inputs.lumpsum, inputs.sip + extra, inputs.stepUp, inputs.expectedReturn, inputs.duration);
        const delta = sim.finalCorpus - baseCorpus;
        if (sipCurEl) sipCurEl.textContent = formatCurrencyLakhCrore(baseCorpus);
        if (sipNewEl) sipNewEl.textContent = formatCurrencyLakhCrore(sim.finalCorpus);
        if (sipDeltaEl) {
          sipDeltaEl.textContent = `+${formatCurrencyLakhCrore(delta)}`;
          sipDeltaEl.style.background = 'rgba(0, 208, 156, 0.15)';
          sipDeltaEl.style.color = '#00d09c';
        }
      };

      // 2. New Step-Up
      const stepUpNewInput = document.getElementById('wi-stepup-new');
      const stepUpCurEl = document.getElementById('wi-stepup-current');
      const stepUpNewValEl = document.getElementById('wi-stepup-new-val');
      const stepUpDeltaEl = document.getElementById('wi-stepup-delta');

      const recalcStepUp = () => {
        const newRate = Math.max(0, parseFloat(stepUpNewInput.value) || 0);
        const sim = simulateInvestment(inputs.lumpsum, inputs.sip, newRate, inputs.expectedReturn, inputs.duration);
        const delta = sim.finalCorpus - baseCorpus;
        if (stepUpCurEl) stepUpCurEl.textContent = formatCurrencyLakhCrore(baseCorpus);
        if (stepUpNewValEl) stepUpNewValEl.textContent = formatCurrencyLakhCrore(sim.finalCorpus);
        if (stepUpDeltaEl) {
          const prefix = delta >= 0 ? '+' : '-';
          stepUpDeltaEl.textContent = `${prefix}${formatCurrencyLakhCrore(Math.abs(delta))}`;
          stepUpDeltaEl.style.color = delta >= 0 ? '#00d09c' : '#ff4757';
          stepUpDeltaEl.style.background = delta >= 0 ? 'rgba(0, 208, 156, 0.15)' : 'rgba(255, 71, 87, 0.15)';
        }
      };

      // 3. Extra Lumpsum
      const lumpExtraInput = document.getElementById('wi-lumpsum-extra');
      const lumpCurEl = document.getElementById('wi-lumpsum-current');
      const lumpNewEl = document.getElementById('wi-lumpsum-new');
      const lumpDeltaEl = document.getElementById('wi-lumpsum-delta');

      const recalcLump = () => {
        const extra = Math.max(0, parseFloat(lumpExtraInput.value) || 0);
        const sim = simulateInvestment(inputs.lumpsum + extra, inputs.sip, inputs.stepUp, inputs.expectedReturn, inputs.duration);
        const delta = sim.finalCorpus - baseCorpus;
        if (lumpCurEl) lumpCurEl.textContent = formatCurrencyLakhCrore(baseCorpus);
        if (lumpNewEl) lumpNewEl.textContent = formatCurrencyLakhCrore(sim.finalCorpus);
        if (lumpDeltaEl) {
          lumpDeltaEl.textContent = `+${formatCurrencyLakhCrore(delta)}`;
          lumpDeltaEl.style.background = 'rgba(0, 208, 156, 0.15)';
          lumpDeltaEl.style.color = '#00d09c';
        }
      };

      // 4. Extra Years
      const yrsExtraInput = document.getElementById('wi-years-extra');
      const yrsCurEl = document.getElementById('wi-years-current');
      const yrsNewEl = document.getElementById('wi-years-new');
      const yrsDeltaEl = document.getElementById('wi-years-delta');

      const recalcYears = () => {
        const extra = Math.max(1, parseInt(yrsExtraInput.value) || 1);
        const sim = simulateInvestment(inputs.lumpsum, inputs.sip, inputs.stepUp, inputs.expectedReturn, inputs.duration + extra);
        const delta = sim.finalCorpus - baseCorpus;
        if (yrsCurEl) yrsCurEl.textContent = formatCurrencyLakhCrore(baseCorpus);
        if (yrsNewEl) yrsNewEl.textContent = formatCurrencyLakhCrore(sim.finalCorpus);
        if (yrsDeltaEl) {
          yrsDeltaEl.textContent = `+${formatCurrencyLakhCrore(delta)}`;
          yrsDeltaEl.style.background = 'rgba(0, 208, 156, 0.15)';
          yrsDeltaEl.style.color = '#00d09c';
        }
      };

      if (sipExtraInput) {
        sipExtraInput.oninput = recalcSip;
        recalcSip();
      }
      if (stepUpNewInput) {
        stepUpNewInput.oninput = recalcStepUp;
        recalcStepUp();
      }
      if (lumpExtraInput) {
        lumpExtraInput.oninput = recalcLump;
        recalcLump();
      }
      if (yrsExtraInput) {
        yrsExtraInput.oninput = recalcYears;
        recalcYears();
      }
    };

    // --- AI Copilot ---
    const updateCopilotAnalysis = () => {
      const panel = document.getElementById('gp-copilot-analysis');
      if (!panel || !gpState.results) return;

      const { inputs, results } = gpState;
      let analysisHTML = '';

      if (results.finalCorpus >= results.inflatedGoal) {
        analysisHTML = `
          <p>🎉 <strong>Excellent news!</strong> Based on your ₹${inputs.sip.toLocaleString('en-IN')}/month SIP with a ${inputs.stepUp}% annual step-up and ₹${(inputs.lumpsum / 100000).toFixed(1)}L initial lumpsum, your projected corpus of <strong>${formatCurrencyLakhCrore(results.finalCorpus)}</strong> comfortably achieves your inflation-adjusted ${inputs.goalName} goal of <strong>${formatCurrencyLakhCrore(results.inflatedGoal)}</strong>.</p>
          <p class="mt-2 text-muted">💡 <em>Copilot Tip:</em> Your discipline with annual step-ups significantly accelerates wealth creation. Keep your investment diversified across index funds, debt instruments, and gold to hedge against volatility.</p>
        `;
      } else if (results.finalCorpus >= results.inflatedGoal * 0.8) {
        analysisHTML = `
          <p>🟡 <strong>You're very close to your goal!</strong> Your projected corpus is <strong>${formatCurrencyLakhCrore(results.finalCorpus)}</strong>, which covers <strong>${results.progressPct}%</strong> of your inflation-adjusted ${inputs.goalName} target (<strong>${formatCurrencyLakhCrore(results.inflatedGoal)}</strong>).</p>
          <p class="mt-2">⚠️ Due to ${inputs.inflation}% inflation over ${inputs.duration} years, your required amount grew from ${formatCurrencyLakhCrore(inputs.goalAmount)} to ${formatCurrencyLakhCrore(results.inflatedGoal)}. A minor increase in your monthly SIP or step-up percentage will bridge the remaining ${formatCurrencyLakhCrore(results.shortfall)} gap.</p>
        `;
      } else {
        analysisHTML = `
          <p>🔴 <strong>Action recommended:</strong> Your projected corpus of <strong>${formatCurrencyLakhCrore(results.finalCorpus)}</strong> leaves a shortfall of <strong>${formatCurrencyLakhCrore(results.shortfall)}</strong> against your inflation-adjusted goal of <strong>${formatCurrencyLakhCrore(results.inflatedGoal)}</strong> (${results.progressPct}% achieved).</p>
          <p class="mt-2">💡 <em>Copilot Recommendations:</em> Explore the <strong>"How Can I Reach My Goal?"</strong> card above. Increasing your annual step-up to ${inputs.stepUp + 5}% or adding ₹${Math.round(results.shortfall / (inputs.duration * 12 * 1.5)).toLocaleString('en-IN')}/month to your SIP will significantly narrow the gap.</p>
        `;
      }

      panel.innerHTML = analysisHTML;
    };

    // --- Copilot Interactive Questions ---
    const qButtons = document.querySelectorAll('.gp-q-btn');
    const copilotMsgContainer = document.getElementById('gp-copilot-messages');

    qButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const qKey = btn.dataset.q;
        const qText = btn.textContent;
        const { inputs, results } = gpState;

        if (!results) {
          showToast('Please calculate your plan first!', 'warning');
          return;
        }

        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'gp-copilot-msg user';
        userMsg.textContent = qText;
        copilotMsgContainer.appendChild(userMsg);

        // Generate response
        let answer = '';
        switch (qKey) {
          case 'faster':
            answer = `To reach your <strong>${inputs.goalName}</strong> goal faster:<br>1. <strong>Increase your annual Step-Up</strong> from ${inputs.stepUp}% to ${inputs.stepUp + 5}% — this can add ${formatCurrencyLakhCrore(results.finalCorpus * 0.15)} without straining current monthly cashflow.<br>2. <strong>Direct windfalls</strong> (bonuses, tax refunds) into your existing lumpsum.<br>3. <strong>Automate your SIP</strong> to avoid emotional timing mistakes.`;
            break;
          case 'sip':
            const extraSim = simulateInvestment(inputs.lumpsum, inputs.sip + 5000, inputs.stepUp, inputs.expectedReturn, inputs.duration);
            answer = `Adding just <strong>₹5,000/month</strong> to your current SIP will grow your final corpus from <strong>${formatCurrencyLakhCrore(results.finalCorpus)}</strong> to <strong>${formatCurrencyLakhCrore(extraSim.finalCorpus)}</strong> — that is an extra <strong>+${formatCurrencyLakhCrore(extraSim.finalCorpus - results.finalCorpus)}</strong> over ${inputs.duration} years!`;
            break;
          case 'inflation':
            answer = `Inflation erodes purchasing power. At <strong>${inputs.inflation}% annual inflation</strong>, ₹100 today buys what ₹${Math.round(100 * Math.pow(1 + inputs.inflation / 100, inputs.duration))} will cost in ${inputs.duration} years. That's why your ₹${(inputs.goalAmount / 100000).toFixed(1)}L goal requires <strong>${formatCurrencyLakhCrore(results.inflatedGoal)}</strong> in future value.`;
            break;
          case 'years':
            const yrSim = simulateInvestment(inputs.lumpsum, inputs.sip, inputs.stepUp, inputs.expectedReturn, inputs.duration + 2);
            answer = `Investing for just <strong>2 additional years</strong> (${inputs.duration + 2} total) increases your corpus from <strong>${formatCurrencyLakhCrore(results.finalCorpus)}</strong> to <strong>${formatCurrencyLakhCrore(yrSim.finalCorpus)}</strong> (+${formatCurrencyLakhCrore(yrSim.finalCorpus - results.finalCorpus)}). Compounding produces the highest gains in the final years!`;
            break;
          case 'explain':
            answer = `Here is your plan in simple terms:<br>• You start with <strong>${formatCurrencyLakhCrore(inputs.lumpsum)}</strong> and invest <strong>₹${inputs.sip.toLocaleString('en-IN')}/month</strong>.<br>• Every year, you increase your SIP by <strong>${inputs.stepUp}%</strong>.<br>• In total, you invest <strong>${formatCurrencyLakhCrore(results.totalInvested)}</strong> of your own money.<br>• Compounding at ${inputs.expectedReturn}% generates <strong>${formatCurrencyLakhCrore(results.growth)}</strong> in estimated growth.<br>• Your total wealth becomes <strong>${formatCurrencyLakhCrore(results.finalCorpus)}</strong>.`;
            break;
          case 'stepup':
            const noStepSim = simulateInvestment(inputs.lumpsum, inputs.sip, 0, inputs.expectedReturn, inputs.duration);
            answer = `A <strong>Step-Up SIP</strong> aligns your investments with your salary increments. Without step-up, your corpus would be <strong>${formatCurrencyLakhCrore(noStepSim.finalCorpus)}</strong>. With a ${inputs.stepUp}% step-up, it reaches <strong>${formatCurrencyLakhCrore(results.finalCorpus)}</strong> (+${formatCurrencyLakhCrore(results.finalCorpus - noStepSim.finalCorpus)} extra wealth!).`;
            break;
          default:
            answer = 'InvestWise AI calculates your plan with high mathematical accuracy. Test different scenarios in the What-If section above!';
        }

        setTimeout(() => {
          const botMsg = document.createElement('div');
          botMsg.className = 'gp-copilot-msg bot';
          botMsg.innerHTML = answer;
          copilotMsgContainer.appendChild(botMsg);
          botMsg.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      });
    });

    // --- Demo Mode Handler ---
    const fillDemoData = () => {
      if (goalNameSelect) goalNameSelect.value = 'Retirement';
      if (goalAmountInput) goalAmountInput.value = '10000000';
      if (durationInput) durationInput.value = '12';
      if (lumpsumInput) lumpsumInput.value = '500000';
      if (sipInput) sipInput.value = '25000';
      if (stepUpInput) stepUpInput.value = '10';
      if (returnInput) returnInput.value = '10';
      if (inflationInput) inflationInput.value = '6';

      runCalculation();
    };

    if (demoBtn) demoBtn.addEventListener('click', fillDemoData);
    if (calcBtn) calcBtn.addEventListener('click', runCalculation);
  };

  /* ======================================================================
     14. INITIALIZATION
     ====================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initProfileForm();
    initQuiz();
    initAnalyzer();
    initLiteracyCards();
    initHypeChecker();
    initDemoMode();
    initChatbot();
    initGoalPlanner();

    // Initialize default recommendation view
    updateRecommendations('Moderate');

    console.log('✅ InvestWise AI initialized successfully');
  });

})();
