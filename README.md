# InvestWise AI

InvestWise AI is a browser-based financial education and planning application for students and first-time investors. It helps users understand investment risk, plan long-term goals, and avoid making decisions based only on social media hype.

## Features

- **Investor profile:** Enter age, occupation, income, savings, financial goal, time horizon, and risk tolerance to receive a profile summary.
- **Risk assessment quiz:** Answer ten questions to estimate an investor type and risk capacity.
- **Stock and crypto risk analyzer:** Search supported assets and review risk score, volatility, beginner suitability, long-term suitability, explanations, and risk factors.
- **Personalized recommendations:** View conservative, moderate, and aggressive allocation examples with strategy tips based on the selected investor type.
- **Financial literacy hub:** Learn the basics of SIPs, ETFs, mutual funds, stock market risk, and diversification.
- **Investment dashboard:** See profile information, risk visualization, allocation charts, and projected growth after completing the profile and quiz.
- **Goal planner:** Model a goal using a target amount, duration, current investment, monthly SIP, annual step-up, expected return, and inflation assumptions. Review progress, inflation impact, growth projections, and what-if scenarios.
- **Social media hype checker:** Check supported trending assets and receive a hype score, warnings, and a risk-focused explanation.
- **Demo mode:** Explore the main workflows with sample data.
- **Responsive interface:** Use the application on desktop and mobile screens.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- [Chart.js](https://www.chartjs.org/) for charts and visualizations
- [Font Awesome](https://fontawesome.com/) for icons
- Google Fonts (Inter)

## Run Locally

No build tools or installation are required.

1. Clone the repository:

	```bash
	git clone https://github.com/Jagan-mohan2007/wealth-tech.git
	cd wealth-tech
	```

2. Open `index.html` in a browser.

For a local development server, use any static server. For example, with Python:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Project Structure

```text
index.html   Application markup and sections
styles.css   Layout, theme, responsive styles, and animations
script.js    Mock data, interactions, calculations, and chart rendering
```

## Data and Scope

The application currently uses mock asset and hype databases in `script.js`. It does not connect to a live market-data API, brokerage account, authentication service, or database. Search results are limited to the assets and topics defined in the application.

## Disclaimer

InvestWise AI is an educational project, not a financial adviser. Its scores, projections, recommendations, and example allocations are illustrative and should not be treated as financial advice. Always research independently and consult a qualified professional before making investment decisions.

## License

No license has been specified for this project yet.
