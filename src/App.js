import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'
import Footer from './components/Footer'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import './App2.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'My Portfolio',
      headerLinks: [
        { title: 'Projects', path: '/' },
        { title: 'About Me', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      projects: {
        title: 'Creativity\n Development\n Enthusiasm',
        subTitle: 'This is what I use for making websites and apps',
        text: 'See all my projects below'
      },
      about: {
        title: 'Some words about me'
      },
      contact: {
        title: "Let's keep in touch"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>

          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Dorel's Portfolio</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Projects</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
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
