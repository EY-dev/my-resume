<template>
    <div class="email-form">
        <header class="entry-subheader">
            <v-icon class="icon-style">mail</v-icon>
            <h2 class="entry-subtitle">sent message</h2>
        </header>
        <v-form @submit.prevent="sendIt" ref="emailForm">
            <v-text-field dark
                          v-model="form.fName"
                          :counter="10"
                          :rules="nameRules"
                          label="First name"
                          required
            ></v-text-field>
            <v-text-field dark
                    v-model="form.lName"
                    :counter="10"
                          :rules="nameRules"
                    label="Last name"
                    required
            ></v-text-field>
            <v-text-field dark
                    v-model="form.email"
                          :rules="emailRules"
                    label="E-mail"
                    required
            ></v-text-field>
            <v-textarea dark
                        :rules="messageRules"
                        v-model="form.message"
                        label="Message"
                        required
            ></v-textarea>
        <v-btn class="ma-2" tile outlined color="#e65100" @click="sendIt">
            <v-icon left>forward</v-icon> Send
        </v-btn>
            </v-form>
        <v-dialog v-model="dialog" width="50vh">
          <v-card>
            <v-card-text>
              <div class="text-center" style="padding-top: 25px">
                <p>
                  Your Message was sent
                </p>
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
              >
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <div style="height:20px;"><p> </p></div>
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
    import emailjs from "emailjs-com";

    export default {
        name: "EmailForm",
        components: {

        },
        data: () => ({
            form: {
                fName: '',
                lName: '',
                email: '',
                message: ''
            },
          dialog : false,
          nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
          ],
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
          messageRules: [
            v => !!v || 'message is required'
          ]
        }),

        methods: {
            sendIt(){
                const el = document.getElementById('sending');
                el.click();
            },
            sendEmail(e) {
              if(this.$refs.emailForm.validate()){
                emailjs.sendForm('gmail', 'webresumeform', e.target, 'user_ZLOIg359OFBPpKHA5oBQw')
                    .then((result) => {
                      console.log('SUCCESS!', result.status, result.text);
                      this.clearForm();
                      this.resetValidation();
                      this.dialog = true;
                    })
                    .catch((error) => {
                      console.log('FAILED...', error);
                    });
              }
            },
            clearForm(){
              this.$refs.emailForm.reset()
              this.form = {
                fName: '',
                lName: '',
                email: '',
                message: ''
              }
            },
            resetValidation () {
              this.$refs.emailForm.resetValidation()
            },
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
