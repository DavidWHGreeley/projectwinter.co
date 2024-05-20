import { mapToRange, toFixedValue} from './helpers'
import _ from 'lodash'

class Scale {
	scale = 1.0
	constructor(){
		this.getScaleFactor()
	}

	getScaleFactor(){
		const elSize = document.getElementById('body').getBoundingClientRect()
		const scaling = {
			from: { min: 340, max: 3840 },
			to: { min: 0.17, max: 1.25 },
			clamped: true,
		}

		var scaleValue = mapToRange(elSize.width, scaling.from.min, scaling.from.max, scaling.to.min, scaling.to.max, scaling.clamped)
		this.scale = toFixedValue(scaleValue, 2)
		document.documentElement.style.setProperty("--scaleFactor", this.scale)
		this.setIceHoleMargin()
	}

	setIceHoleMargin() {
		const windowHeight = window.innerHeight
		const windowWidth = window.innerWidth

		const iceCap = document.getElementById('ice-cap').getBoundingClientRect().height 
		const iceHole = document.getElementById('ice-hole').getBoundingClientRect().height
		const logo = document.getElementById('logo').getBoundingClientRect().height

		const marginSpace = windowHeight - (iceCap * 1.5) - iceHole - logo
		
		if(windowWidth > windowHeight){
			document.getElementById("ice-hole").style.marginTop = marginSpace + "px"
		} else {
			document.getElementById("ice-hole").style.marginTop = (marginSpace / 2.5) + "px"
		}
	}
}

export default Scale