const inputClass =
  "w-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 text-sm focus:outline-none focus:border-[#b39f79] transition-colors";

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  rows,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">
        {label}
      </label>
      {rows ? (
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClass}
        />
      )}
    </div>
  );
}
