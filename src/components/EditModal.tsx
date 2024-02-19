export default function EditModal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-zinc-100 p-4 rounded-lg shadow-lg max-w-sm w-full">
        <button className="float-right text-lg text-black" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}
