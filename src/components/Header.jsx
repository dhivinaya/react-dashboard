export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <input
        type="text"
        placeholder="Search…"
        className="px-3 py-2 border rounded shadow-sm focus:ring"
      />
    </header>
  );
}
