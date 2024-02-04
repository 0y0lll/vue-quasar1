<template>
  <div class="q-pa-md">
    <q-table :rows="rows" :columns="columns" row-key="no" flat bordered>
      <template v-slot:no-data>
        <div class="full-width row flex-center">No data</div>
      </template>
    </q-table>

    <div class="text-right q-mt-md">
      <q-btn unelevated color="primary" label="Add" @click="inception = true" />
    </div>

    <q-dialog v-model="inception">
      <q-card style="min-width: 500px">
        <q-card-section>
          <div class="text-h6">Inception</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p>Title</p>
          <q-input outlined v-model="title" :dense="dense" />

          <p>Content</p>
          <q-input v-model="content" outlined type="textarea" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Ok" @click="onClick" />
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { QTableColumn } from 'quasar';
import { ref } from 'vue';
import { DateTime } from 'luxon';
import { ListItem, useBoardStore } from 'src/stores/board-store';

const useStore = useBoardStore();

const title = ref('');
const content = ref('');
const dense = ref(true);
const inception = ref(false);

const columns: QTableColumn[] = [
  {
    name: 'no',
    label: 'No',
    align: 'center',
    field: 'no',
  },
  { name: 'title', align: 'left', label: 'Title', field: 'title' },
  { name: 'date', label: 'Date', align: 'center', field: 'date' },
];

const rows = ref(useStore.getList);

const generateRandomString = () => {
  return Array.from(
    { length: 8 },
    () =>
      'abcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 62)],
  ).join('');
};

const onClick = () => {
  const id = generateRandomString();
  const obj: ListItem = {
    no: rows.value.length + 1,
    id: id,
    title: title.value,
    content: content.value,
    date: DateTime.now().toFormat('yyyy-MM-dd').toString(),
  };

  useStore.setList(useStore.$state, obj);
  rows.value = useStore.getList;

  // inception.value = false;
};
</script>

<style lang="scss">
.q-table {
  th {
    &:first-child {
      width: 30px;
    }
  }
}

.q-table__bottom {
  border-top: 0;
}
</style>
