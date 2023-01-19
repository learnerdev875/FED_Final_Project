import { series, parallel } from 'gulp';

import { scripts } from './webpack';
import { server } from './server';
import { modules, styles } from './style';
import { htmlmin2 } from './html';
import { fonts, images } from './fonts';

import del from 'del';

export const clean = () => del(['dist']);

export const dev = series(parallel(htmlmin2, fonts, images, modules, styles), server);
export const build = series(clean, parallel(scripts, modules, styles, htmlmin2, fonts, images));

export default dev;
