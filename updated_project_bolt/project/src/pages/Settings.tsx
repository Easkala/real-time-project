import React from 'react';
import { Save, Store, Bell, Shield, Users, Database } from 'lucide-react';

const settings = [
  {
    category: 'Store Settings',
    icon: Store,
    items: [
      { name: 'Store Information', description: 'Update your store details and business information' },
      { name: 'Branch Management', description: 'Manage multiple store locations and settings' },
      { name: 'Operating Hours', description: 'Set store operating hours and holidays' },
    ],
  },
  {
    category: 'Security',
    icon: Shield,
    items: [
      { name: 'User Permissions', description: 'Manage role-based access control' },
      { name: 'Authentication', description: 'Configure login and security settings' },
      { name: 'Audit Logs', description: 'View system activity and security logs' },
    ],
  },
  {
    category: 'Notifications',
    icon: Bell,
    items: [
      { name: 'Email Templates', description: 'Customize notification email templates' },
      { name: 'Alert Settings', description: 'Configure inventory and order alerts' },
      { name: 'Push Notifications', description: 'Manage mobile app notification settings' },
    ],
  },
  {
    category: 'Data Management',
    icon: Database,
    items: [
      { name: 'Backup & Restore', description: 'Manage system data backups' },
      { name: 'Import/Export', description: 'Import or export store data' },
      { name: 'Data Cleanup', description: 'Clean up old or unused data' },
    ],
  },
];

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Save className="h-5 w-5" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {settings.map((section) => (
          <div key={section.category} className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{section.category}</h2>
              </div>

              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-200"
                  >
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800">Configure</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}