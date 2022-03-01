import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../core/action_creator';
import routes from '../../../../constants/routes';

function LogOut(): ReactElement {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      dispatch(logOut());
      navigate('/');
    }, 500);
  }, []);

  return (
    <div>
      {t('auth:loggingOut')}
    </div>
  );
}

export default LogOut;
