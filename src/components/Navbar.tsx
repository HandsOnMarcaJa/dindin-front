'use client'
import EditModal from '@/components/EditModal'
import Image from 'next/image'
import { useState } from 'react'
import Person from '@/assets/person.svg'
import logoutImg from '@/assets/logout.svg'
import { RegisterForm } from '@/components/RegisterForm'
import { useRouter } from 'next/navigation'
import { Logo } from './Logo'
import { api } from '@/services/apiConfig'
import { User } from '@/store/user'
import { useUser } from '@/hooks/useUser'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface NavbarProps {
  user: User | null
}

export default function Navbar({ user }: NavbarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const { logout: logoutUser } = useUser()
  const localStorage = useLocalStorage()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const username = user?.name ?? 'User'

  const logout = () => {
    api.defaults.headers.Authorization = ''
    localStorage.remove('@DD:access_token')
    logoutUser()
    router.push('/login')
  }

  return (
    <div>
      <div className="bg-custom-gradient w-full p-4 flex flex-row justify-between">
        <Logo />
        <div className="flex items-center">
          <button
            className="px-4 flex items-center py-2 rounded "
            onClick={openModal}
          >
            <Image src={Person} alt={'profile pic'} />
            <span className="text-white font-bold text-lg">{username}</span>
          </button>

          <button className="px-4 py-2 rounded " onClick={logout}>
            <Image src={logoutImg} alt={'door image'} />
          </button>
        </div>

        <EditModal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-4 text-white">
            <RegisterForm
              formName="Editar Perfil"
              buttonName="Confirmar"
              isRegistering={false}
              onClose={closeModal}
              className="shadow-transparent"
            />
          </div>
        </EditModal>
      </div>
    </div>
  )
}
