export interface IndianCitiesImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const indianCitiesBanner: IndianCitiesImage = {
  src: '/images/indian_cities/ic_banner.png',
  alt: 'Map of an Indian city showing roads, waterways, and vegetation',
  width: 1728,
  height: 449,
};

export const indianCitiesBackground: IndianCitiesImage = {
  src: '/images/indian_cities/ic_1.png',
  alt: 'Background research into maps, landmarks, paths, edges, nodes, and districts',
  width: 1436,
  height: 1077,
};

export const indianCitiesUserResearch: IndianCitiesImage = {
  src: '/images/indian_cities/ic_2.png',
  alt: 'Navigation app survey findings and user comments',
  width: 1334,
  height: 623,
};

export const indianCitiesKeyInsights: IndianCitiesImage = {
  src: '/images/indian_cities/ic_3.png',
  alt: 'Key insights for routing, navigation guidance, and real-time updates',
  width: 1311,
  height: 303,
};

export const indianCitiesCompetitiveAnalysis = [
  {
    src: '/images/indian_cities/ic_4.png',
    alt: 'Competitive analysis of Google Maps and Nolli app user flows',
    width: 1594,
    height: 575,
  },
  {
    src: '/images/indian_cities/ic_5.png',
    alt: 'Nolli app user flow',
    width: 1466,
    height: 438,
  },
  {
    src: '/images/indian_cities/ic_6.png',
    alt: 'Visual analysis of Google Maps across street, neighbourhood, ward, zonal, and city scales',
    width: 1404,
    height: 399,
  },
] as const satisfies readonly IndianCitiesImage[];

export const indianCitiesDesignGoals: IndianCitiesImage = {
  src: '/images/indian_cities/ic_7.png',
  alt: 'Design goals connecting user pain points to navigation design opportunities',
  width: 857,
  height: 463,
};

export const indianCitiesVisualExploration = [
  {
    src: '/images/indian_cities/ic_8.png',
    alt: 'District-scale colour scheme for an Indian city map',
    width: 1206,
    height: 457,
  },
  {
    src: '/images/indian_cities/ic_9.png',
    alt: 'Map pins and icons organised by urban land-use category',
    width: 1359,
    height: 157,
  },
] as const satisfies readonly IndianCitiesImage[];

export const indianCitiesScaleStudies = [
  {
    src: '/images/indian_cities/ic_10.png',
    alt: 'City-scale map exploration',
    width: 412,
    height: 917,
    title: 'City scale',
    scope: ['Cities', 'Towns', 'Provinces', 'Villages'],
  },
  {
    src: '/images/indian_cities/ic_11.png',
    alt: 'Zonal-scale map exploration',
    width: 412,
    height: 917,
    title: 'Zonal scale',
    scope: ['City landmarks', 'Important junctions', 'Railway stations', 'Major bus stops', 'City areas', 'Recreational areas'],
  },
  {
    src: '/images/indian_cities/ic_12.png',
    alt: 'Neighbourhood-scale map exploration',
    width: 412,
    height: 917,
    title: 'Neighbourhood scale',
    scope: ['Junctions', 'Traffic signals', 'Important roads', 'Lakes', 'Landuse'],
  },
] as const satisfies readonly (IndianCitiesImage & { title: string; scope: readonly string[] })[];

export const indianCitiesStreetScalePhotos = [
  {
    src: '/images/indian_cities/ic_13.png',
    alt: 'Busy street in an Indian city',
    width: 395,
    height: 364,
  },
  {
    src: '/images/indian_cities/ic_14.png',
    alt: 'Crowded traffic junction in an Indian city',
    width: 395,
    height: 234,
  },
  {
    src: '/images/indian_cities/ic_15.png',
    alt: 'Dense commercial street in an Indian city',
    width: 395,
    height: 248,
  },
] as const satisfies readonly IndianCitiesImage[];

export const indianCitiesStreetScaleMaps = [
  {
    src: '/images/indian_cities/ic_16.png',
    alt: 'Street-scale navigation map before route selection',
    width: 412,
    height: 917,
  },
  {
    src: '/images/indian_cities/ic_17.png',
    alt: 'Street-scale navigation map with route selection',
    width: 412,
    height: 917,
  },
] as const satisfies readonly IndianCitiesImage[];

export const indianCitiesAppendix: IndianCitiesImage = {
  src: '/images/indian_cities/ic_18.png',
  alt: 'User perception research mapping activity comparing actual routes and remembered routes',
  width: 1141,
  height: 1148,
};
