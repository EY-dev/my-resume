<template>
    <div class="email-form">
        <header class="entry-subheader">
            <v-icon class="icon-style">mail</v-icon>
            <h2 class="entry-subtitle">sent message</h2>
        </header>
        <ValidationObserver ref="observer" v-slot="{ }">
            <v-form @submit.prevent="sendIt">
                <ValidationProvider v-slot="{ errors }" name="FirstName" rules="required|max:10">
                    <v-text-field dark
                            v-model="form.fName"
                            :counter="10"
                            :error-messages="errors"
                            label="First name"
                            required
                    ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="LastName" rules="required|max:10">
                    <v-text-field dark
                            v-model="form.lName"
                            :counter="10"
                            :error-messages="errors"
                            label="Last name"
                            required
                    ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                    <v-text-field dark
                            v-model="form.email"
                            :error-messages="errors"
                            label="E-mail"
                            required
                    ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="message" rules="required">
                    <v-textarea dark
                                v-model="form.message"
                                :error-messages="errors"
                                label="Message"
                                required
                    ></v-textarea>
                </ValidationProvider>
                <v-btn class="ma-2" tile outlined color="#e65100" @click="sendIt">
                    <v-icon left>forward</v-icon> Send
                </v-btn>
            </v-form>
        </ValidationObserver>
        <form v-show='false' id="email-form" @submit.prevent="sendEmail">
            <input type="text" name="user_fName"  :value="form.fName">
            <input type="text" name="user_lName"  :value="form.lName">
            <input type="email" name="user_email" :value="form.email">
            <textarea name="user_message" :value="form.message"></textarea>
            <input id="sending" type="submit" value="Send">
        </form>
    </div>
</template>

<script>
    import { required, email, max } from 'vee-validate/dist/rules'
    import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
    import emailjs from "emailjs-com";

    setInteractionMode('eager')

    extend('required', {
        ...required,
        message: '{_field_} can not be empty',
    })

    extend('max', {
        ...max,
        message: '{_field_} may not be greater than {length} characters',
    })

    extend('email', {
        ...email,
        message: 'Email must be valid',
    })
    export default {
        name: "EmailForm",
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        data: () => ({
            form: {
                fName: '',
                lName: '',
                email: '',
                message: ''
            },
        }),

        methods: {
            sendIt(){
                const el = document.getElementById('sending');
                el.click();
            },
            sendEmail: (e) => {
                emailjs.sendForm('gmail', 'webresumeform', e.target, 'user_ZLOIg359OFBPpKHA5oBQw')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            }
        },
    }
</script>

<style scoped>
    .email-form{
        margin-left: 20px;
        margin-right: 20px;
    }
    .entry-subheader{
        margin-top: 40px;
        display: flex;
    }
    .entry-subtitle{
        font-weight: 900;
        color: #ffffff;
        text-transform: lowercase;
        margin-bottom: 0;
        margin-left: 15px;
    }
    .icon-style{
        font-size: 2.2rem;
        color: #e65100;
    }
</style>
