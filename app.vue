<template>
	<NuxtPage />
</template>

<style>
:root {
	--color: black;
	--color-primary: #0f6a08;
	--color-secondary: #0e2233;
	--bg: white;
	--bg-secondary: #f0f2f5;
	--border-color: #0f6a08;
}

.dark-mode {
	--color: white;
	--color-primary: #0f6a08;
	--color-secondary: #fdf9f3;
	--bg: black;
	--bg-secondary: #28282B;
	--border-color: #0f6a08;
}

body {
	background-color: var(--bg);
	color: var(--color);
	transition: background-color .3s;
}

a {
  	color: var(--color-primary)
}
</style>