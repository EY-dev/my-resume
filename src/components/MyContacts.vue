<template>
    <div class="contacts">
        <contacts-information/>
        <v-divider style="margin-top: 15px"/>
        <email-form/>
        <div style="height:20px;"><p> </p></div>
    </div>
</template>

<script>
    import EmailForm from "./EmailForm";
    import ContactsInformation from "./ContactsInformation";
    export default {
        name: "MyContacts",
        components: {ContactsInformation, EmailForm},
        methods: {

        }
    }
</script>

<style scoped>

</style>
