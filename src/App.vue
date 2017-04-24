<template>
	<div id="app">
		<header>
			<nav class="nav-extended">
				<div class="nav-wrapper">
					<router-link to='/' class="brand-logo">Setup</router-link>
					<ul class="right user-login">
						<li><router-link to="/">Olá, Augusto <i class="material-icons right">arrow_drop_down</i></router-link></a></li>
					</ul>
					<div class="nav-content">
						<ul class="tabs">
							<li class="tab"><router-link to="/members" class="active">Minha Equipe</router-link></li>
							<li class="tab"><a href="#test2">Cargos</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<aside>
			<ul id="slide-out" class="side-nav fixed">
				<li class="logo-icon">
					<i class="material-icons">person_pin</i>
				</li>
				<li>
					<i class="material-icons">toc</i>
					<span>Tasks</span>
				</li>
				<li>
					<i class="material-icons">view_carousel</i>
					<span>Contents</span>
				</li>
				<li>
					<i class="material-icons">settings</i>
					<span>Setup</span>
				</li>
			</ul>
		</aside>
		<main>
			<router-view></router-view>
		</main>
	</div>
		<!--<div class="grid-main">
			<header class="header">
				<div class="container">
					<nav>
						<ul>
							<router-link to="/"><button>Members</button></router-link>
							<router-link to="/add"><button>Add Member</button></router-link>
						</ul>
					</nav>	
				</div>
			</header>
			<main class="container">
				<router-view></router-view>
			</main>
		</div>-->
</template>

<script>
import Members from './components/Members.vue'

export default {
	name: 'app',
	components: {
		Members
	},
	data () {
		return {
		
		}
	}
}
</script>

<style>
/* Geral style */
body {
	background-color: rgba(242, 246, 247, 0.80);
}

header, main, footer {
	padding-left: 100px;
}

/* Header style */
nav {
	background-color: #eef2f3;
	box-shadow: none;
}

nav .brand-logo {
	font-weight: 200;
	font-size: 1.8em;
	margin-left: 20px;
	color: #222b39;
}

nav ul a {
	color: #a8a8a8 !important;
}

.tabs {
	background-color: #eef2f3;
	margin-left: 20px;
}

.tabs .tab a:hover {
	background-color: #E6EAEB;
}

.tabs .tab a.active {
	background-color: rgba(242, 246, 247, 0.80);
	color: #86c06e !important;
}

.tabs .indicator {
	bottom: 46px;
	background-color: #86c06e;
}

/* Aside style */
.side-nav {
	width: 100px;
	background-color: #feffff;
}

.side-nav .logo-icon .material-icons {
	margin: 23px 0 45px 0;
	font-size: 3.2em;
}

.side-nav li {
	text-align: center;
	color: #a8a8a8;
	margin-bottom: 25px;
	padding-top: 10px;
}

.side-nav li:hover {
	background-color: #f4f4f4;
}

.side-nav li i {
	text-align: center;
	display: block;
	color: #a8a8a8;
}
</style>
