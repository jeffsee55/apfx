/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = GraphQLTypes["Node"] | GraphQLTypes["Document"] | GraphQLTypes["Connection"]
type ZEUS_UNIONS = GraphQLTypes["DocumentNode"] | GraphQLTypes["NavigationItemsPageDocument"] | GraphQLTypes["PageSeo"] | GraphQLTypes["PageBlocks"]

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
		['...on FooterDocument']?: Omit<ValueTypes["FooterDocument"],keyof ValueTypes["Node"]>;
		['...on ThemeDocument']?: Omit<ValueTypes["ThemeDocument"],keyof ValueTypes["Node"]>;
		['...on NavigationDocument']?: Omit<ValueTypes["NavigationDocument"],keyof ValueTypes["Node"]>;
		['...on PageDocument']?: Omit<ValueTypes["PageDocument"],keyof ValueTypes["Node"]>;
		__typename?: true
}>;
	["Document"]:AliasType<{
		sys?:ValueTypes["SystemInfo"],
	id?:true;
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
		['...on FooterConnection']?: Omit<ValueTypes["FooterConnection"],keyof ValueTypes["Connection"]>;
		['...on ThemeConnection']?: Omit<ValueTypes["ThemeConnection"],keyof ValueTypes["Connection"]>;
		['...on NavigationConnection']?: Omit<ValueTypes["NavigationConnection"],keyof ValueTypes["Connection"]>;
		['...on PageConnection']?: Omit<ValueTypes["PageConnection"],keyof ValueTypes["Connection"]>;
		__typename?: true
}>;
	["Query"]: AliasType<{
getCollection?: [{	collection?:string},ValueTypes["Collection"]],
	getCollections?:ValueTypes["Collection"],
node?: [{	id?:string},ValueTypes["Node"]],
getDocument?: [{	collection?:string,	relativePath?:string},ValueTypes["DocumentNode"]],
getDocumentList?: [{	before?:string,	after?:string,	first?:number,	last?:number},ValueTypes["DocumentConnection"]],
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
	["DocumentNode"]: AliasType<{		["...on FooterDocument"] : ValueTypes["FooterDocument"],
		["...on ThemeDocument"] : ValueTypes["ThemeDocument"],
		["...on NavigationDocument"] : ValueTypes["NavigationDocument"],
		["...on PageDocument"] : ValueTypes["PageDocument"]
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
	["PageSeoSeoBasic"]: AliasType<{
	title?:true,
	subTitle?:true,
	description?:true,
		__typename?: true
}>;
	["PageSeo"]: AliasType<{		["...on PageSeoSeoBasic"] : ValueTypes["PageSeoSeoBasic"]
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
	secondaryText?:true,
	secondaryLink?:true,
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
	secondaryText?:true,
	secondaryLink?:true,
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
	secondaryText?:true,
	secondaryLink?:true,
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
	secondaryText?:true,
	secondaryLink?:true,
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
	secondaryText?:true,
	secondaryLink?:true,
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
	["PageBlocks"]: AliasType<{		["...on PageBlocksStatsWithImage"] : ValueTypes["PageBlocksStatsWithImage"],
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
updateDocument?: [{	collection:string,	relativePath:string,	params:ValueTypes["DocumentMutation"]},ValueTypes["DocumentNode"]],
updateFooterDocument?: [{	relativePath:string,	params:ValueTypes["FooterMutation"]},ValueTypes["FooterDocument"]],
updateThemeDocument?: [{	relativePath:string,	params:ValueTypes["ThemeMutation"]},ValueTypes["ThemeDocument"]],
updateNavigationDocument?: [{	relativePath:string,	params:ValueTypes["NavigationMutation"]},ValueTypes["NavigationDocument"]],
updatePageDocument?: [{	relativePath:string,	params:ValueTypes["PageMutation"]},ValueTypes["PageDocument"]],
		__typename?: true
}>;
	["DocumentMutation"]: {
	footer?:ValueTypes["FooterMutation"],
	theme?:ValueTypes["ThemeMutation"],
	navigation?:ValueTypes["NavigationMutation"],
	page?:ValueTypes["PageMutation"]
};
	["FooterOfficesMutation"]: {
	location?:string,
	address?:string,
	phone?:string
};
	["FooterDisclaimersMutation"]: {
	body?:string
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
	["PageSeoSeoBasicMutation"]: {
	title?:string,
	subTitle?:string,
	description?:string
};
	["PageSeoMutation"]: {
	seoBasic?:ValueTypes["PageSeoSeoBasicMutation"]
};
	["PageBlocksStatsWithImageStatsMutation"]: {
	title?:string,
	subTitle?:string,
	description?:string
};
	["PageBlocksStatsWithImageMutation"]: {
	title?:string,
	subTitle?:string,
	description?:string,
	image?:string,
	stats?:(ValueTypes["PageBlocksStatsWithImageStatsMutation"] | undefined)[]
};
	["PageBlocksHeroActionMutation"]: {
	callToAction?:string,
	linkText?:string,
	link?:string,
	secondaryText?:string,
	secondaryLink?:string
};
	["PageBlocksHeroMutation"]: {
	title?:string,
	subTitle?:string,
	description?:string,
	style?:string,
	image?:string,
	action?:ValueTypes["PageBlocksHeroActionMutation"]
};
	["PageBlocksSlideshowItemsActionMutation"]: {
	callToAction?:string,
	linkText?:string,
	link?:string,
	secondaryText?:string,
	secondaryLink?:string
};
	["PageBlocksSlideshowItemsMutation"]: {
	title?:string,
	subTitle?:string,
	description?:string,
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
	description?:string,
	bulletPoints?:(string | undefined)[]
};
	["PageBlocksComparisonTableActionMutation"]: {
	callToAction?:string,
	linkText?:string,
	link?:string,
	secondaryText?:string,
	secondaryLink?:string
};
	["PageBlocksComparisonTableMutation"]: {
	title?:string,
	subTitle?:string,
	description?:string,
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
	secondaryText?:string,
	secondaryLink?:string
};
	["PageBlocksFullScreenHeaderMutation"]: {
	title?:string,
	subTitle?:string,
	description?:string,
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
	description?:string,
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
	secondaryText?:string,
	secondaryLink?:string
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
	description?:string,
	image?:string,
	alignment?:string,
	icon?:string,
	action?:ValueTypes["PageBlocksScreenShotFeatureActionMutation"],
	testimonial?:ValueTypes["PageBlocksScreenShotFeatureTestimonialMutation"]
};
	["PageBlocksMutation"]: {
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
	["Node"]: ModelTypes["FooterDocument"] | ModelTypes["ThemeDocument"] | ModelTypes["NavigationDocument"] | ModelTypes["PageDocument"];
	["Document"]: ModelTypes["FooterDocument"] | ModelTypes["ThemeDocument"] | ModelTypes["NavigationDocument"] | ModelTypes["PageDocument"];
	/** A relay-compliant pagination connection */
["Connection"]: ModelTypes["DocumentConnection"] | ModelTypes["FooterConnection"] | ModelTypes["ThemeConnection"] | ModelTypes["NavigationConnection"] | ModelTypes["PageConnection"];
	["Query"]: {
		getCollection:ModelTypes["Collection"],
	getCollections:ModelTypes["Collection"][],
	node:ModelTypes["Node"],
	getDocument:ModelTypes["DocumentNode"],
	getDocumentList:ModelTypes["DocumentConnection"],
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
	label:string,
	path:string,
	format?:string,
	matches?:string,
	templates?:(ModelTypes["JSON"] | undefined)[],
	fields?:(ModelTypes["JSON"] | undefined)[],
	documents:ModelTypes["DocumentConnection"]
};
	["DocumentNode"]:ModelTypes["FooterDocument"] | ModelTypes["ThemeDocument"] | ModelTypes["NavigationDocument"] | ModelTypes["PageDocument"];
	["FooterOffices"]: {
		location:string,
	address:string,
	phone:string
};
	["FooterDisclaimers"]: {
		body?:string
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
	["PageSeoSeoBasic"]: {
		title:string,
	subTitle?:string,
	description:string
};
	["PageSeo"]:ModelTypes["PageSeoSeoBasic"];
	["PageBlocksStatsWithImageStats"]: {
		title:string,
	subTitle?:string,
	description:string
};
	["PageBlocksStatsWithImage"]: {
		title:string,
	subTitle?:string,
	description:string,
	image?:string,
	stats:ModelTypes["PageBlocksStatsWithImageStats"][]
};
	["PageBlocksHeroAction"]: {
		callToAction?:string,
	linkText:string,
	link:string,
	secondaryText?:string,
	secondaryLink?:string
};
	["PageBlocksHero"]: {
		title:string,
	subTitle?:string,
	description:string,
	style?:string,
	image?:string,
	action?:ModelTypes["PageBlocksHeroAction"]
};
	["PageBlocksSlideshowItemsAction"]: {
		callToAction?:string,
	linkText:string,
	link:string,
	secondaryText?:string,
	secondaryLink?:string
};
	["PageBlocksSlideshowItems"]: {
		title:string,
	subTitle?:string,
	description:string,
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
	description:string,
	bulletPoints?:(string | undefined)[]
};
	["PageBlocksComparisonTableAction"]: {
		callToAction?:string,
	linkText:string,
	link:string,
	secondaryText?:string,
	secondaryLink?:string
};
	["PageBlocksComparisonTable"]: {
		title:string,
	subTitle?:string,
	description:string,
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
	secondaryText?:string,
	secondaryLink?:string
};
	["PageBlocksFullScreenHeader"]: {
		title:string,
	subTitle?:string,
	description:string,
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
	description:string,
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
	secondaryText?:string,
	secondaryLink?:string
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
	description:string,
	image?:string,
	alignment?:string,
	icon?:string,
	action?:ModelTypes["PageBlocksScreenShotFeatureAction"],
	testimonial?:ModelTypes["PageBlocksScreenShotFeatureTestimonial"]
};
	["PageBlocks"]:ModelTypes["PageBlocksStatsWithImage"] | ModelTypes["PageBlocksHero"] | ModelTypes["PageBlocksSlideshow"] | ModelTypes["PageBlocksComparisonTable"] | ModelTypes["PageBlocksFullScreenLogo"] | ModelTypes["PageBlocksFullScreenHeader"] | ModelTypes["PageBlocksFeature"] | ModelTypes["PageBlocksScreenShotFeature"];
	["Page"]: {
		title:string,
	link:string,
	seo:ModelTypes["PageSeo"],
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
	updateFooterDocument:ModelTypes["FooterDocument"],
	updateThemeDocument:ModelTypes["ThemeDocument"],
	updateNavigationDocument:ModelTypes["NavigationDocument"],
	updatePageDocument:ModelTypes["PageDocument"]
};
	["DocumentMutation"]: GraphQLTypes["DocumentMutation"];
	["FooterOfficesMutation"]: GraphQLTypes["FooterOfficesMutation"];
	["FooterDisclaimersMutation"]: GraphQLTypes["FooterDisclaimersMutation"];
	["FooterMutation"]: GraphQLTypes["FooterMutation"];
	["ThemeMutation"]: GraphQLTypes["ThemeMutation"];
	["NavigationItemsMutation"]: GraphQLTypes["NavigationItemsMutation"];
	["NavigationMutation"]: GraphQLTypes["NavigationMutation"];
	["PageSeoSeoBasicMutation"]: GraphQLTypes["PageSeoSeoBasicMutation"];
	["PageSeoMutation"]: GraphQLTypes["PageSeoMutation"];
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
	__typename:"FooterDocument" | "ThemeDocument" | "NavigationDocument" | "PageDocument"
	id: string
	['...on FooterDocument']: '__union' & GraphQLTypes["FooterDocument"];
	['...on ThemeDocument']: '__union' & GraphQLTypes["ThemeDocument"];
	['...on NavigationDocument']: '__union' & GraphQLTypes["NavigationDocument"];
	['...on PageDocument']: '__union' & GraphQLTypes["PageDocument"];
};
	["Document"]: {
	__typename:"FooterDocument" | "ThemeDocument" | "NavigationDocument" | "PageDocument"
	sys?: GraphQLTypes["SystemInfo"],
	id: string
	['...on FooterDocument']: '__union' & GraphQLTypes["FooterDocument"];
	['...on ThemeDocument']: '__union' & GraphQLTypes["ThemeDocument"];
	['...on NavigationDocument']: '__union' & GraphQLTypes["NavigationDocument"];
	['...on PageDocument']: '__union' & GraphQLTypes["PageDocument"];
};
	/** A relay-compliant pagination connection */
["Connection"]: {
	__typename:"DocumentConnection" | "FooterConnection" | "ThemeConnection" | "NavigationConnection" | "PageConnection"
	totalCount: number
	['...on DocumentConnection']: '__union' & GraphQLTypes["DocumentConnection"];
	['...on FooterConnection']: '__union' & GraphQLTypes["FooterConnection"];
	['...on ThemeConnection']: '__union' & GraphQLTypes["ThemeConnection"];
	['...on NavigationConnection']: '__union' & GraphQLTypes["NavigationConnection"];
	['...on PageConnection']: '__union' & GraphQLTypes["PageConnection"];
};
	["Query"]: {
	__typename: "Query",
	getCollection: GraphQLTypes["Collection"],
	getCollections: Array<GraphQLTypes["Collection"]>,
	node: GraphQLTypes["Node"],
	getDocument: GraphQLTypes["DocumentNode"],
	getDocumentList: GraphQLTypes["DocumentConnection"],
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
	label: string,
	path: string,
	format?: string,
	matches?: string,
	templates?: Array<GraphQLTypes["JSON"] | undefined>,
	fields?: Array<GraphQLTypes["JSON"] | undefined>,
	documents: GraphQLTypes["DocumentConnection"]
};
	["DocumentNode"]:{
	['...on FooterDocument']: '__union' & GraphQLTypes["FooterDocument"];
	['...on ThemeDocument']: '__union' & GraphQLTypes["ThemeDocument"];
	['...on NavigationDocument']: '__union' & GraphQLTypes["NavigationDocument"];
	['...on PageDocument']: '__union' & GraphQLTypes["PageDocument"];
};
	["FooterOffices"]: {
	__typename: "FooterOffices",
	location: string,
	address: string,
	phone: string
};
	["FooterDisclaimers"]: {
	__typename: "FooterDisclaimers",
	body?: string
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
	["PageSeoSeoBasic"]: {
	__typename: "PageSeoSeoBasic",
	title: string,
	subTitle?: string,
	description: string
};
	["PageSeo"]:{
	['...on PageSeoSeoBasic']: '__union' & GraphQLTypes["PageSeoSeoBasic"];
};
	["PageBlocksStatsWithImageStats"]: {
	__typename: "PageBlocksStatsWithImageStats",
	title: string,
	subTitle?: string,
	description: string
};
	["PageBlocksStatsWithImage"]: {
	__typename: "PageBlocksStatsWithImage",
	title: string,
	subTitle?: string,
	description: string,
	image?: string,
	stats: Array<GraphQLTypes["PageBlocksStatsWithImageStats"]>
};
	["PageBlocksHeroAction"]: {
	__typename: "PageBlocksHeroAction",
	callToAction?: string,
	linkText: string,
	link: string,
	secondaryText?: string,
	secondaryLink?: string
};
	["PageBlocksHero"]: {
	__typename: "PageBlocksHero",
	title: string,
	subTitle?: string,
	description: string,
	style?: string,
	image?: string,
	action?: GraphQLTypes["PageBlocksHeroAction"]
};
	["PageBlocksSlideshowItemsAction"]: {
	__typename: "PageBlocksSlideshowItemsAction",
	callToAction?: string,
	linkText: string,
	link: string,
	secondaryText?: string,
	secondaryLink?: string
};
	["PageBlocksSlideshowItems"]: {
	__typename: "PageBlocksSlideshowItems",
	title: string,
	subTitle?: string,
	description: string,
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
	description: string,
	bulletPoints?: Array<string | undefined>
};
	["PageBlocksComparisonTableAction"]: {
	__typename: "PageBlocksComparisonTableAction",
	callToAction?: string,
	linkText: string,
	link: string,
	secondaryText?: string,
	secondaryLink?: string
};
	["PageBlocksComparisonTable"]: {
	__typename: "PageBlocksComparisonTable",
	title: string,
	subTitle?: string,
	description: string,
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
	secondaryText?: string,
	secondaryLink?: string
};
	["PageBlocksFullScreenHeader"]: {
	__typename: "PageBlocksFullScreenHeader",
	title: string,
	subTitle?: string,
	description: string,
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
	description: string,
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
	secondaryText?: string,
	secondaryLink?: string
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
	description: string,
	image?: string,
	alignment?: string,
	icon?: string,
	action?: GraphQLTypes["PageBlocksScreenShotFeatureAction"],
	testimonial?: GraphQLTypes["PageBlocksScreenShotFeatureTestimonial"]
};
	["PageBlocks"]:{
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
	seo: GraphQLTypes["PageSeo"],
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
	updateFooterDocument: GraphQLTypes["FooterDocument"],
	updateThemeDocument: GraphQLTypes["ThemeDocument"],
	updateNavigationDocument: GraphQLTypes["NavigationDocument"],
	updatePageDocument: GraphQLTypes["PageDocument"]
};
	["DocumentMutation"]: {
		footer?: GraphQLTypes["FooterMutation"],
	theme?: GraphQLTypes["ThemeMutation"],
	navigation?: GraphQLTypes["NavigationMutation"],
	page?: GraphQLTypes["PageMutation"]
};
	["FooterOfficesMutation"]: {
		location?: string,
	address?: string,
	phone?: string
};
	["FooterDisclaimersMutation"]: {
		body?: string
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
	["PageSeoSeoBasicMutation"]: {
		title?: string,
	subTitle?: string,
	description?: string
};
	["PageSeoMutation"]: {
		seoBasic?: GraphQLTypes["PageSeoSeoBasicMutation"]
};
	["PageBlocksStatsWithImageStatsMutation"]: {
		title?: string,
	subTitle?: string,
	description?: string
};
	["PageBlocksStatsWithImageMutation"]: {
		title?: string,
	subTitle?: string,
	description?: string,
	image?: string,
	stats?: Array<GraphQLTypes["PageBlocksStatsWithImageStatsMutation"] | undefined>
};
	["PageBlocksHeroActionMutation"]: {
		callToAction?: string,
	linkText?: string,
	link?: string,
	secondaryText?: string,
	secondaryLink?: string
};
	["PageBlocksHeroMutation"]: {
		title?: string,
	subTitle?: string,
	description?: string,
	style?: string,
	image?: string,
	action?: GraphQLTypes["PageBlocksHeroActionMutation"]
};
	["PageBlocksSlideshowItemsActionMutation"]: {
		callToAction?: string,
	linkText?: string,
	link?: string,
	secondaryText?: string,
	secondaryLink?: string
};
	["PageBlocksSlideshowItemsMutation"]: {
		title?: string,
	subTitle?: string,
	description?: string,
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
	description?: string,
	bulletPoints?: Array<string | undefined>
};
	["PageBlocksComparisonTableActionMutation"]: {
		callToAction?: string,
	linkText?: string,
	link?: string,
	secondaryText?: string,
	secondaryLink?: string
};
	["PageBlocksComparisonTableMutation"]: {
		title?: string,
	subTitle?: string,
	description?: string,
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
	secondaryText?: string,
	secondaryLink?: string
};
	["PageBlocksFullScreenHeaderMutation"]: {
		title?: string,
	subTitle?: string,
	description?: string,
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
	description?: string,
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
	secondaryText?: string,
	secondaryLink?: string
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
	description?: string,
	image?: string,
	alignment?: string,
	icon?: string,
	action?: GraphQLTypes["PageBlocksScreenShotFeatureActionMutation"],
	testimonial?: GraphQLTypes["PageBlocksScreenShotFeatureTestimonialMutation"]
};
	["PageBlocksMutation"]: {
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

export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
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



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .map((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).map((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${inspectVariables(buildQuery(tName, o))}`;
  

const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  variables?: Record<string, any>,
) => fn(queryConstruct(t, tName)(o), variables).then((r:any) => { 
  seekForAliases(r)
  return r
});

export const fullChainConstructor = <F extends FetchFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullChainConstruct(fn)(operation, key)(o as any, variables)) as OperationToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, variables?: Record<string, any>) =>
  fn(queryConstruct(t, tName)(o), variables);

export const fullSubscriptionConstructor = <F extends SubscriptionFunction, R extends keyof ValueTypes>(
  fn: F,
  operation: 'query' | 'mutation' | 'subscription',
  key: R,
) =>
  ((o, variables) => fullSubscriptionConstruct(fn)(operation, key)(o as any, variables)) as SubscriptionToGraphQL<
    ValueTypes[R],
    GraphQLTypes[R]
  >;


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
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
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
    variables: Record<string, any> = {},
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };


export const Thunder = (fn: FetchFunction, subscriptionFn: SubscriptionFunction) => ({
  query: fullChainConstructor(fn,'query', 'Query'),
mutation: fullChainConstructor(fn,'mutation', 'Mutation')
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options),'query', 'Query'),
mutation: fullChainConstructor(apiFetch(options),'mutation', 'Mutation')
});
export const Zeus = {
  query: (o:ValueTypes["Query"]) => queryConstruct('query', 'Query')(o),
mutation: (o:ValueTypes["Mutation"]) => queryConstruct('mutation', 'Mutation')(o)
};
export const Cast = {
  query: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  GraphQLTypes["Query"]
>,
mutation: ((o: any) => (_: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  GraphQLTypes["Mutation"]
>
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["Query"]>(),
mutation: ZeusSelect<ValueTypes["Mutation"]>()
};
  