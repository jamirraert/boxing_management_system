<script setup>
    import { inject, ref, onMounted } from 'vue';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Chart from 'primevue/chart';

    const products = ref();
    const user = inject('user') 
    const chartData = ref();
    const chartOptions = ref(); 

    const setChartData = () => {
            return {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [540, 325, 702, 620],
                        backgroundColor: ['rgba(249, 115, 22, 0.2)', 'rgba(6, 182, 212, 0.2)', 'rgb(107, 114, 128, 0.2)', 'rgba(139, 92, 246 0.2)'],
                        borderColor: ['rgb(249, 115, 22)', 'rgb(6, 182, 212)', 'rgb(107, 114, 128)', 'rgb(139, 92, 246)'],
                        borderWidth: 1
                    }
                ]
            };
        };

        const setChartOptions = () => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--p-text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
        const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

        return {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }

    onMounted(() => {
        products.value = [
            {
                first_name: 'John',
                middle_name: 'Wise',
                last_name: 'Doe',
                created_at: '2025-03-27T01:58:55.000000Z'
            },
            {
                first_name: 'Jane',
                middle_name: 'Wise',
                last_name: 'Doe',
                created_at: '2025-03-27T01:58:55.000000Z'
            },
        ]

        chartData.value = setChartData();
        chartOptions.value = setChartOptions();
    })

</script>

<template>
    <div class="grid grid-cols-3 gap-1">
        <div class="p-4">
            <card>
                <template #title>
                    <h6 class="font-bold text-2xl">Members</h6>
                </template>
                <template #content>
                   <span class="text-xl font-bold text-green-400">
                        10
                   </span>
                </template>
            </card>
        </div>
        <div class="p-4">
            <card>
                <template #title>
                    <h6 class="font-bold text-2xl">Coaches</h6>
                </template>
                <template #content>
                   <span class="text-xl font-bold text-green-400">
                        30
                   </span>
                </template>
            </card>
        </div>
        <div class="p-4">
            <card>
                <template #title>
                    <h6 class="font-bold text-2xl">Pending</h6>
                </template>
                <template #content>
                   <span class="text-xl font-bold text-green-400">
                        10
                   </span>
                </template>
            </card>
        </div>
    </div>

    <!-- Table -->
    <div class="card">
        <DataTable :value="products" class="p-3 rounded-xl">
            <Column field="first_name" header="FirstName"></Column>
            <Column field="middle_name" header="MiddleName"></Column>
            <Column field="last_name" header="LastName"></Column>
            <Column field="created_at" header="Created"></Column>
        </DataTable>
    </div>

    <!-- Chart -->
     <div class="grid grid-cols-2 gap-2">
        <div class="p-2">
            <card>
                <template #title>
                    Bar
                </template>
                <template #content>
                    <Chart type="bar" :data="chartData" :options="chartOptions" />
                </template>
            </card>
        </div>
        <div>
            <card>
                <template #title>
                    Pie
                </template>
                <template #content>
                    <Chart type="pie" :data="chartData" :options="chartOptions" />
                </template>
            </card>
        </div>
     </div>
</template>