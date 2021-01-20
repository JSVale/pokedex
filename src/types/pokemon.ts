export interface Species {
  name: string
  url: string
}

export interface Pokemon {
  id: number
  name: string
  species: Species
  color?: string
  sprites: {
    front_default: string
    other?: {
      dream_world: {
        front_default: string
      }
      'official-artwork': {
        front_default: string
      }
    }
  }
}
