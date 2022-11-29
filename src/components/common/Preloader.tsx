import { PreloaderSVG } from 'components/svgs/PreloaderSVG'
import React from 'react'
import s from './Preloader.module.scss'

export const Preloader = (props: any) => {
  return (
    <div className={s.preloader}>
      <PreloaderSVG />
    </div>
  )
}
