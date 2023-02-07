import { useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import jsonwebtoken from 'jsonwebtoken';

type Props = {
  children: ReactNode;
};
export const RouteGuard = ({ children }: Props) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  const authCheck = (url: string) => {
    const token = localStorage.getItem('refresh_token');
    const publicPaths = ['/'];
    const path = url.split('?')[0];
    if (publicPaths.includes(path)) {
      return setAuthorized(true);
    }

    if (!token) {
      setAuthorized(false);
      return router.push({
        pathname: '/',
        query: { returnUrl: router.asPath },
      });
    }

    if (publicPaths.includes(path)) {
      return setAuthorized(true);
    }

    const decoded = jsonwebtoken.decode(
      localStorage.getItem('refresh_token') ?? ''
    ) as { exp: number };
    if (Date.now() >= decoded.exp * 1000) {
      setAuthorized(false);
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('access_token');
      return router.push({
        pathname: '/',
        query: { returnUrl: router.asPath },
      });
    }
    return setAuthorized(true);
  };

  useEffect(() => {
    authCheck(router.asPath);

    router.events.on('routeChangeComplete', authCheck);
    return () => {
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  return <>{authorized && children}</>;
};
