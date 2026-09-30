import { experienceRoles } from './experience';

export interface IProductionApp {
  name: string;
  company: string;
  period: string;
  description: string;
  /** Only shipped features are counted — maintenance/other are excluded. */
  features: string[];
}

export const appSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const productionApps: IProductionApp[] = experienceRoles.flatMap((role) =>
  role.apps.map((app) => ({
    name: app.name,
    company: role.company,
    period: role.period,
    description: app.description,
    features: app.features,
  }))
);

export const shippedFeatures = productionApps.flatMap((app) =>
  app.features.map((feature) => ({
    app: app.name,
    slug: appSlug(app.name),
    company: app.company,
    period: app.period,
    feature,
  }))
);

export const totalProductionApps = productionApps.length;

export const totalShippedFeatures = productionApps.reduce(
  (sum, app) => sum + app.features.length,
  0
);
