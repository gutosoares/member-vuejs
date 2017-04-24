<template>
    <div id="details-member">
        <h1>Details</h1>
        <div class="card">
            <h3>{{ member.name }}</h3>
            <p>{{ member.email }}</p>
            <p>{{ member.office }}</p>
        </div>
        <router-link to="/"><button>Back</button></router-link>
        <router-link v-bind:to="'/edit/' + member.id"><button>Edit</button></router-link>
        <button @click="deleteMember(member.id)">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'details',

    data() {
        return {
            member: {}
        }
    },

    methods: {
        fetchSingleMember(id) {
            this.$http.get('http://localhost:3000/members/' + id).then(response => {
                this.member = response.data
            })
        },

        deleteMember(id) {
            this.$http.delete('http://localhost:3000/members/' + id).then(response => {
                Materialize.toast('Delete Member with Success', 3000, 'red')
                this.$router.push({ path: '/' })
            })
        }
    },

    mounted() {
        this.fetchSingleMember(this.$route.params.id)
    }
}
</script>