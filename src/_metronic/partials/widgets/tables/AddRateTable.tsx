/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import  {ArValidProductsTable} from '../../../../_metronic/partials/widgets'


type Props = {
  className: string
}

const AddRateTable: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className=''>
        
        <div className='card-toolbar pe-5 ps-5 text-end'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          {/* begin::Menu 2 */}
          <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
            data-kt-menu='true'
          >
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content fs-6 text-dark fw-bold px-3 py-4'>Quick Actions</div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mb-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Ticket
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Customer
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div
              className='menu-item px-3'
              data-kt-menu-trigger='hover'
              data-kt-menu-placement='right-start'
              data-kt-menu-flip='left-start, top'
            >
              {/* begin::Menu item */}
              <a href='#' className='menu-link px-3'>
                <span className='menu-title'>New Group</span>
                <span className='menu-arrow'></span>
              </a>
              {/* end::Menu item */}
              {/* begin::Menu sub */}
              <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Admin Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Staff Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className='menu-item px-3'>
                  <a href='#' className='menu-link px-3'>
                    Member Group
                  </a>
                </div>
                {/* end::Menu item */}
              </div>
              {/* end::Menu sub */}
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <a href='#' className='menu-link px-3'>
                New Contact
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className='separator mt-3 opacity-75'></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className='menu-item px-3'>
              <div className='menu-content px-3 py-3'>
                <a className='btn btn-primary btn-sm px-4' href='#'>
                  Generate Reports
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-0 pb-0'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
                <th className='min-w-150px'>Service ID</th>
                <th className='min-w-140px'>Shipping Name</th>
                <th className='min-w-120px'>Countries</th>
                <th className='min-w-120px'>ETA</th>
                <th className='min-w-120px'>Valid Products</th>
                {/* <th className='min-w-120px'></th> */}
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                   #AS1001
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Standard Shipping
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    <b>146 </b>From 250
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    7 - 14 Days
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                {/* <td className='text-dark fw-bold text-hover-primary fs-6'>$3560</td> */}
                <td>
                  <span >
                  <a className="badge badge-light-success" href='#'data-bs-toggle="modal" data-bs-target="#kt_modal_valid_products" >15 From 1,000</a>
                  </span>
                       
                  {/* begin::Action Modal Box*/}                
                  <div className="modal fade" tabIndex={-1} id="kt_modal_valid_products">
                          <div className="modal-dialog mt-20">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title"> </h5>
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
                              <div className="text-start modal-body pt-2 pb-0">                            
                                <ArValidProductsTable className='card-xl-stretch mb-5 mb-xl-8' />
                              </div>

                              
                            </div>
                          </div>
                        </div>
                   {/* end::Action Modal Box */}
                </td>
                <td className='text-end'>
                  {/* <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a> */}
                  {/* <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a> */}
                  
                  
                  {/* begin::Action Modal Box*/}
                  <button type="button"
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_1"
                        >
                          <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />                         
                       </button>

                        <div className=" modal fade" tabIndex={-1} id="kt_modal_1">
                          <div className="modal-dialog mt-20">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Edit Service</h5>
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
                            <div className="text-start modal-body pt-2">
                              <div className="mb-10">
                                <label htmlFor="exampleFormControlInput1" className="required form-label">Countries</label>
                                <select className="form-select form-select-solid" aria-label="Select example">
                                  <option>Open this select menu</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                              </div>

                                <div className="mb-10">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">New Name</label>
                                    <input type="email" className="form-control form-control-solid" placeholder="Standard Shipping"/>
                                </div>
                              

                              <div className="mb-10">
                                 <label htmlFor="exampleFormControlInput1" className="required form-label mb-5">Show Service</label><br></br>
                                <div className="form-check form-switch form-check-custom form-check-solid">
                                  <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault"/>
                                  <label className="form-check-label" htmlFor="flexSwitchDefault">
                                  Publish
                                  </label>
                                </div>
                              </div>  
                            </div>

                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-light"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                  Save changes
                                </button>
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
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                  #AS1002
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    Express Shipping
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: BY</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    15 From 250
                  </a>
                      

                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    3 - 7 Days
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Houses &amp; Hotels
                  </span> */}
                </td>
                {/* <td className='text-dark fw-bold text-hover-primary fs-6'>$4850</td> */}
                <td>
                  <span>
                  <a className="badge badge-light-danger" href='#'data-bs-toggle="modal" data-bs-target="#kt_modal_valid_products" >0 From 1,000</a>
                  </span>
                  {/* begin::Action Modal Box*/}                
                  <div className="modal fade" tabIndex={-1} id="kt_modal_valid_products">
                          <div className="modal-dialog mt-20">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Valid Products</h5>
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
                              <div className="text-start modal-body pt-2 pb-0">                            
                                <ArValidProductsTable className='card-xl-stretch mb-5 mb-xl-8' />
                              </div>

                              
                            </div>
                          </div>
                        </div>
                   {/* end::Action Modal Box */}
                </td>
                <td className='text-end'>
                  {/* <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                  </a> */}
                  {/* <a
                    href='#'
                    className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                  >
                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                  </a> */}

                  {/* begin::Action Modal Box*/}
                  <button type="button"
                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                          data-bs-toggle="modal"
                          data-bs-target="#kt_modal_1"
                        >
                          <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />                         
                       </button>

                        <div className=" modal fade" tabIndex={-1} id="kt_modal_1">
                          <div className="modal-dialog mt-20">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title">Edit Service</h5>
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
                              <div className="text-start modal-body pt-2">
                                <div className="mb-10">
                                  <label htmlFor="exampleFormControlInput1" className="required form-label">Countries</label>   
                                  <select className="form-select form-select-solid" aria-label="Select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </select>
                                </div>

                                  <div className="mb-10">
                                    <label htmlFor="exampleFormControlInput1" className="required form-label">Example</label>
                                    <input type="email" className="form-control form-control-solid" placeholder="Example input"/>
                                  </div>
                              

                                <div className="mb-10">
                                 <label htmlFor="exampleFormControlInput1" className="required form-label mb-5">Show Service</label><br></br>
                                 <div className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault"/>
                                    <label className="form-check-label" htmlFor="flexSwitchDefault">
                                    Publish
                                    </label>
                                  </div>
                                </div>  
                              </div>

                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-light"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                  Save changes
                                </button>
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

export {AddRateTable}







