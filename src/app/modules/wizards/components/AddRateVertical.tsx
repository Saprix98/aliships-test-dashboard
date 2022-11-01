import {useEffect, useRef, useState} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import {ICreateAccount, createAccountSchemas, inits} from './CreateAccountWizardHelper'

const AddRateVertical = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const [initValues] = useState<ICreateAccount>(inits)

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (

    
    <div className="modal fade mw-auto" tabIndex={-1} id="kt_modal_2">
          <div className="modal-dialog mw-75 m-auto mt-20">
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
                          
                              <div className="text-start modal-body overflow-scroll mh-xl-100 mh-500px ">
                              <div
                                  ref={stepperRef}
                                  className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
                                  id='kt_create_account_stepper'
                               >
                                    {/* begin::Aside*/}
                                    <div className='card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
                                      {/* begin::Wrapper*/}
                                      <div className='card-body px-6 px-lg-10 px-xxl-15 py-20'>
                                        {/* begin::Nav*/}
                                        <div className='stepper-nav'>
                                          {/* begin::Step 1*/}
                                          <div className='stepper-item current' data-kt-stepper-element='nav'>
                                            {/* begin::Wrapper*/}
                                            <div className='stepper-wrapper'>
                                              {/* begin::Icon*/}
                                              <div className='stepper-icon w-40px h-40px'>
                                                <i className='stepper-check fas fa-check'></i>
                                                <span className='stepper-number'>1</span>
                                              </div>
                                              {/* end::Icon*/}

                                              {/* begin::Label*/}
                                              <div className='stepper-label'>
                                                <h3 className='stepper-title'>Shipping Settings</h3>

                                                <div className='stepper-desc fw-semibold'>Setup Your Shipping Details</div>
                                              </div>
                                              {/* end::Label*/}
                                            </div>
                                            {/* end::Wrapper*/}

                                            {/* begin::Line*/}
                                            <div className='stepper-line h-40px'></div>
                                            {/* end::Line*/}
                                          </div>
                                          {/* end::Step 1*/}

                                          {/* begin::Step 2*/}
                                          <div className='stepper-item' data-kt-stepper-element='nav'>
                                            {/* begin::Wrapper*/}
                                            <div className='stepper-wrapper'>
                                              {/* begin::Icon*/}
                                              <div className='stepper-icon w-40px h-40px'>
                                                <i className='stepper-check fas fa-check'></i>
                                                <span className='stepper-number'>2</span>
                                              </div>
                                              {/* end::Icon*/}

                                              {/* begin::Label*/}
                                              <div className='stepper-label'>
                                                <h3 className='stepper-title'>Display Conditions</h3>
                                                <div className='stepper-desc fw-semibold'>Setup Your Shipping display rules</div>
                                              </div>
                                              {/* end::Label*/}
                                            </div>
                                            {/* end::Wrapper*/}

                                            {/* begin::Line*/}
                                            <div className='stepper-line h-40px'></div>
                                            {/* end::Line*/}
                                          </div>
                                          {/* end::Step 2*/}

                                          {/* begin::Step 3*/}
                                          <div className='stepper-item' data-kt-stepper-element='nav'>
                                            {/* begin::Wrapper*/}
                                            <div className='stepper-wrapper'>
                                              {/* begin::Icon*/}
                                              <div className='stepper-icon w-40px h-40px'>
                                                <i className='stepper-check fas fa-check'></i>
                                                <span className='stepper-number'>3</span>
                                              </div>
                                              {/* end::Icon*/}

                                              {/* begin::Label*/}
                                              <div className='stepper-label'>
                                                <h3 className='stepper-title'>Shipping price</h3>
                                                <div className='stepper-desc fw-semibold'>Set up price for shipping methods using Conditions</div>
                                              </div>
                                              {/* end::Label*/}
                                            </div>
                                            {/* end::Wrapper*/}

                                            
                                          </div>
                                          {/* end::Step 3*/}

                                          
                                        </div>
                                        {/* end::Nav*/}
                                      </div>
                                      {/* end::Wrapper*/}
                                    </div>
                                    {/* begin::Aside*/}

                                    <div className='d-flex flex-row-fluid flex-center bg-body rounded overflow-scroll mh-xl-500px'>
                                      <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
                                        {() => (
                                          <Form className='py-20 w-100 w-xl-700px px-9 pb-0' noValidate id='kt_create_account_form'>
                                            <div className='current' data-kt-stepper-element='content'>
                                              <Step1 />
                                            </div>

                                            <div data-kt-stepper-element='content'>
                                              <Step2 />
                                            </div>

                                            <div data-kt-stepper-element='content'>
                                              <Step3 />
                                            </div>

                                            
                                            
                                          </Form>
                                        )}
                                      </Formik>
                                    </div>
                                  </div>
                              </div>
                              <div className="modal-footer">
                              <div className='d-flex flex-stack'>
                                              <div className='mr-2'>                                                
                                                
                                                <button
                                                  onClick={prevStep}
                                                  type='button'
                                                  className={`
                                                  ${stepper.current?.currentStepIndex === stepper.current?.totatStepsNumber! - 2 && 'btn btn-sm btn-light-primary me-3 d-none'} 
                                                  ${stepper.current?.currentStepIndex !== stepper.current?.totatStepsNumber! - 2 && 'btn btn-sm btn-light-primary me-3'}
                                                  `}                                                                        
                                                    
                                                  data-kt-stepper-action='previous'
                                                  form='kt_create_account_form'
                                                >
                                                  <KTSVG
                                                    path='/media/icons/duotune/arrows/arr063.svg'
                                                    className='svg-icon-4 me-1'
                                                  />
                                                  Back
                                                </button>
                                              </div>

                                              <div>
                                                <button 
                                                type='submit' 
                                                className='btn btn-sm btn-primary me-3' 
                                                form='kt_create_account_form'
                                                data-bs-dismiss={`${stepper.current?.currentStepIndex === 3 && 'modal'}`}                                                          
                                                aria-label="Close"
                                                >
                                                  <span className='indicator-label'>
                                                    {stepper.current?.currentStepIndex !==
                                                      3 && 'Continue'}
                                                    {stepper.current?.currentStepIndex ===
                                                      3 && 'Submit'}
                                                    <KTSVG
                                                      path='/media/icons/duotune/arrows/arr064.svg'
                                                      className='svg-icon-3 ms-2 me-0'
                                                    />
                                                  </span>
                                                </button>
                                              </div>
                                            </div>
                                {/* <button
                                  type="button"
                                  className="btn btn-light"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                  Save changes
                                </button> */}
                              </div>
                          </div>
          </div>
      </div>
  )
}

export {AddRateVertical}
