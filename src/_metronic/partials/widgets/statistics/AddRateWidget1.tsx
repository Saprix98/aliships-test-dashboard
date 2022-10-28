/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {toAbsoluteUrl} from '../../../helpers'
// import {KTSVG} from '../../../helpers'
import {AddRateVertical} from '../../../../app/modules/wizards/components/AddRateVertical'

type Props = {
  className: string
  image: string
  title: string
  time: string
  description: string
}

const AddRateWidget1: React.FC<Props> = ({className, image, title, time, description}) => {
  return (
    <div
      className={`card bgi-no-repeat ${className}`}
      style={{
        backgroundPosition: 'right top',
        backgroundSize: '30% auto',
        backgroundImage: `url(${toAbsoluteUrl('/media/svg/shape/' + image)})`,
      }}
    >
      {/* begin::Body */}
      <div className='card-body pt-5'>
        <div className="card-header border-0 p-0 mt-0 ">
        <h3 className='card-title flex-column justify-content-start mt-0 '>
          <span className='card-label fw-bold text-dark'>{title}</span>
          <span className='text-muted mt-1 fw-semibold fs-7' dangerouslySetInnerHTML={{__html: description}}></span>
        </h3>
        </div>
        <div className='fw-bold text-primary my-4 fs-5'>{time}</div>

        {/* <p
          className='text-dark-75 fw-semibold fs-6 m-0'
          dangerouslySetInnerHTML={{__html: description}}
        ></p> */}
            {/* float: right;
            position: absolute;
            right: 10%;
            top: 35%; */}
        <div className='col-6 mt-5 mt-sm-n5 mb-xl-10 me-4 position-relativ position-sm-absolute end-0 top-25' >
           <button 
             type='submit' 
             className='btn btn-sm btn-primary me-3 float-sm-end'
             data-bs-toggle="modal"
             data-bs-target="#kt_modal_2"
            >
              <span className='indicator-label'>                     
                Add Rate
              </span>
          </button>
          <AddRateVertical />
       </div>
     </div> 
      
      {/* end::Body */}
    </div>
  )
}

export {AddRateWidget1}
