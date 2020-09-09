import React from 'react'
import * as S from './styles.scss'

import { Input } from '@/presentation/components'

const home: React.FC = () => {
  return (
    <div className={S.home}>
      <header className={S.header}>
        <h1>LOGO</h1>
      </header>
      <main className={S.main}>
        <h2>Seu CR</h2>

        <Input type="text"/>

        <button type="button" className={S.submit}>Converter</button>

        <div className={S.convertionResult}>
          <p>3.7</p>
        </div>

        <h3>Parabéns ! Seu GPA é ótimo</h3>
      </main>

      <footer className="footer">
        <p>created by Felipe zeba</p>
      </footer>
    </div>
  )
}

export default home
