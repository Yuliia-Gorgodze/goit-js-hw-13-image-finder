
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css';
import 'material-design-icons/iconfont/material-icons.css';
const { alert, notice, info, success, error } = require('@pnotify/core');
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';



function errorNotFound () {
    error({
        text: "Ошибка, ничего не нашли. Попробуйте ещё-раз!!!"
      });
}

export default {errorNotFound};