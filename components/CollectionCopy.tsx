type CollectionCopyProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  descriptionLabel: string;
  description: string[];
  role: string[];
  project: string[];
  light?: boolean;
};

function MetaColumn({ heading, lines, className }: { heading: string; lines: string[]; className?: string }) {
  return (
    <div className={className}>
      <p className="meta-heading">{heading}</p>
      {lines.map((line) => <p key={line}>{line}</p>)}
    </div>
  );
}

export function CollectionCopy({
  eyebrow,
  title,
  titleId,
  descriptionLabel,
  description,
  role,
  project,
  light = false,
}: CollectionCopyProps) {
  return (
    <div className={`collection-copy${light ? ' light' : ''}`}>
      <p className="collection-eyebrow">{eyebrow}</p>
      <h2 id={titleId} className="collection-title">{title}</h2>
      <div className="collection-meta">
        <div>
          <p className="meta-heading">{descriptionLabel}</p>
          <p className="description">
            {description.map((line) => <span className="copy-line" key={line}>{line}</span>)}
          </p>
        </div>
        <MetaColumn heading="Role" lines={role} className="role" />
        <MetaColumn heading="Project type" lines={project} className="project" />
      </div>
    </div>
  );
}
