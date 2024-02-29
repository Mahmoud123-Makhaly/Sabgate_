import { RepositoryModulesRegistryFactory, RepositoryInstanceType } from '../../infrastructure';
import { IConfiguration } from './Configuration';
import { Models, IRepositories } from '../../domain';
import { ClientTypes } from '../models';
import { IProductServices, ISEOService, IAccountService } from '.';

export abstract class IServiceFactory<T> {
  protected _repositories: RepositoryInstanceType;
  protected readonly _configurations: IConfiguration;
  protected readonly _clientInstance: IRepositories.IClient;
  productServices: IProductServices | null = null;
  protected seoServices: ISEOService | null = null;
  accountServices: IAccountService | null = null;

  constructor(configuration: IConfiguration) {
    this._configurations = configuration;
    this._repositories = this.loadRepositoryModule(configuration);
    this._clientInstance = new this._repositories.Client(configuration.basePath, configuration.accessToken);
  }

  private loadRepositoryModule(configuration: IConfiguration) {
    switch (configuration.client.toString()) {
      case ClientTypes.GraphQL.toString():
        return new RepositoryModulesRegistryFactory(Models.ModulesTypes.Apollo).createInstance();
      case ClientTypes.RestAPI.toString():
        return new RepositoryModulesRegistryFactory(Models.ModulesTypes.Axios).createInstance();
      default:
        return new RepositoryModulesRegistryFactory(Models.ModulesTypes.Apollo).createInstance();
    }
  }

  abstract registerProductServices(): T;
  abstract registerAccountServices(): T;
}
