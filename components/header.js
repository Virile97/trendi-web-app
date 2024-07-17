import { useState } from 'react'

import Image from 'next/image'
import Container from '@components/container'

import { cart, user, like } from '@constants/icons'

const Header = () => {
  const [dimensions, setDimensions] = useState({ width: 3, height: 3 })
  const [maxDimensions] = useState({
    width: vw(2.5),
    height: vh(2.5),
  })

  function vh (percent) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    )
    return (percent * h) / 100
  }

  function vw (percent) {
    var w = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    )
    return (percent * w) / 100
  }

  function resize(dimensions) {
    const { width, height } = dimensions
    const widthScale = maxDimensions.width / width
    const heightScale = maxDimensions.height / height
    const scale = Math.min(widthScale, heightScale)

    const resizeWidth = width * scale
    const resizeHeight = height * scale

    return { width: resizeWidth, height: resizeHeight }
  }

  const links = ['Track Order', 'Register', 'Login']
  const icons = [like, user, cart]

  const _headerTop = (
    <div className='bg-black text-white flex justify-center py-1 px-10'>
      <Container className='flex gap-5 justify-end text-sm'>
        {links.map((link, i) => (
          <div key={i} className='cursor-pointer'>{link}</div>
        ))}
      </Container>
    </div>
  )

    const _shopLogo = (
      <div>Logo</div>
    )

    const _shopLinks = (
      <div className='flex gap-5'>
        {icons.map((icon, i) => (
          <Image 
            key={i}
            src={icon}
            alt='icons'
            placeholder="empty"
            className='cursor-pointer'
            width={dimensions.width}
            height={dimensions.height}
            style={{ objectFit: 'contain' }}
            onLoad={(e) => {
                setDimensions(
                  resize({
                    width: e.target.naturalWidth,
                    height: e.target.naturalHeight,
                  })
                )
              }}
              {...dimensions}
          />
        ))}   
      </div>
    )

    return(
        <div>
            {_headerTop}
            <div className='flex justify-center border-b py-5 px-10'>
                <Container className='flex justify-between'>
                {_shopLogo}
                {_shopLinks}
                </Container>
            </div>
        </div>
    )
}

export default Header