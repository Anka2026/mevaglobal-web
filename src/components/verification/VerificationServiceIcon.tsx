import type { LucideIcon } from "lucide-react";
import {
  Anchor,
  Atom,
  BadgeCheck,
  BookOpen,
  Building2,
  ChartColumn,
  ClipboardCheck,
  ClipboardList,
  Cpu,
  Database,
  Droplets,
  Factory,
  FileCheck,
  FileCheck2,
  FileSearch,
  FileSpreadsheet,
  FileText,
  FlaskConical,
  Footprints,
  Globe2,
  Layers,
  Leaf,
  LineChart,
  Mountain,
  Orbit,
  Package,
  Plane,
  Recycle,
  Route,
  Scale,
  ScanSearch,
  Shirt,
  Sprout,
  Target,
  TreePine,
  Users,
  Wind,
  Workflow,
} from "lucide-react";

/**
 * Single UI entry point for service listing/detail icons.
 * Keeps `lucide-react` in one webpack/RSC-friendly module graph (no icon JSX stored in data registries).
 */
const ICON_BY_KEY = {
  anchor: Anchor,
  atom: Atom,
  badgeCheck: BadgeCheck,
  bookOpen: BookOpen,
  building2: Building2,
  chartColumn: ChartColumn,
  clipboardCheck: ClipboardCheck,
  clipboardList: ClipboardList,
  cpu: Cpu,
  database: Database,
  droplets: Droplets,
  factory: Factory,
  fileCheck: FileCheck,
  fileCheck2: FileCheck2,
  fileSearch: FileSearch,
  fileSpreadsheet: FileSpreadsheet,
  fileText: FileText,
  flaskConical: FlaskConical,
  footprints: Footprints,
  globe2: Globe2,
  layers: Layers,
  leaf: Leaf,
  lineChart: LineChart,
  mountain: Mountain,
  orbit: Orbit,
  package: Package,
  plane: Plane,
  recycle: Recycle,
  route: Route,
  scale: Scale,
  scanSearch: ScanSearch,
  shirt: Shirt,
  sprout: Sprout,
  target: Target,
  treePine: TreePine,
  users: Users,
  wind: Wind,
  workflow: Workflow,
} as const satisfies Record<string, LucideIcon>;

export type VerificationIconKey = keyof typeof ICON_BY_KEY;

/** Dev diagnostics: listing/registry icon strings must exist here (otherwise UI falls back to FileCheck2). */
export function isKnownVerificationIconKey(k: string): k is VerificationIconKey {
  return Object.prototype.hasOwnProperty.call(ICON_BY_KEY, k);
}

export function VerificationServiceIcon({
  name,
  className = "h-5 w-5",
}: {
  name: VerificationIconKey;
  className?: string;
}) {
  const Icon = ICON_BY_KEY[name] ?? FileCheck2;
  return <Icon className={className} aria-hidden="true" />;
}

/** For listing cards that need the component type (legacy prop shape). */
export function getVerificationServiceLucideIcon(name: VerificationIconKey): LucideIcon {
  return ICON_BY_KEY[name] ?? FileCheck2;
}
