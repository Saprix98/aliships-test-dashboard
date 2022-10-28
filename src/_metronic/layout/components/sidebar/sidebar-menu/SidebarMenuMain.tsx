/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
// import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        // icon='/media/icons/duotune/art/art002.svg'
        icon='/media/icons/duotune/general/gen001.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/get-ships'
        // icon='/media/icons/duotune/general/gen019.svg'
        icon='/media/icons/duotune/coding/cod007.svg'
        title='Get Ships'
        fontIcon='bi-layers'
      />

      <SidebarMenuItem
        to='/shipping-companies'
        // icon='/media/icons/duotune/general/gen019.svg'
        icon='/media/icons/duotune/ecommerce/ecm006.svg'
        title='Shipping Companies'
        fontIcon='bi-layers'
      />

      <SidebarMenuItem
        to='/builder'
        // icon='/media/icons/duotune/general/gen019.svg'
        icon='/media/icons/duotune/finance/fin007.svg'
        title='Pricing Rules'
        fontIcon='bi-layers'
      />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Help & Support</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/pages'
        title='Get Started'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen002.svg'
      >
        <SidebarMenuItemWithSub to='/pages/profile' title='Profile' hasBullet={true}>
          <SidebarMenuItem to='/pages/profile/overview' title='Overview' hasBullet={true} />
          <SidebarMenuItem to='/pages/profile/projects' title='Projects' hasBullet={true} />
          <SidebarMenuItem
            to='/pages/profile/campaigns'
            title='Campaigns'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/pages/profile/documents'
            title='Documents'
            hasBullet={true}
          />
          <SidebarMenuItem
            to='/pages/profile/connections'
            title='Connections'
            hasBullet={true}
          />
        </SidebarMenuItemWithSub>

        <SidebarMenuItemWithSub to='/pages/wizards' title='Wizards' hasBullet={true}>
          <SidebarMenuItem
            to='/pages/wizards/horizontal'
            title='Horizontal'
            hasBullet={true}
          />
          <SidebarMenuItem to='/pages/wizards/vertical' title='Vertical' hasBullet={true} />
        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/accounts'
        title='Help / FAQ'
        icon='/media/icons/duotune/general/gen046.svg'
        fontIcon='bi-person'
      >
        <SidebarMenuItem to='/account/overview' title='Overview' hasBullet={true} />
        <SidebarMenuItem to='/account/settings' title='Settings' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/error'
        title='Payment & Privacy'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen051.svg'
      >
        <SidebarMenuItem to='/error/404' title='Error 404' hasBullet={true} />
        <SidebarMenuItem to='/error/500' title='Error 500' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to='/widgets'
        title='Support'
        icon='/media/icons/duotune/communication/com012.svg'
        fontIcon='bi-layers'
      >
        <SidebarMenuItem to='/widgets/lists' title='Lists' hasBullet={true} />
        <SidebarMenuItem to='/widgets/statistics' title='Statistics' hasBullet={true} />
        <SidebarMenuItem to='/widgets/charts' title='Charts' hasBullet={true} />
        <SidebarMenuItem to='/widgets/mixed' title='Mixed' hasBullet={true} />
        <SidebarMenuItem to='/widgets/tables' title='Tables' hasBullet={true} />
        <SidebarMenuItem to='/widgets/feeds' title='Feeds' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Account</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/apps/chat'
        title='Settings'
        fontIcon='bi-chat-left'
        // icon='/media/icons/duotune/general/gen025.svg'
        icon='/media/icons/duotune/coding/cod001.svg'
      >
        <SidebarMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <SidebarMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem
        to='/apps/user-management/users'
        // icon='/media/icons/duotune/general/gen051.svg'
        icon='/media/icons/duotune/finance/fin010.svg'
        title='Choose Plan'
        fontIcon='bi-layers'
      />
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}

export {SidebarMenuMain}
