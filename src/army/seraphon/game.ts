import { Game, TGameStructure } from 'meta/turn_structure'
import { Units, Battalions } from './units'
import Artifacts from './artifacts'
import { processEffects } from 'utils/processEffects'

const Seraphon_Game: TGameStructure = { ...Game }

processEffects(Seraphon_Game, [Units, Battalions, Artifacts])

export default Seraphon_Game
