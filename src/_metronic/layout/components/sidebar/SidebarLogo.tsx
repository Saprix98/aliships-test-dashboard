import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'

const SidebarLogo = () => {
  const {config} = useLayout()
  const appSidebarDefaultMinimizeDesktopEnabled =
    config?.app?.sidebar?.default?.minimize?.desktop?.enabled
  const appSidebarDefaultCollapseDesktopEnabled =
    config?.app?.sidebar?.default?.collapse?.desktop?.enabled
  const toggleType = appSidebarDefaultCollapseDesktopEnabled
    ? 'collapse'
    : appSidebarDefaultMinimizeDesktopEnabled
    ? 'minimize'
    : ''
  const toggleState = appSidebarDefaultMinimizeDesktopEnabled ? 'active' : ''
  const appSidebarDefaultMinimizeDefault = config.app?.sidebar?.default?.minimize?.desktop?.default
  return (
    <div className='app-sidebar-logo px-6' id='kt_app_sidebar_logo'>
      <Link to='/dashboard'>
        {config.layoutType === 'dark-sidebar' ? (
          <img
            alt='Logo'
            // src={toAbsoluteUrl('/media/logos/default-dark.svg')}
            src={toAbsoluteUrl('/media/logos/aliships-biglogo3.png')}
            className='h-35px app-sidebar-logo-default' //changed from h-25px to h-35px!
          />
        ) : (
          <>
            <img
              alt='Logo'
              // src={toAbsoluteUrl('/media/logos/default.svg')}
              src={toAbsoluteUrl('/media/logos/aliships-biglogo3.png')}
              className='h-35px app-sidebar-logo-default theme-light-show' //changed from h-25px to h-35px!
            />
            <img
              alt='Logo'
              // src={toAbsoluteUrl('/media/logos/default-dark.svg')}
              src={toAbsoluteUrl('/media/logos/aliships-biglogo3.png')}
              className='h-35px app-sidebar-logo-default theme-dark-show' //changed from h-25px to h-35px!
            />
          </>
        )}

        <img
          alt='Logo'
          // src={toAbsoluteUrl('/media/logos/default-small.svg')}
          src={toAbsoluteUrl('/media/logos/ALiships-favicon.png')}
          className='h-30px app-sidebar-logo-minimize' //changed from h-20px to h-30px!
        />
      </Link>

      {(appSidebarDefaultMinimizeDesktopEnabled || appSidebarDefaultCollapseDesktopEnabled) && (
        <div
          id='kt_app_sidebar_toggle'
          className={clsx(
            'app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate',
            {active: appSidebarDefaultMinimizeDefault}
          )}
          data-kt-toggle='true'
          data-kt-toggle-state={toggleState}
          data-kt-toggle-target='body'
          data-kt-toggle-name={`app-sidebar-${toggleType}`}
        >
          <KTSVG path='/media/icons/duotune/arrows/arr079.svg' className='svg-icon-2 rotate-180' />
        </div>
      )}
    </div>
  )
}

export {SidebarLogo}
