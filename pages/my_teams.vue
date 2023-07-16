<template>
    <div :style="{ 'color': store.themes[store.themes.selected].text }">
        <a-row>
            <a-col :span="12" class="col-text">
                <span class="title" style="display: flex; flex-direction: row; justify-content: center; margin-bottom: 12px;"> my_teams </span>
                <div class="bloc">
                    <span class="title"> Description </span>
                    <span style="padding-left: 12px;"> This project his to make a server running on your local machine and a client that can connect to this server. The client can then login and send messages to other clients. It demonstrates the use of <code> select </code>, <code> send </code>, <code> read </code>, <code> bind </code> and <code> listen </code> functions. </span>
                </div>
                <div class="bloc">
                    <span class="title"> Requirements </span>
                    <div style="padding-left: 12px;">
                        <span> You need: </span>
                        <ul>
                            <li> gcc to compile with the makefile </li>
                            <li> libuuid-devel to use this program </li>
                            <li> criterion to run the tests </li>
                        </ul>
                    </div>
                </div>
                <div class="bloc">
                    <span class="title"> Compilation </span>
                    <div style="padding-left: 12px;">
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
                <div class="bloc">
                    <span class="title"> Usage </span>
                    <div style="padding-left: 12px;" class="bloc">
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
                <div class="bloc">
                    <span class="title"> Program commands </span>
                    <div style="padding-left: 12px;" class="bloc">
                        <span> Display help: </span>
                        <code class="code-text"> /help </code>
                        <span> Login with a username: </span>
                        <span> To run the client: </span>
                        <code class="code-text"> /login &lt;username&gt; #this will return you an uuid </code>
                        <span> Send message to someone: </span>
                        <code> /send &lt;uuid&gt; &lt;message&gt; </code>
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
            </a-col>
            <a-col :span="12" style="display: flex; flex-direction: column; align-items: center; margin-top: 24px;">
                <span class="title" style="margin-bottom: 12px;"> Images </span>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 24px;">
                    <img src="@/assets/my_teams_1.png" alt="">
                    <img src="@/assets/my_teams_2.png" alt="">
                    <img src="@/assets/my_teams_3.png" alt="">
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const store = useMainStore();
</script>

<style scoped>
.code-text {
    border: solid 1px #0f6a08;
    padding: 6px 6px 6px 6px;
}

.col-text {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 24px;
    overflow-y: scroll;
    height: 100vh;
    margin-bottom: 24px;
    margin-top: 24px;
}

.col-text::-webkit-scrollbar {
    display: none;
}

.bloc {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.title {
    font-weight: bold;
    font-size: 24px;
}
</style>