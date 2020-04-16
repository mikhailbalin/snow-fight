import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import AwesomeIcon from '@/components/AwesomeIcon.vue';

// Include needed icons
library.add(
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faTwitter,
  faFacebook,
  faInstagram
);
Vue.component('font-awesome-icon', FontAwesomeIcon); // Register component globally

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4688F1'
      }
    }
  },
  icons: {
    iconfont: 'faSvg',
    values: {
      prev: {
        component: AwesomeIcon,
        props: {
          icon: ['fas', 'chevron-left']
        }
      },
      next: {
        component: AwesomeIcon,
        props: {
          icon: ['fas', 'chevron-right']
        }
      },
      expand: {
        component: AwesomeIcon,
        props: {
          icon: ['fas', 'chevron-down']
        }
      }
    }
  }
});
