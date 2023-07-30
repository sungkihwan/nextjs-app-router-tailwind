import Image from 'next/image'
import {NavBar} from "@/components/NavBar";

export const metadata = {
    title: 'dashboard',
    description: '대시보드 화면'
}

export default function DashBoard({ params }:{
    params: { id: string }
}) {
  return (
    <>
        <NavBar />
        <div>
            {params.id}
        </div>
    </>
  )
}
