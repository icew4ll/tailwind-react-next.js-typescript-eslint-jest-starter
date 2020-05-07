import { Formik } from 'formik'
import * as Yup from 'yup'

export default function Formk() {
  const radius = 3958.756
  const feet = 5280

  let dh = Math.sqrt((radius + values.height / feet) ** 2 - radius ** 2)
  let hh = (Math.sqrt((values.distance - dh) ** 2 + radius ** 2) - radius) * feet

  return (
    <div>
      <Formik
        initialValues={{ horizon: '', hidden: '' }}
        validationSchema={Yup.object().shape({
          horizon: Yup.number().required('Required'),
        })}
      >
        {(props: any) => {
          const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, setFieldValue } = props
          return (
            <div>
              <input
                id="horizon"
                placeholder="Enter Observer Height"
                type="text"
                value={values.horizon}
                onChange={(e) => {
                  const { value } = e.target
                  setFieldValue('horizon', value.replace(/\D/, ''))
                }}
                onBlur={handleBlur}
                className="bg-gray-700"
              />
              {values.horizon}
              <br />
              <input
                id="hidden"
                placeholder="Enter Distance from Observer to Target"
                type="text"
                value={values.hidden}
                onChange={(e) => {
                  const { value } = e.target
                  setFieldValue('hidden', value.replace(/\D/, ''))
                }}
                onBlur={handleBlur}
                className="bg-gray-700"
              />
              {values.hidden}
            </div>
          )
        }}
      </Formik>
    </div>
  )
}
