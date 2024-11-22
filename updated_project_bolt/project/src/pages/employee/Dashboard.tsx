import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Award, Target, TrendingUp, Clock } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

const performanceData = [
  { month: 'Jan', sales: 42, target: 40 },
  { month: 'Feb', sales: 38, target: 40 },
  { month: 'Mar', sales: 45, target: 40 },
  { month: 'Apr', sales: 41, target: 40 },
  { month: 'May', sales: 48, target: 40 },
  { month: 'Jun', sales: 44, target: 40 },
];

export default function EmployeeDashboard() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Welcome back, {user?.name}
        </h2>
        <p className="text-gray-600">
          {user?.position} - {user?.department}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Performance Score</p>
              <p className="text-2xl font-semibold text-gray-900">92%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Award className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Achievements</p>
              <p className="text-2xl font-semibold text-gray-900">5</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Sales Target</p>
              <p className="text-2xl font-semibold text-gray-900">110%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Hours Worked</p>
              <p className="text-2xl font-semibold text-gray-900">164h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Performance Trends</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3B82F6" name="Sales" />
              <Bar dataKey="target" fill="#E5E7EB" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}