/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
// import {useIntl} from 'react-intl'
// import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
// import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {
  StatisticsWidget1,
  TablesWidget11,
  CardsWidget17,
  AddRateWidget1
} from '../../../_metronic/partials/widgets'
// import { VideoWidget1 } from '../../../_metronic/partials/widgets/_new/cards/VideoWidget1'

const DashboardBreadCrumbs: Array<PageLink> = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]


const GetShipsPage: FC = () => (
  <>
   {/* begin::Row */}
   <div className='row g-5 g-xl-8'>
        <div className='h-md-200 col-xl-8'>
          <StatisticsWidget1
            className='h-md-100 mb-5 mb-xl-10'
            image='abstract-4.svg'
            title='Import Shipping Methods'
            time='Last Updated:'
            description='<b>Date:</b> 24/10/2022 <br><b>Time:</b> 12:00:00 UTC<br/>'
          />
        </div>

        {/* begin::Col */}
        <div className='col-xl-4'>
        <CardsWidget17 
        className='h-md-100 mb-5 mb-xl-10' 
        />
        </div>
        {/* end::Col */}

      </div>
      {/* end::Row */}

    {/* begin::Row */}
    <div className='row gx-5 gx-xl-10'>
      {/* begin::Col */}
      <div className='col-xxl-6 mb-8'></div>   
      {/* end::Col */}
    </div>
    {/* end::Row */}

      {/* begin::Row */}
       <div className='row g-5 g-xl-8'>
        <div className='col-xl-12'>
          <AddRateWidget1
            className='h-md-100 mb-5 mb-xl-10'
            image='abstract-4.svg'
            title='Create Cutstom Rates'
            time=''
            description='Set custom shipping methods for non imported products'
          />
        </div>

        

      </div>
      {/* end::Row */}
      
      {/* begin::Row */}
     <div className='row gx-5 gx-xl-10'>
      {/* begin::Col */}
       <div className='col-xxl-6 mb-8'></div>   
      {/* end::Col */}
     </div>
    {/* end::Row */}

      <TablesWidget11 className='mb-5 mb-xl-8' />
  </>
)

const GetShipsWrapper: FC = () => {
  // const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={DashboardBreadCrumbs}>Get Ships</PageTitle>
      <GetShipsPage />
    </>
  )
}

export {GetShipsWrapper}
