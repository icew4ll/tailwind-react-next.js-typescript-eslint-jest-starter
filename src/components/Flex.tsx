import React, { FC, useState } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { Formik, Form, Field } from 'formik'

interface Props {}

const store = {
  1: { id: 1, title: 'Document 1' },
  2: { id: 2, title: 'Document 2' },
  3: { id: 3, title: 'Document 3' },
}

const Flex: FC<Props> = () => {
  const [query, setQuery] = useState(null)
  const results = useFlexSearch(query, index, store)

  return (
    <div>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query)
          setSubmitting(false)
        }}
      >
        <Form>
          <Field name="query" />
        </Form>
      </Formik>
      <h1>Results</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Flex
