export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="space-y-4">
        <div>
          <label className="flex justify-between">
            <span>Enable Notifications</span>
            <input type="checkbox" defaultChecked />
          </label>
        </div>
        <div>
          <label className="flex justify-between">
            <span>Dark Mode</span>
            <input type="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
}
