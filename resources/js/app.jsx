import './bootstrap';
import '../css/app.css';
import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Artificielle JM IT';

const appName = 'Point Client'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});

InertiaProgress.init({ color: 'white'});














// import './bootstrap';
// import '../css/app.css';

// import React from 'react';
// import { render } from 'react-dom';
// import { createInertiaApp } from '@inertiajs/inertia-react';
// import { InertiaProgress } from '@inertiajs/progress';
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
//     setup({ el, App, props }) {
//         return render(<App {...props} />, el);
//     },
// });

// InertiaProgress.init({ color: '#8A6FB9' });
// // InertiaProgress.init({ color: '#4B5563' });
