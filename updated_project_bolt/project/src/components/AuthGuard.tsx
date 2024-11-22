import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: ('admin' | 'employee' | 'customer')[];
}

export default function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const { user, loading } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    } else if (!loading && user && allowedRoles && !allowedRoles.includes(user.role)) {
      navigate('/unauthorized');
    }
  }, [user, loading, navigate, allowedRoles]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}