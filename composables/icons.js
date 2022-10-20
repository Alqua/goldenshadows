// composables/icons.js

import { library } from '@fortawesome/fontawesome-svg-core'

export const useIcons = icons => {
  for (const [key, value] of Object.entries(icons)) {
    if (/^fa/.test(key)) library.add(value)
  }
}