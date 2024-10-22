import React from 'react'
import Tips from './tips'
import Addtips from './addtips'
import Dashboard from './dashboard'
import Search from './search'

const Recipe = () => {
  return (
    <div >
      <div className="recipe-background" >
        <Dashboard/>
        <br/>
        <br/>
        <Tips />
        <Addtips />
        <Search/>
      </div>
      <div className="spoon-container">
      </div>
    </div>
  )
}

export default Recipe
