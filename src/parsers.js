import path from 'path';
import yaml from 'js-yaml';

//  тут нужно будет сделать через диспетчеризацию

export default (pathToFile) => {
    switch (path.extname(pathToFile)) {
    case '.json':
        return JSON.parse;
    case '.yml':
        return yaml.safeLoad;
    }
};
