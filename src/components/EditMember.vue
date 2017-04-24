<template>
    <div id="edit-member">
        <div class="row">
                <div class="col l12 s12">
                    <h1>Edit Member</h1>
                    <form v-on:submit.prevent="updateMember">
                        <div class="input-field">
                            <input class="validate" type="text" id="name" v-model="member.name">
                            <label for="name">Name</label>
                        </div>

                        <div class="input-field">
                            <input class="validate" type="email" id="email" v-model="member.email">
                            <label for="email">Email</label>
                        </div>

                        <div class="input-field">
                            <input class="validate" type="text" id="office" v-model="member.office">
                            <label for="office">Office</label>
                        </div>
                        <button class="btn save-btn right" type="submit">Save</button>
                        <router-link to="/"><a class="waves-effect waves-teal btn-flat back-btn right">Back</a></router-link>
                    </form>
                </div>
            </div>
        </div>
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

<style scoped>
/* Title Page */
h1 {
    font-size: 18px;
    color: #a8a8a8;
    margin-bottom: 45px;
}

/* Input Fields */
.input-field input[type=text]:focus:not([readonly]),
.input-field input[type=email]:focus:not([readonly]) {
    border-color: #86c06e;
}

.input-field input[type=text]:focus:not([readonly]) + label,
.input-field input[type=email]:focus:not([readonly]) + label {
    color: #86c06e;
}

.input-text label.active {
    color: #86c06e;
}

/* Add button */
.save-btn {
    background-color: #659db8;
    margin-left: 20px;
}

.save-btn:hover {
    background-color: #5989a0;
}
</style>