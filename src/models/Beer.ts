export type Hop = {
  name: string
  amount: UnitAmount
  add: string
  attribute: string
}

export type UnitAmount = {
  value: number
  unit: string
}

export type Malt = {
  name: string
  amount: UnitAmount
}

export type Beer = {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number
  target_fg: number
  target_og: number
  ebc: number
  srm: number
  ph: number
  attenuation_level: number
  volume: UnitAmount
  boil_volume: UnitAmount
  method: {
    mash_temp: { temp: UnitAmount; duration: number }[]
    fermentation: { temp: UnitAmount }
    twist: string | null
  }
  ingredients: {
    malt: Malt[]
    hops: Hop[]
    yeast: string
  }
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}
