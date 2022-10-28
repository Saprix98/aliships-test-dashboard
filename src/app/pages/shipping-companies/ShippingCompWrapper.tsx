/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
// import {useIntl} from 'react-intl'
// import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
// import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {
  // StatisticsWidget1,
  TablesWidget13,
  // CardsWidget17
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


const ShippingCompPage: FC = () => (
  <>
   {/* begin::Row */}
   <div className='row g-5 g-xl-8'>
        
        <TablesWidget13 className='mb-5 mb-xl-8' />
      </div>
      {/* end::Row */}
      

      
  </>
)

const ShippingCompWrapper: FC = () => {
  // const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={DashboardBreadCrumbs}>Shipping Companies</PageTitle>
      <ShippingCompPage />
    </>
  )
}

export {ShippingCompWrapper}
