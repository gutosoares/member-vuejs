<template>
    <div id="add-member">
        <div class="row">
            <div class="col l12 s12">
                <h1>Add Member</h1>
                <form v-on:submit.prevent="addMember">
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
                    <button class="btn add-member-btn right" type="submit">Add Member</button>
                    <router-link to="/"><a class="waves-effect waves-teal btn-flat back-btn right">Back</a></router-link>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addMember',

    data() {
        return {
            member: {}
        }
    },

    methods: {
        addMember() {
            if(!this.member.name || !this.member.email || !this.member.office) {
                Materialize.toast('Please fill in all required fields', 3000, 'amber accent-2')
            } else {
                let newMember = {
                    name: this.member.name,
                    email: this.member.email,
                    office: this.member.office
                }

                this.$http.post('http://localhost:3000/members', newMember).then(response => {
                    Materialize.toast('Add New Beautiful Member', 3000, 'green')
                    this.$router.push({path: '/'})
                })
            }
        }
    }
}
</script>

<style>
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

/* Add button */
.add-member-btn {
    background-color: #659db8;
    margin-left: 20px;
}

.add-member-btn:hover {
    background-color: #5989a0;
}
</style>