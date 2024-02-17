<template>
	<div>
		<h1>NASAlog</h1>
		<button type="button" class="btn-today" @click="getTodayNasa">오늘의 NASA 보기</button>
		<table v-if="nasa.today">
			<tbody>
				<tr>
					<th>Title</th>
					<td>{{ nasa.today.title }}</td>
				</tr>
				<tr>
					<th>Image</th>
					<td><img :src="nasa.today.url" :alt="nasa.today.title"></td>
				</tr>
				<tr>
					<th>Explanation</th>
					<td>{{ nasa.today.explanation }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
const nasa = reactive({});

const getTodayNasa = () => {
	const apiKey = 'daZ3W9FpHjNDOysquJxnS31f01lgRfGFP8bnZ2WP';
	const { data } = useAsyncData(
		'todayNasa', 
		() => $fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
	);
	
	nasa.today = data;
};
</script>

<style lang="scss" scoped>
h1	{padding:20px;font-size:30px;font-weight:700;text-align:center;color:var(--nasa-blue);}
.btn-today	{display:block;width:300px;height:60px;margin:0 auto;line-height:1.3;font-size:20px;font-weight:700;color:#fff;background-color:var(--nasa-red);}
table	{width:80%;margin:20px auto 0;border-collapse:collapse;line-height:1.3;color:#000;
	th,
	td	{padding:10px;border:1px solid #ccc;}
	th	{font-size:20px;font-weight:600;vertical-align:top;}
	td	{font-size:16px;font-weight:400;}
	img	{max-width:300px;}
}
</style>