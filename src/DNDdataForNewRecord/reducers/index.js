import SelectedAccordion from './selectedAccordion';
import SidebarContent from './sidebarContent';
import OriginalData from './originalData';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  selectedAccordion: SelectedAccordion,
  sidebarContent: SidebarContent,
  originalData: OriginalData
});

export default RootReducer;
