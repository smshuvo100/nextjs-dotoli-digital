"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { AudioPlayer } from "./AudioPlayer";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <>
      <section className="header-wrapper">
        <div className="container">
          <header className="header">
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={120} height={20} priority />
            </Link>

            <div className="toggle-container">
              <ThemeToggle />
              <AudioPlayer />
            </div>

            <div className="header-controls">
              <button onClick={toggleMenu} className="menu-button" aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
                <div className="menu-icon">{isMenuOpen ? <RxCross1 style={{ fontSize: "1.25rem" }} /> : <RxHamburgerMenu style={{ fontSize: "1.25rem" }} />}</div>
              </button>
            </div>
          </header>
        </div>
      </section>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "visible" : ""}`} aria-hidden={!isMenuOpen}>
        <div className="menu-container">
          <div className="menu-wrapper">
            <nav className="menu-nav">
              <ul>
                <li>
                  <Link href="/work" className="title-1 menu-link" onClick={closeMenu}>
                    work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="title-1 menu-link" onClick={closeMenu}>
                    about
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="title-1 menu-link" onClick={closeMenu}>
                    services
                  </Link>
                </li>

                <li>
                  <Link href="/team" className="title-1 menu-link" onClick={closeMenu}>
                    team
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="title-1 menu-link" onClick={closeMenu}>
                    contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="menu-social">
              <div className="info">
                <a className="email" href="mailto:hello@trionn">
                  hello@trionn.com
                </a>
                <a href="tel:+889824182099">+88 98241 82099</a>
              </div>
              <div className="socials-m">
                <a className="s-item" href="">
                  <Image src="/images/dribble.svg" alt="" width={64} height={64} />
                </a>
                <a className="s-item" href="">
                  <Image src="/images/linkedin.svg" alt="" width={64} height={64} />
                </a>
                <a className="s-item" href="">
                  <Image src="/images/instagram.svg" alt="" width={64} height={64} />
                </a>
                <a className="s-item" href="">
                  <Image src="/images/behance.svg" alt="" width={64} height={64} />
                </a>
                <a className="s-item" href="">
                  <Image src="/images/facebook.svg" alt="" width={64} height={64} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? "visible" : ""}`} onClick={closeMenu} aria-hidden={!isMenuOpen} />
    </>
  );
}

export default Header;
