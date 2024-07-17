// Write your code here
// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      slidersToShow: 2,
      slidersToScroll: 3,
      dots: false,
    }
    return (
      <div className="app-bg-container">
        <div className="sliders-container" data-testid="planets">
          <h1 className="main-heading">PLANETS</h1>
          <Slider {...settings}>
            {planetsList.map(eachPlanet => (
              <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default PlanetsSlider
