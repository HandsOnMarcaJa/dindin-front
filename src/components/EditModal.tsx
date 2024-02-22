'use client'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'

export default function EditModal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  const navigator = useRouter()
  const { deleteUser, getUser } = useUser()

  async function handleDeleteUser() {
    await deleteUser()
    await getUser()

    navigator.push('/login')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-zinc-100 p-4 rounded-lg shadow-lg max-w-sm w-full">
        <button className="float-right text-lg text-black" onClick={onClose}>
          &times;
        </button>
        {children}

        <button
          className="text-red-500 w-full text-center"
          onClick={handleDeleteUser}
        >
          Deletar usuário
        </button>
      </div>
    </div>
  )
}
