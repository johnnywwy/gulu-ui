import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const {title, content, ok, cancel} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    app.unmount();
    div.remove();
  };
  const app = createApp({
      render() {
        return h(
          Dialog,
          {
            visible: true,
            closeOnClickOverlay: false,//false 点击遮罩不会关闭，true 点击遮罩会关闭
            'onUpdate:visible': (newVisible) => {
              if (newVisible === false) {close();}
            },
            ok, cancel,
          }, {title, content});
      }
    }
  );
  app.mount(div);

};