import { useMemo } from 'react'

interface Props {
  children: React.ReactElement | React.ReactElement[] | string
  isRight?: boolean
  isGrey?: boolean
}

function SectionHomes({ children, isRight, isGrey }: Props) {
  const containerClassName = useMemo(() => {
    const result = [ 'hero', 'md:py-24', 'md:px-0', 'px-4', 'py-12' ]
    if (isGrey) result.push('bg-base-200')

    return result.join(' ')
  }, [ isGrey ])

  const contentClassName = useMemo(() => {
    const result = [ 'hero-content', 'max-w-content', 'flex-col', 'md:gap-24', 'w-full' ]
    if (isRight) result.push('md:flex-row-reverse')
    else result.push('md:flex-row')

    return result.join(' ')
  }, [ isRight ])

  return (
    <section className={ containerClassName }>
      <div className={ contentClassName }>
        { children }
      </div>
    </section>
  )
}

export default SectionHomes
