<template>
    <div class="experience">
        <header class="entry-subheader">
            <v-icon class="icon-style">business_center</v-icon>
            <h2 class="entry-subtitle">experience</h2>
        </header>
        <div class="list-item">
            <div class="date">2019-2021</div>
            <div class="name">Elegant Enterprises Inc</div>
            <div class="location">
                <div class="country">USA</div>
                <div class="city"><p>Salem, OR</p></div>
            </div>
            <div class="description">Web developer<br>Part time<br>Developing and maintaining elegant-crm web site/progressive web application</div>
        </div>
        <div class="list-item">
            <div class="date">2014-2018</div>
            <div class="name">Business Consulting</div>
            <div class="location">
                <div class="country">Russia</div>
                <div class="city"><p>Krasnodar</p></div>
            </div>
            <div class="description">Software engineer<br>Full time<br>Manual testing. Developing templates for MS Word and MS Excel for automatic reports (microsoft visual basic application, microsoft sql server). Supporting and developing web site (php, javascript, jquery, mysql, cms 1c-bitrix)</div>
        </div>
        <div class="list-item">
            <div class="date">2011-2014</div>
            <div class="name">ANT-INFORM</div>
            <div class="location">
                <div class="country">Russia</div>
                <div class="city"><p>Krasnodar</p></div>
            </div>
            <div class="description">Software engineer<br>Full Time<br>Supporting, maintaining and testing C# (WPF) application + Web version</div>
        </div>
        <div class="list-item">
            <div class="date">2009-2011</div>
            <div class="name">COLLEGE OF KRASNODAR</div>
            <div class="location">
                <div class="country">Russia</div>
                <div class="city"><p>Krasnodar</p></div>
            </div>
            <div class="description">Instructor<br>Full Time<br>Classes: Math, Physics, Computer Science.</div>
        </div>
        <div style="height:20px;"><p> </p></div>
    </div>
</template>

<script>
    export default {
        name: "MyExperience"
    }
</script>

<style scoped>

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
    .list-item{
        margin-top: 30px;
        padding: 10px;
    }
    .date{
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 1px;
        color: #e65100;
        margin-bottom: 5px;
    }
    .name{
        line-height: 1.5;
        color: white;
        margin-bottom: 5px;
        margin-top: 15px;
        text-transform: uppercase;
    }
    .location{
        display: flex;
        height: 30px;
    }
    .country::after{
        content: '/';
        font-weight: bold;
        font-style: italic;
        line-height: 1.67;
        color: #888888;
        opacity: 0.25;
        padding-left: 15px;
    }
    .city{
        margin-left: 15px;
    }
    .country, .city{
        color: #6f6e6e;
        opacity: 0.5;
        font-size: 13px;
        line-height: 1.85;
        margin-bottom: 5px;

    }
    .description{
        line-height: 1.6;
        font-size: 15px;
        color: #888888;
    }
</style>
