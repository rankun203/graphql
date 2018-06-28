import { Express, Router } from 'express';
import { AccountsServer } from '@accounts/server';
import { AccountsExpressOptions } from '../types/types';

const configureExpress = (app: Express) => {
  const services = accountsServer.getServices();
  const router = Router();
};

const defaultOptions: AccountsExpressOptions = {
  path: '/accounts',
};

const accountsRouter = (
  accountsServer: AccountsServer,
  options: AccountsExpressOptions = {}
): Router => {
  options = { ...defaultOptions, ...options };
  const { path } = options;
  const services = accountsServer.getServices();
  const router = Router();

  // @accounts/oauth
  if (services.oauth) {
    router.get(`${path}/oauth/:provider/callback`, providerCallback(accountsServer, options));
  }

  return router;
};
