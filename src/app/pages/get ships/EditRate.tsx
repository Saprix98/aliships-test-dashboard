/* eslint-disable jsx-a11y/anchor-is-valid */
import { info } from 'console'
import {FC, useState} from 'react'
import { ids } from 'webpack'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import { AddRateTable } from '../../../_metronic/partials/widgets'

type Props = {
  online?: boolean
  productName: string
  rateID?: string
  funcOnclick?:  () => void
  
  
  // totalEarnings: string
}




const EditRate: FC<Props> = ({
 
  online = false,
  productName,
  rateID,
  funcOnclick,
  
  
}) => {

  const [name, setName] = useState(productName)
  
  return (
         
    <div className=" modal fade" id={`kt_modal_${rateID}_addRate`}>
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
              <input 
                  type="email" 
                  className="form-control form-control-solid" 
                  placeholder={name}
                  value={name}
                  onChange={ (e)=> {
                    setName(e.target.value)
                    console.log(e.target.value)
                 }
                }
                  />
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
          <button 
          type="button" 
          data-bs-dismiss="modal" 
          className="btn btn-primary"
          onClick={funcOnclick}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
                
  )
}

export {EditRate}



