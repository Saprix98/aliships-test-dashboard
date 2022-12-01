/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import  {ArValidProductsTable} from '../../../../_metronic/partials/widgets'
import {useState} from 'react'
import { rawListeners } from 'process'
import { EditRate } from '../../../../app/pages/get ships/EditRate'


type Props = {
  className: string,
  
}

function updateRates1() {
  console.log('fuck you') 
}

const AddRateTable: React.FC<Props> = ({className}) => {

  const [ratesData , setRates] = useState( 
    [
      {
        id: '1',
        serviceId:'#AS1001',
        serviceName:'Standard Shipping',
        countries:'146 From 250',
        serviceEta:'7 - 14 Days',
        validProd:'15 From 1,000',
        validStyle:'badge-light-success'
    },
    
    {
        id: '2',
        serviceId:'#AS1002',
        serviceName:'Express Shipping',
        countries:'15 From 250',
        serviceEta:'3 - 7 Days',
        validProd:'0 From 1,000',
        validStyle:'badge-light-danger'
    }
    ]
    
  );
  

 
  
  
  const displayDataRates = ratesData.map(
    
    (rate) => {return (
          <tr>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary fs-7'>
                   {rate.serviceId}
                  </a>
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                  {rate.serviceName}
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: PH</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                 {rate.countries}
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>Code: Paid</span> */}
                </td>
                <td>
                  <a href='#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-7'>
                    {rate.serviceEta}
                  </a>
                  {/* <span className='text-muted fw-semibold text-muted d-block fs-7'>
                    Web, UI/UX Design
                  </span> */}
                </td>
                {/* <td className='text-dark fw-bold text-hover-primary fs-6'>$3560</td> */}
                <td>
                  <span >
                  <a className={`badge ${rate.validStyle}`} href='#'data-bs-toggle="modal" data-bs-target="#kt_modal_valid_products" >{rate.validProd}</a>
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
                          data-bs-target={`#kt_modal_${rate.id}_addRate`}
                        >
                          <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />                         
                       </button>

                        <EditRate funcOnclick={updateRates1} productName={rate.serviceName} rateID={rate.id}/>
                   {/* end::Action Modal Box */}

                  <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                    <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                  </a>
                </td>
        </tr>


    )})
   

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
              
             {displayDataRates}
              
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







