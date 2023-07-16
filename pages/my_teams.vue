<template>
    <div>
        <a-row>
            <a-col :span="12" style="display: flex; flex-direction: column; gap: 12px;">
                <span> my_teams </span>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <span> Description </span>
                    <span> This project his to make a server running on your local machine and a client that can connect to this server. The client can then login and send messages to other clients. It demonstrates the use of select, send, read, bind and listen functions. </span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <span> Requirements </span>
                    <span> You need: </span>
                    <ul>
                        <li> gcc to compile with the makefile </li>
                        <li> libuuid-devel to use this program </li>
                        <li> criterion to run the tests </li>
                    </ul>
                </div>
            </a-col>
            <a-col :span="12" style="display: flex; flex-direction: column; align-items: center;">
                <span> Images </span>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
                    <img src="@/assets/my_teams_1.png" alt="">
                    <img src="@/assets/my_teams_2.png" alt="">
                    <img src="@/assets/my_teams_3.png" alt="">
                </div>
            </a-col>
        </a-row>
    </div>
</template>