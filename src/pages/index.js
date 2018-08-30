import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>My name is Ildar.</p>
    <p>I work at Localie.co.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
