import { DateTime } from 'luxon';
import { defineStore } from 'pinia';

export type ListItem = {
  no: number;
  id: string;
  title: string;
  content: string;
  date: DateTime;
};

type StateType = {
  list: ListItem[];
  listItem: ListItem;
};

export const useBoardStore = defineStore('board', {
  state: (): StateType => ({
    list: [] as ListItem[],
    listItem: {} as ListItem,
  }),
  getters: {
    getList: state => {
      return state.list;
    },
    getListItem: state => (id: string) => {
      return state.list.filter(item => item.id === id)[0] || null;
    },
  },
  actions: {
    setList: (state: StateType, newListItem: ListItem) => {
      state.list = [...state.list, newListItem];
    },
  },
});
