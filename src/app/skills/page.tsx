import Navbar from '@/components/Navbar'

export default function SkillsPage() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 75 },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-purple-900 text-purple-100">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
        <div className="w-full max-w-xl space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-1 border-b border-purple-300 pb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-purple-100 rounded h-4">
                <div
                  className="bg-purple-600 h-4 rounded"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-purple-800 text-purple-100 p-6 text-center text-sm border-t border-purple-700">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  )
}
