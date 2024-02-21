import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import ReactDOM from "react-dom"

interface ModalProps {
  isOpen: boolean
  setIsOpen: (b: boolean) => void
  children: React.ReactNode
  title?: string
}

function ModalPortal(props: { children: React.ReactNode }) {
  const portalRoot = document.getElementById("modal-root") || document.body
  return ReactDOM.createPortal(props.children, portalRoot)
}

export function Modal(props: ModalProps) {
  function closeModal() {
    props.setIsOpen(false)
  }
  return (
    <ModalPortal>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {!!props.title ? (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {props.title}
                    </Dialog.Title>
                  ) : null}
                  {props.children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </ModalPortal>
  )
}
