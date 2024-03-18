import { useState, useEffect, useRef } from 'react'

const useInview = () => {
  const [inView, setInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(entries => {
      setInView(entries[0].isIntersecting)
    })

    if(el) observer.observe(el)

    return () => {
      if(el) observer.unobserve(el)
    }

  }, [])


  return { inView, ref }
}

export default useInview