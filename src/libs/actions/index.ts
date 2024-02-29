import * as Account from './account/actions';
import * as App from './app/actions';
import * as Products from './products/actions';
import * as Session from './session';

export const Actions = {
  products: Products,
  account: Account,
  app: App,
  session: Session,
};
