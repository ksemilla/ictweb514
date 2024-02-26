import { useNavigate, useParams } from "react-router-dom"
import { Item, useCommonStore } from "../../stores/common"
import { useEffect, useState } from "react"
import { ItemForm } from "./ItemForm"

export function ItemEdit() {
  const navigate = useNavigate()
  const [item, setItem] = useState<Item>()
  const { updateItem, getItem } = useCommonStore()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      setItem(getItem(id ?? ""))
    }
  }, [id])
  const onSubmit = (item: Item) => {
    updateItem(item)
    navigate(`/items`)
  }

  return !item ? (
    <div>Loading...</div>
  ) : (
    <div>
      <h1 className="text-center mt-8 font-semibold text-3xl">Update item</h1>
      <ItemForm onSubmit={onSubmit} defaultValues={item} />
    </div>
  )
}
