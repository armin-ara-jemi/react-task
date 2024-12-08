import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faInstagram, faFacebook, faTwitter} from '@fortawesome/free-solid-svg-icons';





const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img
            src="logo.png"
            alt="Logo"
            className="logo-image"
          />
          <h1 className="logo-text">Health Blog</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="content">
        {/* Section 1 */}
        <section className="article">
          <h2>Health Benefits Of An Avocado</h2>
          <p>
            Avocados are rich in antioxidants such as lutein and zeaxanthin,
            which are beneficial for eye health. Regular consumption of
            avocados may reduce the risk of cataracts and age-related macular
            degeneration.
          </p>
          <img
            src="/avocado.jpeg"
            alt="Avocado"
            className="article-image"
          />
        </section>

        {/* Section 2 */}
        <section className="article">
          <h2>Health Benefits Of An Apple</h2>
          <p>
          Apples are a rich source of antioxidants, dietary fiber, and vitamin C.
    Regular consumption of apples can improve heart health, help with weight
    management, and reduce the risk of certain chronic diseases such as
    diabetes and cancer.
          </p>
          <img
            src="/apple.jpg"
            alt="Peaches"
            className="article-image"
          />
        </section>
        {/* Section 2 */}
        <section className="article">
          <h2>Health Benefits Of Fruits</h2>
          <p>
          Fruits have many health benefits, including:
Vitamins and minerals: Fruits are a great source of essential vitamins and minerals, including vitamin C, potassium, and folate. 
Fiber: Fruits are high in fiber, which helps maintain a healthy gut and prevents constipation. 
Antioxidants: Fruits contain antioxidants, including flavonoids, which can boost health. 
Reduced risk of disease: Eating a diet high in fruits and vegetables can reduce the risk of developing heart disease, cancer, inflammation, and diabetes. 
Weight loss: Fruits are low in calories and high in fiber, which can help with weight loss. 
Immune system: The combination of vitamins, minerals, and antioxidants in fruits helps strengthen the immune system. 
Vision, growth, and skin health: Vitamin A helps with vision, growth, and keeping skin healthy. 
Some fruits that are high in specific nutrients include:
Citrus fruits: A good source of potassium 
Passion fruit: Contains potassium and vitamin C, which can boost the immune system and support heart health 
Tropical fruits: Such as mangos, kiwis, and pomegranates, which are good sources of folate 
Dry fruits: Such as prunes and figs, which are high in dietary fiber and can help improve digestion
        
          </p>
        
        </section>
        
      </main>

      {/* Footer */}
      <footer className="footer">

      <div className="rating">
          <span>⭐⭐⭐⭐⭐</span>
        </div>

        <div className="social-media">
          <a href="#facebook" className="icon">
          <img
            src="fb.png"
            alt="Logo"
            className="logo-image"
          />
          </a>
          <a href="#twiter" className="icon">
          <img
            src="tw.jpg"
            alt="Logo"
            className="logo-image"
          />
          </a>
          <a href="#instagram" className="icon">
          <img
            src="in.jpeg"
            alt="Logo"
            className="logo-image"
          />
          </a>
          <a href="#youtube" className="icon">
          <img
            src="yu.jpeg"
            alt="Logo"
            className="logo-image"
          />
          </a>
        </div>
  
      </footer>
    </div>
  );
};

export default App;
