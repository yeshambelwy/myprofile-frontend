import React, { Component } from "react";

//components
import NavBar from "./Components/NavBar/navBar";
import SideBarDrawer from "./Components/SideBarDrawer/sideBarDrawer";
import BackDrop from "./Components/BackDrop/backDrop";

//Pages
import Home from "./pages/Home/home";
import Contact from "./pages/Contact/contact";
import Project from "./pages/Project/project";
import Portfolio from "./pages/Portfolio/portfolio";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    buttonClass: "toggle-button",
  };

  drawerToggleClickHandler = () => {
    if (this.state.sideDrawerOpen === false) {
      let buttonClass = this.state.buttonClass + " active";
      this.setState({ buttonClass: buttonClass });
    } else {
      let buttonClass = "toggle-button";
      this.setState({ buttonClass: buttonClass });

    }
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler} />;
    }
    return (
      <>
        <div style={{ height: "100%" }}>
          <NavBar
            drawerClickHandler={this.drawerToggleClickHandler}
            buttonClass={this.state.buttonClass}
          />
          <SideBarDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: "64px" }}>
            <Home />
            <Project />
            <Portfolio />
            <Contact />
          </main>
        </div>
      </>
    );
  }
}

export default App;
