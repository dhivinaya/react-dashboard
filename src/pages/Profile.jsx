export default function Profile() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <textarea placeholder="Bio" className="w-full border p-2 rounded"></textarea>
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Save
        </button>
      </form>
    </div>
  );
}
