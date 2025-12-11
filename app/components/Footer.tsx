import Link from 'next/link';
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-100 text-base-content">
        <nav className="grid grid-flow-col gap-4">
          <Link className="link link-hover" href="/">HOME</Link>
          <Link className="link link-hover" href="/Work">WORK</Link>
          <Link className="link link-hover" href="/CV">CV</Link>
          <Link className="link link-hover" href="/Info">INFO</Link>
        </nav>

        <aside>
          <p>Copyright © {currentYear} - All right reserved by Jack Chin</p>
          <p>&lt;/&gt; by Vincexodus</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer
