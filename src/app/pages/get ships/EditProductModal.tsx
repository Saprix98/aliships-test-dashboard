/* eslint-disable jsx-a11y/anchor-is-valid */
import { info } from 'console'
import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'

type Props = {
  color?: string
  productImg?: string
  online?: boolean
  productName: string
  source: string
  aliUrl: string
  modID: number
  // totalEarnings: string
}

const EditProductModal: FC<Props> = ({
  color = '',
  productImg,
  online = false,
  productName,
  source,
  aliUrl,
  modID
 
}) => {
  return (

    <div className="modal fade"  id={`kt_modal_edit_methods_${modID}`}>
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
            <div className='card'>
              <div className='card-body d-flex flex-center flex-column p-9 pt-0'>
                <div className ='modal-product-details pb-2 text-center'>
                <div className='mb-5'>
                  <div className='symbol symbol-100px symbol-square'>
                    {color ? (
                      <span className={`symbol-label bg-light-${color} text-${color} fs-5 fw-bolder`}>
                        {productName.charAt(0)}
                      </span>
                    ) : (
                      <img alt='Pic' src={toAbsoluteUrl(`${productImg}`)} />
                    )}
                    {online && (
                      <div className='symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3'></div>
                    )}
                  </div>
                </div>

                <a href='#' className='fs-4 text-gray-800 text-hover-primary fw-bolder mb-0'>
                  {productName}
                </a>

                <div className='fw-bold text-gray-400 mb-6'>{source}</div>
                </div>
                <div className=' mb-5 w-100 pb-2'>
                
                <div className='col-12 d-flex mb-5'> 
                      <div className='min-w-125px py-3 ms-3 px-4 mb-3 col-3 text-center'>
                        <div className='fs-6 fw-bolder text-gray-700'>AliExpress URL:</div>
                      </div>

                      <div className='border border-gray-300 border-dashed rounded col-9 py-3 px-4 mx-3 mb-3'>
                        <div className='fs-6 fw-bolder text-gray-700'>{aliUrl}</div>
                      </div>
                </div>
                
                <div className='col-12 d-flex'>
                      <div className='min-w-125px py-3 ms-3 px-4 mb-3 col-3 text-center'>
                        <div className='fs-6 fw-bolder text-gray-700 required form-label"'>New URL</div>
                      </div>

                      <div className='border border-gray-300 border-dashed rounded col-9 py-3 px-4 mx-3 mb-3'>
                        <div className='fs-6 fw-bolder text-gray-700'>
                          <input type="email" className="form-control form-control-clear border-0 p-0" placeholder="Standard Shipping"/>
                        </div>
                      </div>
                </div>

                </div>

                <button className='btn btn-sm btn-primary fw-bolder' data-bs-dismiss="modal" > {/* //id='kt_drawer_chat_toggle' */}
                  Save Changes
                </button>
              
              </div>
            </div>

            </div>

                            </div>
                            </div>
                        </div>
                        </div>
                
  )
}

export {EditProductModal}
