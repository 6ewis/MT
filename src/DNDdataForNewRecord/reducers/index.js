import SelectedAccordion from './selectedAccordion';
import SidebarContent from './sidebarContent';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  selectedAccordion: SelectedAccordion,
  sidebarContent: SidebarContent
});

export default RootReducer;

