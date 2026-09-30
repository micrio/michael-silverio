import { experienceRoles } from './experience';

export interface IProductionApp {
  name: string;
  company: string;
  period: string;
  description: string;
  /** Only shipped features are counted — maintenance/other are excluded. */
  features: string[];
  /** Maintenance, refactors, infra, and process work. Not counted as features. */
  contributions: string[];
}

export interface IRoleContributions {
  company: string;
  period: string;
  slug: string;
  items: string[];
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
    contributions: app.contributions ?? [],
  }))
);

export const roleContributions: IRoleContributions[] = experienceRoles
  .filter((role) => (role.contributions?.length ?? 0) > 0)
  .map((role) => ({
    company: role.company,
    period: role.period,
    slug: appSlug(role.company),
    items: role.contributions ?? [],
  }));

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

export const totalContributions =
  productionApps.reduce((sum, app) => sum + app.contributions.length, 0) +
  roleContributions.reduce((sum, role) => sum + role.items.length, 0);
