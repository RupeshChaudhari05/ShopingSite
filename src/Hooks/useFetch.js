import axios from 'axios'
import React from 'react'

const useFetch = (url) => {

  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {

    const get = () => {
      setLoading(true)
      setError(false)

      axios
        .get(url)
        .then(res => {
          setData(res.data)
          setLoading(false)
        })
        .catch(err => {
          setError(true)
          setLoading(false)
        })
    }


    get()

  }, [url])

  return { data, loading, error }

}

export default useFetch