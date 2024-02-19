'use client'
import EditModal from '@/components/EditModal'
import Image from 'next/image'
import { useState } from 'react'
import Person from '@/assets/person.svg'
import logoutImg from '@/assets/logout.svg'
import { RegisterForm } from '@/components/RegisterForm'
import { useRouter } from 'next/navigation'
import { Logo } from './Logo'

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const username = 'User'

  const logout = () => {
    router.push('/login')
    // Logout logic here
  }

  return (
    <div>
      <div className="bg-custom-gradient p-4 flex flex-row justify-between">
        <Logo />
        <div className="flex items-center">
          <button
            className="px-4 flex items-center py-2 rounded "
            onClick={openModal}
          >
            <Image src={Person} alt={'profile pic'} />
            <h1>{username}</h1>
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
