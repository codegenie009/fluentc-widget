
export interface FluentcWidgetOptions {
  /**
   * your FluentC widgetId
   */
  widgettId: string;
  /**
   * Document ID
   */
  fluentcTargetElement: string;
}

type FluentcWidget = (options: FluentcWidgetOptions) => void

export default FluentcWidget;
