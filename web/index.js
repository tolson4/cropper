import * as brQuasar from '@bedrock/quasar';
import * as brVue from '@bedrock/vue';
import App from './App.vue';
import {createRouter} from './router/index.js';
import {default as iconSet} from 'quasar/icon-set/fontawesome-v5.mjs';
import Quasar from 'quasar';
import '@bedrock/web-fontawesome';

// Satisfies vue console warning
globalThis.__VUE_OPTIONS_API__ = process.env.NODE_ENV === 'development';
globalThis.__VUE_PROD_DEVTOOLS__ = false;

brVue.initialize({
  async beforeMount({app}) {

    // create router
    const router = await createRouter();
    brVue.augmentRouter({app, router});

    // use router now that it is fully configured
    app.use(router);

    await brQuasar.initialize({app});
    Quasar.iconSet.set(iconSet);

    // create root Vue component
    return App;
  }
});

