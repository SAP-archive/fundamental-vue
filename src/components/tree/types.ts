export type ItemId = number

export interface _Item {
  id: ItemId
  items: ItemId[]
}

export type Item = Partial<_Item>

type xxx = number | null
export type _Tree = Map<xxx, ItemId[]>