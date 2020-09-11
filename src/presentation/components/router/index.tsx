import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '@/presentation/pages/home/home'

type Props = {
  makeExample: React.FC
  makeHome: React.FC
}

const Router: React.FC<Props> = ({ makeExample, makeHome }: Props) => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={makeHome} />
      <Route path="/example" exact component={makeExample} />
    </BrowserRouter>
  )
}

export default Router
