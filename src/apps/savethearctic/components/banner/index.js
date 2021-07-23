import React, { useState, useEffect } from 'react'
import * as swiperActions from 'store/actions/action-types/swiper-actions'
import * as themeActions from 'store/actions/action-types/theme-actions'
import SwiperCore, {
  Navigation,
  Mousewheel,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { connect } from 'react-redux'

SwiperCore.use([Scrollbar, A11y, Autoplay, Mousewheel])

const Index = ({ swiperData, updateSwiperSlide, slideIndex, toggleTheme }) => {
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    if (!swiper) {
      return
    }

    swiper.slideTo(slideIndex, 1000)
  }, [slideIndex])

  useEffect(() => {
    const mySwiper = document.querySelector(
      '.hero-slider-wrap_halftwo  .swiper-container'
    ).swiper
    setSwiper(mySwiper)
  }, [])

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      mousewheel
      onSlideChange={(swiper) => updateSwiperSlide(swiper.activeIndex)}
    >
      {(swiperData || []).map((d) => {
        const { header, title, description, cta } = d.content
        return (
          <SwiperSlide key={d.id}>
            <div className='swiper-container'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='half-hero-wrap'>
                    <div>
                      {header && <div className='hhw_header'>{header}</div>}
                      {title && (
                        <h1
                          className='hhw_title'
                          dangerouslySetInnerHTML={{ __html: title }}
                        ></h1>
                      )}
                      {description && (
                        <div
                          className='hhw_description'
                          dangerouslySetInnerHTML={{ __html: description }}
                        ></div>
                      )}
                      {cta.link && (
                        <button
                          className='btn fl-btn color-bg'
                          onClick={() => toggleTheme(true)}
                        >
                          <span>{cta.content}</span>
                        </button>
                      )}
                      <div className='clearfix'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

const mapStateToProps = ({ swiper }) => {
  return {
    swiperData: swiper.data,
    slideIndex: swiper.slideIndex,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSwiperSlide: (data) => {
      dispatch({ type: swiperActions.UPDATE_SWIPER_SLIDE, data })
    },
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
