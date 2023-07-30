import {ThemeButton} from "@/components/contexts/ThemeButton";

export const metadata = {
  title: 'home',
  description: ''
}

export default function Home() {
  return (
    <main className="sm:px-12 sm:py-10 px-6 py-5">
      <div>
        <ThemeButton />
      </div>
    </main>
  )
}
