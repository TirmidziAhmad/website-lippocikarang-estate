import React from "react";
import Button from "elements/Buttons";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${getNavLinkClass("/Beranda")}`}>
                <Button className="nav-link" type="link" href="/Beranda">
                  Beranda
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/Fasilitas")}`}>
                <Button className="nav-link" type="link" href="/Fasilitas">
                  Fasilitas
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/Paket")}`}>
                <Button className="nav-link" type="link" href="/Paket">
                  Paket
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass("/Testimoni")}`}>
                <Button className="nav-link" type="link" href="/Testimoni">
                  Testimoni
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
