import { IServiceFactory } from '../contracts';
import { AccountServices } from './AccountServices';
import { ProductServices } from './ProductServices';

export class ServiceFactory extends IServiceFactory<ServiceFactory> {
  registerProductServices(): ServiceFactory {
    this.productServices = new ProductServices(this._configurations, this._repositories, this._clientInstance);
    return this;
  }
  registerAccountServices(): ServiceFactory {
    this.accountServices = new AccountServices(this._configurations, this._repositories, this._clientInstance);
    return this;
  }
}
