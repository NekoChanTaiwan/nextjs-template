import { BsMoon,BsSun } from 'react-icons/bs'

import { useMounted } from '@/hooks/use-mounted'
import { useTheme } from '@/hooks/use-theme'

function ColorMode() {
  const { isLight, toggleTheme } = useTheme()
  const mounted = useMounted()

  const Icon = mounted && isLight ? BsSun : BsMoon

  return (
    <button
      type='button'
      title='Toggle color mode'
      className='flex items-center rounded-md py-2 px-4 text-xl'
      onClick={toggleTheme}
    >
      <span className='mr-2'>Toggle</span>
      <Icon />
    </button>
  )
}

export default ColorMode
