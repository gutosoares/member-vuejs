<template>
    <div id="edit-member">
        <h1>Edit Member</h1>
        <form v-on:submit.prevent="updateMember">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Ex: Tolkien" v-model="member.name">

            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Ex: tolkien@hobbit.com" v-model="member.email">

            <label for="office">Office</label>
            <input type="text" id="office" placeholder="Ex: The Hobbit Author" v-model="member.office">

            <button type="submit">Save</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'editMember',

    data() {
        return { 
            member: {}
        }
    },

    methods: {
        fetchEditMember(id) {
            var self = this
            self.$http.get('http://localhost:3000/members/' + id).then(response => {
                self.member = response.data
            })
        },

        updateMember() {
            if(!this.member.name || !this.member.email || !this.member.office) {
                console.log("lease fill in all required fields")
            } else {
                let updateMember = {
                    name: this.member.name,
                    email: this.member.email,
                    office: this.member.office
                }

                var self = this
                self.$http.put('http://localhost:3000/members/' + self.$route.params.id, updateMember).then(response => {
                    Materialize.toast('Edit Member with Success', 3000, 'green')
                    self.$router.push({path: '/'})
                })
            }
        }
    },

    mounted() {
        this.fetchEditMember(this.$route.params.id)
    }
}
</script>