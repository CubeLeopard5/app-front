<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }" class="box">
        <div class="col-text">
            <span class="title" style="margin-bottom: 12px; margin-top: 12px;"> my_teams </span>
            <div style="display: flex; flex-direction: row; align-items: center; width: 100%; justify-content: space-between;">
                <NuxtLink to="/" style="margin-left: 12px;"> Retour </NuxtLink>
                <a href="https://github.com/CubeLeopard5/my_teams" target="_blank" style="margin-right: 12px;"> Lien Github</a>
            </div>
            <div class="description">
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> Description </span>
                    <span style="padding-left: 24px;"> This project is to make a server running on your local machine and a client that can connect to this server. The client can then login and send messages to other clients. It demonstrates the use of <code> select </code>, <code> send </code>, <code> read </code>, <code> bind </code> and <code> listen </code> functions. </span>
                </div>
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> Requirements </span>
                    <div style="padding-left: 24px;">
                        <span> You need: </span>
                        <ul>
                            <li> gcc to compile with the makefile </li>
                            <li> libuuid-devel to use this program </li>
                            <li> criterion to run the tests </li>
                        </ul>
                    </div>
                </div>
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> Compilation </span>
                    <div style="padding-left: 24px;">
                        <span> Use make to compile the program with the Makefile. This will give you 3 binaries: </span>
                        <ul>
                            <li> <code> myteams_server </code> </li>
                            <li> <code> myteams_cli </code> </li>
                            <li> <code> run_tests </code> </li>
                        </ul>
                        <span> You can add to the make command the target of compilation: </span>
                        <ul>
                            <li> <code> make server </code> </li>
                            <li> <code> make client </code> </li>
                            <li> <code> make tests </code> </li>
                        </ul>
                        <span> Use <code> make fclean </code> to remove all .o files and binaries. </span>
                    </div>
                </div>
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> Usage </span>
                    <div style="display: flex; flex-direction: column; padding-left: 24px;" >
                        <span> To run the server: </span>
                        <code class="code-text"> ./myteams_server </code>
                        <span> This will make the server running on 127.0.0.1 and to use the default port 4000. You can add the option -p or --port to change the port number. </span>
                        <span> To run the client: </span>
                        <code class="code-text"> ./myteams_cli &lt;host&gt; &lt;port number&gt; </code>
                        <span> Choose the host and port number of an existing myteams_server running instance. </span>
                        <span> To run the tests: </span>
                        <code class="code-text"> ./run_tests </code>
                    </div>
                </div>
                <div class="descriptin-box">
                    <span class="title" style="padding-left: 12px;"> Program commands </span>
                    <div style="display: flex; flex-direction: column; padding-left: 24px;">
                        <span> Display help: </span>
                        <code class="code-text"> /help </code>
                        <span> Login with a username: </span>
                        <span> To run the client: </span>
                        <code class="code-text"> /login &lt;username&gt; #this will return you an uuid </code>
                        <span> Send message to someone: </span>
                        <code class="code-text"> /send &lt;uuid&gt; &lt;message&gt; </code>
                        <span> See all users information: </span>
                        <code class="code-text"> /users </code>
                        <span> See one user information: </span>
                        <code class="code-text"> /user &lt;uuid&gt; </code>
                        <span> See conersation with a user: </span>
                        <code class="code-text"> /conv &lt;uuid&gt; </code>
                        <span> Logout: </span>
                        <code class="code-text"> /logout </code>
                        <span> Quit the program: </span>
                        <code class="code-text"> /quit </code>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-text">
            <span class="title" style="margin-bottom: 12px; margin-top: 12px;"> Illustrations </span>
            <div class="box-images">
                <img src="@/assets/my_teams_1.png" alt="" style="width: 100%;">
                <img src="@/assets/my_teams_2.png" alt="" style="width: 100%;">
                <img src="@/assets/my_teams_3.png" alt="" style="width: 100%;">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
</script>

<style scoped>
.box {
    background: white;
    border-radius: 12px;
    margin: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.code-text {
    border: solid 1px #0f6a08;
    padding: 6px 6px 6px 6px;
}

.col-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    gap: 12px;
}

.description {
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 90vh;
    overflow-y: scroll;
    font-size: 18px;
}

.description::-webkit-scrollbar {
    display: none;
}

.descriptin-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.box-images {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    padding: 24px;
}

.title {
    font-weight: bold;
    font-size: 24px;
}
</style>