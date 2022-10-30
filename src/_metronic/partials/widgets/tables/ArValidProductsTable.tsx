/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
}

const ArValidProductsTable: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-0 ps-0 pe-0 '>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>All Valid Products</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Total 15 products</span>
        </h3>
        {/* <div className='card-toolbar'>
          <a href='#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            New Member
          </a>
        </div> */}
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3 pe-0 ps-0'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-250 rounded-start'>Product</th>
                <th className='min-w-125px text-end pe-4 rounded-end'> </th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-26.jpg')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Sant Extreanet Solution
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
                
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-3.jpg')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Telegram Development
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        C#, ASP.NET, MS SQL
                      </span>
                    </div>
                  </div>
                </td>
               
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-9.jpg')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Payroll Application
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        PHP, Laravel, VueJS
                      </span>
                    </div>
                  </div>
                </td>
                
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-18.jpg')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        HR Management System
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        Python, PostgreSQL, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
                
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                 
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <div className='symbol symbol-50px me-5'>
                      <img
                        src={toAbsoluteUrl('/media/stock/600x400/img-8.jpg')}
                        className=''
                        alt=''
                      />
                    </div>
                    <div className='d-flex justify-content-start flex-column'>
                      <a href='#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                        Telegram Mobile
                      </a>
                      <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        HTML, JS, ReactJS
                      </span>
                    </div>
                  </div>
                </td>
               
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                 
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {ArValidProductsTable}
