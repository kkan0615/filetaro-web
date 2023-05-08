import { AppConfig } from '@/app.config'

function Footer() {
  return (
    <footer className="p-10 bg-base-300 ">
      <div className="footer max-w-content mx-auto text-base-content">
        <div>
          <p>Copyright 2023. all rights reserved</p>
        </div>
        <div>
          <span className="footer-title">Download</span>
          <a href={ AppConfig.links.download } target="_blank" className="link link-hover">Download</a>
        </div>
        <div>
          <span className="footer-title">Codes</span>
          <a href={ AppConfig.links.webCode } target="_blank" className="link link-hover">Web</a>
          <a href={ AppConfig.links.programCode } target="_blank" className="link link-hover">Program</a>
        </div>
        <div>
          <span className="footer-title">Donation</span>
          <a href={ AppConfig.links.buyMeACoffee } target="_blank" className="link link-hover">Buy Me A Coffee</a>
          { /*<a className="link link-hover">Patreon</a>*/ }
          <a href={ AppConfig.links['ko-fi'] } target="_blank" className="link link-hover">ko-fi</a>
          { /*<a className="link link-hover">Paypal</a>*/ }
        </div>
      </div>
    </footer>
  )
}

export default Footer
