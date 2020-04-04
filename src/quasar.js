import Vue from 'vue'

import './styles/quasar.styl'
import iconSet from 'quasar/icon-set/material-icons.js'
// import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'
// import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import {
  Quasar, 
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QCard,
  QCardSection,
  QCardActions,
  QInput,
  QAvatar,
  QImg,
  QScrollArea,
  QSeparator,
  QTab,
  QTabs,
  QSpace,
  QFooter,
  QPageSticky,
  QPageScroller,
  QField,
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QCard,
    QCardSection,
    QCardActions,
    QInput,
    QAvatar,
    QImg,
    QScrollArea,
    QSeparator,
    QTab,
    QTabs,
    QSpace,
    QFooter,
    QPageSticky,
    QPageScroller,
    QField,
  },
  directives: {
  },
  plugins: {
  },
  iconSet: iconSet
 })