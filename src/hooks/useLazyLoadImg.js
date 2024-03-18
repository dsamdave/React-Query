import { useEffect } from 'react'
import useInview from './useInView'

const useLazyLoadImg = () => {
  const { ref, inView } = useInview()

  useEffect(() => {
    const img = ref.current;

    if(inView){
      img.setAttribute("src", img.alt)
      img.classList.add("active")
    }
   
  }, [inView, ref])

  return { ref }
}

export default useLazyLoadImg