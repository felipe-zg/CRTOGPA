import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '@/presentation/pages/home/home'

type Props = {
  makeExample: React.FC
}

const Router: React.FC<Props> = ({ makeExample }: Props) => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/example" exact component={makeExample}/>
    </BrowserRouter>
  )
}

export default Router
