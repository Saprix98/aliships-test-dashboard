import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../_metronic/helpers'
import { DrawerPageGs } from './DrawerPage'



const GetShipDrawer: FC = () => (
  <div
    id='kt_getShips'
    className='bg-body'
    data-kt-drawer='true'
    data-kt-drawer-name='getShips'
    data-kt-drawer-activate='true'
    data-kt-drawer-overlay='true'
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction='end'
    data-kt-drawer-toggle='#kt_getShips_toggle'
    data-kt-drawer-close='#kt_getShips_close'
  >
    <div className='card shadow-none rounded-0 w-100' >
      <div className='card-header border-0' id='kt_getShips_header'>
        <h3 className='card-title fw-bolder text-dark'>Product Info</h3>

        <div className='card-toolbar'>
          <button
            type='button'
            className='btn btn-sm btn-icon btn-active-light-primary me-n5'
            id='kt_getShips_close'
          >
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
          </button>
        </div>
      </div>
      <div className='card-body position-relative pt-0' id='kt_getShips_body'>
        <div
          id='kt_getShips_scroll'
          className='position-relative scroll-y me-n5 pe-5'
          data-kt-scroll='true'
          data-kt-scroll-height='auto'
          data-kt-scroll-wrappers='#kt_getShips_body'
          data-kt-scroll-dependencies='#kt_getShips_header, #kt_getShips_footer'
          data-kt-scroll-offset='5px'
        >
          <div className='timeline'>
            <DrawerPageGs/>
          </div>
        </div>
      </div>
      <div className='card-footer py-5 text-center' id='kt_getShips_footer'>
        <Link to='/dashboard' className='btn btn-bg-body text-primary'>
          View Product In Shopify
          <KTSVG
            path='/media/icons/duotune/arrows/arr064.svg'
            className='svg-icon-3 svg-icon-primary'
          />
        </Link>
      </div>
    </div>
  </div>
)



export {GetShipDrawer}
