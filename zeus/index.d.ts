type ZEUS_INTERFACES = GraphQLTypes["Node"] | GraphQLTypes["Document"] | GraphQLTypes["Connection"]
type ZEUS_UNIONS = GraphQLTypes["DocumentNode"] | GraphQLTypes["NavigationItemsPageDocument"] | GraphQLTypes["PageBlocksNewsNewsItemsArticleDocument"] | GraphQLTypes["PageBlocks"]

export type ValueTypes = {
    /** References another document, used as a foreign key */
["Reference"]:unknown;
	["JSON"]:unknown;
	["SystemInfo"]: AliasType<{
	filename?:true,
	basename?:true,
breadcrumbs?: [{	excludeExtension?:boolean},true],
	path?:true,
	relativePath?:true,
	extension?:true,
	template?:true,
	collection?:ValueTypes["Collection"],
		__typename?: true
}>;
	["PageInfo"]: AliasType<{
	hasPreviousPage?:true,
	hasNextPage?:true,
	startCursor?:true,
	endCursor?:true,
		__typename?: true
}>;
	["Node"]:AliasType<{
		id?:true;
		['...on LocaleInfoDocument']?: Omit<ValueTypes["LocaleInfoDocument"],keyof ValueTypes["Node"]>;
		['...on NewsDocument']?: Omit<ValueTypes["NewsDocument"],keyof ValueTypes["Node"]>;
		['...on FooterDocument']?: Omit<ValueTypes["FooterDocument"],keyof ValueTypes["Node"]>;
		['...on ThemeDocument']?: Omit<ValueTypes["ThemeDocument"],keyof ValueTypes["Node"]>;
		['...on NavigationDocument']?: Omit<ValueTypes["NavigationDocument"],keyof ValueTypes["Node"]>;
		['...on PageDocument']?: Omit<ValueTypes["PageDocument"],keyof ValueTypes["Node"]>;
		__typename?: true
}>;
	["Document"]:AliasType<{
		sys?:ValueTypes["SystemInfo"],
	id?:true,
	form?:true,
	values?:true;
		['...on LocaleInfoDocument']?: Omit<ValueTypes["LocaleInfoDocument"],keyof ValueTypes["Document"]>;
		['...on NewsDocument']?: Omit<ValueTypes["NewsDocument"],keyof ValueTypes["Document"]>;
		['...on FooterDocument']?: Omit<ValueTypes["FooterDocument"],keyof ValueTypes["Document"]>;
		['...on ThemeDocument']?: Omit<ValueTypes["ThemeDocument"],keyof ValueTypes["Document"]>;
		['...on NavigationDocument']?: Omit<ValueTypes["NavigationDocument"],keyof ValueTypes["Document"]>;
		['...on PageDocument']?: Omit<ValueTypes["PageDocument"],keyof ValueTypes["Document"]>;
		__typename?: true
}>;
	/** A relay-compliant pagination connection */
["Connection"]:AliasType<{
		totalCount?:true;
		['...on DocumentConnection']?: Omit<ValueTypes["DocumentConnection"],keyof ValueTypes["Connection"]>;
		['...on LocaleInfoConnection']?: Omit<ValueTypes["LocaleInfoConnection"],keyof ValueTypes["Connection"]>;
		['...on NewsConnection']?: Omit<ValueTypes["NewsConnection"],keyof ValueTypes["Connection"]>;
		['...on FooterConnection']?: Omit<ValueTypes["FooterConnection"],keyof ValueTypes["Connection"]>;
		['...on ThemeConnection']?: Omit<ValueTypes["ThemeConnection"],keyof ValueTypes["Connection"]>;
		['...on NavigationConnection']?: Omit<ValueTypes["NavigationConnection"],keyof ValueTypes["Connection"]>;
		['...on PageConnection']?: Omit<ValueTypes["PageConnection"],keyof ValueTypes["Connection"]>;
		__typename?: true
}>;
	["Query"]: AliasType<{
getOptimizedQuery?: [{	queryString:string},true],
getCollection?: [{	collection?:string},ValueTypes["Collection"]],
	getCollections?:ValueTypes["Collection"],
node?: [{	id?:string},ValueTypes["Node"]],
getDocument?: [{	collection?:string,	relativePath?:string},ValueTypes["DocumentNode"]],
getDocumentList?: [{	before?:string,	after?:string,	first?:number,	last?:number},ValueTypes["DocumentConnection"]],
	getDocumentFields?:true,
getLocaleInfoDocument?: [{	relativePath?:string},ValueTypes["LocaleInfoDocument"]],
getLocaleInfoList?: [{	before?:string,	after?:string,	first?:number,	last?:number},ValueTypes["LocaleInfoConnection"]],
getNewsDocument?: [{	relativePath?:string},ValueTypes["NewsDocument"]],
getNewsList?: [{	before?:string,	after?:string,	first?:number,	last?:number},ValueTypes["NewsConnection"]],
getFooterDocument?: [{	relativePath?:string},ValueTypes["FooterDocument"]],
getFooterList?: [{	before?:string,	after?:string,	first?:number,	last?:number},ValueTypes["FooterConnection"]],
getThemeDocument?: [{	relativePath?:string},ValueTypes["ThemeDocument"]],
getThemeList?: [{	before?:string,	after?:string,	first?:number,	last?:number},ValueTypes["ThemeConnection"]],
getNavigationDocument?: [{	relativePath?:string},ValueTypes["NavigationDocument"]],
getNavigationList?: [{	before?:string,	after?:string,	first?:number,	last?:number},ValueTypes["NavigationConnection"]],
getPageDocument?: [{	relativePath?:string},ValueTypes["PageDocument"]],
getPageList?: [{	before?:string,	after?:string,	first?:number,	last?:number},ValueTypes["PageConnection"]],
		__typename?: true
}>;
	["DocumentConnectionEdges"]: AliasType<{
	cursor?:true,
	node?:ValueTypes["DocumentNode"],
		__typename?: true
}>;
	["DocumentConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	totalCount?:true,
	edges?:ValueTypes["DocumentConnectionEdges"],
		__typename?: true
}>;
	["Collection"]: AliasType<{
	name?:true,
	slug?:true,
	label?:true,
	path?:true,
	format?:true,
	matches?:true,
	templates?:true,
	fields?:true,
documents?: [{	before?:string,	after?:string,	first?:number,	last?:number},ValueTypes["DocumentConnection"]],
		__typename?: true
}>;
	["DocumentNode"]: AliasType<{		["...on LocaleInfoDocument"] : ValueTypes["LocaleInfoDocument"],
		["...on NewsDocument"] : ValueTypes["NewsDocument"],
		["...on FooterDocument"] : ValueTypes["FooterDocument"],
		["...on ThemeDocument"] : ValueTypes["ThemeDocument"],
		["...on NavigationDocument"] : ValueTypes["NavigationDocument"],
		["...on PageDocument"] : ValueTypes["PageDocument"]
		__typename?: true
}>;
	["LocaleInfoAu"]: AliasType<{
	tel?:true,
	signUpLink?:true,
	signUpLinkPersonal?:true,
	signInLink?:true,
		__typename?: true
}>;
	["LocaleInfoUs"]: AliasType<{
	tel?:true,
	signUpLink?:true,
	signUpLinkPersonal?:true,
	signInLink?:true,
		__typename?: true
}>;
	["LocaleInfoGb"]: AliasType<{
	tel?:true,
	signUpLink?:true,
	signUpLinkPersonal?:true,
	signInLink?:true,
		__typename?: true
}>;
	["LocaleInfo"]: AliasType<{
	au?:ValueTypes["LocaleInfoAu"],
	us?:ValueTypes["LocaleInfoUs"],
	gb?:ValueTypes["LocaleInfoGb"],
		__typename?: true
}>;
	["LocaleInfoDocument"]: AliasType<{
	id?:true,
	sys?:ValueTypes["SystemInfo"],
	data?:ValueTypes["LocaleInfo"],
	form?:true,
	values?:true,
	dataJSON?:true,
		__typename?: true
}>;
	["LocaleInfoConnectionEdges"]: AliasType<{
	cursor?:true,
	node?:ValueTypes["LocaleInfoDocument"],
		__typename?: true
}>;
	["LocaleInfoConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	totalCount?:true,
	edges?:ValueTypes["LocaleInfoConnectionEdges"],
		__typename?: true
}>;
	["News"]: AliasType<{
	title?:true,
	subTitle?:true,
	image?:true,
	body?:true,
		__typename?: true
}>;
	["NewsDocument"]: AliasType<{
	id?:true,
	sys?:ValueTypes["SystemInfo"],
	data?:ValueTypes["News"],
	form?:true,
	values?:true,
	dataJSON?:true,
		__typename?: true
}>;
	["NewsConnectionEdges"]: AliasType<{
	cursor?:true,
	node?:ValueTypes["NewsDocument"],
		__typename?: true
}>;
	["NewsConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	totalCount?:true,
	edges?:ValueTypes["NewsConnectionEdges"],
		__typename?: true
}>;
	["FooterOffices"]: AliasType<{
	location?:true,
	address?:true,
	phone?:true,
		__typename?: true
}>;
	["FooterDisclaimers"]: AliasType<{
	body?:true,
		__typename?: true
}>;
	["Footer"]: AliasType<{
	offices?:ValueTypes["FooterOffices"],
	disclaimers?:ValueTypes["FooterDisclaimers"],
		__typename?: true
}>;
	["FooterDocument"]: AliasType<{
	id?:true,
	sys?:ValueTypes["SystemInfo"],
	data?:ValueTypes["Footer"],
	form?:true,
	values?:true,
	dataJSON?:true,
		__typename?: true
}>;
	["FooterConnectionEdges"]: AliasType<{
	cursor?:true,
	node?:ValueTypes["FooterDocument"],
		__typename?: true
}>;
	["FooterConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	totalCount?:true,
	edges?:ValueTypes["FooterConnectionEdges"],
		__typename?: true
}>;
	["Theme"]: AliasType<{
	displayFont?:true,
	colorMode?:true,
		__typename?: true
}>;
	["ThemeDocument"]: AliasType<{
	id?:true,
	sys?:ValueTypes["SystemInfo"],
	data?:ValueTypes["Theme"],
	form?:true,
	values?:true,
	dataJSON?:true,
		__typename?: true
}>;
	["ThemeConnectionEdges"]: AliasType<{
	cursor?:true,
	node?:ValueTypes["ThemeDocument"],
		__typename?: true
}>;
	["ThemeConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	totalCount?:true,
	edges?:ValueTypes["ThemeConnectionEdges"],
		__typename?: true
}>;
	["NavigationItemsPageDocument"]: AliasType<{		["...on PageDocument"] : ValueTypes["PageDocument"]
		__typename?: true
}>;
	["NavigationItems"]: AliasType<{
	page?:ValueTypes["NavigationItemsPageDocument"],
		__typename?: true
}>;
	["Navigation"]: AliasType<{
	items?:ValueTypes["NavigationItems"],
		__typename?: true
}>;
	["NavigationDocument"]: AliasType<{
	id?:true,
	sys?:ValueTypes["SystemInfo"],
	data?:ValueTypes["Navigation"],
	form?:true,
	values?:true,
	dataJSON?:true,
		__typename?: true
}>;
	["NavigationConnectionEdges"]: AliasType<{
	cursor?:true,
	node?:ValueTypes["NavigationDocument"],
		__typename?: true
}>;
	["NavigationConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	totalCount?:true,
	edges?:ValueTypes["NavigationConnectionEdges"],
		__typename?: true
}>;
	["PageSeo"]: AliasType<{
	title?:true,
	image?:true,
	description?:true,
		__typename?: true
}>;
	["PageBlocksNewsNewsItemsArticleDocument"]: AliasType<{		["...on NewsDocument"] : ValueTypes["NewsDocument"]
		__typename?: true
}>;
	["PageBlocksNewsNewsItems"]: AliasType<{
	article?:ValueTypes["PageBlocksNewsNewsItemsArticleDocument"],
		__typename?: true
}>;
	["PageBlocksNews"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
	newsItems?:ValueTypes["PageBlocksNewsNewsItems"],
		__typename?: true
}>;
	["PageBlocksStatsWithImageStats"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
		__typename?: true
}>;
	["PageBlocksStatsWithImage"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
	image?:true,
	stats?:ValueTypes["PageBlocksStatsWithImageStats"],
		__typename?: true
}>;
	["PageBlocksHeroAction"]: AliasType<{
	callToAction?:true,
	linkText?:true,
	link?:true,
	linkOverride?:true,
	secondaryText?:true,
	secondaryLink?:true,
	secondaryLinkOverride?:true,
		__typename?: true
}>;
	["PageBlocksHero"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
	style?:true,
	image?:true,
	action?:ValueTypes["PageBlocksHeroAction"],
		__typename?: true
}>;
	["PageBlocksSlideshowItemsAction"]: AliasType<{
	callToAction?:true,
	linkText?:true,
	link?:true,
	linkOverride?:true,
	secondaryText?:true,
	secondaryLink?:true,
	secondaryLinkOverride?:true,
		__typename?: true
}>;
	["PageBlocksSlideshowItems"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
	image?:true,
	textColor?:true,
	action?:ValueTypes["PageBlocksSlideshowItemsAction"],
	overlayColor?:true,
	overlayOpacity?:true,
		__typename?: true
}>;
	["PageBlocksSlideshow"]: AliasType<{
	items?:ValueTypes["PageBlocksSlideshowItems"],
		__typename?: true
}>;
	["PageBlocksComparisonTableItems"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
	bulletPoints?:true,
		__typename?: true
}>;
	["PageBlocksComparisonTableAction"]: AliasType<{
	callToAction?:true,
	linkText?:true,
	link?:true,
	linkOverride?:true,
	secondaryText?:true,
	secondaryLink?:true,
	secondaryLinkOverride?:true,
		__typename?: true
}>;
	["PageBlocksComparisonTable"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
	items?:ValueTypes["PageBlocksComparisonTableItems"],
	action?:ValueTypes["PageBlocksComparisonTableAction"],
		__typename?: true
}>;
	["PageBlocksFullScreenLogo"]: AliasType<{
	slogan?:true,
	link?:true,
	image?:true,
	textColor?:true,
	overlayColor?:true,
	overlayOpacity?:true,
		__typename?: true
}>;
	["PageBlocksFullScreenHeaderAction"]: AliasType<{
	callToAction?:true,
	linkText?:true,
	link?:true,
	linkOverride?:true,
	secondaryText?:true,
	secondaryLink?:true,
	secondaryLinkOverride?:true,
		__typename?: true
}>;
	["PageBlocksFullScreenHeader"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
	action?:ValueTypes["PageBlocksFullScreenHeaderAction"],
	image?:true,
	textColor?:true,
	overlayColor?:true,
	overlayOpacity?:true,
		__typename?: true
}>;
	["PageBlocksFeatureFeatures"]: AliasType<{
	icon?:true,
	name?:true,
	description?:true,
		__typename?: true
}>;
	["PageBlocksFeature"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
	featureStyle?:true,
	features?:ValueTypes["PageBlocksFeatureFeatures"],
	image?:true,
	textColor?:true,
	overlayColor?:true,
	overlayOpacity?:true,
		__typename?: true
}>;
	["PageBlocksScreenShotFeatureAction"]: AliasType<{
	callToAction?:true,
	linkText?:true,
	link?:true,
	linkOverride?:true,
	secondaryText?:true,
	secondaryLink?:true,
	secondaryLinkOverride?:true,
		__typename?: true
}>;
	["PageBlocksScreenShotFeatureTestimonialAuthor"]: AliasType<{
	name?:true,
	avatar?:true,
		__typename?: true
}>;
	["PageBlocksScreenShotFeatureTestimonial"]: AliasType<{
	quote?:true,
	author?:ValueTypes["PageBlocksScreenShotFeatureTestimonialAuthor"],
		__typename?: true
}>;
	["PageBlocksScreenShotFeature"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
	image?:true,
	alignment?:true,
	icon?:true,
	action?:ValueTypes["PageBlocksScreenShotFeatureAction"],
	testimonial?:ValueTypes["PageBlocksScreenShotFeatureTestimonial"],
		__typename?: true
}>;
	["PageBlocks"]: AliasType<{		["...on PageBlocksNews"] : ValueTypes["PageBlocksNews"],
		["...on PageBlocksStatsWithImage"] : ValueTypes["PageBlocksStatsWithImage"],
		["...on PageBlocksHero"] : ValueTypes["PageBlocksHero"],
		["...on PageBlocksSlideshow"] : ValueTypes["PageBlocksSlideshow"],
		["...on PageBlocksComparisonTable"] : ValueTypes["PageBlocksComparisonTable"],
		["...on PageBlocksFullScreenLogo"] : ValueTypes["PageBlocksFullScreenLogo"],
		["...on PageBlocksFullScreenHeader"] : ValueTypes["PageBlocksFullScreenHeader"],
		["...on PageBlocksFeature"] : ValueTypes["PageBlocksFeature"],
		["...on PageBlocksScreenShotFeature"] : ValueTypes["PageBlocksScreenShotFeature"]
		__typename?: true
}>;
	["Page"]: AliasType<{
	title?:true,
	link?:true,
	seo?:ValueTypes["PageSeo"],
	blocks?:ValueTypes["PageBlocks"],
		__typename?: true
}>;
	["PageDocument"]: AliasType<{
	id?:true,
	sys?:ValueTypes["SystemInfo"],
	data?:ValueTypes["Page"],
	form?:true,
	values?:true,
	dataJSON?:true,
		__typename?: true
}>;
	["PageConnectionEdges"]: AliasType<{
	cursor?:true,
	node?:ValueTypes["PageDocument"],
		__typename?: true
}>;
	["PageConnection"]: AliasType<{
	pageInfo?:ValueTypes["PageInfo"],
	totalCount?:true,
	edges?:ValueTypes["PageConnectionEdges"],
		__typename?: true
}>;
	["Mutation"]: AliasType<{
addPendingDocument?: [{	collection:string,	relativePath:string,	template?:string},ValueTypes["DocumentNode"]],
updateDocument?: [{	collection?:string,	relativePath:string,	params:ValueTypes["DocumentMutation"]},ValueTypes["DocumentNode"]],
createDocument?: [{	collection?:string,	relativePath:string,	params:ValueTypes["DocumentMutation"]},ValueTypes["DocumentNode"]],
updateLocaleInfoDocument?: [{	relativePath:string,	params:ValueTypes["LocaleInfoMutation"]},ValueTypes["LocaleInfoDocument"]],
createLocaleInfoDocument?: [{	relativePath:string,	params:ValueTypes["LocaleInfoMutation"]},ValueTypes["LocaleInfoDocument"]],
updateNewsDocument?: [{	relativePath:string,	params:ValueTypes["NewsMutation"]},ValueTypes["NewsDocument"]],
createNewsDocument?: [{	relativePath:string,	params:ValueTypes["NewsMutation"]},ValueTypes["NewsDocument"]],
updateFooterDocument?: [{	relativePath:string,	params:ValueTypes["FooterMutation"]},ValueTypes["FooterDocument"]],
createFooterDocument?: [{	relativePath:string,	params:ValueTypes["FooterMutation"]},ValueTypes["FooterDocument"]],
updateThemeDocument?: [{	relativePath:string,	params:ValueTypes["ThemeMutation"]},ValueTypes["ThemeDocument"]],
createThemeDocument?: [{	relativePath:string,	params:ValueTypes["ThemeMutation"]},ValueTypes["ThemeDocument"]],
updateNavigationDocument?: [{	relativePath:string,	params:ValueTypes["NavigationMutation"]},ValueTypes["NavigationDocument"]],
createNavigationDocument?: [{	relativePath:string,	params:ValueTypes["NavigationMutation"]},ValueTypes["NavigationDocument"]],
updatePageDocument?: [{	relativePath:string,	params:ValueTypes["PageMutation"]},ValueTypes["PageDocument"]],
createPageDocument?: [{	relativePath:string,	params:ValueTypes["PageMutation"]},ValueTypes["PageDocument"]],
		__typename?: true
}>;
	["DocumentMutation"]: {
	localeInfo?:ValueTypes["LocaleInfoMutation"],
	news?:ValueTypes["NewsMutation"],
	footer?:ValueTypes["FooterMutation"],
	theme?:ValueTypes["ThemeMutation"],
	navigation?:ValueTypes["NavigationMutation"],
	page?:ValueTypes["PageMutation"]
};
	["LocaleInfoAuMutation"]: {
	tel?:string,
	signUpLink?:string,
	signUpLinkPersonal?:string,
	signInLink?:string
};
	["LocaleInfoUsMutation"]: {
	tel?:string,
	signUpLink?:string,
	signUpLinkPersonal?:string,
	signInLink?:string
};
	["LocaleInfoGbMutation"]: {
	tel?:string,
	signUpLink?:string,
	signUpLinkPersonal?:string,
	signInLink?:string
};
	["LocaleInfoMutation"]: {
	au?:ValueTypes["LocaleInfoAuMutation"],
	us?:ValueTypes["LocaleInfoUsMutation"],
	gb?:ValueTypes["LocaleInfoGbMutation"]
};
	["NewsMutation"]: {
	title?:string,
	subTitle?:string,
	image?:string,
	body?:ValueTypes["JSON"]
};
	["FooterOfficesMutation"]: {
	location?:string,
	address?:string,
	phone?:string
};
	["FooterDisclaimersMutation"]: {
	body?:ValueTypes["JSON"]
};
	["FooterMutation"]: {
	offices?:(ValueTypes["FooterOfficesMutation"] | undefined)[],
	disclaimers?:(ValueTypes["FooterDisclaimersMutation"] | undefined)[]
};
	["ThemeMutation"]: {
	displayFont?:string,
	colorMode?:string
};
	["NavigationItemsMutation"]: {
	page?:string
};
	["NavigationMutation"]: {
	items?:(ValueTypes["NavigationItemsMutation"] | undefined)[]
};
	["PageSeoMutation"]: {
	title?:string,
	image?:string,
	description?:string
};
	["PageBlocksNewsNewsItemsMutation"]: {
	article?:string
};
	["PageBlocksNewsMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"],
	newsItems?:(ValueTypes["PageBlocksNewsNewsItemsMutation"] | undefined)[]
};
	["PageBlocksStatsWithImageStatsMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"]
};
	["PageBlocksStatsWithImageMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"],
	image?:string,
	stats?:(ValueTypes["PageBlocksStatsWithImageStatsMutation"] | undefined)[]
};
	["PageBlocksHeroActionMutation"]: {
	callToAction?:string,
	linkText?:string,
	link?:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksHeroMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"],
	style?:string,
	image?:string,
	action?:ValueTypes["PageBlocksHeroActionMutation"]
};
	["PageBlocksSlideshowItemsActionMutation"]: {
	callToAction?:string,
	linkText?:string,
	link?:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksSlideshowItemsMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"],
	image?:string,
	textColor?:string,
	action?:ValueTypes["PageBlocksSlideshowItemsActionMutation"],
	overlayColor?:string,
	overlayOpacity?:string
};
	["PageBlocksSlideshowMutation"]: {
	items?:(ValueTypes["PageBlocksSlideshowItemsMutation"] | undefined)[]
};
	["PageBlocksComparisonTableItemsMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"],
	bulletPoints?:(string | undefined)[]
};
	["PageBlocksComparisonTableActionMutation"]: {
	callToAction?:string,
	linkText?:string,
	link?:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksComparisonTableMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"],
	items?:(ValueTypes["PageBlocksComparisonTableItemsMutation"] | undefined)[],
	action?:ValueTypes["PageBlocksComparisonTableActionMutation"]
};
	["PageBlocksFullScreenLogoMutation"]: {
	slogan?:string,
	link?:string,
	image?:string,
	textColor?:string,
	overlayColor?:string,
	overlayOpacity?:string
};
	["PageBlocksFullScreenHeaderActionMutation"]: {
	callToAction?:string,
	linkText?:string,
	link?:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksFullScreenHeaderMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"],
	action?:ValueTypes["PageBlocksFullScreenHeaderActionMutation"],
	image?:string,
	textColor?:string,
	overlayColor?:string,
	overlayOpacity?:string
};
	["PageBlocksFeatureFeaturesMutation"]: {
	icon?:string,
	name?:string,
	description?:string
};
	["PageBlocksFeatureMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"],
	featureStyle?:string,
	features?:(ValueTypes["PageBlocksFeatureFeaturesMutation"] | undefined)[],
	image?:string,
	textColor?:string,
	overlayColor?:string,
	overlayOpacity?:string
};
	["PageBlocksScreenShotFeatureActionMutation"]: {
	callToAction?:string,
	linkText?:string,
	link?:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksScreenShotFeatureTestimonialAuthorMutation"]: {
	name?:string,
	avatar?:string
};
	["PageBlocksScreenShotFeatureTestimonialMutation"]: {
	quote?:string,
	author?:ValueTypes["PageBlocksScreenShotFeatureTestimonialAuthorMutation"]
};
	["PageBlocksScreenShotFeatureMutation"]: {
	title?:string,
	subTitle?:string,
	description?:ValueTypes["JSON"],
	image?:string,
	alignment?:string,
	icon?:string,
	action?:ValueTypes["PageBlocksScreenShotFeatureActionMutation"],
	testimonial?:ValueTypes["PageBlocksScreenShotFeatureTestimonialMutation"]
};
	["PageBlocksMutation"]: {
	news?:ValueTypes["PageBlocksNewsMutation"],
	statsWithImage?:ValueTypes["PageBlocksStatsWithImageMutation"],
	hero?:ValueTypes["PageBlocksHeroMutation"],
	slideshow?:ValueTypes["PageBlocksSlideshowMutation"],
	comparisonTable?:ValueTypes["PageBlocksComparisonTableMutation"],
	fullScreenLogo?:ValueTypes["PageBlocksFullScreenLogoMutation"],
	fullScreenHeader?:ValueTypes["PageBlocksFullScreenHeaderMutation"],
	feature?:ValueTypes["PageBlocksFeatureMutation"],
	screenShotFeature?:ValueTypes["PageBlocksScreenShotFeatureMutation"]
};
	["PageMutation"]: {
	title?:string,
	link?:string,
	seo?:ValueTypes["PageSeoMutation"],
	blocks?:(ValueTypes["PageBlocksMutation"] | undefined)[]
}
  }

export type ModelTypes = {
    /** References another document, used as a foreign key */
["Reference"]:any;
	["JSON"]:any;
	["SystemInfo"]: {
		filename:string,
	basename:string,
	breadcrumbs:string[],
	path:string,
	relativePath:string,
	extension:string,
	template:string,
	collection:ModelTypes["Collection"]
};
	["PageInfo"]: {
		hasPreviousPage:boolean,
	hasNextPage:boolean,
	startCursor:string,
	endCursor:string
};
	["Node"]: ModelTypes["LocaleInfoDocument"] | ModelTypes["NewsDocument"] | ModelTypes["FooterDocument"] | ModelTypes["ThemeDocument"] | ModelTypes["NavigationDocument"] | ModelTypes["PageDocument"];
	["Document"]: ModelTypes["LocaleInfoDocument"] | ModelTypes["NewsDocument"] | ModelTypes["FooterDocument"] | ModelTypes["ThemeDocument"] | ModelTypes["NavigationDocument"] | ModelTypes["PageDocument"];
	/** A relay-compliant pagination connection */
["Connection"]: ModelTypes["DocumentConnection"] | ModelTypes["LocaleInfoConnection"] | ModelTypes["NewsConnection"] | ModelTypes["FooterConnection"] | ModelTypes["ThemeConnection"] | ModelTypes["NavigationConnection"] | ModelTypes["PageConnection"];
	["Query"]: {
		getOptimizedQuery?:string,
	getCollection:ModelTypes["Collection"],
	getCollections:ModelTypes["Collection"][],
	node:ModelTypes["Node"],
	getDocument:ModelTypes["DocumentNode"],
	getDocumentList:ModelTypes["DocumentConnection"],
	getDocumentFields:ModelTypes["JSON"],
	getLocaleInfoDocument:ModelTypes["LocaleInfoDocument"],
	getLocaleInfoList:ModelTypes["LocaleInfoConnection"],
	getNewsDocument:ModelTypes["NewsDocument"],
	getNewsList:ModelTypes["NewsConnection"],
	getFooterDocument:ModelTypes["FooterDocument"],
	getFooterList:ModelTypes["FooterConnection"],
	getThemeDocument:ModelTypes["ThemeDocument"],
	getThemeList:ModelTypes["ThemeConnection"],
	getNavigationDocument:ModelTypes["NavigationDocument"],
	getNavigationList:ModelTypes["NavigationConnection"],
	getPageDocument:ModelTypes["PageDocument"],
	getPageList:ModelTypes["PageConnection"]
};
	["DocumentConnectionEdges"]: {
		cursor?:string,
	node?:ModelTypes["DocumentNode"]
};
	["DocumentConnection"]: {
		pageInfo?:ModelTypes["PageInfo"],
	totalCount:number,
	edges?:(ModelTypes["DocumentConnectionEdges"] | undefined)[]
};
	["Collection"]: {
		name:string,
	slug:string,
	label?:string,
	path:string,
	format?:string,
	matches?:string,
	templates?:(ModelTypes["JSON"] | undefined)[],
	fields?:(ModelTypes["JSON"] | undefined)[],
	documents:ModelTypes["DocumentConnection"]
};
	["DocumentNode"]:ModelTypes["LocaleInfoDocument"] | ModelTypes["NewsDocument"] | ModelTypes["FooterDocument"] | ModelTypes["ThemeDocument"] | ModelTypes["NavigationDocument"] | ModelTypes["PageDocument"];
	["LocaleInfoAu"]: {
		tel?:string,
	signUpLink?:string,
	signUpLinkPersonal?:string,
	signInLink?:string
};
	["LocaleInfoUs"]: {
		tel?:string,
	signUpLink?:string,
	signUpLinkPersonal?:string,
	signInLink?:string
};
	["LocaleInfoGb"]: {
		tel?:string,
	signUpLink?:string,
	signUpLinkPersonal?:string,
	signInLink?:string
};
	["LocaleInfo"]: {
		au?:ModelTypes["LocaleInfoAu"],
	us?:ModelTypes["LocaleInfoUs"],
	gb?:ModelTypes["LocaleInfoGb"]
};
	["LocaleInfoDocument"]: {
		id:string,
	sys:ModelTypes["SystemInfo"],
	data:ModelTypes["LocaleInfo"],
	form:ModelTypes["JSON"],
	values:ModelTypes["JSON"],
	dataJSON:ModelTypes["JSON"]
};
	["LocaleInfoConnectionEdges"]: {
		cursor?:string,
	node?:ModelTypes["LocaleInfoDocument"]
};
	["LocaleInfoConnection"]: {
		pageInfo?:ModelTypes["PageInfo"],
	totalCount:number,
	edges?:(ModelTypes["LocaleInfoConnectionEdges"] | undefined)[]
};
	["News"]: {
		title:string,
	subTitle?:string,
	image?:string,
	body?:ModelTypes["JSON"]
};
	["NewsDocument"]: {
		id:string,
	sys:ModelTypes["SystemInfo"],
	data:ModelTypes["News"],
	form:ModelTypes["JSON"],
	values:ModelTypes["JSON"],
	dataJSON:ModelTypes["JSON"]
};
	["NewsConnectionEdges"]: {
		cursor?:string,
	node?:ModelTypes["NewsDocument"]
};
	["NewsConnection"]: {
		pageInfo?:ModelTypes["PageInfo"],
	totalCount:number,
	edges?:(ModelTypes["NewsConnectionEdges"] | undefined)[]
};
	["FooterOffices"]: {
		location:string,
	address:string,
	phone:string
};
	["FooterDisclaimers"]: {
		body?:ModelTypes["JSON"]
};
	["Footer"]: {
		offices?:(ModelTypes["FooterOffices"] | undefined)[],
	disclaimers:ModelTypes["FooterDisclaimers"][]
};
	["FooterDocument"]: {
		id:string,
	sys:ModelTypes["SystemInfo"],
	data:ModelTypes["Footer"],
	form:ModelTypes["JSON"],
	values:ModelTypes["JSON"],
	dataJSON:ModelTypes["JSON"]
};
	["FooterConnectionEdges"]: {
		cursor?:string,
	node?:ModelTypes["FooterDocument"]
};
	["FooterConnection"]: {
		pageInfo?:ModelTypes["PageInfo"],
	totalCount:number,
	edges?:(ModelTypes["FooterConnectionEdges"] | undefined)[]
};
	["Theme"]: {
		displayFont?:string,
	colorMode?:string
};
	["ThemeDocument"]: {
		id:string,
	sys:ModelTypes["SystemInfo"],
	data:ModelTypes["Theme"],
	form:ModelTypes["JSON"],
	values:ModelTypes["JSON"],
	dataJSON:ModelTypes["JSON"]
};
	["ThemeConnectionEdges"]: {
		cursor?:string,
	node?:ModelTypes["ThemeDocument"]
};
	["ThemeConnection"]: {
		pageInfo?:ModelTypes["PageInfo"],
	totalCount:number,
	edges?:(ModelTypes["ThemeConnectionEdges"] | undefined)[]
};
	["NavigationItemsPageDocument"]:ModelTypes["PageDocument"];
	["NavigationItems"]: {
		page?:ModelTypes["NavigationItemsPageDocument"]
};
	["Navigation"]: {
		items:ModelTypes["NavigationItems"][]
};
	["NavigationDocument"]: {
		id:string,
	sys:ModelTypes["SystemInfo"],
	data:ModelTypes["Navigation"],
	form:ModelTypes["JSON"],
	values:ModelTypes["JSON"],
	dataJSON:ModelTypes["JSON"]
};
	["NavigationConnectionEdges"]: {
		cursor?:string,
	node?:ModelTypes["NavigationDocument"]
};
	["NavigationConnection"]: {
		pageInfo?:ModelTypes["PageInfo"],
	totalCount:number,
	edges?:(ModelTypes["NavigationConnectionEdges"] | undefined)[]
};
	["PageSeo"]: {
		title?:string,
	image?:string,
	description:string
};
	["PageBlocksNewsNewsItemsArticleDocument"]:ModelTypes["NewsDocument"];
	["PageBlocksNewsNewsItems"]: {
		article:ModelTypes["PageBlocksNewsNewsItemsArticleDocument"]
};
	["PageBlocksNews"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"],
	newsItems:ModelTypes["PageBlocksNewsNewsItems"][]
};
	["PageBlocksStatsWithImageStats"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"]
};
	["PageBlocksStatsWithImage"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"],
	image?:string,
	stats:ModelTypes["PageBlocksStatsWithImageStats"][]
};
	["PageBlocksHeroAction"]: {
		callToAction?:string,
	linkText:string,
	link:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksHero"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"],
	style?:string,
	image?:string,
	action?:ModelTypes["PageBlocksHeroAction"]
};
	["PageBlocksSlideshowItemsAction"]: {
		callToAction?:string,
	linkText:string,
	link:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksSlideshowItems"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"],
	image?:string,
	textColor?:string,
	action?:ModelTypes["PageBlocksSlideshowItemsAction"],
	overlayColor?:string,
	overlayOpacity?:string
};
	["PageBlocksSlideshow"]: {
		items?:(ModelTypes["PageBlocksSlideshowItems"] | undefined)[]
};
	["PageBlocksComparisonTableItems"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"],
	bulletPoints?:(string | undefined)[]
};
	["PageBlocksComparisonTableAction"]: {
		callToAction?:string,
	linkText:string,
	link:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksComparisonTable"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"],
	items?:(ModelTypes["PageBlocksComparisonTableItems"] | undefined)[],
	action?:ModelTypes["PageBlocksComparisonTableAction"]
};
	["PageBlocksFullScreenLogo"]: {
		slogan?:string,
	link?:string,
	image?:string,
	textColor?:string,
	overlayColor?:string,
	overlayOpacity?:string
};
	["PageBlocksFullScreenHeaderAction"]: {
		callToAction?:string,
	linkText:string,
	link:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksFullScreenHeader"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"],
	action?:ModelTypes["PageBlocksFullScreenHeaderAction"],
	image?:string,
	textColor?:string,
	overlayColor?:string,
	overlayOpacity?:string
};
	["PageBlocksFeatureFeatures"]: {
		icon:string,
	name:string,
	description:string
};
	["PageBlocksFeature"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"],
	featureStyle?:string,
	features:ModelTypes["PageBlocksFeatureFeatures"][],
	image?:string,
	textColor?:string,
	overlayColor?:string,
	overlayOpacity?:string
};
	["PageBlocksScreenShotFeatureAction"]: {
		callToAction?:string,
	linkText:string,
	link:string,
	linkOverride?:string,
	secondaryText?:string,
	secondaryLink?:string,
	secondaryLinkOverride?:string
};
	["PageBlocksScreenShotFeatureTestimonialAuthor"]: {
		name:string,
	avatar:string
};
	["PageBlocksScreenShotFeatureTestimonial"]: {
		quote:string,
	author?:ModelTypes["PageBlocksScreenShotFeatureTestimonialAuthor"]
};
	["PageBlocksScreenShotFeature"]: {
		title:string,
	subTitle?:string,
	description:ModelTypes["JSON"],
	image?:string,
	alignment?:string,
	icon?:string,
	action?:ModelTypes["PageBlocksScreenShotFeatureAction"],
	testimonial?:ModelTypes["PageBlocksScreenShotFeatureTestimonial"]
};
	["PageBlocks"]:ModelTypes["PageBlocksNews"] | ModelTypes["PageBlocksStatsWithImage"] | ModelTypes["PageBlocksHero"] | ModelTypes["PageBlocksSlideshow"] | ModelTypes["PageBlocksComparisonTable"] | ModelTypes["PageBlocksFullScreenLogo"] | ModelTypes["PageBlocksFullScreenHeader"] | ModelTypes["PageBlocksFeature"] | ModelTypes["PageBlocksScreenShotFeature"];
	["Page"]: {
		title:string,
	link:string,
	seo?:ModelTypes["PageSeo"],
	blocks?:(ModelTypes["PageBlocks"] | undefined)[]
};
	["PageDocument"]: {
		id:string,
	sys:ModelTypes["SystemInfo"],
	data:ModelTypes["Page"],
	form:ModelTypes["JSON"],
	values:ModelTypes["JSON"],
	dataJSON:ModelTypes["JSON"]
};
	["PageConnectionEdges"]: {
		cursor?:string,
	node?:ModelTypes["PageDocument"]
};
	["PageConnection"]: {
		pageInfo?:ModelTypes["PageInfo"],
	totalCount:number,
	edges?:(ModelTypes["PageConnectionEdges"] | undefined)[]
};
	["Mutation"]: {
		addPendingDocument:ModelTypes["DocumentNode"],
	updateDocument:ModelTypes["DocumentNode"],
	createDocument:ModelTypes["DocumentNode"],
	updateLocaleInfoDocument:ModelTypes["LocaleInfoDocument"],
	createLocaleInfoDocument:ModelTypes["LocaleInfoDocument"],
	updateNewsDocument:ModelTypes["NewsDocument"],
	createNewsDocument:ModelTypes["NewsDocument"],
	updateFooterDocument:ModelTypes["FooterDocument"],
	createFooterDocument:ModelTypes["FooterDocument"],
	updateThemeDocument:ModelTypes["ThemeDocument"],
	createThemeDocument:ModelTypes["ThemeDocument"],
	updateNavigationDocument:ModelTypes["NavigationDocument"],
	createNavigationDocument:ModelTypes["NavigationDocument"],
	updatePageDocument:ModelTypes["PageDocument"],
	createPageDocument:ModelTypes["PageDocument"]
};
	["DocumentMutation"]: GraphQLTypes["DocumentMutation"];
	["LocaleInfoAuMutation"]: GraphQLTypes["LocaleInfoAuMutation"];
	["LocaleInfoUsMutation"]: GraphQLTypes["LocaleInfoUsMutation"];
	["LocaleInfoGbMutation"]: GraphQLTypes["LocaleInfoGbMutation"];
	["LocaleInfoMutation"]: GraphQLTypes["LocaleInfoMutation"];
	["NewsMutation"]: GraphQLTypes["NewsMutation"];
	["FooterOfficesMutation"]: GraphQLTypes["FooterOfficesMutation"];
	["FooterDisclaimersMutation"]: GraphQLTypes["FooterDisclaimersMutation"];
	["FooterMutation"]: GraphQLTypes["FooterMutation"];
	["ThemeMutation"]: GraphQLTypes["ThemeMutation"];
	["NavigationItemsMutation"]: GraphQLTypes["NavigationItemsMutation"];
	["NavigationMutation"]: GraphQLTypes["NavigationMutation"];
	["PageSeoMutation"]: GraphQLTypes["PageSeoMutation"];
	["PageBlocksNewsNewsItemsMutation"]: GraphQLTypes["PageBlocksNewsNewsItemsMutation"];
	["PageBlocksNewsMutation"]: GraphQLTypes["PageBlocksNewsMutation"];
	["PageBlocksStatsWithImageStatsMutation"]: GraphQLTypes["PageBlocksStatsWithImageStatsMutation"];
	["PageBlocksStatsWithImageMutation"]: GraphQLTypes["PageBlocksStatsWithImageMutation"];
	["PageBlocksHeroActionMutation"]: GraphQLTypes["PageBlocksHeroActionMutation"];
	["PageBlocksHeroMutation"]: GraphQLTypes["PageBlocksHeroMutation"];
	["PageBlocksSlideshowItemsActionMutation"]: GraphQLTypes["PageBlocksSlideshowItemsActionMutation"];
	["PageBlocksSlideshowItemsMutation"]: GraphQLTypes["PageBlocksSlideshowItemsMutation"];
	["PageBlocksSlideshowMutation"]: GraphQLTypes["PageBlocksSlideshowMutation"];
	["PageBlocksComparisonTableItemsMutation"]: GraphQLTypes["PageBlocksComparisonTableItemsMutation"];
	["PageBlocksComparisonTableActionMutation"]: GraphQLTypes["PageBlocksComparisonTableActionMutation"];
	["PageBlocksComparisonTableMutation"]: GraphQLTypes["PageBlocksComparisonTableMutation"];
	["PageBlocksFullScreenLogoMutation"]: GraphQLTypes["PageBlocksFullScreenLogoMutation"];
	["PageBlocksFullScreenHeaderActionMutation"]: GraphQLTypes["PageBlocksFullScreenHeaderActionMutation"];
	["PageBlocksFullScreenHeaderMutation"]: GraphQLTypes["PageBlocksFullScreenHeaderMutation"];
	["PageBlocksFeatureFeaturesMutation"]: GraphQLTypes["PageBlocksFeatureFeaturesMutation"];
	["PageBlocksFeatureMutation"]: GraphQLTypes["PageBlocksFeatureMutation"];
	["PageBlocksScreenShotFeatureActionMutation"]: GraphQLTypes["PageBlocksScreenShotFeatureActionMutation"];
	["PageBlocksScreenShotFeatureTestimonialAuthorMutation"]: GraphQLTypes["PageBlocksScreenShotFeatureTestimonialAuthorMutation"];
	["PageBlocksScreenShotFeatureTestimonialMutation"]: GraphQLTypes["PageBlocksScreenShotFeatureTestimonialMutation"];
	["PageBlocksScreenShotFeatureMutation"]: GraphQLTypes["PageBlocksScreenShotFeatureMutation"];
	["PageBlocksMutation"]: GraphQLTypes["PageBlocksMutation"];
	["PageMutation"]: GraphQLTypes["PageMutation"]
    }

export type GraphQLTypes = {
    // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina;
	/** References another document, used as a foreign key */
["Reference"]:any;
	["JSON"]:any;
	["SystemInfo"]: {
	__typename: "SystemInfo",
	filename: string,
	basename: string,
	breadcrumbs: Array<string>,
	path: string,
	relativePath: string,
	extension: string,
	template: string,
	collection: GraphQLTypes["Collection"]
};
	["PageInfo"]: {
	__typename: "PageInfo",
	hasPreviousPage: boolean,
	hasNextPage: boolean,
	startCursor: string,
	endCursor: string
};
	["Node"]: {
	__typename:"LocaleInfoDocument" | "NewsDocument" | "FooterDocument" | "ThemeDocument" | "NavigationDocument" | "PageDocument"
	id: string
	['...on LocaleInfoDocument']: '__union' & GraphQLTypes["LocaleInfoDocument"];
	['...on NewsDocument']: '__union' & GraphQLTypes["NewsDocument"];
	['...on FooterDocument']: '__union' & GraphQLTypes["FooterDocument"];
	['...on ThemeDocument']: '__union' & GraphQLTypes["ThemeDocument"];
	['...on NavigationDocument']: '__union' & GraphQLTypes["NavigationDocument"];
	['...on PageDocument']: '__union' & GraphQLTypes["PageDocument"];
};
	["Document"]: {
	__typename:"LocaleInfoDocument" | "NewsDocument" | "FooterDocument" | "ThemeDocument" | "NavigationDocument" | "PageDocument"
	sys?: GraphQLTypes["SystemInfo"],
	id: string,
	form: GraphQLTypes["JSON"],
	values: GraphQLTypes["JSON"]
	['...on LocaleInfoDocument']: '__union' & GraphQLTypes["LocaleInfoDocument"];
	['...on NewsDocument']: '__union' & GraphQLTypes["NewsDocument"];
	['...on FooterDocument']: '__union' & GraphQLTypes["FooterDocument"];
	['...on ThemeDocument']: '__union' & GraphQLTypes["ThemeDocument"];
	['...on NavigationDocument']: '__union' & GraphQLTypes["NavigationDocument"];
	['...on PageDocument']: '__union' & GraphQLTypes["PageDocument"];
};
	/** A relay-compliant pagination connection */
["Connection"]: {
	__typename:"DocumentConnection" | "LocaleInfoConnection" | "NewsConnection" | "FooterConnection" | "ThemeConnection" | "NavigationConnection" | "PageConnection"
	totalCount: number
	['...on DocumentConnection']: '__union' & GraphQLTypes["DocumentConnection"];
	['...on LocaleInfoConnection']: '__union' & GraphQLTypes["LocaleInfoConnection"];
	['...on NewsConnection']: '__union' & GraphQLTypes["NewsConnection"];
	['...on FooterConnection']: '__union' & GraphQLTypes["FooterConnection"];
	['...on ThemeConnection']: '__union' & GraphQLTypes["ThemeConnection"];
	['...on NavigationConnection']: '__union' & GraphQLTypes["NavigationConnection"];
	['...on PageConnection']: '__union' & GraphQLTypes["PageConnection"];
};
	["Query"]: {
	__typename: "Query",
	getOptimizedQuery?: string,
	getCollection: GraphQLTypes["Collection"],
	getCollections: Array<GraphQLTypes["Collection"]>,
	node: GraphQLTypes["Node"],
	getDocument: GraphQLTypes["DocumentNode"],
	getDocumentList: GraphQLTypes["DocumentConnection"],
	getDocumentFields: GraphQLTypes["JSON"],
	getLocaleInfoDocument: GraphQLTypes["LocaleInfoDocument"],
	getLocaleInfoList: GraphQLTypes["LocaleInfoConnection"],
	getNewsDocument: GraphQLTypes["NewsDocument"],
	getNewsList: GraphQLTypes["NewsConnection"],
	getFooterDocument: GraphQLTypes["FooterDocument"],
	getFooterList: GraphQLTypes["FooterConnection"],
	getThemeDocument: GraphQLTypes["ThemeDocument"],
	getThemeList: GraphQLTypes["ThemeConnection"],
	getNavigationDocument: GraphQLTypes["NavigationDocument"],
	getNavigationList: GraphQLTypes["NavigationConnection"],
	getPageDocument: GraphQLTypes["PageDocument"],
	getPageList: GraphQLTypes["PageConnection"]
};
	["DocumentConnectionEdges"]: {
	__typename: "DocumentConnectionEdges",
	cursor?: string,
	node?: GraphQLTypes["DocumentNode"]
};
	["DocumentConnection"]: {
	__typename: "DocumentConnection",
	pageInfo?: GraphQLTypes["PageInfo"],
	totalCount: number,
	edges?: Array<GraphQLTypes["DocumentConnectionEdges"] | undefined>
};
	["Collection"]: {
	__typename: "Collection",
	name: string,
	slug: string,
	label?: string,
	path: string,
	format?: string,
	matches?: string,
	templates?: Array<GraphQLTypes["JSON"] | undefined>,
	fields?: Array<GraphQLTypes["JSON"] | undefined>,
	documents: GraphQLTypes["DocumentConnection"]
};
	["DocumentNode"]:{
	['...on LocaleInfoDocument']: '__union' & GraphQLTypes["LocaleInfoDocument"];
	['...on NewsDocument']: '__union' & GraphQLTypes["NewsDocument"];
	['...on FooterDocument']: '__union' & GraphQLTypes["FooterDocument"];
	['...on ThemeDocument']: '__union' & GraphQLTypes["ThemeDocument"];
	['...on NavigationDocument']: '__union' & GraphQLTypes["NavigationDocument"];
	['...on PageDocument']: '__union' & GraphQLTypes["PageDocument"];
};
	["LocaleInfoAu"]: {
	__typename: "LocaleInfoAu",
	tel?: string,
	signUpLink?: string,
	signUpLinkPersonal?: string,
	signInLink?: string
};
	["LocaleInfoUs"]: {
	__typename: "LocaleInfoUs",
	tel?: string,
	signUpLink?: string,
	signUpLinkPersonal?: string,
	signInLink?: string
};
	["LocaleInfoGb"]: {
	__typename: "LocaleInfoGb",
	tel?: string,
	signUpLink?: string,
	signUpLinkPersonal?: string,
	signInLink?: string
};
	["LocaleInfo"]: {
	__typename: "LocaleInfo",
	au?: GraphQLTypes["LocaleInfoAu"],
	us?: GraphQLTypes["LocaleInfoUs"],
	gb?: GraphQLTypes["LocaleInfoGb"]
};
	["LocaleInfoDocument"]: {
	__typename: "LocaleInfoDocument",
	id: string,
	sys: GraphQLTypes["SystemInfo"],
	data: GraphQLTypes["LocaleInfo"],
	form: GraphQLTypes["JSON"],
	values: GraphQLTypes["JSON"],
	dataJSON: GraphQLTypes["JSON"]
};
	["LocaleInfoConnectionEdges"]: {
	__typename: "LocaleInfoConnectionEdges",
	cursor?: string,
	node?: GraphQLTypes["LocaleInfoDocument"]
};
	["LocaleInfoConnection"]: {
	__typename: "LocaleInfoConnection",
	pageInfo?: GraphQLTypes["PageInfo"],
	totalCount: number,
	edges?: Array<GraphQLTypes["LocaleInfoConnectionEdges"] | undefined>
};
	["News"]: {
	__typename: "News",
	title: string,
	subTitle?: string,
	image?: string,
	body?: GraphQLTypes["JSON"]
};
	["NewsDocument"]: {
	__typename: "NewsDocument",
	id: string,
	sys: GraphQLTypes["SystemInfo"],
	data: GraphQLTypes["News"],
	form: GraphQLTypes["JSON"],
	values: GraphQLTypes["JSON"],
	dataJSON: GraphQLTypes["JSON"]
};
	["NewsConnectionEdges"]: {
	__typename: "NewsConnectionEdges",
	cursor?: string,
	node?: GraphQLTypes["NewsDocument"]
};
	["NewsConnection"]: {
	__typename: "NewsConnection",
	pageInfo?: GraphQLTypes["PageInfo"],
	totalCount: number,
	edges?: Array<GraphQLTypes["NewsConnectionEdges"] | undefined>
};
	["FooterOffices"]: {
	__typename: "FooterOffices",
	location: string,
	address: string,
	phone: string
};
	["FooterDisclaimers"]: {
	__typename: "FooterDisclaimers",
	body?: GraphQLTypes["JSON"]
};
	["Footer"]: {
	__typename: "Footer",
	offices?: Array<GraphQLTypes["FooterOffices"] | undefined>,
	disclaimers: Array<GraphQLTypes["FooterDisclaimers"]>
};
	["FooterDocument"]: {
	__typename: "FooterDocument",
	id: string,
	sys: GraphQLTypes["SystemInfo"],
	data: GraphQLTypes["Footer"],
	form: GraphQLTypes["JSON"],
	values: GraphQLTypes["JSON"],
	dataJSON: GraphQLTypes["JSON"]
};
	["FooterConnectionEdges"]: {
	__typename: "FooterConnectionEdges",
	cursor?: string,
	node?: GraphQLTypes["FooterDocument"]
};
	["FooterConnection"]: {
	__typename: "FooterConnection",
	pageInfo?: GraphQLTypes["PageInfo"],
	totalCount: number,
	edges?: Array<GraphQLTypes["FooterConnectionEdges"] | undefined>
};
	["Theme"]: {
	__typename: "Theme",
	displayFont?: string,
	colorMode?: string
};
	["ThemeDocument"]: {
	__typename: "ThemeDocument",
	id: string,
	sys: GraphQLTypes["SystemInfo"],
	data: GraphQLTypes["Theme"],
	form: GraphQLTypes["JSON"],
	values: GraphQLTypes["JSON"],
	dataJSON: GraphQLTypes["JSON"]
};
	["ThemeConnectionEdges"]: {
	__typename: "ThemeConnectionEdges",
	cursor?: string,
	node?: GraphQLTypes["ThemeDocument"]
};
	["ThemeConnection"]: {
	__typename: "ThemeConnection",
	pageInfo?: GraphQLTypes["PageInfo"],
	totalCount: number,
	edges?: Array<GraphQLTypes["ThemeConnectionEdges"] | undefined>
};
	["NavigationItemsPageDocument"]:{
	['...on PageDocument']: '__union' & GraphQLTypes["PageDocument"];
};
	["NavigationItems"]: {
	__typename: "NavigationItems",
	page?: GraphQLTypes["NavigationItemsPageDocument"]
};
	["Navigation"]: {
	__typename: "Navigation",
	items: Array<GraphQLTypes["NavigationItems"]>
};
	["NavigationDocument"]: {
	__typename: "NavigationDocument",
	id: string,
	sys: GraphQLTypes["SystemInfo"],
	data: GraphQLTypes["Navigation"],
	form: GraphQLTypes["JSON"],
	values: GraphQLTypes["JSON"],
	dataJSON: GraphQLTypes["JSON"]
};
	["NavigationConnectionEdges"]: {
	__typename: "NavigationConnectionEdges",
	cursor?: string,
	node?: GraphQLTypes["NavigationDocument"]
};
	["NavigationConnection"]: {
	__typename: "NavigationConnection",
	pageInfo?: GraphQLTypes["PageInfo"],
	totalCount: number,
	edges?: Array<GraphQLTypes["NavigationConnectionEdges"] | undefined>
};
	["PageSeo"]: {
	__typename: "PageSeo",
	title?: string,
	image?: string,
	description: string
};
	["PageBlocksNewsNewsItemsArticleDocument"]:{
	['...on NewsDocument']: '__union' & GraphQLTypes["NewsDocument"];
};
	["PageBlocksNewsNewsItems"]: {
	__typename: "PageBlocksNewsNewsItems",
	article: GraphQLTypes["PageBlocksNewsNewsItemsArticleDocument"]
};
	["PageBlocksNews"]: {
	__typename: "PageBlocksNews",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"],
	newsItems: Array<GraphQLTypes["PageBlocksNewsNewsItems"]>
};
	["PageBlocksStatsWithImageStats"]: {
	__typename: "PageBlocksStatsWithImageStats",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"]
};
	["PageBlocksStatsWithImage"]: {
	__typename: "PageBlocksStatsWithImage",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"],
	image?: string,
	stats: Array<GraphQLTypes["PageBlocksStatsWithImageStats"]>
};
	["PageBlocksHeroAction"]: {
	__typename: "PageBlocksHeroAction",
	callToAction?: string,
	linkText: string,
	link: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksHero"]: {
	__typename: "PageBlocksHero",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"],
	style?: string,
	image?: string,
	action?: GraphQLTypes["PageBlocksHeroAction"]
};
	["PageBlocksSlideshowItemsAction"]: {
	__typename: "PageBlocksSlideshowItemsAction",
	callToAction?: string,
	linkText: string,
	link: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksSlideshowItems"]: {
	__typename: "PageBlocksSlideshowItems",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"],
	image?: string,
	textColor?: string,
	action?: GraphQLTypes["PageBlocksSlideshowItemsAction"],
	overlayColor?: string,
	overlayOpacity?: string
};
	["PageBlocksSlideshow"]: {
	__typename: "PageBlocksSlideshow",
	items?: Array<GraphQLTypes["PageBlocksSlideshowItems"] | undefined>
};
	["PageBlocksComparisonTableItems"]: {
	__typename: "PageBlocksComparisonTableItems",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"],
	bulletPoints?: Array<string | undefined>
};
	["PageBlocksComparisonTableAction"]: {
	__typename: "PageBlocksComparisonTableAction",
	callToAction?: string,
	linkText: string,
	link: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksComparisonTable"]: {
	__typename: "PageBlocksComparisonTable",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"],
	items?: Array<GraphQLTypes["PageBlocksComparisonTableItems"] | undefined>,
	action?: GraphQLTypes["PageBlocksComparisonTableAction"]
};
	["PageBlocksFullScreenLogo"]: {
	__typename: "PageBlocksFullScreenLogo",
	slogan?: string,
	link?: string,
	image?: string,
	textColor?: string,
	overlayColor?: string,
	overlayOpacity?: string
};
	["PageBlocksFullScreenHeaderAction"]: {
	__typename: "PageBlocksFullScreenHeaderAction",
	callToAction?: string,
	linkText: string,
	link: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksFullScreenHeader"]: {
	__typename: "PageBlocksFullScreenHeader",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"],
	action?: GraphQLTypes["PageBlocksFullScreenHeaderAction"],
	image?: string,
	textColor?: string,
	overlayColor?: string,
	overlayOpacity?: string
};
	["PageBlocksFeatureFeatures"]: {
	__typename: "PageBlocksFeatureFeatures",
	icon: string,
	name: string,
	description: string
};
	["PageBlocksFeature"]: {
	__typename: "PageBlocksFeature",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"],
	featureStyle?: string,
	features: Array<GraphQLTypes["PageBlocksFeatureFeatures"]>,
	image?: string,
	textColor?: string,
	overlayColor?: string,
	overlayOpacity?: string
};
	["PageBlocksScreenShotFeatureAction"]: {
	__typename: "PageBlocksScreenShotFeatureAction",
	callToAction?: string,
	linkText: string,
	link: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksScreenShotFeatureTestimonialAuthor"]: {
	__typename: "PageBlocksScreenShotFeatureTestimonialAuthor",
	name: string,
	avatar: string
};
	["PageBlocksScreenShotFeatureTestimonial"]: {
	__typename: "PageBlocksScreenShotFeatureTestimonial",
	quote: string,
	author?: GraphQLTypes["PageBlocksScreenShotFeatureTestimonialAuthor"]
};
	["PageBlocksScreenShotFeature"]: {
	__typename: "PageBlocksScreenShotFeature",
	title: string,
	subTitle?: string,
	description: GraphQLTypes["JSON"],
	image?: string,
	alignment?: string,
	icon?: string,
	action?: GraphQLTypes["PageBlocksScreenShotFeatureAction"],
	testimonial?: GraphQLTypes["PageBlocksScreenShotFeatureTestimonial"]
};
	["PageBlocks"]:{
	['...on PageBlocksNews']: '__union' & GraphQLTypes["PageBlocksNews"];
	['...on PageBlocksStatsWithImage']: '__union' & GraphQLTypes["PageBlocksStatsWithImage"];
	['...on PageBlocksHero']: '__union' & GraphQLTypes["PageBlocksHero"];
	['...on PageBlocksSlideshow']: '__union' & GraphQLTypes["PageBlocksSlideshow"];
	['...on PageBlocksComparisonTable']: '__union' & GraphQLTypes["PageBlocksComparisonTable"];
	['...on PageBlocksFullScreenLogo']: '__union' & GraphQLTypes["PageBlocksFullScreenLogo"];
	['...on PageBlocksFullScreenHeader']: '__union' & GraphQLTypes["PageBlocksFullScreenHeader"];
	['...on PageBlocksFeature']: '__union' & GraphQLTypes["PageBlocksFeature"];
	['...on PageBlocksScreenShotFeature']: '__union' & GraphQLTypes["PageBlocksScreenShotFeature"];
};
	["Page"]: {
	__typename: "Page",
	title: string,
	link: string,
	seo?: GraphQLTypes["PageSeo"],
	blocks?: Array<GraphQLTypes["PageBlocks"] | undefined>
};
	["PageDocument"]: {
	__typename: "PageDocument",
	id: string,
	sys: GraphQLTypes["SystemInfo"],
	data: GraphQLTypes["Page"],
	form: GraphQLTypes["JSON"],
	values: GraphQLTypes["JSON"],
	dataJSON: GraphQLTypes["JSON"]
};
	["PageConnectionEdges"]: {
	__typename: "PageConnectionEdges",
	cursor?: string,
	node?: GraphQLTypes["PageDocument"]
};
	["PageConnection"]: {
	__typename: "PageConnection",
	pageInfo?: GraphQLTypes["PageInfo"],
	totalCount: number,
	edges?: Array<GraphQLTypes["PageConnectionEdges"] | undefined>
};
	["Mutation"]: {
	__typename: "Mutation",
	addPendingDocument: GraphQLTypes["DocumentNode"],
	updateDocument: GraphQLTypes["DocumentNode"],
	createDocument: GraphQLTypes["DocumentNode"],
	updateLocaleInfoDocument: GraphQLTypes["LocaleInfoDocument"],
	createLocaleInfoDocument: GraphQLTypes["LocaleInfoDocument"],
	updateNewsDocument: GraphQLTypes["NewsDocument"],
	createNewsDocument: GraphQLTypes["NewsDocument"],
	updateFooterDocument: GraphQLTypes["FooterDocument"],
	createFooterDocument: GraphQLTypes["FooterDocument"],
	updateThemeDocument: GraphQLTypes["ThemeDocument"],
	createThemeDocument: GraphQLTypes["ThemeDocument"],
	updateNavigationDocument: GraphQLTypes["NavigationDocument"],
	createNavigationDocument: GraphQLTypes["NavigationDocument"],
	updatePageDocument: GraphQLTypes["PageDocument"],
	createPageDocument: GraphQLTypes["PageDocument"]
};
	["DocumentMutation"]: {
		localeInfo?: GraphQLTypes["LocaleInfoMutation"],
	news?: GraphQLTypes["NewsMutation"],
	footer?: GraphQLTypes["FooterMutation"],
	theme?: GraphQLTypes["ThemeMutation"],
	navigation?: GraphQLTypes["NavigationMutation"],
	page?: GraphQLTypes["PageMutation"]
};
	["LocaleInfoAuMutation"]: {
		tel?: string,
	signUpLink?: string,
	signUpLinkPersonal?: string,
	signInLink?: string
};
	["LocaleInfoUsMutation"]: {
		tel?: string,
	signUpLink?: string,
	signUpLinkPersonal?: string,
	signInLink?: string
};
	["LocaleInfoGbMutation"]: {
		tel?: string,
	signUpLink?: string,
	signUpLinkPersonal?: string,
	signInLink?: string
};
	["LocaleInfoMutation"]: {
		au?: GraphQLTypes["LocaleInfoAuMutation"],
	us?: GraphQLTypes["LocaleInfoUsMutation"],
	gb?: GraphQLTypes["LocaleInfoGbMutation"]
};
	["NewsMutation"]: {
		title?: string,
	subTitle?: string,
	image?: string,
	body?: GraphQLTypes["JSON"]
};
	["FooterOfficesMutation"]: {
		location?: string,
	address?: string,
	phone?: string
};
	["FooterDisclaimersMutation"]: {
		body?: GraphQLTypes["JSON"]
};
	["FooterMutation"]: {
		offices?: Array<GraphQLTypes["FooterOfficesMutation"] | undefined>,
	disclaimers?: Array<GraphQLTypes["FooterDisclaimersMutation"] | undefined>
};
	["ThemeMutation"]: {
		displayFont?: string,
	colorMode?: string
};
	["NavigationItemsMutation"]: {
		page?: string
};
	["NavigationMutation"]: {
		items?: Array<GraphQLTypes["NavigationItemsMutation"] | undefined>
};
	["PageSeoMutation"]: {
		title?: string,
	image?: string,
	description?: string
};
	["PageBlocksNewsNewsItemsMutation"]: {
		article?: string
};
	["PageBlocksNewsMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"],
	newsItems?: Array<GraphQLTypes["PageBlocksNewsNewsItemsMutation"] | undefined>
};
	["PageBlocksStatsWithImageStatsMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"]
};
	["PageBlocksStatsWithImageMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"],
	image?: string,
	stats?: Array<GraphQLTypes["PageBlocksStatsWithImageStatsMutation"] | undefined>
};
	["PageBlocksHeroActionMutation"]: {
		callToAction?: string,
	linkText?: string,
	link?: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksHeroMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"],
	style?: string,
	image?: string,
	action?: GraphQLTypes["PageBlocksHeroActionMutation"]
};
	["PageBlocksSlideshowItemsActionMutation"]: {
		callToAction?: string,
	linkText?: string,
	link?: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksSlideshowItemsMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"],
	image?: string,
	textColor?: string,
	action?: GraphQLTypes["PageBlocksSlideshowItemsActionMutation"],
	overlayColor?: string,
	overlayOpacity?: string
};
	["PageBlocksSlideshowMutation"]: {
		items?: Array<GraphQLTypes["PageBlocksSlideshowItemsMutation"] | undefined>
};
	["PageBlocksComparisonTableItemsMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"],
	bulletPoints?: Array<string | undefined>
};
	["PageBlocksComparisonTableActionMutation"]: {
		callToAction?: string,
	linkText?: string,
	link?: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksComparisonTableMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"],
	items?: Array<GraphQLTypes["PageBlocksComparisonTableItemsMutation"] | undefined>,
	action?: GraphQLTypes["PageBlocksComparisonTableActionMutation"]
};
	["PageBlocksFullScreenLogoMutation"]: {
		slogan?: string,
	link?: string,
	image?: string,
	textColor?: string,
	overlayColor?: string,
	overlayOpacity?: string
};
	["PageBlocksFullScreenHeaderActionMutation"]: {
		callToAction?: string,
	linkText?: string,
	link?: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksFullScreenHeaderMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"],
	action?: GraphQLTypes["PageBlocksFullScreenHeaderActionMutation"],
	image?: string,
	textColor?: string,
	overlayColor?: string,
	overlayOpacity?: string
};
	["PageBlocksFeatureFeaturesMutation"]: {
		icon?: string,
	name?: string,
	description?: string
};
	["PageBlocksFeatureMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"],
	featureStyle?: string,
	features?: Array<GraphQLTypes["PageBlocksFeatureFeaturesMutation"] | undefined>,
	image?: string,
	textColor?: string,
	overlayColor?: string,
	overlayOpacity?: string
};
	["PageBlocksScreenShotFeatureActionMutation"]: {
		callToAction?: string,
	linkText?: string,
	link?: string,
	linkOverride?: string,
	secondaryText?: string,
	secondaryLink?: string,
	secondaryLinkOverride?: string
};
	["PageBlocksScreenShotFeatureTestimonialAuthorMutation"]: {
		name?: string,
	avatar?: string
};
	["PageBlocksScreenShotFeatureTestimonialMutation"]: {
		quote?: string,
	author?: GraphQLTypes["PageBlocksScreenShotFeatureTestimonialAuthorMutation"]
};
	["PageBlocksScreenShotFeatureMutation"]: {
		title?: string,
	subTitle?: string,
	description?: GraphQLTypes["JSON"],
	image?: string,
	alignment?: string,
	icon?: string,
	action?: GraphQLTypes["PageBlocksScreenShotFeatureActionMutation"],
	testimonial?: GraphQLTypes["PageBlocksScreenShotFeatureTestimonialMutation"]
};
	["PageBlocksMutation"]: {
		news?: GraphQLTypes["PageBlocksNewsMutation"],
	statsWithImage?: GraphQLTypes["PageBlocksStatsWithImageMutation"],
	hero?: GraphQLTypes["PageBlocksHeroMutation"],
	slideshow?: GraphQLTypes["PageBlocksSlideshowMutation"],
	comparisonTable?: GraphQLTypes["PageBlocksComparisonTableMutation"],
	fullScreenLogo?: GraphQLTypes["PageBlocksFullScreenLogoMutation"],
	fullScreenHeader?: GraphQLTypes["PageBlocksFullScreenHeaderMutation"],
	feature?: GraphQLTypes["PageBlocksFeatureMutation"],
	screenShotFeature?: GraphQLTypes["PageBlocksScreenShotFeatureMutation"]
};
	["PageMutation"]: {
		title?: string,
	link?: string,
	seo?: GraphQLTypes["PageSeoMutation"],
	blocks?: Array<GraphQLTypes["PageBlocksMutation"] | undefined>
}
    }



export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type NotUnionTypes<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
}[keyof DST];

type ExtractUnions<SRC extends DeepAnify<DST>, DST> = {
  [P in keyof SRC]: SRC[P] extends '__union' & infer R
    ? P extends keyof DST
      ? IsArray<R, DST[P] & { __typename: true }>
      : {}
    : never;
}[keyof SRC];

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? ExtractUnions<SRC, DST> &
      {
        [P in keyof Omit<Pick<SRC, NotUnionTypes<SRC, DST>>, '__typename'>]: DST[P] extends true
          ? SRC[P]
          : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };



export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationToGraphQL<V, T> = <Z extends V>(o: Z | V, variables?: Record<string, any>) => Promise<InputType<T, Z>>;
export type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  variables?: Record<string, any>,
) => {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void;
  error: (e: { data?: InputType<T, Z>; message?: string }) => void;
  open: () => void;
};
export type CastToGraphQL<V, T> = (resultOfYourQuery: any) => <Z extends V>(o: Z | V) => InputType<T, Z>;
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (
  query: string,
  variables?: Record<string, any>,
) => void;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;

export declare function Thunder(
  fn: FetchFunction,
  subscriptionFn: SubscriptionFunction
):{
  query: OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,mutation: OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>
}

export declare function Chain(
  ...options: chainOptions
):{
  query: OperationToGraphQL<ValueTypes["Query"],GraphQLTypes["Query"]>,mutation: OperationToGraphQL<ValueTypes["Mutation"],GraphQLTypes["Mutation"]>
}

export declare const Zeus: {
  query: (o: ValueTypes["Query"]) => string,mutation: (o: ValueTypes["Mutation"]) => string
}

export declare const Cast: {
  query: CastToGraphQL<
  ValueTypes["Query"],
  GraphQLTypes["Query"]
>,mutation: CastToGraphQL<
  ValueTypes["Mutation"],
  GraphQLTypes["Mutation"]
>
}

export declare const Selectors: {
  query: SelectionFunction<ValueTypes["Query"]>,mutation: SelectionFunction<ValueTypes["Mutation"]>
}

export declare const resolverFor : <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> : any
>(
  type: T,
  field: Z,
  fn: Y,
) => (args?:any, source?:any) => void;

export declare const Gql: ReturnType<typeof Chain>
