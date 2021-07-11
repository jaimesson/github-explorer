import Repository from '../models/Repository';

interface RepositoryItemProps {
  repository: Repository
}

export function RepositoryItem(props: RepositoryItemProps) {
  const { repository } = props;
  return (
    <li>
      <strong>{repository?.name ?? 'Default'}</strong>
      <p>{repository?.description ?? 'Default'}</p>

      <a href={repository?.html_url}>
        Acessar repositórios
      </a>
    </li>
  );
}