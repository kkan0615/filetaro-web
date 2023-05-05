import Image from 'next/image'
import { AiOutlineBook, AiOutlineDownload } from 'react-icons/ai'
import landingPic from '@/public/landing.png'
import { AppConfig } from '@/app.config'

function HeroHome() {
  return (
    <div className="hero min-h-[624px] bg-secondary text-secondary-content pt-16">
      <div className="hero-content md:gap-24 gap-8 flex-col md:flex-row-reverse py-24">
        <Image className="max-w-full animate__animated animate__bounce" width="500" height="200" src={ landingPic } alt="landing-picture" />
        <div>
          <h3 className="text-4xl font-bold">
            Filetaro - High Level File handler
          </h3>
          <p className="text-xl mt-4">
            Filetaro is powerful program that helps you to rename, organize, or delete files easily. Filetaro provides many features.
            Our program supports many OS such as Window, Mac, and Linux
          </p>
          <div className="flex space-x-4 mt-4 md:mt-12">
            <a
              href={ AppConfig.links.download }
              className="btn btn-primary rounded-full"
              target="_blank"
            >
              <AiOutlineDownload className="mr-2 text-2xl" />
              Download
            </a>
            <a
              href={ AppConfig.links.changelog }
              className="btn btn-accent btn-outline rounded-full"
              target="_blank"
            >
              <AiOutlineBook className="mr-2 text-2xl" />
              Changelog
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHome
