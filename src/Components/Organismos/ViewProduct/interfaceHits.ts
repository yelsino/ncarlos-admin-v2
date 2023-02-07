export interface ProductHit {
  keywords: string[]
  _id: string
  name: string
  img: string
  typeOfsale: string
  pricePerWeight: HitsPricePerWeight[]
  description: string
  quantityPerUnits: number
  unitPrice: number
  units: number
  category: HitsCategory
  stock: number
  createdAt: Date
  updatedAt: Date
  objectID: string
  _highlightResult: HighlightResult
}

interface HighlightResult {
  keywords: ID[]
  _id: ID
  name: ID
  img: ID
  typeOfsale: ID
  pricePerWeight: HighlightResultPricePerWeight[]
  description: ID
  quantityPerUnits: ID
  unitPrice: ID
  units: ID
  category: HighlightResultCategory
  stock: ID
  createdAt: ID
  updatedAt: ID
}

interface ID {
  value: string
  matchLevel: MatchLevel
  matchedWords: any[]
}

enum MatchLevel {
  None = 'none'
}

interface HighlightResultCategory {
  _id: ID
  name: ID
}

interface HighlightResultPricePerWeight {
  _id: ID
  weight: ID
  price: ID
}

interface HitsCategory {
  _id: string
  name: string
}

interface HitsPricePerWeight {
  _id: string
  weight: number
  price: number
}
