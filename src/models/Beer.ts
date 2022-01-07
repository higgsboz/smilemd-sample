export type Hop = {
  name: string
  amount: UnitAmount
  add: string
  attribute: string
} | null

export type UnitAmount = {
  value: number
  unit: string
} | null

export type Malt = {
  name: string
  amount: UnitAmount
} | null

export type MashTemp = {
  temp: UnitAmount
  duration: number
}

export type Method = {
  mash_temp: MashTemp[]
  fermentation: { temp: UnitAmount }
  twist: string | null
}

export type Ingredients = {
  malt: Malt[]
  hops: Hop[]
  yeast: string
}

export type Beer = {
  id: number
  name: string
  tagline: string
  first_brewed: string
  description: string
  image_url: string
  abv: number
  ibu: number | null
  target_fg: number
  target_og: number
  ebc: number | null
  srm: number | null
  ph: number | null
  attenuation_level: number
  volume: UnitAmount
  boil_volume: UnitAmount
  method: Method
  ingredients: Ingredients
  food_pairing: string[]
  brewers_tips: string
  contributed_by: string
}
