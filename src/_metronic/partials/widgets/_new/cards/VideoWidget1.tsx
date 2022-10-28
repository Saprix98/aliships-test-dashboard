type Props = {
  className: string
  title: string
  description1: string
  description2: string
  description3: string
  tab1: string
  tab2: string
  tab3: string
  video1: string
  video2: string
  video3: string
}

const VideoWidget1 = ({className, description1, description2, description3, tab1, tab2, tab3, video1, video2, video3, title}: Props) => (
  <div className={`card card-custom shadow ${className}`}>
  <div className="card-header card-header-stretch">
    <h3 className="card-title">{title}</h3>
    <div className="card-toolbar">
      <ul className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#kt_tab_pane_7"
          >
            {description1}
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#kt_tab_pane_8"
          >
             {description2}
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            href="#kt_tab_pane_9"
          >
            {description3}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="card-body">
    <div className="tab-content" id="myTabContent">
      <div
        className="tab-pane fade show active"
        id="kt_tab_pane_7"
        role="tabpanel"
      >
       <div className='text-gray-800 fs-6 fw-normal mb-10'>
       {tab1}
       </div>
       {/* begin::Video */}
       <div className='video-block mb-5'>
          <iframe
            title='widget11-video'
            className='embed-responsive-item rounded h-450px w-75'
            src={`${video1}`}
            allowFullScreen={true} />
        </div>
        {/* end::Video */}
      </div>
      <div
        className="tab-pane fade"
        id="kt_tab_pane_8"
        role="tabpanel"
       >

        <div className='text-gray-800 fs-6 fw-normal mb-10'>
        {tab2}
        </div>
        {/* begin::Video */}
        <div className='video-block mb-5'>
          <iframe
            title='widget11-video'
            className='embed-responsive-item rounded h-450px w-75'
            src={`${video2}`}
            allowFullScreen={true} />
        </div>
         {/* end::Video */}
      </div>

      <div
        className="tab-pane fade"
        id="kt_tab_pane_9"
        role="tabpanel"
      >
        <div className='text-gray-800 fs-6 fw-normal mb-10'>
        {tab3}  
        </div>
        {/* begin::Video */}
        <div className='video-block mb-5'>
          <iframe
            title='widget11-video'
            className='embed-responsive-item rounded h-450px w-75'
            src={`${video3}`}
            allowFullScreen={true} />
        </div>
        {/* end::Video */}
      </div>
    </div>
  </div>
</div>
)
export {VideoWidget1}


