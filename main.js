import { io } from "socket.io-client";

// Click on the produce button
document.querySelector("#produce").addEventListener('click', async function () {
	const broker = document.getElementById("kafka-server").value;
	const topic = document.getElementById("kafka-topic").value;
	const user = document.getElementById("user_guid").value;
	const category = document.getElementById("category").value;

	const message = {
		"user": user,
		"category": category
	};

	const socket = io(`ws://${broker}`);
	socket.emitWithAck("interaction", message);
	alert(`Server: ws://${broker}\nTopic: ${topic}\nMessage: ${message.user} -> ${message.category}`);
})