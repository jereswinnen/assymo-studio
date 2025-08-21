import {pageType} from './pageType'
import {navigationType} from './navType'
import {productType} from './productType'

import {textLeftImageRightType} from './blocks/textLeftImageRight'
import {textRightImageLeftType} from './blocks/textRightImageLeft'
import {textCenteredType} from './blocks/textCentered'
import {kaartType} from './blocks/mapType'
import {slideshowType} from './blocks/slideshow'
import {slideshowLeftTextRightType} from './blocks/slideshowLeftTextRight'
import {slideshowRightTextLeftType} from './blocks/slideshowRightTextLeft'

export const schemaTypes = [
  pageType,
  navigationType,
  productType,
  textLeftImageRightType,
  textRightImageLeftType,
  textCenteredType,
  kaartType,
  slideshowType,
  slideshowLeftTextRightType,
  slideshowRightTextLeftType,
]
