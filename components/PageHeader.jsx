export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-primary text-white py-20 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && <p className="mt-3 text-lg opacity-90">{subtitle}</p>}
    </div>
  );
}
