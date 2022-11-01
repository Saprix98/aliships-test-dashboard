/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {ViewMethodsTable} from '../../../../_metronic/partials/widgets'
import {EditProductModal} from '../../../../app/pages/get ships/EditProductModal'

type Props = {
  className: string
}

const TablesWidget11: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>All Products</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>Total 500 products</span>
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
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted bg-light'>
                <th className='ps-4 min-w-325px rounded-start'>Product</th>
                <th className='min-w-150px'>Vender</th>
                <th className='min-w-150px'>Source</th>
                <th className='min-w-150px'>Status</th>
                <th className='min-w-150px text-end pe-4 rounded-end'> Actions</th>
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
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $2,790
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $520
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
                </td>
                {/* <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Bradly Beal
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Insurance</span>
                </td> */}
                <td>
                  <span className='badge badge-light-primary fs-7 fw-semibold'>Approved</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' data-bs-toggle="modal"  data-bs-target="#kt_modal_view_methods"
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                   {/* begin::Action Modal Box*/}

                        <div className="modal fade" tabIndex={-1} id="kt_modal_view_methods">
                          <div className="modal-dialog mw-md-700px mw-sm-550px mt-20">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Select Country: </h5>
                                <select className="form-select form-select-solid w-50" aria-label="Select example">
                                    <option value="1">Israel</option>
                                    <option value="2">United States</option>
                                    <option value="3">Italy</option>
                                    <option value="4">Spain</option>
                                  </select>
                                <div
                                  className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <KTSVG
                                    path="/media/icons/duotune/arrows/arr061.svg"
                                    className="svg-icon svg-icon-2x"
                                  />
                                </div>
                              </div>
                              <div className="text-start modal-body">
                                <div className='israel-results'>                                                                                                   
                                   <ViewMethodsTable className='mb-5 mb-xl-8'/>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                   {/* end::Action Modal Box */}


                  
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1' data-bs-toggle="modal"  data-bs-target="#kt_modal_edit_methods"
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>

                    {/* begin::Action Modal Box*/}

                    <div className="modal fade" tabIndex={-1} id="kt_modal_edit_methods">
                          <div className="modal-dialog mw-md-700px mw-sm-550px mt-20">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Edit Product mapping</h5>
                                
                                <div
                                  className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  <KTSVG
                                    path="/media/icons/duotune/arrows/arr061.svg"
                                    className="svg-icon svg-icon-2x"
                                  />
                                </div>
                              </div>
                              <div className="text-start modal-body">
                                <div className='israel-results'>                                                                                                   
                               < EditProductModal
                                    productImg='/media/stock/600x400/img-26.jpg'
                                    productName='Sant Extreanet Solution'
                                    source='DSers / AliExpress'
                                    aliUrl='Https://aliexpress.com/item/1005004701491801.html/'
                                    // totalEarnings='$236,400'
                               />
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                   {/* end::Action Modal Box */}



                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
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
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $4,790
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $240
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
                </td>
                {/* <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Chris Thompson
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>NBA Player</span>
                </td> */}
                <td>
                  <span className='badge badge-light-danger fs-7 fw-semibold'>In Progress</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
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
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $4,390
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $593
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
                </td>
                {/* <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Zoey McGee
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Ruby Developer</span>
                </td> */}
                <td>
                  <span className='badge badge-light-success fs-7 fw-semibold'>Success</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
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
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $7,990
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $980
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
                </td>
                {/* <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Brandon Ingram
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Insurance</span>
                </td> */}
                <td>
                  <span className='badge badge-light-info fs-7 fw-semibold'>Rejected</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
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
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $5,790
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    $750
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
                </td>
                {/* <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                    Natali Trump
                  </a>
                  <span className='text-muted fw-semibold text-muted d-block fs-7'>Insurance</span>
                </td> */}
                <td>
                  <span className='badge badge-light-warning fs-7 fw-semibold'>Approved</span>
                </td>
                <td className='text-end'>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a>
                  <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a>
                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
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

export {TablesWidget11}
