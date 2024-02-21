import { useNavigate } from "react-router-dom"
import { Item, useCommonStore } from "../../stores/common"
import { ItemForm } from "./ItemForm"
import { v4 as uuidv4 } from "uuid"

export function ItemCreate() {
  const { addItem } = useCommonStore()
  const navigate = useNavigate()

  const onSubmit = (data: Item) => {
    addItem({ ...data, id: uuidv4() })
    navigate("/items")
  }

  return (
    <div className="max-w-3xl m-auto mt-8">
      <ItemForm onSubmit={onSubmit} />
    </div>
  )
}
