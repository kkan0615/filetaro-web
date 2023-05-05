'use client'

import { useEffect } from 'react'

function AnimationsHomes() {
  useEffect(() => {
    // Find all animate list
    const animateElList = document.querySelectorAll('[data-animate]:not([value=""])')
    if (!animateElList || !animateElList.length) return

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const intersecting = entry.isIntersecting

        const animate = entry.target.getAttribute('data-animate')
        if (intersecting) {
          if (animate) entry.target.classList.add(animate)
        } else {
          if (animate) entry.target.classList.remove(animate)
        }
      })
    })
    animateElList.forEach(animateEl => observer.observe(animateEl))

    // Disconnect
    return () => observer.disconnect()
  }, [])

  return (<></>)
}

export default AnimationsHomes
