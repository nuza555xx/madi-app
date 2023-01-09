import { LngLatBoundsLike, LngLatLike } from 'mapbox-gl';

export interface MapboxOptions {
  attributionControl?: boolean | undefined;
  center?: LngLatLike | undefined;
  container: string | HTMLElement;
  locale?: { [key: string]: string } | undefined;
  maxBounds?: LngLatBoundsLike | undefined;
  maxZoom?: number | undefined;
  minZoom?: number | undefined;
  pitch?: number | undefined;
  style?: mapboxgl.Style | string | undefined;
  zoom?: number | undefined;
  maxTileCacheSize?: number | undefined;
  accessToken?: string | undefined;
}
