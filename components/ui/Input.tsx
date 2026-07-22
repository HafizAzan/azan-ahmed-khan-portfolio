type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export function Input({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required,
  className = "",
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm text-secondary">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-white outline-none transition-colors placeholder:text-secondary/60 focus:border-accent"
      />
    </div>
  );
}
