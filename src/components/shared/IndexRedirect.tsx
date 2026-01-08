import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { detectLanguage } from '../../utils/language';

export const IndexRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const lang = detectLanguage();
        navigate(`/${lang}`, { replace: true });
    }, [navigate]);

    return null;
};
