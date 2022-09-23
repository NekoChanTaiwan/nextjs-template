import { BsSun, BsMoon } from 'react-icons/bs'
import { useColorMode } from '@/hooks/useColorMode'
import { useClientSide } from '@/hooks/useClientSide'

function ColorMode() {
  const { isLight, toggleColorMode } = useColorMode()
  const { isClient } = useClientSide()

  return (
    <button
      className='flex items-center rounded-lg bg-white/70 py-2 px-4 text-xl text-black'
      onClick={toggleColorMode}
    >
      <span className='mr-2'>Toggle</span>
      {isClient && (isLight ? <BsSun /> : <BsMoon />)}
    </button>
  )
}

export default ColorMode
