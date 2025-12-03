import {pageType} from './pageType'
import {navigationType} from './navType'
import {projectType} from './projectType'
import {siteParametersType} from './parametersType'
import {filterCategoryType} from './filterCategoryType'
import {filterOptionType} from './filterOptionType'

import {slideshowType} from './blocks/slideshow'
import {pageHeaderType} from './blocks/pageHeader'
import {splitSectionType} from './blocks/splitSection'
import {uspSectionType} from './blocks/uspSection'
import {solutionsScrollerType} from './blocks/solutionsScroller'
import {flexibleSectionType} from './blocks/flexibleSection'
import {flexibleBlockTypes} from './blocks/flexibleSection/blocks'

export const schemaTypes = [
  pageType,
  navigationType,
  projectType,
  siteParametersType,
  filterCategoryType,
  filterOptionType,
  slideshowType,
  pageHeaderType,
  splitSectionType,
  uspSectionType,
  solutionsScrollerType,
  flexibleSectionType,
  ...flexibleBlockTypes,
]
