import { Formik } from 'formik'
import * as Yup from 'yup'

export default function Formk() {
  const radius = 3958.756
  const feet = 5280

  return (
    <div>
      <Formik
        initialValues={{ observer: '', distance: '' }}
        validationSchema={Yup.object().shape({
          horizon: Yup.number().required('Required'),
        })}
      >
        {(props: any) => {
          const { values, handleBlur, setFieldValue } = props
          return (
            <div>
              <input
                id="observer"
                placeholder="Enter Observer Height"
                type="text"
                value={values.observer}
                onChange={(e) => {
                  const { value } = e.target
                  setFieldValue('observer', value.replace(/\D/, ''))
                }}
                onBlur={handleBlur}
                className="bg-gray-700"
              />
              {values.observer}
              <br />
              {Math.sqrt((radius + values.observer / feet) ** 2 - radius ** 2)}
              <br />
              <input
                id="distance"
                placeholder="Enter Distance from Observer to Target"
                type="text"
                value={values.distance}
                onChange={(e) => {
                  const { value } = e.target
                  setFieldValue('distance', value.replace(/\D/, ''))
                }}
                onBlur={handleBlur}
                className="bg-gray-700"
              />
              {values.distance}
              <br />
              {(Math.sqrt(
                (values.distance - Math.sqrt((radius + values.observer / feet) ** 2 - radius ** 2)) ** 2 + radius ** 2,
              ) -
                radius) *
                feet}
            </div>
          )
        }}
      </Formik>
    </div>
  )
}
