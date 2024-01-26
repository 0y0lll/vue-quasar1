<template>
  <Line :data="props.data" :options="props.options" />
</template>

<script setup>
import { defineProps } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const props = defineProps(['data, options']);
</script>

<style lang="scss" scoped></style>
