"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);

    // ✅ Handle scroll locking
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <section className={`header-wrapper ${isMenuOpen ? "active" : ""}`}>
        <div className="container">
          <header className="header">
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={140} height={60} priority />
            </Link>

            <div className="toggle-container">
              <ThemeToggle />
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
                  <Link href="/our-work" className="title-1 menu-link" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="title-1 menu-link" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
                    About Us
                  </Link>
                </li>

                <li className="menu-dropdown">
                  <div className="services-link-wrapper">
                    <Link
                      href="/services"
                      className="title-1 menu-link"
                      onClick={closeMenu}
                      tabIndex={isMenuOpen ? 0 : -1}
                    >
                      Services
                    </Link>
                    <button
                      className="dropdown-toggle-btn"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      tabIndex={isMenuOpen ? 0 : -1}
                      aria-label="Toggle Services Dropdown"
                    >
                      {dropdownOpen ? "▲" : "▼"}
                    </button>
                  </div>

                  {dropdownOpen && (
                    <ul className="dropdown-list">
                      <li><Link href="/services/digital-marketing" className="dropdown-link" onClick={closeMenu}>Digital Marketing</Link></li>
                      <li><Link href="/services/website-development" className="dropdown-link" onClick={closeMenu}>Website Development</Link></li>
                      <li><Link href="/services/seo-expert" className="dropdown-link" onClick={closeMenu}>SEO Expert</Link></li>
                      <li><Link href="/services/vr-experiences" className="dropdown-link" onClick={closeMenu}>VR Experiences</Link></li>
                      <li><Link href="/services/branding-creative" className="dropdown-link" onClick={closeMenu}>Branding & Creative</Link></li>
                      <li><Link href="/services/crm-automation" className="dropdown-link" onClick={closeMenu}>CRM & Automation</Link></li>
                      <li><Link href="/services/ai-agents" className="dropdown-link" onClick={closeMenu}>AI Agents & Chatbots</Link></li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link href="/team" className="title-1 menu-link" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
                    Teams
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="title-1 menu-link" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="title-1 menu-link" onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="menu-social">
              <div className="info">
                <a className="email" href="mailto:info@dotolidigital.com" tabIndex={isMenuOpen ? 0 : -1}>
                  info@dotolidigital.com
                </a>
                <a href="tel:9543838093" tabIndex={isMenuOpen ? 0 : -1}>
                  (954) 383-8093
                </a>
              </div>

              <div className="socials-m">
                <a className="s-item" target="_blank" href="https://www.linkedin.com/company/dotoli-digital/" tabIndex={isMenuOpen ? 0 : -1}>
                  <Image src="/images/linkedin.svg" alt="linkedin" width={64} height={64} />
                </a>
                <a className="s-item" target="_blank" href="https://www.instagram.com/dotolidigital/" tabIndex={isMenuOpen ? 0 : -1}>
                  <Image src="/images/instagram.svg" alt="instagram" width={64} height={64} />
                </a>
                <a className="s-item" target="_blank" href="#" tabIndex={isMenuOpen ? 0 : -1}>
                  <Image src="/images/youtube1.svg" alt="youtube1" width={64} height={64} />
                </a>
                <a className="s-item" target="_blank" href="https://www.facebook.com/profile.php?id=61578050977417" tabIndex={isMenuOpen ? 0 : -1}>
                  <Image src="/images/facebook.svg" alt="facebook" width={64} height={64} />
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
