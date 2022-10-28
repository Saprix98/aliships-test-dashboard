/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  image: string
  title: string
  time: string
  description: string
}

const StatisticsWidget1: React.FC<Props> = ({className, image, title, time, description}) => {
  return (
    <div
      className={`card bgi-no-repeat ${className}`}
      style={{
        backgroundPosition: 'right top',
        backgroundSize: '30% auto',
        backgroundImage: `url(${toAbsoluteUrl('/media/svg/shapes/' + image)})`,
      }}
    >
      {/* begin::Body */}
      <div className='card-body'>
        <a href='#' className='card-title fw-bold text-muted text-hover-primary fs-3'>
          {title}
        </a>

        <div className='fw-bold text-primary my-4 fs-5'>{time}</div>

        <p
          className='text-dark-75 fw-semibold fs-6 m-0'
          dangerouslySetInnerHTML={{__html: description}}
        ></p>
            {/* float: right;
            position: absolute;
            right: 10%;
            top: 35%; */}
        <div className='col-6 mt-5 mt-sm-n5 mb-xl-10 position-relativ position-sm-absolute end-25 top-50' >
          <button type='submit' className='btn btn-lg btn-primary me-3 float-sm-end'>
              <span className='indicator-label'>                     
                Start Import
              </span>
          </button>
        </div>

      </div>
      
      {/* end::Body */}
    </div>
  )
}

export {StatisticsWidget1}
