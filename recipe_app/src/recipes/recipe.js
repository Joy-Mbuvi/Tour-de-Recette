import React from 'react'
import Tips from './tips'
import Addtips from './addtips'
import { FaUtensilSpoon } from 'react-icons/fa'
import ForkIcon from '@mui/icons-material/Fork';

const Recipe = () => {
  return (
    <div className="recipe-container">
      <div className="tips-container">
        <Tips />
        <Addtips />
      </div>
      <div className="spoon-container">
        <FaUtensilSpoon className="large-spoon" />
        <ForkIcon/>
      </div>
    </div>
  )
}

export default Recipe
