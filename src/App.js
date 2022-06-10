import React from 'react'
import './CSS/App.css'

import { UniqueItems } from './data/UniqueItems'
import { SetItems } from './data/SetItems'
import { Runewords } from './data/Runewords'

import ItemFinder from './components/ItemFinder'

export default function App() {
  return (
    <div className='App'>
      <ItemFinder
        UniqueItems={UniqueItems}
        SetItems={SetItems}
        Runewords={Runewords}
      />
    </div>
  )
}
