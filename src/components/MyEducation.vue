<template>
    <div class="education">
        <header class="entry-subheader">
            <v-icon class="icon-style">school</v-icon>
            <h2 class="entry-subtitle">education</h2>
        </header>
        <div class="list-item">
            <div class="date">2019-NOWADAYS</div>
            <div class="name">CHEMEKETA COMMUNITY COLLEGE</div>
            <div class="location">
                <div class="country">USA</div>
                <div class="city"><p>Salem, OR</p></div>
            </div>
            <div class="description">Computer programming certificate</div>
        </div>
        <div class="list-item">
            <div class="date">2018-2019</div>
            <div class="name">LCI AND NEW AMERICA COLLEGE</div>
            <div class="location">
                <div class="country">USA</div>
                <div class="city"><p>Denver, CO</p></div>
            </div>
            <div class="description">English as a second language, TOEFL - 76 points</div>
        </div>
        <div class="list-item">
            <div class="date">2015-2016</div>
            <div class="name">KUBAN STATE UNIVERSITY</div>
            <div class="location">
                <div class="country">Russia</div>
                <div class="city"><p>Krasnodar</p></div>
            </div>
            <div class="description">Faculty of economy, 1 year</div>
        </div>
        <div class="list-item">
            <div class="date">2005-2009</div>
            <div class="name">SOUTHERN FEDERAL UNIVERSITY</div>
            <div class="location">
                <div class="country">Russia</div>
                <div class="city"><p>Rostov on Don</p></div>
            </div>
            <div class="description">Faculty of mathematics, mechanic and Computer science, Bachelors Degree</div>
        </div>
        <div><p/></div>
    </div>
</template>

<script>
    export default {
        name: "MyEducation"
    }
</script>

<style scoped>

    .my-skills{
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
