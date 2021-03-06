/* eslint-disable */

export const AllTypesProps = {
	Reference: "String",
	JSON: "String",
	SystemInfo:{
		breadcrumbs:{
			excludeExtension:{
				type:"Boolean",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Query:{
		getCollection:{
			collection:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		node:{
			id:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getDocument:{
			collection:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getDocumentList:{
			before:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			after:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getLocaleInfoDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getLocaleInfoList:{
			before:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			after:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getNewsDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getNewsList:{
			before:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			after:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getFooterDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getFooterList:{
			before:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			after:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getThemeDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getThemeList:{
			before:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			after:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getNavigationDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getNavigationList:{
			before:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			after:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getPageDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		getPageList:{
			before:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			after:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Collection:{
		documents:{
			before:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			after:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			},
			first:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			},
			last:{
				type:"Int",
				array:false,
				arrayRequired:false,
				required:false
			}
		}
	},
	Mutation:{
		addPendingDocument:{
			collection:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			template:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:false
			}
		},
		updateDocument:{
			collection:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			params:{
				type:"DocumentMutation",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateLocaleInfoDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			params:{
				type:"LocaleInfoMutation",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateNewsDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			params:{
				type:"NewsMutation",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateFooterDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			params:{
				type:"FooterMutation",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateThemeDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			params:{
				type:"ThemeMutation",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updateNavigationDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			params:{
				type:"NavigationMutation",
				array:false,
				arrayRequired:false,
				required:true
			}
		},
		updatePageDocument:{
			relativePath:{
				type:"String",
				array:false,
				arrayRequired:false,
				required:true
			},
			params:{
				type:"PageMutation",
				array:false,
				arrayRequired:false,
				required:true
			}
		}
	},
	DocumentMutation:{
		localeInfo:{
			type:"LocaleInfoMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		news:{
			type:"NewsMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		footer:{
			type:"FooterMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		theme:{
			type:"ThemeMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		navigation:{
			type:"NavigationMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		page:{
			type:"PageMutation",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	LocaleInfoAuMutation:{
		tel:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		signUpLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		signUpLinkPersonal:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		signInLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	LocaleInfoUsMutation:{
		tel:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		signUpLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		signUpLinkPersonal:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		signInLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	LocaleInfoGbMutation:{
		tel:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		signUpLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		signUpLinkPersonal:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		signInLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	LocaleInfoMutation:{
		au:{
			type:"LocaleInfoAuMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		us:{
			type:"LocaleInfoUsMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		gb:{
			type:"LocaleInfoGbMutation",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	NewsMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		body:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	FooterOfficesMutation:{
		location:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		address:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		phone:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	FooterDisclaimersMutation:{
		body:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	FooterMutation:{
		offices:{
			type:"FooterOfficesMutation",
			array:true,
			arrayRequired:false,
			required:false
		},
		disclaimers:{
			type:"FooterDisclaimersMutation",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	ThemeMutation:{
		displayFont:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		colorMode:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	NavigationItemsMutation:{
		page:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	NavigationMutation:{
		items:{
			type:"NavigationItemsMutation",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	PageSeoMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksNewsNewsItemsMutation:{
		article:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksNewsMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		newsItems:{
			type:"PageBlocksNewsNewsItemsMutation",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksStatsWithImageStatsMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksStatsWithImageMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		stats:{
			type:"PageBlocksStatsWithImageStatsMutation",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksHeroActionMutation:{
		callToAction:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		link:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLinkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksHeroMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		style:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		action:{
			type:"PageBlocksHeroActionMutation",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksSlideshowItemsActionMutation:{
		callToAction:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		link:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLinkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksSlideshowItemsMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		action:{
			type:"PageBlocksSlideshowItemsActionMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		overlayColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		overlayOpacity:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksSlideshowMutation:{
		items:{
			type:"PageBlocksSlideshowItemsMutation",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksComparisonTableItemsMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		bulletPoints:{
			type:"String",
			array:true,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksComparisonTableActionMutation:{
		callToAction:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		link:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLinkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksComparisonTableMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		items:{
			type:"PageBlocksComparisonTableItemsMutation",
			array:true,
			arrayRequired:false,
			required:false
		},
		action:{
			type:"PageBlocksComparisonTableActionMutation",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksFullScreenLogoMutation:{
		slogan:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		link:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		overlayColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		overlayOpacity:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksFullScreenHeaderActionMutation:{
		callToAction:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		link:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLinkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksFullScreenHeaderMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		action:{
			type:"PageBlocksFullScreenHeaderActionMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		overlayColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		overlayOpacity:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksFeatureFeaturesMutation:{
		icon:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksFeatureMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		featureStyle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		features:{
			type:"PageBlocksFeatureFeaturesMutation",
			array:true,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		textColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		overlayColor:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		overlayOpacity:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksScreenShotFeatureActionMutation:{
		callToAction:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		link:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		linkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryText:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLink:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		secondaryLinkOverride:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksScreenShotFeatureTestimonialAuthorMutation:{
		name:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		avatar:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksScreenShotFeatureTestimonialMutation:{
		quote:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		author:{
			type:"PageBlocksScreenShotFeatureTestimonialAuthorMutation",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksScreenShotFeatureMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		subTitle:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		description:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		image:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		alignment:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		icon:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		action:{
			type:"PageBlocksScreenShotFeatureActionMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		testimonial:{
			type:"PageBlocksScreenShotFeatureTestimonialMutation",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageBlocksMutation:{
		news:{
			type:"PageBlocksNewsMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		statsWithImage:{
			type:"PageBlocksStatsWithImageMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		hero:{
			type:"PageBlocksHeroMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		slideshow:{
			type:"PageBlocksSlideshowMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		comparisonTable:{
			type:"PageBlocksComparisonTableMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		fullScreenLogo:{
			type:"PageBlocksFullScreenLogoMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		fullScreenHeader:{
			type:"PageBlocksFullScreenHeaderMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		feature:{
			type:"PageBlocksFeatureMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		screenShotFeature:{
			type:"PageBlocksScreenShotFeatureMutation",
			array:false,
			arrayRequired:false,
			required:false
		}
	},
	PageMutation:{
		title:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		link:{
			type:"String",
			array:false,
			arrayRequired:false,
			required:false
		},
		seo:{
			type:"PageSeoMutation",
			array:false,
			arrayRequired:false,
			required:false
		},
		blocks:{
			type:"PageBlocksMutation",
			array:true,
			arrayRequired:false,
			required:false
		}
	}
}

export const ReturnTypes = {
	SystemInfo:{
		filename:"String",
		basename:"String",
		breadcrumbs:"String",
		path:"String",
		relativePath:"String",
		extension:"String",
		template:"String",
		collection:"Collection"
	},
	PageInfo:{
		hasPreviousPage:"Boolean",
		hasNextPage:"Boolean",
		startCursor:"String",
		endCursor:"String"
	},
	Node:{
		"...on LocaleInfoDocument": "LocaleInfoDocument",
		"...on NewsDocument": "NewsDocument",
		"...on FooterDocument": "FooterDocument",
		"...on ThemeDocument": "ThemeDocument",
		"...on NavigationDocument": "NavigationDocument",
		"...on PageDocument": "PageDocument",
		id:"ID"
	},
	Document:{
		"...on LocaleInfoDocument": "LocaleInfoDocument",
		"...on NewsDocument": "NewsDocument",
		"...on FooterDocument": "FooterDocument",
		"...on ThemeDocument": "ThemeDocument",
		"...on NavigationDocument": "NavigationDocument",
		"...on PageDocument": "PageDocument",
		sys:"SystemInfo",
		id:"ID"
	},
	Connection:{
		"...on DocumentConnection": "DocumentConnection",
		"...on LocaleInfoConnection": "LocaleInfoConnection",
		"...on NewsConnection": "NewsConnection",
		"...on FooterConnection": "FooterConnection",
		"...on ThemeConnection": "ThemeConnection",
		"...on NavigationConnection": "NavigationConnection",
		"...on PageConnection": "PageConnection",
		totalCount:"Int"
	},
	Query:{
		getCollection:"Collection",
		getCollections:"Collection",
		node:"Node",
		getDocument:"DocumentNode",
		getDocumentList:"DocumentConnection",
		getLocaleInfoDocument:"LocaleInfoDocument",
		getLocaleInfoList:"LocaleInfoConnection",
		getNewsDocument:"NewsDocument",
		getNewsList:"NewsConnection",
		getFooterDocument:"FooterDocument",
		getFooterList:"FooterConnection",
		getThemeDocument:"ThemeDocument",
		getThemeList:"ThemeConnection",
		getNavigationDocument:"NavigationDocument",
		getNavigationList:"NavigationConnection",
		getPageDocument:"PageDocument",
		getPageList:"PageConnection"
	},
	DocumentConnectionEdges:{
		cursor:"String",
		node:"DocumentNode"
	},
	DocumentConnection:{
		pageInfo:"PageInfo",
		totalCount:"Int",
		edges:"DocumentConnectionEdges"
	},
	Collection:{
		name:"String",
		slug:"String",
		label:"String",
		path:"String",
		format:"String",
		matches:"String",
		templates:"JSON",
		fields:"JSON",
		documents:"DocumentConnection"
	},
	DocumentNode:{
		"...on LocaleInfoDocument":"LocaleInfoDocument",
		"...on NewsDocument":"NewsDocument",
		"...on FooterDocument":"FooterDocument",
		"...on ThemeDocument":"ThemeDocument",
		"...on NavigationDocument":"NavigationDocument",
		"...on PageDocument":"PageDocument"
	},
	LocaleInfoAu:{
		tel:"String",
		signUpLink:"String",
		signUpLinkPersonal:"String",
		signInLink:"String"
	},
	LocaleInfoUs:{
		tel:"String",
		signUpLink:"String",
		signUpLinkPersonal:"String",
		signInLink:"String"
	},
	LocaleInfoGb:{
		tel:"String",
		signUpLink:"String",
		signUpLinkPersonal:"String",
		signInLink:"String"
	},
	LocaleInfo:{
		au:"LocaleInfoAu",
		us:"LocaleInfoUs",
		gb:"LocaleInfoGb"
	},
	LocaleInfoDocument:{
		id:"ID",
		sys:"SystemInfo",
		data:"LocaleInfo",
		form:"JSON",
		values:"JSON",
		dataJSON:"JSON"
	},
	LocaleInfoConnectionEdges:{
		cursor:"String",
		node:"LocaleInfoDocument"
	},
	LocaleInfoConnection:{
		pageInfo:"PageInfo",
		totalCount:"Int",
		edges:"LocaleInfoConnectionEdges"
	},
	News:{
		title:"String",
		subTitle:"String",
		description:"String",
		image:"String",
		body:"String"
	},
	NewsDocument:{
		id:"ID",
		sys:"SystemInfo",
		data:"News",
		form:"JSON",
		values:"JSON",
		dataJSON:"JSON"
	},
	NewsConnectionEdges:{
		cursor:"String",
		node:"NewsDocument"
	},
	NewsConnection:{
		pageInfo:"PageInfo",
		totalCount:"Int",
		edges:"NewsConnectionEdges"
	},
	FooterOffices:{
		location:"String",
		address:"String",
		phone:"String"
	},
	FooterDisclaimers:{
		body:"String"
	},
	Footer:{
		offices:"FooterOffices",
		disclaimers:"FooterDisclaimers"
	},
	FooterDocument:{
		id:"ID",
		sys:"SystemInfo",
		data:"Footer",
		form:"JSON",
		values:"JSON",
		dataJSON:"JSON"
	},
	FooterConnectionEdges:{
		cursor:"String",
		node:"FooterDocument"
	},
	FooterConnection:{
		pageInfo:"PageInfo",
		totalCount:"Int",
		edges:"FooterConnectionEdges"
	},
	Theme:{
		displayFont:"String",
		colorMode:"String"
	},
	ThemeDocument:{
		id:"ID",
		sys:"SystemInfo",
		data:"Theme",
		form:"JSON",
		values:"JSON",
		dataJSON:"JSON"
	},
	ThemeConnectionEdges:{
		cursor:"String",
		node:"ThemeDocument"
	},
	ThemeConnection:{
		pageInfo:"PageInfo",
		totalCount:"Int",
		edges:"ThemeConnectionEdges"
	},
	NavigationItemsPageDocument:{
		"...on PageDocument":"PageDocument"
	},
	NavigationItems:{
		page:"NavigationItemsPageDocument"
	},
	Navigation:{
		items:"NavigationItems"
	},
	NavigationDocument:{
		id:"ID",
		sys:"SystemInfo",
		data:"Navigation",
		form:"JSON",
		values:"JSON",
		dataJSON:"JSON"
	},
	NavigationConnectionEdges:{
		cursor:"String",
		node:"NavigationDocument"
	},
	NavigationConnection:{
		pageInfo:"PageInfo",
		totalCount:"Int",
		edges:"NavigationConnectionEdges"
	},
	PageSeo:{
		title:"String",
		image:"String",
		description:"String"
	},
	PageBlocksNewsNewsItemsArticleDocument:{
		"...on NewsDocument":"NewsDocument"
	},
	PageBlocksNewsNewsItems:{
		article:"PageBlocksNewsNewsItemsArticleDocument"
	},
	PageBlocksNews:{
		title:"String",
		subTitle:"String",
		description:"String",
		newsItems:"PageBlocksNewsNewsItems"
	},
	PageBlocksStatsWithImageStats:{
		title:"String",
		subTitle:"String",
		description:"String"
	},
	PageBlocksStatsWithImage:{
		title:"String",
		subTitle:"String",
		description:"String",
		image:"String",
		stats:"PageBlocksStatsWithImageStats"
	},
	PageBlocksHeroAction:{
		callToAction:"String",
		linkText:"String",
		link:"String",
		linkOverride:"String",
		secondaryText:"String",
		secondaryLink:"String",
		secondaryLinkOverride:"String"
	},
	PageBlocksHero:{
		title:"String",
		subTitle:"String",
		description:"String",
		style:"String",
		image:"String",
		action:"PageBlocksHeroAction"
	},
	PageBlocksSlideshowItemsAction:{
		callToAction:"String",
		linkText:"String",
		link:"String",
		linkOverride:"String",
		secondaryText:"String",
		secondaryLink:"String",
		secondaryLinkOverride:"String"
	},
	PageBlocksSlideshowItems:{
		title:"String",
		subTitle:"String",
		description:"String",
		image:"String",
		textColor:"String",
		action:"PageBlocksSlideshowItemsAction",
		overlayColor:"String",
		overlayOpacity:"String"
	},
	PageBlocksSlideshow:{
		items:"PageBlocksSlideshowItems"
	},
	PageBlocksComparisonTableItems:{
		title:"String",
		subTitle:"String",
		description:"String",
		bulletPoints:"String"
	},
	PageBlocksComparisonTableAction:{
		callToAction:"String",
		linkText:"String",
		link:"String",
		linkOverride:"String",
		secondaryText:"String",
		secondaryLink:"String",
		secondaryLinkOverride:"String"
	},
	PageBlocksComparisonTable:{
		title:"String",
		subTitle:"String",
		description:"String",
		items:"PageBlocksComparisonTableItems",
		action:"PageBlocksComparisonTableAction"
	},
	PageBlocksFullScreenLogo:{
		slogan:"String",
		link:"String",
		image:"String",
		textColor:"String",
		overlayColor:"String",
		overlayOpacity:"String"
	},
	PageBlocksFullScreenHeaderAction:{
		callToAction:"String",
		linkText:"String",
		link:"String",
		linkOverride:"String",
		secondaryText:"String",
		secondaryLink:"String",
		secondaryLinkOverride:"String"
	},
	PageBlocksFullScreenHeader:{
		title:"String",
		subTitle:"String",
		description:"String",
		action:"PageBlocksFullScreenHeaderAction",
		image:"String",
		textColor:"String",
		overlayColor:"String",
		overlayOpacity:"String"
	},
	PageBlocksFeatureFeatures:{
		icon:"String",
		name:"String",
		description:"String"
	},
	PageBlocksFeature:{
		title:"String",
		subTitle:"String",
		description:"String",
		featureStyle:"String",
		features:"PageBlocksFeatureFeatures",
		image:"String",
		textColor:"String",
		overlayColor:"String",
		overlayOpacity:"String"
	},
	PageBlocksScreenShotFeatureAction:{
		callToAction:"String",
		linkText:"String",
		link:"String",
		linkOverride:"String",
		secondaryText:"String",
		secondaryLink:"String",
		secondaryLinkOverride:"String"
	},
	PageBlocksScreenShotFeatureTestimonialAuthor:{
		name:"String",
		avatar:"String"
	},
	PageBlocksScreenShotFeatureTestimonial:{
		quote:"String",
		author:"PageBlocksScreenShotFeatureTestimonialAuthor"
	},
	PageBlocksScreenShotFeature:{
		title:"String",
		subTitle:"String",
		description:"String",
		image:"String",
		alignment:"String",
		icon:"String",
		action:"PageBlocksScreenShotFeatureAction",
		testimonial:"PageBlocksScreenShotFeatureTestimonial"
	},
	PageBlocks:{
		"...on PageBlocksNews":"PageBlocksNews",
		"...on PageBlocksStatsWithImage":"PageBlocksStatsWithImage",
		"...on PageBlocksHero":"PageBlocksHero",
		"...on PageBlocksSlideshow":"PageBlocksSlideshow",
		"...on PageBlocksComparisonTable":"PageBlocksComparisonTable",
		"...on PageBlocksFullScreenLogo":"PageBlocksFullScreenLogo",
		"...on PageBlocksFullScreenHeader":"PageBlocksFullScreenHeader",
		"...on PageBlocksFeature":"PageBlocksFeature",
		"...on PageBlocksScreenShotFeature":"PageBlocksScreenShotFeature"
	},
	Page:{
		title:"String",
		link:"String",
		seo:"PageSeo",
		blocks:"PageBlocks"
	},
	PageDocument:{
		id:"ID",
		sys:"SystemInfo",
		data:"Page",
		form:"JSON",
		values:"JSON",
		dataJSON:"JSON"
	},
	PageConnectionEdges:{
		cursor:"String",
		node:"PageDocument"
	},
	PageConnection:{
		pageInfo:"PageInfo",
		totalCount:"Int",
		edges:"PageConnectionEdges"
	},
	Mutation:{
		addPendingDocument:"DocumentNode",
		updateDocument:"DocumentNode",
		updateLocaleInfoDocument:"LocaleInfoDocument",
		updateNewsDocument:"NewsDocument",
		updateFooterDocument:"FooterDocument",
		updateThemeDocument:"ThemeDocument",
		updateNavigationDocument:"NavigationDocument",
		updatePageDocument:"PageDocument"
	}
}