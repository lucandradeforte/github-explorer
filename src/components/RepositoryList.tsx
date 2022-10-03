import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss"
import { IconGithubFill } from "../assets/icons/github-fill";

interface Repository {
  name: string
  description: string
  html_url: string
  stargazers_count: string
  watchers_count: string
  forks_count: string
}

export function RepositoryName() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <IconGithubFill color="#ffffff" size={36} />

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  )
}