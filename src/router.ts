import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import {h} from 'vue';

// @ts-ignore
import intro from './markdown/intro.md';
//@ts-ignore
import start from './markdown/start.md';
//@ts-ignore
import install from './markdown/install.md';

const md = string => h(Markdown, {content: string, key: string});
const history = createWebHashHistory();
export const router = createRouter(
  {
    history: history,
    routes: [
      {path: '/', component: Home},
      {
        path: '/doc', component: Doc, children: [
          {path: '', redirect: '/doc/intro'},
          {path: 'intro', component: md(intro)},
          {path: 'get-started', component: md(start)},
          {path: 'install', component: md(install)},
          {path: 'switch', component: SwitchDemo},
          {path: 'button', component: ButtonDemo},
          {path: 'dialog', component: DialogDemo},
          {path: 'tabs', component: TabsDemo},
        ]
      }
    ]
  }
);
