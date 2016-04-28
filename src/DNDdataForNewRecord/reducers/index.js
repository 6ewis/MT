import SelectedAccordion from './selectedAccordion';
import SidebarContent from './sidebarContent';
import droppedData from './droppedData';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  selectedAccordion: SelectedAccordion,
  sidebarContent: SidebarContent,
  droppedData: droppedData
});

export default RootReducer;
