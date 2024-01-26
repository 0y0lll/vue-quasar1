<template>
  <div class="q-pa-md">
    <q-table :rows="rows" :columns="columns" row-key="name" flat bordered />

    <div class="text-right q-mt-md">
      <q-btn unelevated color="primary" label="Add" @click="inception = true" />
    </div>

    <q-dialog v-model="inception">
      <q-card>
        <q-card-section>
          <div class="text-h6">Inception</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          laudantium minus earum totam modi laborum illo, corporis fuga saepe
          animi aliquam ea enim assumenda ut nulla natus aperiam quis. Iste.
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn
            flat
            label="Open another dialog"
            @click="secondDialog = true"
          />
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { QTableColumn } from 'quasar';
import { ref } from 'vue';

const inception = ref(false);
const secondDialog = ref(false);

const columns: QTableColumn[] = [
  {
    name: 'name',
    label: 'Dessert (100g serving)',
    align: 'center',
    field: 'name',
  },
  {
    name: 'calories',
    align: 'center',
    label: 'Calories',
    field: 'calories',
  },
  { name: 'fat', label: 'Fat (g)', align: 'center', field: 'fat' },
  { name: 'carbs', label: 'Carbs (g)', align: 'center', field: 'carbs' },
  { name: 'protein', label: 'Protein (g)', align: 'center', field: 'protein' },
  { name: 'sodium', label: 'Sodium (mg)', align: 'center', field: 'sodium' },
  { name: 'calcium', label: 'Calcium (%)', align: 'center', field: 'calcium' },
  { name: 'iron', label: 'Iron (%)', align: 'center', field: 'iron' },
];

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%',
  },
];
</script>
<style scoped></style>
