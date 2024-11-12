import React from 'react'
import TipWithAddTip from './tipswithasstip'
import Dashboard from './dashboard'
import Search from './search'
import RecipeListing from './recipecard'
import { FavoritesProvider } from '../context/favouritescontext'
import Favorites from './favouritesCard'



const Recipe = () => {
  return (
    <div >
      <div className="recipe-background" >
        <Dashboard/>
        <br/>
        <br/>
        <TipWithAddTip />
        <Search/>
        <FavoritesProvider>
             <RecipeListing/>
             <Favorites/>
        </FavoritesProvider>
      </div>
      </div>
  )
}

export default Recipe
