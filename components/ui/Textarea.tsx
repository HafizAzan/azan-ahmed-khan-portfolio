type TextareaProps = {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
};

export function Textarea({
  id,
  name,
  label,
  placeholder,
  required,
  rows = 5,
  className = "",
}: TextareaProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm text-secondary">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        className="w-full resize-y rounded-xl border border-border bg-transparent px-4 py-3 text-white outline-none transition-colors placeholder:text-secondary/60 focus:border-accent"
      />
    </div>
  );
}
