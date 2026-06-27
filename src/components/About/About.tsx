import "./About.css";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__grid">
          <div className="about__image">
            <img
              src="/assets/zakaria.jpg"
              alt="Zakaria Ennaqui"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = document.createElement("div");
                fallback.className = "about__image-fallback";
                fallback.innerHTML = `
                  <svg width="80" height="80" fill="#60A5FA" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                  <p>Your Photo Here</p>
                `;
                e.currentTarget.parentElement?.appendChild(fallback);
              }}
            />
          </div>

          <div>
            <p className="about__text">
              {/* Add your bio text here */}
            </p>
            <p className="about__text">
              {/* Add your second paragraph here */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
