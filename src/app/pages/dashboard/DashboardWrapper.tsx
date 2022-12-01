/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
// import {useIntl} from 'react-intl'
import {KTSVG,toAbsoluteUrl} from '../../../_metronic/helpers'
// import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget5,
  // ListsWidget3,
  ListsWidget4,
  // ListsWidget6,
  // TablesWidget5,
  // TablesWidget10,
  // MixedWidget8,
  // CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  CardsWidget21,
  ListsWidget26,
  // EngageWidget10,

} from '../../../_metronic/partials/widgets'
import { VideoWidget1 } from '../../../_metronic/partials/widgets/_new/cards/VideoWidget1'

const DashboardPage: FC = () => (
  <>

    {/* begin::Row */}
     <div className='row g-5 g-xl-10 mb-10 px-5'>
      <div className='accordion accordion-icon-toggle' id="kt_accordion_2">
       <div className='card rate-us banner col-12 d-lg-flex d-block flex-row p-0' >
         <div className='col-12 col-lg-4'>
             <img className='mw-100 rounded-start' alt='imorove' src="/media/banners/teamwork (1).jpg"></img>
         </div>
            
            <div className='col-12 col-lg-8 m-auto p-10 d-flex flex-row'>
              <div className='col-9'>
               <h3 className='card-label fw-bold text-dark d-flex flex-row'>
                Help us to get improved <div className='rating-label ms-2 checked'>
                      <i className='bi bi-star-fill fs-5'></i>
                    </div>
                </h3>
                 <span className='text-muted mt-1 fw-semibold fs-7'> Please give us feedback about the app, so we can improve the experience and performance</span>
               </div>

             <div className='col-3 m-auto text-end'>
              
             <div
                    className="accordion-header py-3 d-flex collapsed text-end flex-row float-end"
                    
               >  
               <a href='#' 
                  className='btn btn-outline btn-outline-dashed btn-outline-warning btn-active-light-warning rotate py-2 px-6' 
                  onClick={(e) => e.currentTarget.classList.toggle('active')}
                  data-bs-toggle="collapse"
                  data-bs-target="#kt_accordion_2_item_1"
                  >
                      <KTSVG
                        className="svg-icon-2 rotate-180 me-0"
                        path="/media/icons/duotune/arrows/arr065.svg"
                      />
                </a>
              </div>
              {/* <a href='#' 
              className="btn btn-outline btn-outline-dashed btn-outline-warning btn-active-light-warning 
              rotate" 
              onClick={(e) => e.currentTarget.classList.toggle('active')}
              
              >
                 
                  <KTSVG
                    path="/media/icons/duotune/arrows/arr065.svg"
                    className="svg-icon-2 rotate-180 ms-3"
                  />
              </a> */}

            
             
            </div>
            </div>

           
        </div>
        <div
      id="kt_accordion_2_item_1"
      className="fs-6 collapse card p-10 border-top"
      data-bs-parent="#kt_accordion_2"
    >
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining
      essentially unchanged.
    </div>
      </div>
     </div>

    {/* end::Row */}

    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-4 mb-md-5 mb-xl-0'>
        <CardsWidget20
          className='h-md-100 mb-5 mb-xl-10'
          description='Total Products'
          color='#f90'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
        />
        {/* <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='Professionals'
          icon={false}
          stats={357}
          labelColor='dark'
          textColor='gray-300'
        /> */}
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-4 mb-md-5 mb-xl-0'>
        <CardsWidget17 
        className='h-md-100 mb-5 mb-xl-10' 
        />
         
      </div>
      {/* end::Col */}
      
      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-4 mb-md-5 mb-xl-0'>
        <CardsWidget21 
          className='h-md-100 mb-5 mb-xl-10'
          description='Active Providers'
          color='#bd4d4d'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
        />
        {/* <ListsWidget26 className='h-lg-50' /> */}
      </div>
      {/* end::Col */} 

      {/* begin::Col */}
      {/* <div className='col-xxl-6'>
        <EngageWidget10 className='h-md-100' />
      </div> */}
      {/* end::Col */}
    </div>
    {/* end::Row */}


 {/* begin::Row */}
 <div className='row g-5 g-xl-10 mb-5 mb-xl-10 px-3'>
    <VideoWidget1 
          className='col-xxl-12 mb-5 mb-xl-0'
          title='Quick Overview'
          tab1= 'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post '
          tab2= 'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post '
          tab3= 'Outlines keep you honest. They stop you from indulging in poorly thought-out metaphors about driving and keep you focused on the overall structure of your post '
          description1='How to Use?'
          description2='First Import'
          description3='How to create Custome rate?'
          video1='https://www.youtube.com/embed/qIHXpnASPAA'
          video2='https://www.youtube.com/embed/qIHXpnASPAA'
          video3='https://www.youtube.com/embed/qIHXpnASPAA'
          />
      
  </div>
{/* end::Row */}



    

    

    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
       <ListsWidget5 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget26 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
        {/* partials/widgets/lists/_widget-4', 'class' => 'card-xl-stretch mb-5 mb-xl-8', 'items' => '5' */}
      </div>
    </div>
    {/* end::Row */}

    
  </>
)

const DashboardWrapper: FC = () => {
  // const intl = useIntl()
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle> */}
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}









