import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import router from "./router";
import http from "./http";
import store from "@/store";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "font-awesome/scss/font-awesome.scss";
import "@/assets/style/global.scss";
import "./assets/js/auto-update";
import {DrawerLayout} from 'vue-drawer-layout';
import { Radio } from 'mint-ui';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(Viewer);
Viewer.setDefaults({
	Options: { "inline": true, "button": true, "navbar": true, "title": true, "toolbar": true, "tooltip": true, "movable": true, "zoomable": true, "rotatable": true, "scalable": true, "transition": true, "fullscreen": true, "keyboard": true, "url": "data-source" }
});

Vue.component(Radio.name, Radio)
Vue.component(DrawerLayout.name, DrawerLayout)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(MintUI)
Vue.prototype.$http = http
new Vue({
	el: '#app',
	router,
	store,
	components: {App},
	template: '<App/>'
})

////testament 提交
