import { Locale } from '@/i18n-config'
import Navbar from '@/components/layouts/Navbar'
import HeroHome from '@/components/homes/Hero'
import Footer from '@/components/layouts/Footer'
import MovesPic from '@/public/screenshots/moves.png'
import MovesSlideshowPic from '@/public/screenshots/moves-slideshow.png'
import RenamesPic from '@/public/screenshots/renames.png'
import Image from 'next/image'
import AnimationsHomes from '@/components/homes/Animation'
import SectionHomes from '@/components/homes/Section'
import CustomizeSection from '@/components/homes/CustomizeSection'
import ConfigurationSection from '@/components/homes/ConfigurationSection'

interface Page {
  params: {
    lang: Locale
  }
}

function Page({ params }: Page) {

  return (
    <>
      <AnimationsHomes />
      <div className="relative">
        <HeroHome />
        <SectionHomes isRight={ true } isGrey={ false }>
          <Image
            width="1282"
            height="752"
            alt="image #1"
            src={ MovesPic }
            className="md:max-w-md max-w-full rounded-lg shadow-2xl animate__animated"
            data-animate="animate__flipInY"
          />
          <div className="grow">
            <h1 className="text-3xl md:text-5xl font-bold">Move files</h1>
            <p className="py-6 text-xl">
              Move your file to the directory easily. Select directory that you would like to move. Select the files and press directory.
            </p>
          </div>
        </SectionHomes>
        <SectionHomes isRight={ false } isGrey={ true }>
          <Image
            width="1282"
            height="752"
            alt="image #2"
            src={ MovesSlideshowPic }
            className="md:max-w-md max-w-full rounded-lg shadow-2xl animate__animated"
            data-animate="animate__flipInY"
          />
          <div className="grow">
            <h1 className="text-3xl md:text-5xl font-bold">Move files with slideshow preview</h1>
            <p className="py-6 text-xl">
              Check your file and move it in slideshow. You can preview your file before you move.
            </p>
          </div>
        </SectionHomes>
        <SectionHomes isRight={ true } isGrey={ false }>
          <Image
            width="1282"
            height="752"
            alt="image #3"
            src={ RenamesPic }
            className="md:max-w-md max-w-full rounded-lg shadow-2xl animate__animated"
            data-animate="animate__flipInY"
          />
          <div className="grow">
            <h1 className="text-3xl md:text-5xl font-bold">Rename files</h1>
            <p className="py-6 text-xl">
              Rename your files. Add prefix or suffix. Replace specific texts to a new text that you want.
            </p>
          </div>
        </SectionHomes>
        <SectionHomes isRight={ false } isGrey={ true }>
          <Image
            width="1282"
            height="752"
            alt="image #4"
            src={ RenamesPic }
            className="md:max-w-md max-w-full rounded-lg shadow-2xl animate__animated"
            data-animate="animate__flipInY"
          />
          <div className="grow">
            <h1 className="text-3xl md:text-5xl font-bold">Organize files</h1>
            <p className="py-6 text-xl">
              Organize your files by text, file type, or file extension.
            </p>
          </div>
        </SectionHomes>
        <CustomizeSection />
        <ConfigurationSection />
      </div>
    </>
  )
}

export default Page
