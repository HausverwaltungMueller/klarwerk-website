import { Link } from 'react-router-dom';
import { trail } from '@/routes';

/** Sichtbare Brotkrume, gleich dem BreadcrumbList im Markup. */
export function Breadcrumbs({ path }: { path: string }) {
  const items = trail(path);
  if (items.length < 2) return null;
  return (
    <nav aria-label="Brotkrumennavigation" className="page pt-9">
      <ol className="flex flex-wrap items-center gap-2 text-spec">
        {items.map((r, i) => (
          <li key={r.path} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true" className="text-text-2">·</span> : null}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-text-1">{r.breadcrumb}</span>
            ) : (
              <Link to={r.path} className="text-text-2 hover:text-text-0">{r.breadcrumb}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
