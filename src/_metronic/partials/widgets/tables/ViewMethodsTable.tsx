/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
}

const ViewMethodsTable: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      {/* begin::Body */}
      <div className='card-body ps-0 pe-0 py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead className='border-bottom-1'>
              <tr className='text-muted'>
                <th className='min-w-175px'>Shipping Name</th>
                <th className='min-w-150px'>ETA</th>
                <th className='min-w-150px'>Tracking</th>
                <th className='min-w-125px'>Price</th>
                
                {/* <th className='min-w-120px'></th> */}
               
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                
                <td>
                  <span className='text-dark  text-hover-primary fs-7'>
                   AliExpress Standard Shipping
                  </span>
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    15-20 Days
                  </span>
                  
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    Available
                  </span>
                 
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    1.25$
                  </span>
                  
                </td>
                {/* <td className='text-dark  text-hover-primary fs-7'>$3560</td> */}
                
              </tr>
              <tr>
                
                <td>
                  <span className='text-dark  text-hover-primary fs-7'>
                  AliExpress Saver Shipping
                  </span>
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    21-30 Days
                  </span>
                  
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    Not Available
                  </span>
               
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    0.75$
                  </span>
                  
                </td>
                {/* <td className='text-dark  text-hover-primary fs-7'>$4850</td> */}
                
              </tr>
              <tr>
                
                <td>
                  <span className='text-dark  text-hover-primary fs-7'>
                    DHL
                  </span>
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    4-7 Days
                  </span>
                  
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    Available
                  </span>
                </td>

                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    25.50$
                  </span>
                 
                </td>
                {/* <td className='text-dark  text-hover-primary fs-7'>$8376</td> */}
                
              </tr>
              <tr>
                
                <td>
                  <span className='text-dark  text-hover-primary fs-7'>
                    FedEx Express
                  </span>
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    3-8 Days
                  </span>
                 
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                  Available
                  </span>
                 
                </td>
                <td>
                  <span className='text-dark  text-hover-primary d-block mb-1 fs-7'>
                    32.00$
                  </span>
                
                </td>
                {/* <td className='text-dark  text-hover-primary fs-7'>$9486</td> */}
                
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

export {ViewMethodsTable}







