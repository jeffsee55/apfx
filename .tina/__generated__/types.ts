// DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** References another document, used as a foreign key */
  Reference: any;
  JSON: any;
};



export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String'];
  basename: Scalars['String'];
  breadcrumbs: Array<Scalars['String']>;
  path: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  template: Scalars['String'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: Maybe<Scalars['Boolean']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type Node = {
  id: Scalars['ID'];
};

export type Document = {
  sys?: Maybe<SystemInfo>;
  id: Scalars['ID'];
  form: Scalars['JSON'];
  values: Scalars['JSON'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getCollection: Collection;
  getCollections: Array<Collection>;
  node: Node;
  getDocument: DocumentNode;
  getDocumentList: DocumentConnection;
  getDocumentFields: Scalars['JSON'];
  getLocaleInfoDocument: LocaleInfoDocument;
  getLocaleInfoList: LocaleInfoConnection;
  getNewsDocument: NewsDocument;
  getNewsList: NewsConnection;
  getFooterDocument: FooterDocument;
  getFooterList: FooterConnection;
  getThemeDocument: ThemeDocument;
  getThemeList: ThemeConnection;
  getNavigationDocument: NavigationDocument;
  getNavigationList: NavigationConnection;
  getPageDocument: PageDocument;
  getPageList: PageConnection;
};


export type QueryGetCollectionArgs = {
  collection?: Maybe<Scalars['String']>;
};


export type QueryNodeArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryGetDocumentArgs = {
  collection?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetDocumentListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetLocaleInfoDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetLocaleInfoListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetNewsDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetNewsListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetFooterDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetFooterListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetThemeDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetThemeListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetNavigationDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetNavigationListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryGetPageDocumentArgs = {
  relativePath?: Maybe<Scalars['String']>;
};


export type QueryGetPageListArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String'];
  slug: Scalars['String'];
  label: Scalars['String'];
  path: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  matches?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type DocumentNode = LocaleInfoDocument | NewsDocument | FooterDocument | ThemeDocument | NavigationDocument | PageDocument;

export type LocaleInfoAu = {
  __typename?: 'LocaleInfoAu';
  tel?: Maybe<Scalars['String']>;
  signUpLink?: Maybe<Scalars['String']>;
  signUpLinkPersonal?: Maybe<Scalars['String']>;
  signInLink?: Maybe<Scalars['String']>;
};

export type LocaleInfoUs = {
  __typename?: 'LocaleInfoUs';
  tel?: Maybe<Scalars['String']>;
  signUpLink?: Maybe<Scalars['String']>;
  signUpLinkPersonal?: Maybe<Scalars['String']>;
  signInLink?: Maybe<Scalars['String']>;
};

export type LocaleInfoGb = {
  __typename?: 'LocaleInfoGb';
  tel?: Maybe<Scalars['String']>;
  signUpLink?: Maybe<Scalars['String']>;
  signUpLinkPersonal?: Maybe<Scalars['String']>;
  signInLink?: Maybe<Scalars['String']>;
};

export type LocaleInfo = {
  __typename?: 'LocaleInfo';
  au?: Maybe<LocaleInfoAu>;
  us?: Maybe<LocaleInfoUs>;
  gb?: Maybe<LocaleInfoGb>;
};

export type LocaleInfoDocument = Node & Document & {
  __typename?: 'LocaleInfoDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: LocaleInfo;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type LocaleInfoConnectionEdges = {
  __typename?: 'LocaleInfoConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<LocaleInfoDocument>;
};

export type LocaleInfoConnection = Connection & {
  __typename?: 'LocaleInfoConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<LocaleInfoConnectionEdges>>>;
};

export type News = {
  __typename?: 'News';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type NewsDocument = Node & Document & {
  __typename?: 'NewsDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: News;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type NewsConnectionEdges = {
  __typename?: 'NewsConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<NewsDocument>;
};

export type NewsConnection = Connection & {
  __typename?: 'NewsConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<NewsConnectionEdges>>>;
};

export type FooterOffices = {
  __typename?: 'FooterOffices';
  location: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
};

export type FooterDisclaimers = {
  __typename?: 'FooterDisclaimers';
  body?: Maybe<Scalars['String']>;
};

export type Footer = {
  __typename?: 'Footer';
  offices?: Maybe<Array<Maybe<FooterOffices>>>;
  disclaimers: Array<FooterDisclaimers>;
};

export type FooterDocument = Node & Document & {
  __typename?: 'FooterDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Footer;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type FooterConnectionEdges = {
  __typename?: 'FooterConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<FooterDocument>;
};

export type FooterConnection = Connection & {
  __typename?: 'FooterConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<FooterConnectionEdges>>>;
};

export type Theme = {
  __typename?: 'Theme';
  displayFont?: Maybe<Scalars['String']>;
  colorMode?: Maybe<Scalars['String']>;
};

export type ThemeDocument = Node & Document & {
  __typename?: 'ThemeDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Theme;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type ThemeConnectionEdges = {
  __typename?: 'ThemeConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ThemeDocument>;
};

export type ThemeConnection = Connection & {
  __typename?: 'ThemeConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<ThemeConnectionEdges>>>;
};

export type NavigationItemsPageDocument = PageDocument;

export type NavigationItems = {
  __typename?: 'NavigationItems';
  page?: Maybe<NavigationItemsPageDocument>;
};

export type Navigation = {
  __typename?: 'Navigation';
  items: Array<NavigationItems>;
};

export type NavigationDocument = Node & Document & {
  __typename?: 'NavigationDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Navigation;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type NavigationConnectionEdges = {
  __typename?: 'NavigationConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<NavigationDocument>;
};

export type NavigationConnection = Connection & {
  __typename?: 'NavigationConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<NavigationConnectionEdges>>>;
};

export type PageSeo = {
  __typename?: 'PageSeo';
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description: Scalars['String'];
};

export type PageBlocksNewsNewsItemsArticleDocument = NewsDocument;

export type PageBlocksNewsNewsItems = {
  __typename?: 'PageBlocksNewsNewsItems';
  article: PageBlocksNewsNewsItemsArticleDocument;
};

export type PageBlocksNews = {
  __typename?: 'PageBlocksNews';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  newsItems: Array<PageBlocksNewsNewsItems>;
};

export type PageBlocksStatsWithImageStats = {
  __typename?: 'PageBlocksStatsWithImageStats';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
};

export type PageBlocksStatsWithImage = {
  __typename?: 'PageBlocksStatsWithImage';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  stats: Array<PageBlocksStatsWithImageStats>;
};

export type PageBlocksHeroAction = {
  __typename?: 'PageBlocksHeroAction';
  callToAction?: Maybe<Scalars['String']>;
  linkText: Scalars['String'];
  link: Scalars['String'];
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksHero = {
  __typename?: 'PageBlocksHero';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  style?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  action?: Maybe<PageBlocksHeroAction>;
};

export type PageBlocksSlideshowItemsAction = {
  __typename?: 'PageBlocksSlideshowItemsAction';
  callToAction?: Maybe<Scalars['String']>;
  linkText: Scalars['String'];
  link: Scalars['String'];
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksSlideshowItems = {
  __typename?: 'PageBlocksSlideshowItems';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  action?: Maybe<PageBlocksSlideshowItemsAction>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['String']>;
};

export type PageBlocksSlideshow = {
  __typename?: 'PageBlocksSlideshow';
  items?: Maybe<Array<Maybe<PageBlocksSlideshowItems>>>;
};

export type PageBlocksComparisonTableItems = {
  __typename?: 'PageBlocksComparisonTableItems';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  bulletPoints?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PageBlocksComparisonTableAction = {
  __typename?: 'PageBlocksComparisonTableAction';
  callToAction?: Maybe<Scalars['String']>;
  linkText: Scalars['String'];
  link: Scalars['String'];
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksComparisonTable = {
  __typename?: 'PageBlocksComparisonTable';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  items?: Maybe<Array<Maybe<PageBlocksComparisonTableItems>>>;
  action?: Maybe<PageBlocksComparisonTableAction>;
};

export type PageBlocksFullScreenLogo = {
  __typename?: 'PageBlocksFullScreenLogo';
  slogan?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['String']>;
};

export type PageBlocksFullScreenHeaderAction = {
  __typename?: 'PageBlocksFullScreenHeaderAction';
  callToAction?: Maybe<Scalars['String']>;
  linkText: Scalars['String'];
  link: Scalars['String'];
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksFullScreenHeader = {
  __typename?: 'PageBlocksFullScreenHeader';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  action?: Maybe<PageBlocksFullScreenHeaderAction>;
  image?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['String']>;
};

export type PageBlocksFeatureFeatures = {
  __typename?: 'PageBlocksFeatureFeatures';
  icon: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type PageBlocksFeature = {
  __typename?: 'PageBlocksFeature';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  featureStyle?: Maybe<Scalars['String']>;
  features: Array<PageBlocksFeatureFeatures>;
  image?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['String']>;
};

export type PageBlocksScreenShotFeatureAction = {
  __typename?: 'PageBlocksScreenShotFeatureAction';
  callToAction?: Maybe<Scalars['String']>;
  linkText: Scalars['String'];
  link: Scalars['String'];
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksScreenShotFeatureTestimonialAuthor = {
  __typename?: 'PageBlocksScreenShotFeatureTestimonialAuthor';
  name: Scalars['String'];
  avatar: Scalars['String'];
};

export type PageBlocksScreenShotFeatureTestimonial = {
  __typename?: 'PageBlocksScreenShotFeatureTestimonial';
  quote: Scalars['String'];
  author?: Maybe<PageBlocksScreenShotFeatureTestimonialAuthor>;
};

export type PageBlocksScreenShotFeature = {
  __typename?: 'PageBlocksScreenShotFeature';
  title: Scalars['String'];
  subTitle?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  action?: Maybe<PageBlocksScreenShotFeatureAction>;
  testimonial?: Maybe<PageBlocksScreenShotFeatureTestimonial>;
};

export type PageBlocks = PageBlocksNews | PageBlocksStatsWithImage | PageBlocksHero | PageBlocksSlideshow | PageBlocksComparisonTable | PageBlocksFullScreenLogo | PageBlocksFullScreenHeader | PageBlocksFeature | PageBlocksScreenShotFeature;

export type Page = {
  __typename?: 'Page';
  title: Scalars['String'];
  link: Scalars['String'];
  seo?: Maybe<PageSeo>;
  blocks?: Maybe<Array<Maybe<PageBlocks>>>;
};

export type PageDocument = Node & Document & {
  __typename?: 'PageDocument';
  id: Scalars['ID'];
  sys: SystemInfo;
  data: Page;
  form: Scalars['JSON'];
  values: Scalars['JSON'];
  dataJSON: Scalars['JSON'];
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PageDocument>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  createDocument: DocumentNode;
  updateLocaleInfoDocument: LocaleInfoDocument;
  createLocaleInfoDocument: LocaleInfoDocument;
  updateNewsDocument: NewsDocument;
  createNewsDocument: NewsDocument;
  updateFooterDocument: FooterDocument;
  createFooterDocument: FooterDocument;
  updateThemeDocument: ThemeDocument;
  createThemeDocument: ThemeDocument;
  updateNavigationDocument: NavigationDocument;
  createNavigationDocument: NavigationDocument;
  updatePageDocument: PageDocument;
  createPageDocument: PageDocument;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  template?: Maybe<Scalars['String']>;
};


export type MutationUpdateDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationCreateDocumentArgs = {
  collection: Scalars['String'];
  relativePath: Scalars['String'];
  params: DocumentMutation;
};


export type MutationUpdateLocaleInfoDocumentArgs = {
  relativePath: Scalars['String'];
  params: LocaleInfoMutation;
};


export type MutationCreateLocaleInfoDocumentArgs = {
  relativePath: Scalars['String'];
  params: LocaleInfoMutation;
};


export type MutationUpdateNewsDocumentArgs = {
  relativePath: Scalars['String'];
  params: NewsMutation;
};


export type MutationCreateNewsDocumentArgs = {
  relativePath: Scalars['String'];
  params: NewsMutation;
};


export type MutationUpdateFooterDocumentArgs = {
  relativePath: Scalars['String'];
  params: FooterMutation;
};


export type MutationCreateFooterDocumentArgs = {
  relativePath: Scalars['String'];
  params: FooterMutation;
};


export type MutationUpdateThemeDocumentArgs = {
  relativePath: Scalars['String'];
  params: ThemeMutation;
};


export type MutationCreateThemeDocumentArgs = {
  relativePath: Scalars['String'];
  params: ThemeMutation;
};


export type MutationUpdateNavigationDocumentArgs = {
  relativePath: Scalars['String'];
  params: NavigationMutation;
};


export type MutationCreateNavigationDocumentArgs = {
  relativePath: Scalars['String'];
  params: NavigationMutation;
};


export type MutationUpdatePageDocumentArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};


export type MutationCreatePageDocumentArgs = {
  relativePath: Scalars['String'];
  params: PageMutation;
};

export type DocumentMutation = {
  localeInfo?: Maybe<LocaleInfoMutation>;
  news?: Maybe<NewsMutation>;
  footer?: Maybe<FooterMutation>;
  theme?: Maybe<ThemeMutation>;
  navigation?: Maybe<NavigationMutation>;
  page?: Maybe<PageMutation>;
};

export type LocaleInfoAuMutation = {
  tel?: Maybe<Scalars['String']>;
  signUpLink?: Maybe<Scalars['String']>;
  signUpLinkPersonal?: Maybe<Scalars['String']>;
  signInLink?: Maybe<Scalars['String']>;
};

export type LocaleInfoUsMutation = {
  tel?: Maybe<Scalars['String']>;
  signUpLink?: Maybe<Scalars['String']>;
  signUpLinkPersonal?: Maybe<Scalars['String']>;
  signInLink?: Maybe<Scalars['String']>;
};

export type LocaleInfoGbMutation = {
  tel?: Maybe<Scalars['String']>;
  signUpLink?: Maybe<Scalars['String']>;
  signUpLinkPersonal?: Maybe<Scalars['String']>;
  signInLink?: Maybe<Scalars['String']>;
};

export type LocaleInfoMutation = {
  au?: Maybe<LocaleInfoAuMutation>;
  us?: Maybe<LocaleInfoUsMutation>;
  gb?: Maybe<LocaleInfoGbMutation>;
};

export type NewsMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type FooterOfficesMutation = {
  location?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type FooterDisclaimersMutation = {
  body?: Maybe<Scalars['String']>;
};

export type FooterMutation = {
  offices?: Maybe<Array<Maybe<FooterOfficesMutation>>>;
  disclaimers?: Maybe<Array<Maybe<FooterDisclaimersMutation>>>;
};

export type ThemeMutation = {
  displayFont?: Maybe<Scalars['String']>;
  colorMode?: Maybe<Scalars['String']>;
};

export type NavigationItemsMutation = {
  page?: Maybe<Scalars['String']>;
};

export type NavigationMutation = {
  items?: Maybe<Array<Maybe<NavigationItemsMutation>>>;
};

export type PageSeoMutation = {
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PageBlocksNewsNewsItemsMutation = {
  article?: Maybe<Scalars['String']>;
};

export type PageBlocksNewsMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  newsItems?: Maybe<Array<Maybe<PageBlocksNewsNewsItemsMutation>>>;
};

export type PageBlocksStatsWithImageStatsMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PageBlocksStatsWithImageMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  stats?: Maybe<Array<Maybe<PageBlocksStatsWithImageStatsMutation>>>;
};

export type PageBlocksHeroActionMutation = {
  callToAction?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksHeroMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  action?: Maybe<PageBlocksHeroActionMutation>;
};

export type PageBlocksSlideshowItemsActionMutation = {
  callToAction?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksSlideshowItemsMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  action?: Maybe<PageBlocksSlideshowItemsActionMutation>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['String']>;
};

export type PageBlocksSlideshowMutation = {
  items?: Maybe<Array<Maybe<PageBlocksSlideshowItemsMutation>>>;
};

export type PageBlocksComparisonTableItemsMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  bulletPoints?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PageBlocksComparisonTableActionMutation = {
  callToAction?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksComparisonTableMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PageBlocksComparisonTableItemsMutation>>>;
  action?: Maybe<PageBlocksComparisonTableActionMutation>;
};

export type PageBlocksFullScreenLogoMutation = {
  slogan?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['String']>;
};

export type PageBlocksFullScreenHeaderActionMutation = {
  callToAction?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksFullScreenHeaderMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  action?: Maybe<PageBlocksFullScreenHeaderActionMutation>;
  image?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['String']>;
};

export type PageBlocksFeatureFeaturesMutation = {
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type PageBlocksFeatureMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featureStyle?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<PageBlocksFeatureFeaturesMutation>>>;
  image?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  overlayOpacity?: Maybe<Scalars['String']>;
};

export type PageBlocksScreenShotFeatureActionMutation = {
  callToAction?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkOverride?: Maybe<Scalars['String']>;
  secondaryText?: Maybe<Scalars['String']>;
  secondaryLink?: Maybe<Scalars['String']>;
  secondaryLinkOverride?: Maybe<Scalars['String']>;
};

export type PageBlocksScreenShotFeatureTestimonialAuthorMutation = {
  name?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type PageBlocksScreenShotFeatureTestimonialMutation = {
  quote?: Maybe<Scalars['String']>;
  author?: Maybe<PageBlocksScreenShotFeatureTestimonialAuthorMutation>;
};

export type PageBlocksScreenShotFeatureMutation = {
  title?: Maybe<Scalars['String']>;
  subTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  action?: Maybe<PageBlocksScreenShotFeatureActionMutation>;
  testimonial?: Maybe<PageBlocksScreenShotFeatureTestimonialMutation>;
};

export type PageBlocksMutation = {
  news?: Maybe<PageBlocksNewsMutation>;
  statsWithImage?: Maybe<PageBlocksStatsWithImageMutation>;
  hero?: Maybe<PageBlocksHeroMutation>;
  slideshow?: Maybe<PageBlocksSlideshowMutation>;
  comparisonTable?: Maybe<PageBlocksComparisonTableMutation>;
  fullScreenLogo?: Maybe<PageBlocksFullScreenLogoMutation>;
  fullScreenHeader?: Maybe<PageBlocksFullScreenHeaderMutation>;
  feature?: Maybe<PageBlocksFeatureMutation>;
  screenShotFeature?: Maybe<PageBlocksScreenShotFeatureMutation>;
};

export type PageMutation = {
  title?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  seo?: Maybe<PageSeoMutation>;
  blocks?: Maybe<Array<Maybe<PageBlocksMutation>>>;
};

