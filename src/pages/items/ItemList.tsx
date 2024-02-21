import { useNavigate } from "react-router-dom"
import { useCommonStore } from "../../stores/common"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { classNames } from "../../utils"
import { useState } from "react"
import { PlusIcon } from "@heroicons/react/16/solid"
import { Modal } from "../../components/Modal"

export function ItemList() {
  const [showModal, setShowModal] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()
  const { items, orderItems, addOrderItem, removeOrderItem } = useCommonStore()

  const total = orderItems.reduce((acc, o) => acc + o.price * o.quantity, 0)
  return (
    <div className="max-w-5xl m-auto mt-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Items
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all items in a cafe
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 flex items-center space-x-2">
          <div
            className="cursor-pointer relative rounded-full p-2 hover:bg-gray-100"
            onClick={() => setShowModal(true)}
          >
            <ShoppingBagIcon className="w-7 h-7" />
            <p
              className={classNames(
                "absolute top-6 right-1 rounded-full text-sm px-1 text-white",
                orderItems.length === 0
                  ? "bg-gray-500 "
                  : "bg-red-500 font-semibold"
              )}
            >
              {orderItems.length}
            </p>
          </div>
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => navigate("create")}
          >
            Add item
          </button>
        </div>
      </div>
      <div className="my-8" />
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer shadow rounded-lg overflow-hidden"
          >
            <div className="w-full h-72">
              <img
                src={item.imageUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between">
                <p className="font-medium text-gray-700 text-lg group-hover:text-blue-500">
                  {item.name}
                </p>
                <p className="font-bold text-lg group-hover:text-blue-500">
                  $ {item.price}
                </p>
              </div>
              <div className="flex mt-2">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                  <div className="pointer-events-none absolute text-sm font-medium text-gray-700 inset-y-0 left-0 flex items-center pl-3">
                    Qty
                  </div>
                  <input
                    type="number"
                    className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min={1}
                  />
                </div>
                <button
                  type="button"
                  className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-indigo-600 hover:text-white"
                  onClick={() => {
                    addOrderItem({ ...item, quantity })
                  }}
                >
                  <PlusIcon className="-ml-0.5 h-5 w-5 " aria-hidden="true" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <div className="relative mt-6 flex-1 px-4 sm:px-6">
          {orderItems.length > 0 ? (
            <>
              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {orderItems.map((product, idx) => (
                      <li key={product.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.imageUrl}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="#">{product.name}</a>
                              </h3>
                              <p className="ml-4">{product.price}</p>
                            </div>
                            {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">
                              Qty {product.quantity}
                            </p>

                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() =>
                                  removeOrderItem(product.id ?? "")
                                }
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-6 py-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>$ {total}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <div
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    // onClick={onCheckout}
                  >
                    Checkout
                  </div>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => setShowModal(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div>
              <p className="font-medium -mt-6 text-center text-indigo-600 hover:text-indigo-500">
                Add items in your cart first!
              </p>
            </div>
          )}
        </div>
      </Modal>
    </div>
  )
}
