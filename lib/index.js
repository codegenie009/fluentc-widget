import { defaults, isMissingOption } from './utils.js'
import { getContent, getAvailableLanguages } from './query.js'
import request from './request.js'

const getDefaults = () => {
  return {
    apiPath: 'https://api.fluentc.io/graphql',
    apiKey: 'da2-wtkl5bpofjbu5ex5iugu4o2mbm',
  }
}

const logger = {
  log: function (txt) {
    console.log('%c FLUENTC: ' + txt, 'font-size: 18px; color: green');
  },
  error: function (txt) {
    console.log('%c FLUENTC: ' + txt, 'font-size: 18px; color: red');
  }
}

class fluentcWidget {
  constructor (options = {}) {
    this.init(options);
  }

  init (options = {}) {
    console.log('options', options);
    if (!options.widgetID) {
      logger.error('Invalid widgetID');
      return;
    }

    const defOpt = getDefaults()
    this.options = defaults(options, this.options || {}, defOpt);
  }
}

export default fluentcWidget;
