import { SitterHeader } from '@/components/layout/SitterHeader'
import { SitterFooter } from '@/components/layout/SitterFooter'

export default function PetsitterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SitterHeader />
      <main className="flex-1">{children}</main>
      <SitterFooter />
    </>
  )
}
