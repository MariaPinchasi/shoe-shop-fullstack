import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalUserContext } from '../hooks/useGlobalUserContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useGlobalUserContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user || !user?.isAdmin) {
            navigate('/');
        }
    }, [navigate, user])
    return children;

};

export default ProtectedRoute;
