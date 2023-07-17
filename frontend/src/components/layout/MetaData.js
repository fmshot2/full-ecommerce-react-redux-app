import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title> {`${title} @ Treasure Fashion STORES `}</title>
    </Helmet>
  )
}

export default MetaData