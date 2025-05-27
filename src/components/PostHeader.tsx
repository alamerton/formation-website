// src/components/PostHeader.tsx
type PostHeaderProps = {
  title: string;
  date: string;
  description?: string;
};

export function PostHeader({ title, date, description }: PostHeaderProps) {
  return (
    <header className="mb-8 border-b pb-4">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500 text-sm mb-2">{date}</p>
      {description && <p className="text-lg text-gray-700">{description}</p>}
    </header>
  );
}
