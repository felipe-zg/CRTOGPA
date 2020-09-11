import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components'

import '@/presentation/styles/global.scss'
import makeExample from '@/main/factories/pages/example/example-factory'
import makeHome from './factories/pages/home/home-factory'

ReactDOM.render(
  <Router makeExample={makeExample} makeHome={makeHome} />,
  document.getElementById('main')
)
