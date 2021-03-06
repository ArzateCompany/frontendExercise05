import React, { Fragment, Component } from 'react';
import Header from './components/header.jsx'
import Hero from './components/hero.jsx';
import Menu from './components/menu.jsx';
import Featured from './components/featured.jsx';
import BestSeller from './components/bestSeller.jsx';
import Footer from './components/footer.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = () => {
      const element = document.getElementsByClassName('button');

      if (element[0].className === 'button') {
        for (let i = 0; i < element.length; i++) {
          element[i].classList.add('changecolor')
        }
      } else {
        for (let i = 0; i < element.length; i++) {
          element[i].classList.remove('changecolor')
        }
      }
      alert('Id: ${id} , Count: ${count}')
      console.log('I’m not propagating')
    };

    this.state = {
      data: [
        {
          url: 'https://i.ibb.co/1zNpL7J/chamarra03.jpg',
          id: 1,
          type: 'Chaqueta',
          price: '$80.00'
        },
        {
          url: 'https://i.ibb.co/B4M9gkf/casco04.jpg',
          id: 2,
          type: 'Casco',
          price: '$50.00'
        },
        {
          url: 'https://i.ibb.co/QbbQLzb/guantes05.jpg',
          id: 3,
          type: 'Guantes',
          price: '$20.00'
        },
        {
          url: 'https://i.ibb.co/c2TQmVz/chamarra.jpg',
          id: 4,
          type: 'Chaqueta',
          price: '$80.00'
        },
        {
          url: 'https://i.ibb.co/MgVJb2f/casco03.jpg',
          id: 5,
          type: 'Casco',
          price: '$50.00'
        },
        {
          url: 'https://i.ibb.co/F3nLT2h/guantes03.jpg',
          id: 6,
          type: 'Guantes',
          price: '$20.00'
        },
        {
          url: 'https://i.ibb.co/BzdfYmD/chamarra01.jpg',
          id: 7,
          type: 'Chaqueta',
          price: '$80.00'
        },
        {
          url: 'https://i.ibb.co/H467tgV/casco02.jpg',
          id: 8,
          type: 'Casco',
          price: '$50.00'
        },
        {
          url: 'https://i.ibb.co/8xZLDbL/guantes01.jpg',
          id: 9,
          type: 'Guantes',
          price: '$20.00'
        },
        {
          url: 'https://i.ibb.co/YTQqcFb/botas04.jpg',
          id: 10,
          type: 'Botas',
          price: '$30.00'
        },
        {
          url: 'https://i.ibb.co/H467tgV/casco02.jpg',
          id: 11,
          type: 'Casco',
          price: '$50.00'
        },
        {
          url: 'https://i.ibb.co/fSQsgyH/guantes02.jpg',
          id: 12,
          type: 'Guantes',
          price: '$20.00'
        },
      ],
      count: 0,
      f: this.handleChange,
    }
  };

  render() {
    return (
      <Fragment>
        <Header props={this.state} />
        <Hero />
        <Menu props={this.state} />
        <Featured props={this.state} />
        <BestSeller props={this.state} />
        <Footer />
      </Fragment>
    );
  };
};

export default App;