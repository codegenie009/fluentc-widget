
export interface FluentcWidgetInitOptions {
  /**
   * your FluentC widgetId
   */
  widgettId: string;
}

export interface FluentcWidgetSetupOptions {
  /**
   * your FluentC widgetId
   */
  widgettId: string;
}

declare class fluentcWidget {
  constructor(options?: FluentcWidgetInitOptions);
  
  init(options?: FluentcWidgetInitOptions) : void;
  setupWidget(options?: FluentcWidgetSetupOptions) : void;
}

export default fluentcWidget;
