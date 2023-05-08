import { Locale } from '@/i18n-config'
import Navbar from '@/components/layouts/Navbar'
import HeroHome from '@/components/homes/Hero'
import Footer from '@/components/layouts/Footer'
import MovesPic from '@/public/screenshots/moves.png'
import MovesSlideshowPic from '@/public/screenshots/moves-slideshow.png'
import RenamesPic from '@/public/screenshots/renames.png'
import OrganizesPic from '@/public/screenshots/organizes.png'
import DeletesPic from '@/public/screenshots/deletes.png'
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
            <h1 className="text-3xl md:text-4xl font-bold">Move files</h1>
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
            <h1 className="text-3xl md:text-4xl font-bold">Move files with preview and slideshow</h1>
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
            <h1 className="text-3xl md:text-4xl font-bold">Rename files</h1>
            <p className="py-6 text-xl">
                Delete files by your preference in path.
            </p>
            <ul className="list-disc text-xl">
              <li className="ml-6">
                  Add prefix or suffix to your files.
              </li>
              <li className="ml-6">
                  Replace specific texts to a new text that you want.
              </li>
            </ul>
          </div>
        </SectionHomes>
        <SectionHomes isRight={ false } isGrey={ true }>
          <Image
            width="1282"
            height="752"
            alt="image #4"
            src={ OrganizesPic }
            className="md:max-w-md max-w-full rounded-lg shadow-2xl animate__animated"
            data-animate="animate__flipInY"
          />
          <div className="grow">
            <h1 className="text-3xl md:text-4xl font-bold">Organize files</h1>
            <p className="py-6 text-xl">
              Organize your files by text, file type, or file extension. Organized files will be in directory
            </p>
            <ul className="list-disc text-xl">
              <li className="ml-6">
                Organize files by Type.
              </li>
              <li className="ml-6">
                Organize files by Text.
              </li>
              <li className="ml-6">
                Organize files by Extension.
              </li>
            </ul>
          </div>
        </SectionHomes>
        <SectionHomes isRight={ true } isGrey={ false }>
          <Image
            width="1282"
            height="752"
            alt="image #5"
            src={ DeletesPic }
            className="md:max-w-md max-w-full rounded-lg shadow-2xl animate__animated"
            data-animate="animate__flipInY"
          />
          <div className="grow">
            <h1 className="text-3xl md:text-4xl font-bold">Delete files</h1>
            <p className="py-6 text-xl">
              Delete files by your preference in path.
            </p>
            <ul className="list-disc text-xl">
              <li className="ml-6">
                Delete files by Type.
              </li>
              <li className="ml-6">
                Delete files by included, prefix or suffix Text.
              </li>
              <li className="ml-6">
                Delete files by Extension.
              </li>
            </ul>
          </div>
        </SectionHomes>
        <CustomizeSection />
        <ConfigurationSection />
      </div>
    </>
  )
}

export default Page
