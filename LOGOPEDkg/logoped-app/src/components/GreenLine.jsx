import React from 'react'
import Gr2 from './underComponents/Gr2'
import Gr3 from './underComponents/Gr3'
import Gr4 from './underComponents/Gr4'
import Gr5 from './underComponents/Gr5'
import GreenLineMini from './underComponents/GreenLineMini'


function GreenLine() {
	return (
		<div>
			<GreenLineMini />
			<Gr2 />
			<Gr3 />
			<Gr4 />
			<Gr5 />
		</div>
	)
}

export default GreenLine