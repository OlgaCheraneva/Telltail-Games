import {createContext} from 'react';

import {name} from '../package.json';

// tslint:disable-next-line:variable-name
const PathContext = createContext({
    defaultPath: '/',
    staticBasePath: `//${name}.surge.sh/`
});

export default PathContext;
