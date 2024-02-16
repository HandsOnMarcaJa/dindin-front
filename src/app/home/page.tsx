'use client'
import EditModal from '@/components/EditModal'
import Image from 'next/image'
import { useState } from 'react'
import Person from '@/assets/person.svg'
import logoutImg from '@/assets/logout.svg'
import { RegisterForm } from '@/components/RegisterForm'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const logout = () => {
    // Logout logic here
  }

  return (
    <div className="p-4">
      <button className="px-4 py-2 rounded " onClick={openModal}>
        <Image src={Person} alt={'profile pic'} />
      </button>
      <button className="px-4 py-2 rounded " onClick={logout}>
        <Image src={logoutImg} alt={'door image'} />
      </button>

      <EditModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-4 text-black">
          <RegisterForm
            formName="Editar Perfil"
            buttonName="Confirmar"
            isRegistering={false}
            onClose={closeModal}
          />
        </div>
      </EditModal>
    </div>
  )
}
