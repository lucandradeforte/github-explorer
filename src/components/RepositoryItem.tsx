import { IconEyeLine } from "../assets/icons/eye-line"
import { IconGitBranchLine } from "../assets/icons/git-branch-line"
import { IconStarLine } from "../assets/icons/star-line"

interface RepositoryItemProps {
  repository: {
    name: string
    description: string
    html_url: string
    stargazers_count: string
    watchers_count: string
    forks_count: string
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path
            fill="none"
            d="M0 0h24v24H0z"
          />

          <path
            d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v9l-3.794-3.793-5.999 6-1.414-1.414 5.999-6L12 3h9z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </a>

      <div className="repository-status">
        <p>
          <IconStarLine color="#6e6e6e" size={16} />
          {props.repository.stargazers_count}
        </p>
        <p>
          <IconEyeLine color="#6e6e6e" size={16} />
          {props.repository.watchers_count}
        </p>
        <p>
          <IconGitBranchLine color="#6e6e6e" size={16} />
          {props.repository.forks_count}
        </p>
      </div>
    </li>
  )
}