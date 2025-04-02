<script setup>

</script>
<template>
     <div class="absolute z-50 h-full w-full top-0 left-0 overflow-hidden box-border p-4">
            <Skeleton class="my-2 shadow" height="3rem" width="100%" />
            <div class="flex justify-items-start space-x-2 h-screen">
                <Skeleton class="my-2 shadow" height="40rem" width="25%" />
                <div class="w-[75%] overflow-hidden">
                    <Skeleton class="my-2 shadow" width="100%" />
                    <div class="grid grid-cols-3 gap-2">
                        <Skeleton class="my-2 shadow" height="8rem" width="100%" />
                        <Skeleton class="my-2 shadow" height="8rem" width="100%" />
                        <Skeleton class="my-2 shadow" height="8rem" width="100%" />
                        <Skeleton class="mb-2 shadow col-span-3" height="12rem" width="100%" />
                        <Skeleton class="my-2 shadow" height="8rem" width="100%" />
                        <Skeleton class="my-2 shadow col-span-2" height="15rem" width="100%" />
                    </div>
                </div>
            </div>
     </div>
</template>