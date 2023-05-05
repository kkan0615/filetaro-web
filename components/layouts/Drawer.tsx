import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

interface Props {
  // children: JSX.Element | JSX.Element[] | string
  isOpen: boolean
  close: () => void
}
function Drawer({ isOpen, close }: Props) {
  const handleClose = () => {
    close()
  }

  if (isOpen) {
    return (
      <div className="lg:hidden fixed inset-0 z-50 overflow-auto transition-all duration-200">
        <div onClick={ handleClose } className="fixed inset-0 bg-base-100/20 backdrop-blur-sm"/>
        <div className="relative w-72 min-h-full bg-base-100 p-4">
          <div className="mb-4 navbar items-center">
            <h1 className="text-xl">
              title
            </h1>
            <button
              className="ml-auto"
              type="button"
              onClick={ handleClose }>
              <AiOutlineClose />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link href="/documents">
              Documents
            </Link>
          </nav>
        </div>
      </div>
    )
  }

  return (<></>)
}

export default Drawer
