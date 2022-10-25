type Props = {
  className: string
  title: string
  description1: string
  description2: string
  description3: string
  video1: string
  video2: string
  video3: string
}

const VideoWidget1 = ({className, description1, description2, description3, video1, video2, video3, title}: Props) => (
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
       {/* begin::Video */}
       <div className='mb-5'>
          <iframe
            title='widget11-video'
            className='embed-responsive-item rounded h-300px w-100'
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
       {/* begin::Video */}
       <div className='mb-5'>
          <iframe
            title='widget11-video'
            className='embed-responsive-item rounded h-300px w-100'
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
        {/* begin::Video */}
        <div className='mb-5'>
          <iframe
            title='widget11-video'
            className='embed-responsive-item rounded h-300px w-100'
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


