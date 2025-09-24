// helper.ts
import { EventRenderedArgs } from '@syncfusion/ej2-react-schedule';

export const applyCategoryColor = (args: EventRenderedArgs, currentView: string): void => {
  const categoryColor: string = args.data.CategoryColor as string;
  if (!args.element || !categoryColor) {
    return;
  }
  if (currentView === 'Agenda') {
    (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
  } else {
    (args.element as HTMLElement).style.backgroundColor = categoryColor;
  }
};
