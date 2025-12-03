import {flexTextBlockType} from './textBlock'
import {flexImageBlockType} from './imageBlock'
import {flexMapBlockType} from './mapBlock'
import {flexFormBlockType} from './formBlock'

// Export all block types for schema registration
export const flexibleBlockTypes = [
  flexTextBlockType,
  flexImageBlockType,
  flexMapBlockType,
  flexFormBlockType,
]

// Export type names for use in array definitions (must be literal strings for Sanity)
export const flexibleBlockTypeNames = [
  {type: 'flexTextBlock'},
  {type: 'flexImageBlock'},
  {type: 'flexMapBlock'},
  {type: 'flexFormBlock'},
]
