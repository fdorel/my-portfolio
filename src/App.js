import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'
import Footer from './components/Footer'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import './App.css';
import logo from './components/images/logo.png';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'My Portfolio',
      headerLinks: [
        { title: 'My Projects', path: '/' },
        { title: 'About Me', path: '/about' },
        { title: `'Let's talk'`, path: '/contact' }
      ],
      projects: {
        title: 'Creativity\n &\n Enthusiasm',
        subTitle: 'This is what I use for making websites and apps',
        text: 'You can visit my projects down below'
      },
      about: {
        title: 'Some words about me'
      },
      contact: {
        title: `Keep in touch`
      }
    }
  }
  
  render() {
    return (
      <Router>
        <Container className="p-0 justify-content-center" fluid={true}>
          <Navbar className="navbar justify-content-center border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand><img src={logo} alt="logo" /></Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">My Projects</Link>
                <Link className="nav-link" to="/about">About Me</Link>
                <Link className="nav-link" to="/contact">Let's Talk</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <Projects title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text} />} />
          <Route path="/about" render={() => <About title={this.state.about.title} />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
