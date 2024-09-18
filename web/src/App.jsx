/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="The seaside all over the world" />
        <InfoSection />
        <ImageRow />
        <ItemList />
        <Footer />
      </div>
    );
  }
}

// Компонент заголовка
class Header extends Component {
  render() {
    return <h1 className="header-title">{this.props.title}</h1>;
  }
}

class InfoSection extends Component {
  render() {
    return (
      <div className="info-section">
        <div className="info-text">
          <h2>Explore the World with Wanderlust Travels</h2>
          <p>
            At Wanderlust Travels, we believe that the world is a book, and
            those who do not travel read only one page. Our travel agency
            specializes in crafting unforgettable experiences, offering a wide
            range of tours to breathtaking destinations across the globe.
          </p>
          <p>
            Whether you're dreaming of basking in the sun on a tropical beach,
            exploring ancient ruins, or embarking on an adventurous trek through
            the mountains, we have the perfect itinerary for you. Our expert
            team is dedicated to providing personalized service, ensuring that
            every detail of your trip is taken care of.
          </p>
          <p>
            Join us at Wanderlust Travels and turn your travel dreams into
            reality. Let's create memories that will last a lifetime!
          </p>
          <button className="see-more-button">See More</button>
        </div>
        <img
          src="https://i.pinimg.com/736x/72/c3/1e/72c31e0361cf2a7c891288b1cf647198.jpg"
          alt="Пляж"
          className="info-image"
        />
      </div>
    );
  }
}

// Компонент для отображения изображений
class ImageRow extends Component {
  render() {
    const images = [
      {
        url: "https://imgfon.ru/Images/Original/Nature/voda-nebo-gorizont-zakat-skalyi.jpg",
        caption: "Colorful sea of Spain",
      },
      {
        url: "https://img.goodfon.ru/original/5969x3985/3/e5/rassvet-more-priboy-volny.jpg",
        caption: "Peaceful beach in Bahama",
      },
      {
        url: "https://img.goodfon.com/original/6020x4014/7/50/more-priboy-oblaka-zakat.jpg",
        caption: "Sunset in Ibiza",
      },
    ];

    return (
      <div className="image-row">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img
              src={image.url}
              alt={`Изображение ${index + 1}`}
              className="image"
            />
            <p className="image-caption">{image.caption}</p>
          </div>
        ))}
      </div>
    );
  }
}

// Компонент для списка элементов
class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Spain", "Bahama", "Ibiza"],
      showModal: false,
      selectedItem: "",
    };
  }

  openModal = (item) => {
    this.setState({ showModal: true, selectedItem: item });
  };

  closeModal = () => {
    this.setState({ showModal: false, selectedItem: "" });
  };

  render() {
    return (
      <div>
        <ul className="item-list">
          {this.state.items.map((item, index) => (
            <ListItem key={index} item={item} openModal={this.openModal} />
          ))}
        </ul>
        {this.state.showModal && (
          <Modal item={this.state.selectedItem} closeModal={this.closeModal} />
        )}
      </div>
    );
  }
}

// Компонент для отдельного элемента списка
class ListItem extends Component {
  render() {
    return (
      <li
        className="list-item"
        onClick={() => this.props.openModal(this.props.item)}
      >
        {this.props.item}
      </li>
    );
  }
}

// Компонент модального окна
class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.props.closeModal}>
            &times;
          </span>
          <p>Вы выбрали: {this.props.item}</p>
        </div>
      </div>
    );
  }
}

/* class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>We work 24/7 to make your life happier</p>
        <p>
          <a href="tel" className="footer-link">
            Телефон: +7 (978) 253-148
          </a>
        </p>
        <p>
          <a href="mailto:tour@gmail.com" className="footer-link">
            Email: tour@gmail.com
          </a>
        </p>
        <p>TOURALLTHEWORLD</p>
      </footer>
    );
  }
} */
  class Footer extends Component {
    render() {
      return (
        <footer className="footer">
          <p>We work 24/7 to make your life happier</p>
          <p>
            <a href="tel" className="footer-link">
              Телефон: +7 (978) 253-148
            </a>
          </p>
          <p>
            <a href="mailto:tour@gmail.com" className="footer-link">
              Email: tour@gmail.com
            </a>
          </p>
          <p>TOURALLTHEWORLD</p>
        </footer>
      );
    }
  }

// Экспорт основного компонента
export default App;
