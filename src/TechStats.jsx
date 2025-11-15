import { useState, useEffect } from 'react'
import './TechStats.css'

export default function TechStats() {
  const [stats, setStats] = useState([
    { label: 'Projects Built', value: 0, target: 25, unit: '+' },
    { label: 'Lines of Code', value: 0, target: 50, unit: 'K+' },
    { label: 'GitHub Repos', value: 0, target: 18, unit: '+' },
    { label: 'Avg Performance', value: 0, target: 95, unit: '/100' },
  ])

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user data
        const userRes = await fetch('https://api.github.com/users/MalithDN')
        const userData = await userRes.json()

        // Fetch repositories
        const reposRes = await fetch('https://api.github.com/users/MalithDN/repos?per_page=100')
        const reposData = await reposRes.json()

        // Calculate stats
        const repoCount = userData.public_repos || 18
        let totalLines = 0

        // Estimate lines of code from repositories
        for (const repo of reposData) {
          if (repo.language) {
            totalLines += repo.stargazers_count * 500 + (repo.watchers_count * 200)
          }
        }

        const estimatedLinesOfCode = Math.max(Math.round(totalLines / 1000), 50)

        const duration = 2000
        const startTime = Date.now()

        const newStats = [
          { label: 'Projects Built', value: 0, target: Math.min(repoCount + 7, 30), unit: '+' },
          { label: 'Lines of Code', value: 0, target: estimatedLinesOfCode, unit: 'K+' },
          { label: 'GitHub Repos', value: 0, target: repoCount, unit: '+' },
          { label: 'Avg Performance', value: 0, target: 95, unit: '/100' },
        ]

        const animate = () => {
          const now = Date.now()
          const progress = Math.min((now - startTime) / duration, 1)

          setStats((prevStats) =>
            newStats.map((stat, idx) => ({
              ...stat,
              value: Math.floor(stat.target * progress),
            }))
          )

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        animate()
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error)
        // Fallback to default animation if API fails
        const duration = 2000
        const startTime = Date.now()

        const animate = () => {
          const now = Date.now()
          const progress = Math.min((now - startTime) / duration, 1)

          setStats((prevStats) =>
            prevStats.map((stat) => ({
              ...stat,
              value: Math.floor(stat.target * progress),
            }))
          )

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        animate()
      }
    }

    fetchGitHubData()
  }, [])

  return (
    <div className="tech-stats">
      {stats.map((stat, idx) => (
        <div key={idx} className="stat-item">
          <div className="stat-number">
            {stat.value}
            <span className="stat-unit">{stat.unit}</span>
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
