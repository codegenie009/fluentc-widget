
export interface FluentcWidgetInitOptions {
  /**
   * your FluentC widgetId
   */
  widgettId: string;
}

declare class fluentcWidget {
  constructor(options?: FluentcWidgetInitOptions);
  
  init(options?: FluentcWidgetInitOptions) : void;
}

export default fluentcWidget;
