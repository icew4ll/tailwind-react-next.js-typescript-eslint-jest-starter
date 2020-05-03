import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Formk() {
  const initialValues = {
    height: 0,
    distance: 0,
  }

  const validationSchema = Yup.object().shape({
    height: Yup.number().positive('Must be positive number').required('Required'),
  })

  const { handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema,
  })

  const radius = 3958.756
  const feet = 5280

  let dh = Math.sqrt((radius + values.height / feet) ** 2 - radius ** 2)
  let hh = (Math.sqrt((values.distance - dh) ** 2 + radius ** 2) - radius) * feet

  return (
    <div>
      <input name="height" onChange={handleChange} value={values.height} />
      {errors.height ? "Must be positive number" : null}
      {dh}
      <input name="distance" onChange={handleChange} value={values.distance} />
      {hh}
    </div>
  )
}
